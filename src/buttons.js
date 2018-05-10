const Utils = require('./utils')
const RC = require('reaction-core')

module.exports = {
  left: {emoji: '⬅'},
  right: {emoji: '➡'},
  up: {emoji: '⬆'},
  down: {emoji: '⬇'},
  one: {emoji: '1⃣',
    callback: (user, message, data) => {
      data.menu.select(1).catch(console.error)
      message.delete().catch(console.error)
    }},
  two: {emoji: '2⃣',
    callback: (user, message, data) => {
      data.menu.select(2).catch(console.error)
      message.delete().catch(console.error)
    }},
  three: {emoji: '3⃣',
    callback: (user, message, data) => {
      data.menu.select(3).catch(console.error)
      message.delete().catch(console.error)
    }},
  four: {emoji: '4⃣',
    callback: (user, message, data) => {
      data.menu.select(4).catch(console.error)
      message.delete().catch(console.error)
    }},
  five: {emoji: '5⃣',
    callback: (user, message, data) => {
      data.menu.select(5).catch(console.error)
      message.delete().catch(console.error)
    }},
  six: {emoji: '6⃣',
    callback: (user, message, data) => {
      data.menu.select(6).catch(console.error)
      message.delete().catch(console.error)
    }},
  seven: {emoji: '7⃣',
    callback: (user, message, data) => {
      data.menu.select(7).catch(console.error)
      message.delete().catch(console.error)
    }},
  eight: {emoji: '8⃣',
    callback: (user, message, data) => {
      data.menu.select(8).catch(console.error)
      message.delete().catch(console.error)
    }},
  nine: {emoji: '9⃣',
    callback: (user, message, data) => {
      data.menu.select(9).catch(console.error)
      message.delete().catch(console.error)
    }},
  ten: {emoji: '🔟',
    callback: (user, message, data) => {
      data.menu.select(10).catch(console.error)
      message.delete().catch(console.error)
    }},
  search: {emoji: '🔍',
    callback: (user, message, menu) => {
      if (menu.pages.length <= 10) {
        let msg = new RC.Menu('What page?')
        let b
        let btn = { }
        for (let i = 1; i <= data.menu.pages.length; i++) {
          b = module.exports[Utils.numbers[i]]
          btn.emoji = b.emoji
          btn.run = b.callback
          msg.addButtons(btn)
        }
        message.channel.sendMenu(msg).catch(console.error)
      } else {
        message.channel.send('What page?').then(async msg => {
          msg.channel.awaitMessages(m => !isNaN(m.content), { maxMatches: 1, time: 60000 })
            .then(msgs => {
              menu.select(msgs.first().content).catch(console.error)
              msg.delete().catch(console.error)
              msgs.first().delete().catch(console.error)
            })
        }).catch(console.error)
      }
    }}
}
