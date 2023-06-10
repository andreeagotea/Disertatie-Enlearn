# teleport-automation-tests

Copy .env.example in .env

```
$ cp .env.example .env
```

Run tests opening the browser

```
$ npm test
```

Run tests without opening the browser.

```
$ npm run test:headless
```

Run tests opening the browser and the codeceptjs UI.

```
$ npm run test:ui
```

Prepend `-- --steps` to any test command to run the steps.

## Run in CI

Open this webpage and run the latest pipeline
https://gitlab.com/teleporthq/testing-framework/-/pipelines

You can also change the environment APP_URL variable on the pipeline page to point to other environments like development or production.
