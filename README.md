tswcalc
=======

tswcalc is a fan-made living talisman and glyph calculator for The Secret World (TSW), a MMORPG by Funcom. It can be used to plan how to spend your Black Bullions, Criterion Upgrades and Astral Fuses. In addition to share and show others what gear you use to tackle encounters in PvE or PvP.

tswcalc features:

* All custom gear from QL 10.0 to 11.0.
* All glyphs from QL 10.0 to 10.5.
* Custom gear able to be attached with all signets in normal, elite and epic variations.
* Issue 6, 7, 8, 9, 10, 11 and 14 signets.
* Issue 12 currency calculation.
* NY, Eidolon & Flappy Raid items for elite and nightmare difficulty.
* Woodcutter's talismans.

tswcalc can be found at: https://joakibj.github.io/tswcalc

**Note:** all active development of tswcalc takes place in the [`develop`](https://github.com/joakibj/tswcalc/tree/develop) branch. The tip of [`master`](https://github.com/joakibj/tswcalc/tree/master) always points to the latest, stable release. All releases are tagged. The latest release is deployed to the [`gh-pages`](https://github.com/joakibj/tswcalc/tree/gh-pages) branch.

Prerequisites
--------
The tools needed to build tswcalc are:
* [node.js](https://nodejs.org/) (v0.10.45)
* npm (v2.15.1)
* [grunt](https://gruntjs.com/) (v0.4.1)

Install and use [nvm](https://github.com/creationix/nvm) to manage your node.js and npm installations.

Installing the correct node.js version:

    nvm install 0.10.45

Switch to the installation:

    nvm use 0.10.45

Install `grunt` globally:

    npm install -g grunt-cli

Building
--------
Fetch the source code (if you have added a [SSH key to github](https://help.github.com/articles/generating-ssh-keys)):

    git clone git@github.com:joakibj/tswcalc.git

Alternatively:

    git clone https://github.com/joakibj/tswcalc.git

Install tswcalc dependencies, defined in `package.json`:

    npm install

Build tswcalc by running:

    grunt

Run tests:

    grunt test

Tests can be found in the `test` folder. Open the html file to run tests in the browser. Open the js file to view the test logic.

When developing, use:

    grunt watch

The previous command monitors changes to files in the `src` folder. If any changes are detected, the build task is run.

Open `build/index.html` to view.

Distribution
------------
To create a distribution in the `dist` folder:

    grunt dist

Open `dist/index.html` to view.

To create a zip-archive distribution:

    grunt package

Contributing
------------
Pull requests are welcome! They should be done against the `develop` branch.

There are many things to do. Some suggestions can be found in [issues](https://github.com/joakibj/tswcalc/issues). Otherwise, things like refactoring, decoupling and better tests to make tswcalc easier to maintain is also welcome.

Contributions can also be bug reports, feature requests and other feedback.

License
-------
MIT License for the source code. Please see the LICENSE file.

All art assets included in `public/assets/images/icons/` folder are taken from [The Secret World™ Chronicle](https://chronicle.thesecretworld.com/). The artwork should be considered property of Funcom GmBH unless otherwise noted. A small sample of signet, glyph and item icons are redistributed under fair use.
