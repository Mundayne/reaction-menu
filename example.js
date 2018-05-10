const discord = require('discord.js')
const RC = require('reaction-core')
const RM = require('./src/index')

const client = new discord.Client()
const handler = new RC.Handler()

client.on('messageReactionAdd', (messageReaction, user) => handler.handle(messageReaction, user))

client.on('message', async msg => {
  if (msg.content === ';;') {
    let menu = new RM.Menu(msg.channel, handler)
    let btns = makeBtns(menu)
    for (let page of pages) {
      await menu.add(page).catch(console.error)
    }
    menu.send(btns).catch(console.error)
  }
})

client.on('ready', () => {
  console.log('ready!')
})

client.login('BOT_TOKEN')

const pages = [
  'Page 1',
  { title: 'Page 2' },
  'Page 3'
]

let makeBtns = (menu) => {
  const buttons = [
    {
      emoji: '1⃣',
      run: (user, message) => {
        menu.select(1).catch(console.error)
      }
    },
    {
      emoji: '2⃣',
      run: (user, message) => {
        menu.select(2).catch(console.error)
      }
    },
    {
      emoji: '3⃣',
      run: (user, message) => {
        menu.select(3).catch(console.error)
      }
    }
  ]
  return buttons
}
