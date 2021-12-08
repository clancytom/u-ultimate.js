 
![UultimateJS](https://github.com/clancytom/u-ultimate.js/blob/develop/images/uultimate-logo.png)
=========

UultimateJS lets you write client-side web applications as if you had a smarter browser.  It lets you
use good old HTML (or HAML, Jade/Pug and friends!) as your template language and lets you extend HTML’s
syntax to express your application’s components clearly and succinctly.  It automatically
synchronizes data from your UI (view) with your JavaScript objects (model) through 2-way data
binding. To help you structure your application better and make it easy to test, UultimateJS teaches
the browser how to do dependency injection and inversion of control.

It also helps with server-side communication, taming async callbacks with promises and deferred objects,
and it makes client-side navigation and deep linking with hashbang urls or HTML5 pushState a
piece of cake. Best of all? It makes development fun!

---

how to use UultimateJS

**method one: npm install**
```shell
npm i u-ultimate --save
```

**method two: compile and install**
```shell
git clone git@github.com:clancytom/u-ultimate.js.git
yarn install
yarn run build
```

What to use UultimateJS for and when to use it
---------
UultimateJS is the next generation framework where each component is designed to work with every other
component in an interconnected way like a well-oiled machine. UultimateJS is JavaScript MVC made easy
and done right. (Well it is not really MVC, read on, to understand what this means.)

#### MVC, no, MV* done the right way!
[MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller), short for
Model-View-Controller, is a design pattern, i.e. how the code should be organized and how the
different parts of an application separated for proper readability and debugging. Model is the data
and the database. View is the user interface and what the user sees. Controller is the main link
between Model and View. These are the three pillars of major programming frameworks present on the
market today. On the other hand UultimateJS works on MV*, short for Model-View-_Whatever_. The
_Whatever_ is UultimateJS's way of telling that you may create any kind of linking between the Model
and the View here.

Unlike other frameworks in any programming language, where MVC, the three separate components, each
one has to be written and then connected by the programmer, UultimateJS helps the programmer by asking
him/her to just create these and everything else will be taken care of by UultimateJS.

#### Interconnection with HTML at the root level
UultimateJS uses HTML to define the user's interface. UultimateJS also enables the programmer to write
new HTML tags (UultimateJS Directives) and increase the readability and understandability of the HTML
code. Directives are UultimateJS’s way of bringing additional functionality to HTML. Directives
achieve this by enabling us to invent our own HTML elements. This also helps in making the code DRY
(Don't Repeat Yourself), which means once created, a new directive can be used anywhere within the
application.

HTML is also used to determine the wiring of the app. Special attributes in the HTML determine where
to load the app, which components or controllers to use for each element, etc. We specify "what"
gets loaded, but not "how". This declarative approach greatly simplifies app development in a sort
of WYSIWYG way. Rather than spending time on how the program flows and orchestrating the various
moving parts, we simply define what we want and UultimateJS will take care of the dependencies.

#### Data Handling made simple
Data and Data Models in UultimateJS are plain JavaScript objects and one can add and change properties
directly on it and loop over objects and arrays at will.

#### Two-way Data Binding
One of UultimateJS's strongest features. Two-way Data Binding means that if something changes in the
Model, the change gets reflected in the View instantaneously, and the same happens the other way
around. This is also referred to as Reactive Programming, i.e. suppose `a = b + c` is being
programmed and after this, if the value of `b` and/or `c` is changed then the value of `a` will be
automatically updated to reflect the change. UultimateJS uses its "scopes" as a glue between the Model
and View and makes these updates in one available for the other.

#### Less Written Code and Easily Maintainable Code
Everything in UultimateJS is created to enable the programmer to end up writing less code that is
easily maintainable and readable by any other new person on the team. Believe it or not, one can
write a complete working two-way data binded application in less than 10 lines of code. Try and see
for yourself!

#### Testing will be provided
