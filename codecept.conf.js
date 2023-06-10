require('ts-node/register')
require('dotenv').config({ path: '.env' })

const { setHeadlessWhen, setWindowSize } = require('@codeceptjs/configure')
setWindowSize(1440, 1080)
setHeadlessWhen(process.env.HEADLESS)

exports.config = {
  tests: './tests/**/*.ts',
  output: './output',
  helpers: {
    FileSystem: {},
    AssertWrapper: {
      require: 'codeceptjs-assert',
    },
    ChaiWrapper: {
      require: 'codeceptjs-chai',
    },
    Puppeteer: {
      url: '',
      show: process.env.HEADLESS !== 'true',
      waitForNavigation: 'networkidle0',
      windowSize: '1440x1080',
      waitForAction: 400,
      waitForTimeout: 10000,
      chrome: {
        args: ['--no-sandbox'],
      },
    },
  },
  include: {
    CreateAccountPage: './pages/createAccountPage.ts',
    CreateAccountSteps: './steps/createAccountSteps.ts',
    LoginPage: './pages/loginPage.ts',
    LoginSteps: './steps/loginSteps.ts',
    CreateTestPage: './pages/createTestPage.ts',
    CreateTestSteps: './steps/createTestSteps.ts',
    BasePage: './pages/basePage.ts',
    BaseSteps: './steps/baseSteps.ts',
    CreateLessonPage: './pages/createLessonPage.ts',
    CreateLessonSteps: './steps/createLessonSteps.ts',

  },
  name: 'teleport-automation',
  mocha: {
    reporterOptions: {
      'codeceptjs-cli-reporter': {
        stdout: '-',
      },
      'mocha-junit-reporter': {
        stdout: '-',
        options: {
          mochaFile: './output/result.xml',
        },
      },
    },
  },
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },

  },
}
