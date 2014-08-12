# colors #

Transforms text to colors, like magic.

## Overview ##

This application contains a single page which has a form that accepts text input.
When submitted, each character within the text is transformed into a color, and
the resulting set of colors is displayed below the form. A sample screen shot
is shown below:

<img src="https://cloud.githubusercontent.com/assets/1596740/3622216/7994a23e-0e2c-11e4-8d30-b06dc86dfa99.png">

Though the concept of the project is simple, it's meant to illustrate a basic
example of using [Node.js](http://nodejs.org/) and [Express](http://expressjs.com/)
on the server side, and [AngularJS](https://angularjs.org/) on the client side.
The original idea came from a MakerSquare project.

## Getting Started ##

This is a [Node.js](http://nodejs.org/) project, so before cloning the repository
make sure node is installed. Once cloned, install the node dependencies by
issuing the following command (from the project root directory):

`$ npm install`

[Bower](http://bower.io/) is used to manage client side dependencies. If bower
is not yet installed, execute the following command to install bower:

`$ npm install -g bower`

Once installed, you can use bower to install the bower dependencies (from the
project root directory):

`$ bower install`

With the dependencies installed, you can start the application by executing
the following command (from the project root directory):

`$ npm start`

This command is setup to use [nodemon](http://nodemon.io/) to watch for any
file changes, and automatically restart the application.

By default the application will run on port 3000, so once it's started, browse
to `http://localhost:3000/` to view the application.

## Project Structure ##

### Server Side ###

On the server side, the `app.js` file is the starting point. This file sets up
the Express server to properly render the initial page, along with loading
all the controllers. It also hosts static assets on `/public` (these are the
client side files).

In the `controllers` directory two controllers exist. The `colors.js` controller
is responsible for rendering the initial view, and the `letters-to-colors.js`
controller is our single API. This API accepts text input and responds with a set
of colors to render on the page.

The `views` directory contains a single view. This view is initially
rendered on the first request, and is responsible for loading up Angular along
with the client side files (including CSS and JS files).

Finally, the `node_modules` directory is dynamically created when installing
node packages (dependencies) for this project. This is not committed to source
control since it's generated during setup. Dependencies, along with general
project information is contained within the `package.json` file.

### Client Side ###

The `public` directory contains all client side code. Similarly to the server
side of things, the client side has dependencies which are installed to
the `public/bower_components` directory. Again, here this directory is not
committed to source control. Bower configuration, which details the dependencies
and project setup, is contained within the `bower.json` and the `.bowerrc`
configuration files.

The `public/js` directory contains the logic necessary to run the client
side of the application. The `public/js/app.js` file defines the Angular modules
for the app, along with the routes. The `public/js/controllers` directory
has the only controller for the application: `ColorsCtrl`. This controller
handles user interaction within the page. The `LettersToColorsService` which
is contained within the `public/js/services/letters-to-colors-server.js` file,
is responsible for sending and receiving data from the server side API.

Angular is initialized within the `views/colors.html` file, and it's within
this file that the Angular application is defined, and the controller logic
gets control over an element within the page. Comments within the code should
help in understanding the specifics.

Finally, any HTML partials are defined in the `public/partials` directory
(these partials are used by the controllers), and CSS is in the `public/css`
directory.

## Tests ##

Within this project exists both server side tests and client side tests. The
server side tests use [Jasmine](http://jasmine.github.io/) and the client
side tests use Jasmine as well, but run the tests within
[Karma](https://github.com/karma-runner/karma) for unit tests and
[Protractor](https://github.com/angular/protractor) for the end to end tests.
