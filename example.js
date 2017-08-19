const Discord = require('discord.js')
const RC = require('reaction-core')
const RM = require('./src/index')

const bot = new RC.Client()

bot.on('message', async msg => {
  if (msg.content === '!!!test') {
    let Menu = new RM.Menu(msg.channel)
    for (page of pages) {
      await Menu.add(page).catch(console.error)
    }
    Menu.send(['search']).catch(console.error)
  }
})

bot.on('ready', () => {
  console.log('ready!')
})

bot.login('bot-token')

const pages = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae cursus elit. Sed fermentum dapibus mi vitae consequat. Nam accumsan ultricies suscipit. Aenean varius dui non felis egestas, ac efficitur ante egestas. Etiam vitae ultricies tellus. Suspendisse dignissim imperdiet libero, ut laoreet eros cursus ut. Donec risus metus, bibendum ultricies aliquet nec, dignissim vel libero.',
  'Nulla facilisi. Praesent ex arcu, accumsan non ligula vel, faucibus gravida nisl. Nunc mollis tortor id velit ullamcorper, eu viverra massa tempus. Vivamus auctor orci ac feugiat lacinia. Phasellus nisi eros, luctus eu fermentum ut, consequat a ligula. Donec bibendum felis augue, vel pharetra risus euismod eu. Fusce gravida dui sed nibh vehicula, et malesuada libero lacinia. Nunc mattis tristique volutpat. Donec vitae neque odio. Vivamus tempor erat a interdum sodales. Cras non urna semper, placerat tortor sit amet, convallis est. Nam elementum tristique pretium.',
  'Aliquam erat volutpat. Sed vehicula sagittis libero quis sollicitudin. Integer nec euismod nibh. Donec et lectus et odio tempus sodales eu a tellus. Fusce mattis condimentum mattis. Nunc efficitur elit quam, sed tempus lectus condimentum non. Nullam sed pulvinar eros. Cras malesuada, tellus eu feugiat venenatis, ipsum risus gravida odio, eu ultricies sem nisi non orci.',
  'Nunc fringilla velit lorem, sed rutrum tellus molestie vitae. Quisque molestie molestie tellus id vehicula. Pellentesque vitae elementum risus. Aenean ultricies commodo nulla, ut ultrices odio faucibus sit amet. Duis enim mi, suscipit eu malesuada at, tincidunt vulputate libero. Praesent blandit nec lorem hendrerit aliquet. Mauris accumsan neque nisi, aliquet auctor orci condimentum sit amet.',
  'Phasellus rhoncus et enim et dignissim. In feugiat condimentum odio, vel pretium tortor mattis non. Nulla facilisi. Proin sit amet orci non dolor pretium tristique. Duis elementum euismod nisi, sed placerat nisi accumsan eget. Sed quis commodo nibh. Nullam nibh sem, cursus ut magna vitae, pulvinar efficitur orci. Aliquam non libero pretium, rutrum quam id, aliquam erat. Proin faucibus a nibh sit amet maximus.',
  'Curabitur est odio, commodo ac quam a, ornare interdum neque. Etiam tellus tortor, tempor nec ante sit amet, elementum auctor diam. Cras eget fermentum arcu, at convallis augue. Fusce tincidunt tortor in metus tempor, a lacinia leo ultricies. Cras gravida, quam vel ornare luctus, justo risus condimentum mi, sed eleifend leo quam nec diam. Nullam vulputate, mauris nec venenatis sodales, nulla ante tincidunt tortor, eu posuere dui sem a ante. Curabitur fermentum libero dui, sit amet auctor ex aliquet nec. Sed vitae justo non magna facilisis aliquet. Ut eleifend, sapien eget dapibus mollis, nunc libero scelerisque metus, tincidunt dignissim dolor lorem ac dui.',
  'Morbi commodo quam non leo tincidunt feugiat. Cras bibendum congue nulla, vitae elementum mauris cursus nec. Sed nisi diam, ultrices non eleifend non, aliquet mollis lectus. Phasellus non odio porta, porta nunc at, commodo lacus. Aliquam id egestas justo, eget mollis massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in fermentum neque. Praesent feugiat sem eleifend mattis laoreet. Ut euismod neque at nulla hendrerit rhoncus. Cras arcu nisi, gravida aliquam fringilla at, varius quis ante. Donec porttitor at urna in euismod. Vestibulum at maximus nulla, et pellentesque nunc. Morbi augue dui, dictum et pharetra eget, bibendum nec sem. Fusce odio neque, posuere vel auctor a, egestas non nulla.',
  'Cras semper nec massa a volutpat. Sed at dui eget felis volutpat aliquam at non ante. Maecenas vel pulvinar dui. Duis vehicula, nisi nec condimentum interdum, sem est tincidunt ante, quis aliquam nulla odio at magna. Cras suscipit diam sed ligula tempor imperdiet. Mauris rhoncus condimentum facilisis. Maecenas egestas ante quis molestie elementum. Proin eu luctus libero, nec feugiat justo. Cras viverra arcu tristique, ornare lectus in, porttitor eros. Maecenas eu velit ut tellus imperdiet luctus ut eu augue. Aliquam erat volutpat. Sed nibh orci, placerat ac leo id, porta dignissim leo. Sed dignissim arcu at lobortis gravida. Nulla ex neque, lobortis tempus sodales ut, vehicula eget erat.',
  'Sed fringilla pulvinar maximus. Aliquam a purus ligula. Nulla a turpis sem. Vestibulum purus enim, vestibulum sed suscipit nec, porttitor sed neque. Vestibulum elit turpis, ornare at euismod eget, faucibus a ipsum. Aliquam enim tellus, dictum et arcu non, volutpat gravida sapien. Ut gravida molestie nulla a finibus. Etiam eleifend sed diam laoreet rutrum. Phasellus cursus consectetur tortor sit amet dignissim. Ut ornare mi non congue euismod. Mauris auctor pharetra lectus, in semper libero efficitur vel. Donec leo libero, rutrum a tellus a, laoreet vulputate mi. Sed rutrum quis nibh eu ultrices.',
  'Fusce in placerat diam. Maecenas vitae metus fringilla, venenatis purus eget, dapibus tortor. Donec at consectetur ante, ut finibus nunc. Vestibulum pellentesque enim a cursus rhoncus. Sed sit amet iaculis elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Praesent lobortis, ex eu sollicitudin auctor, nunc massa vestibulum lectus, auctor aliquam felis felis eu massa. Sed dapibus est nec dui pharetra finibus. Cras metus enim, ultricies non nunc ut, pretium elementum eros. Donec sit amet lorem nec quam gravida ornare.']
