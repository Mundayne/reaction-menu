const Menu = require('./menu')

class SubMenu {
  constructor (msg, pages) {
    this.menu = new Menu(msg.channel)
    this.add(pages)
  }

  get content () {
    let cString = '```css\n'
    let page
    for (let i; i < this.menu.pages.length; i++) {
      page = this.menu.pages[i]
      cString += `[${i - 1}] ${page.title}\n`
    }
    cString += '```'

    return cString
  }

  async add (pages) {
    for (let page of pages) {
      await this.menu.add(page).catch(console.error)
    }
  }
}
module.exports = SubMenu
