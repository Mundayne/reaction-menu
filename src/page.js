const Discord = require('discord.js')

class Page {
  constructor (content, title = undefined) {
    if (!content) {
      throw new Error('You must supply content.')
    }

    this._content = ''
    this.embed = {}

    if (typeof content === 'string') {
      this._content = content
    } else if (content instanceof Discord.RichEmbed) {
      this.embed = content
    } else if (__pureEmbed(content)) {
      this.embed = content
    } else {
      throw new Error('Invalid content.')
    }

    this._title = title
  }

  get title () {
    if (!this.number) throw new Error('Page not bound.')
    let title = this._title || `Page ${this.number}`

    return title
  }

  get content () {
    if (!this.number) throw new Error('Page not bound.')
    return `${this._content}\n\`pg. ${this.number}\``
  }
}
module.exports = Page

const __pureEmbed = object => {
  let RE = new Discord.RichEmbed(object)
  let pure
  for (let p of Object.values(RE)) {
    pure = pure | (p !== undefined && ((Array.isArray(p) && p.length > 0) || typeof p === 'string'))
  }
  return pure
}
