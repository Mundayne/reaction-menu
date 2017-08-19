const RC = require('reaction-core')
const Utils = require('./utils')

class Menu {
  constructor (channel) {
    this.id = Date.now()

    this.channel = channel

    this.pages = []
    this.page = 0
    this.message
  }

  send (buttons = []) {
    return new Promise((resolve, reject) => {
      if (this.pages.length > 0) {
        this.menu = new RC.Message(this.pages[0], this.channel)
        this.menu.AddMenu()
        Utils.makeButtons(this, buttons)
        this.menu.Send().then(msg => {
          this.page = 1
          this.message = msg
          resolve(this.page, msg)
        }).catch(console.error)
      } else {
        reject(new Error('Menu has no pages.'))
      }
    })
  }

  delete () {
    return new Promise((resolve, reject) => {
      if (this.page > 0) {
        console.log('here')
        this.message.delete().then((msg) => {
          this.page = 0
          resolve(msg)
        }).catch(console.error)
      } else {
        reject(new Error('Menu not displayed.'))
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
        reject(new Error('Invalid arguments.'))
      }
    })
  }

  remove (page) {
    return new Promise((resolve, reject) => {
      if (!page) {
        reject(new Error('Invalid arguments.'))
      } else if (pages.length > 0) {
        index = this.pages.indexOf(page)
        if (index > -1) {
          let gone = this.pages.splice(index, 1)
          resolve(this.pages, gone)
        } else {
          reject(new Error('Page not found.'))
        }
      } else {
        reject(new Error('No more pages.'))
      }
    })
  }

  next () {
    return new Promise((resolve, reject) => {
      if (this.page < this.pages.length && this.page !== 0) {
        this.message.edit(this.pages[this.page]).then(msg => {
          this.page++
          this.message = msg
          resolve(this.page, msg)
        }).catch(console.error)
      } else {
        reject(new Error('No more pages.'))
      }
    })
  }

  previous () {
    return new Promise((resolve, reject) => {
      if (this.page > 1 && this.page <= this.pages.length) {
        this.message.edit(this.pages[this.page - 2]).then(msg => {
          this.page--
          this.message = msg
          resolve(this.page, msg)
        }).catch(console.error)
      } else {
        reject(new Error('No more pages.'))
      }
    })
  }

  select (index) {
    return new Promise((resolve, reject) => {
      if (index && !isNaN(index)) {
        if (index + 1 === this.page) {
          reject(new Error('Page already displayed.'))
        } else if (index > 0 && index <= this.pages.length) {
          this.message.edit(this.pages[index - 1]).then(msg => {
            this.page = index
            this.message = msg
            resolve(this.page, msg)
          }).catch(console.error)
        } else {
          reject(new Error('Page out of range.'))
        }
      } else {
        reject(new Error('Invalid arguments.'))
      }
    })
  }
}
module.exports = Menu
