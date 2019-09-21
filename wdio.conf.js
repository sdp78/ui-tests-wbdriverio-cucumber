exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    specs: ['./test/features/*.feature'],
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--no-sandbox', '--window-size=1920,1080', `${process.env.ARG_HEADLESS}`]
            }
        },
    ],
    logLevel: 'trace',
    outputDir: './test-report/output',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: [
        'dot',
        'spec',
        [
            'allure',
            {
                outputDir: './test-report/allure-result/',
                disableWebdriverStepsReporting: false,
                disableWebdriverScreenshotsReporting: false,
            },
        ]
    ],
    cucumberOpts: {
        requireModule: ['@babel/register'],
        require: ['./test/steps/Step.definitions.js'],
        backtrace: false,
        compiler: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tags: [],
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
    },
    services: [
        ['selenium-standalone']
    ],
    before() {
        browser.setWindowSize(1920, 1080);
        browser.totalPrice = 0;
    }
};
