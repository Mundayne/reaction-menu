const Buttons = require('./buttons')
const RC = require('reaction-core')

exports.makeButtons = (menu, btns, options = { }) => {
  let buttons = []

  let left = Buttons.left.emoji
  let right = Buttons.right.emoji
  if (options.custom) {
    left = options.custom.left || Buttons.left.emoji
    right = options.custom.right || Buttons.right.emoji
  }

  if (!options || !options.disable || !options.disable.left) {
    buttons.push({
      emoji: left,
      run: (user, message) => {
        if (menu.page > 1) menu.previous().catch(console.error)
      }
    })
  }

  for (let button of btns) {
    if (Buttons.hasOwnProperty(button)) {
      let b = Buttons[button]
      buttons.push({
        emoji: b.emoji,
        run: (user, message) => {
          b.callback(user, message, menu)
        }
      })
    } else if (button.emoji && button.run) {
      buttons.push(button)
    }
  }

  if (!options || !options.disable || !options.disable.right) {
    buttons.push({
      emoji: right,
      run: (user, message) => {
        if (menu.page < menu.pages.length) menu.next().catch(console.error)
      }
    })
  }
  return new RC.Menu(menu.pages[0], buttons, menu.options.RC)
}

exports.numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
