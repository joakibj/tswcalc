tswcalc
=======

tswcalc is intended to be a living talisman / glyph calculator for TSW. Use it to plan how to spend your Black Bullions
 or show others what your gear is composed of.

It has all QL custom gear from 10.0 to 10.5. In addition to glyphs from 10.0 to 10.5, with their respective 
distributions.

tswcalc can be found at: http://joakibj.github.io/tswcalc

Installing
--------
tswcalc uses [grunt](http://gruntjs.com/) to build. 
It uses dustjs (linkedin-dustjs fork) as a client-side template engine.

The tools needed to build are:
* [node.js](http://nodejs.org/)
* npm
* grunt

node.js comes included with `npm`, the node package manager.

Install grunt globally:

    npm install -g grunt-cli

Install tswcalc dependencies, defined in `package.json`:

    npm install

Building
--------
Build tswcalc by running:

    grunt

When developing, use:
    
    grunt watch

This will monitor changes to files in the `src` folder, compile (if needed) and concatenate them.

To create a distribution in the `dist` folder: 

    grunt dist

Open index.html to view.

License
-------
Please refer to the LICENSE file for the source code.

All art assets included in `public/assets/images/icons/` folder are taken from The Secret World™. The artwork should be considered property of Funcom GmBH unless otherwise noted.
