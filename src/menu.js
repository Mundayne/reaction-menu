const RC = require('reaction-core')
const Utils = require('./utils')

class Menu {
  constructor (channel, handler, options = { RC: { }, RM: { } }) {
    this.id = Date.now()
    this.handler = handler
    this.channel = channel
    this.options = options
    this.pages = []
    this.page = 0
  }

  send (buttons = []) {
    return new Promise((resolve, reject) => {
      if (this.pages.length > 0) {
        this.menu = new RC.Menu(this.pages[0], this.options.RC)
        Utils.makeButtons(this, buttons, this.options.RM)
        this.handler.addMenus(this.menu)
        this.channel.sendMenu(this.menu).then(msg => {
          this.page = 1
          this.message = msg
          resolve(this.page, msg)
        }).catch(console.error)
      } else {
        reject(console.warn('Menu has no pages.'))
      }
    })
  }

  delete () {
    return new Promise((resolve, reject) => {
      if (this.page > 0) {
        this.message.delete().then(msg => {
          this.page = 0
          resolve(msg)
        }).catch(console.error)
      } else {
        reject(console.warn('Menu not displayed.'))
      }
    })
  }

  add (page, number) {
    return new Promise((resolve, reject) => {
      if (page) {
        let index = number || this.pages.length
        this.pages.splice(index, 0, page)
        resolve(this.pages)
      } else {
        reject(console.warn('Invalid arguments.'))
      }
    })
  }

  remove (page) {
    return new Promise((resolve, reject) => {
      if (!page) {
        reject(console.warn('Invalid arguments.'))
      } else if (this.pages.length > 0) {
        let index = this.pages.indexOf(page)
        if (index > -1) {
          let gone = this.pages.splice(index, 1)
          resolve(this.pages, gone)
        } else {
          reject(console.warn('Page not found.'))
        }
      } else {
        reject(console.warn('No more pages.'))
      }
    })
  }

  next () {
    return new Promise((resolve, reject) => {
      if (this.page < this.pages.length && this.page !== 0) {
        let content = ''
        let embed = {}
        if (typeof this.pages[this.page] === 'string') {
          content = this.pages[this.page]
        } else {
          embed = this.pages[this.page]
        }
        this.message.edit(content, {embed: embed}).then(msg => {
          this.page++
          this.message = msg
          resolve(this.page, msg)
        }).catch(console.error)
      } else {
        reject(console.warn('No more pages.'))
      }
    })
  }

  previous () {
    return new Promise((resolve, reject) => {
      if (this.page > 1 && this.page <= this.pages.length) {
        let content = ''
        let embed = {}
        if (typeof this.pages[this.page - 2] === 'string') {
          content = this.pages[this.page - 2]
        } else {
          embed = this.pages[this.page - 2]
        }
        this.message.edit(content, {embed: embed}).then(msg => {
          this.page--
          this.message = msg
          resolve(this.page, msg)
        }).catch(console.error)
      } else {
        reject(console.warn('No more pages.'))
      }
    })
  }

  select (index) {
    return new Promise((resolve, reject) => {
      if (index && !isNaN(index)) {
        if (index === this.page) {
          reject(console.warn('Page already displayed.'))
        } else if (index > 0 && index <= this.pages.length) {
          let content = ''
          let embed = {}
          if (typeof this.pages[index - 1] === 'string') {
            content = this.pages[index - 1]
          } else {
            embed = this.pages[index - 1]
          }
          this.message.edit(content, {embed: embed}).then(msg => {
            this.page = index
            this.message = msg
            resolve(this.page, msg)
          }).catch(console.error)
        } else {
          reject(console.warn('Page out of range.'))
        }
      } else {
        reject(console.warn('Invalid arguments.'))
      }
    })
  }
}
module.exports = Menu
