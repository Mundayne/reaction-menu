# reaction-menu
This is an NPM module built on top of `reaction-core` that facilitates easy
creation of interactive menu systems using Discord's reaction system.

## Development
Currently, `reaction-menu` is being maintained by Discord user *Mundane#9887*.
Additional functionality is planned to be added in the future, so stay tuned!

## Basic Usage
See `example.js` for a basic example of how to use this module. Detailed explanation coming soon.

# Options
Options you can pass to a Menu should be an object like this:
```js
{
  RM: {

  },
  RC: {

  }
}
```
Where the `RM` section are options specific to `reaction-menu`, and the `RC` section is for `reaction-core`. In the `RM` section you can specify a lot of customization for buttons, and the `RC` section currently only support the owner (see `reaction-core` documentation for more).

### To-Do:
 - [ ] Make errors cleaner (this module is promise-based, and currently rejected
   errors aren't very pretty or descriptive.)
 - [ ] Finish this list.
