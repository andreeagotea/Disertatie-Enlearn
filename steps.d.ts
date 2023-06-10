// <reference types='codeceptjs' />

type CreateAccountPage = typeof import('./pages/createAccountPage')
type LoginPage = typeof import('./pages/loginPage')
type BasePage = typeof import('./pages/basePage')
type CreateTestPage = typeof import('./pages/createTestPage')
type NavPage = typeof import('./pages/navPage')
type CreateLessonPage = typeof import('./pages/createLessonPage')


type LoginSteps = typeof import('./steps/loginSteps')
type BaseSteps = typeof import('./steps/baseSteps')
type CreateTestSteps = typeof import('./steps/createTestSteps')
type CreateLessonSteps = typeof import('./steps/createLessonSteps')


type ItemDAO = typeof import('./dao/itemDAO/ItemDAO')

declare namespace CodeceptJS {
  interface SupportObject {
    I: I
    current: any
    ItemDAO: ItemDAO
    CreateAccountPage: CreateAccountPage
    CreateAccountSteps: CreateAccountSteps
    LoginSteps: LoginSteps
    LoginPage: LoginPage
    BasePage: BasePage
    BaseSteps: BaseSteps
    CreateTestPage: CreateTestPage
    CreateTestSteps: CreateTestSteps
    CreateLessonPage: CreateLessonPage
    CreateLessonSteps: CreateLessonSteps

  }

  interface Methods extends Playwright, Puppeteer, WebDriver, FileSystem {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
