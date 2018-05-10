const Buttons = require('./buttons')

exports.makeButtons = async (menu, btns, options = { }) => {
  let left = Buttons.left.emoji
  let right = Buttons.right.emoji
  if (options.custom) {
    left = options.custom.left || Buttons.left.emoji
    right = options.custom.right || Buttons.right.emoji
  }

  if (!options || !options.disable || !options.disable.left) {
    await menu.menu.addButtons({
      emoji: left,
      run: (user, message) => {
        if (menu.page > 1) menu.previous().catch(console.error)
      }
    })
  }

  for (let button of btns) {
    if (Buttons.hasOwnProperty(button)) {
      let b = Buttons[button]
      await menu.menu.addButtons({
        emoji: b.emoji,
        run: (user, message) => {
          b.callback(user, message, menu)
        }
      })
    } else if (button.emoji && button.run) {
      await menu.menu.addButtons(button)
    }
  }

  if (!options || !options.disable || !options.disable.right) {
    await menu.menu.addButtons({
      emoji: right,
      run: (user, message) => {
        if (menu.page < menu.pages.length) menu.next().catch(console.error)
      }
    })
  }
}

exports.numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
