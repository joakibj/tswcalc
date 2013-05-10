tswcalc
=======

tswcalc is intended to be a living talisman / glyph calculator for TSW. Use it to plan how to spend your Black Bullions or show others what your gear is composed of.

It has all QL custom gear from 10.0 to 10.5. In addition to glyphs from 10.0 to 10.5.

tswcalc can be found at: TODO

Building
--------
tswcalc uses dustjs (linkedin-dustjs fork) as a client-side template engine.

To build, you need:
* node.js
* npm

node.js comes included with `npm`, the node package manager.

Then run:

    npm install linkedin-dustjs

    npm install watch


Create the directory: `./public/js/dusts/`

Build the *.dust templates by running: 

    node duster.js


This will monitor changes to the .dust templates and compile them.

Open index.html to view.

License
-------
TODO
