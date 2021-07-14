/* 'package-lock.json':
1. Guarantees consistency of the dependencies versions
2. Generated and updated automatically
3. Always committed to source control */

/* Dependencies and dev-dependencies have ZERO
relation to the browser app. Browsers doesn't know anything
about our package.json and modules. Browser just downloads
index.html and then downloads scripts, that referenced in this html-file */

/* 'npm init' initializes project and creates 'package.json */

/* Installation of dependencies */
/* When we use 'npm i' we will install both dependencies and dev-dependencies, 
and dependencies(not dev) of this dependencies */

/* When we use 'npm i --production' we will install only dependencies(not dev)
and dependencies(not dev) of this dependencies */

/* If installed package has its own dev-dependencies it will never
be installed neither with 'npm i' nor with 'npm i --production' */

/* !!! Add package as dependency or as dev-dependency? */
/* It depends on what we are going to build: browser app or
server package. 
But if we use our app standalone (no external
libraries uses our app) it doesn't matter how we will add dependencies,
it means that we should add all the dependencies as dependencies or
dev-dependencies (everything in one group).
If we build public package and use functions from other packages
in our code, it means that we need add those packages as
dev-dependencies. All other dependencies will be added as a dependencies */

/* Browser do not support modules and ES6-modules. If we wont browser
to work with modules we need to use bundler (e.g. Webpack) */