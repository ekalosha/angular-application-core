# Dft

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.


## Ignores

All files marked as local should be ignored `*local.*`


## Development server

The app will automatically reload if you change any of the source files.
Run command for **DEVELOPMENT:** `npm run start` **or** `ng serve -e dev -o true -sm true -bh / -v true`.

**NOTE** To run `local` make sure you have file `./src/environment/local.ts`
Run command for **LOCAL:** `npm run start-local` **or** `ng serve -e local -o true -sm true -bh / -v true`


## Code scaffolding

**gist** `directive | pipe | service | class | guard | interface | enum | module`

You can use `ng generate [gist] [gist]/gistName`.

To create test spec by yourself may add flag to the command `--spec=false`.


## Build

**environment** `local | dev | stage | prod`


Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Example command `ng build --environment=prod --sourcemaps=false --base-href=http://example.com --deploy-url=http://example.com --verbose=true --extract-licenses=true`.

Build command for **DEVELOPMENT:** `ng build -e dev -sm true -bh / -v true`.

Build command for **STAGING:** `ng build -e stage -sm true -bh http://example.com -d http://example.com -v true`.

Build command for **PRODUCTION:** `npm run build` **or**  `ng build -e prod -sm false -bh http://example.com -d http://example.com -v true --extract-licenses=true`.


## Running unit tests

Run `npm run test` **or** `ng test -e dev -sr true -sm false --log-level=debug` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
