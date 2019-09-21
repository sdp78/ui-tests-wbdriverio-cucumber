UI Automation - WebDriverIO with Cucumber
=================

This is an UI Automation Tests project of testing purchase workflow against www.saucedemo.com  
These tests are developed in JS with [WebDriverIO](http://webdriver.io/) and [Cucumber](https://cucumber.io/)  

Requirements
---------------

- node >= 10.15.x - [how to install Node](https://nodejs.org/en/download/)
- jdk >= 1.8

Getting Started
---------------

Install the dependencies:

```bash
npm install
```

Run tests with Head:

```bash
npm run test
```

Run tests without Head:

```bash
ARG_HEADLESS='--headless' npm run test
```

Reports
---------------

To generate the allure report in the directory `./test-report/allure-report`:

```bash
npm run report:generate
```

To open the allure report on the browser:

```bash
npm run report:open
```

Eslint 
---------------

Run format lint:

```bash
npm run code:lint
```
