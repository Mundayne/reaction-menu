const Buttons = require('./buttons')
const RC = require('reaction-core')

exports.makeButtons = (menu, btns) => {
  let btn = new RC.Button()
  btn.SetData({menu: menu})

  btn.SetEmoji(Buttons.left.emoji)
  btn.SetCallback((user, message, data = null) => {
    if (menu.page > 1) {
      data.menu.previous().catch(console.error)
    }
  })
  menu.menu.Menu.AddButton(btn)

  for (button of btns) {
    if (Buttons.hasOwnProperty(button)) {
      let b = Buttons[button]
      btn.SetEmoji(b.emoji)
      btn.SetCallback((user, message, data = null) => {
        b.callback(user, message, data)
      })
      menu.menu.Menu.AddButton(btn)
    }
  }

  btn.SetEmoji(Buttons.right.emoji)
  btn.SetCallback((user, message, data = null) => {
    if (data.menu.page < data.menu.pages.length) {
      data.menu.next().catch(console.error)
    }
  })
  menu.menu.Menu.AddButton(btn)
}

exports.numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
