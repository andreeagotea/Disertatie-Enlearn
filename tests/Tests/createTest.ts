import { enlearnLesson } from "../../testdata/enlearn"
import { KEY_CONSTANTS } from "../../utils/KeyConstants"
import { CONSTANTS } from "../../utils/constants"
import getSessionInstance from "../../utils/session"

Feature('Create Test')

Scenario('Create Test', async ({ BaseSteps, BasePage, LoginSteps, CreateTestSteps }) => {
    BasePage.goto()
    LoginSteps.loginAdmin(CONSTANTS.ADMIN_EMAIL, CONSTANTS.ADMIN_PASSWORD)
    BaseSteps.goToAdminPage()
    CreateTestSteps.createTest(CONSTANTS.TEST_NAME, "Blalalalalaala", '20 de minute')
})

Scenario('Add Questions and Answers for Tests', async ({ BaseSteps, BasePage, LoginSteps, CreateTestSteps }) => {
    BasePage.goto()
    LoginSteps.loginAdmin(CONSTANTS.ADMIN_EMAIL, CONSTANTS.ADMIN_PASSWORD)
    BaseSteps.goToAdminPage()
    CreateTestSteps.createTest(CONSTANTS.TEST_NAME, "Blalalalalaala", '20 de minute')
    CreateTestSteps.clickAddQuestionsAnswers(CONSTANTS.TEST_NAME)
    CreateTestSteps.addQuestionAndAnswer("1", "Care este AAAA...?", "A", "B", "C", "D", "3")
    CreateTestSteps.addQuestionAndAnswer("2", "Care este BBBB...?", "AB", "B", "DC", "AD", "1")
    CreateTestSteps.addQuestionAndAnswer("3", "Care este CCCC...?", "BA", "B", "C", "AAAD", "2")
    CreateTestSteps.addQuestionAndAnswer("4", "Care este DDDD...?", "CA", "B", "C", "AD", "4")
    CreateTestSteps.addQuestionAndAnswer("5", "Care este EEEE...?", "AD", "DB", "C", "D", "1")
    // await CreateTestSteps.verifyTestDetailsInRow(CONSTANTS.TEST_NAME)

})

Scenario('Create a lesson and a test for this lesson', async ({ BaseSteps, BasePage, LoginSteps, CreateTestSteps, CreateLessonSteps }) => {
    BasePage.goto()
    LoginSteps.loginAdmin(CONSTANTS.ADMIN_EMAIL, CONSTANTS.ADMIN_PASSWORD)
    BaseSteps.goToAdminPage()
    CreateLessonSteps.createLesson(CONSTANTS.LESSON_NAME, CONSTANTS.LESSON_DESCRIPTION, CONSTANTS.VIDEO_URL, CONSTANTS.UPLOAD_IMAGE_PATH)
    // await CreateLessonSteps.verifyLessonDetailsInRow(CONSTANTS.LESSON_NAME)
    CreateTestSteps.createTest(CONSTANTS.TEST_NAME, "Blalalalalaala", '20 de minute')
    CreateTestSteps.clickAddQuestionsAnswers(CONSTANTS.TEST_NAME)
    CreateTestSteps.addQuestionAndAnswer("1", "Care este AAAA...?", "A", "B", "C", "D", "3")
    CreateTestSteps.addQuestionAndAnswer("2", "Care este BBBB...?", "AB", "B", "DC", "AD", "1")
    CreateTestSteps.addQuestionAndAnswer("3", "Care este CCCC...?", "BA", "B", "C", "AAAD", "2")
    CreateTestSteps.addQuestionAndAnswer("4", "Care este DDDD...?", "CA", "B", "C", "AD", "4")
    CreateTestSteps.addQuestionAndAnswer("5", "Care este EEEE...?", "AD", "DB", "C", "D", "1")
    // await CreateTestSteps.verifyTestDetailsInRow(CONSTANTS.TEST_NAME)

})

Scenario.only('Create a lesson and a test for this lesson 2', async ({ BaseSteps, BasePage, LoginSteps, CreateLessonSteps, CreateTestSteps }) => {
    const lesson = enlearnLesson
    getSessionInstance().putOnSession(KEY_CONSTANTS.LESSON,lesson);
    BasePage.goto()
    LoginSteps.loginAdmin(CONSTANTS.ADMIN_EMAIL, CONSTANTS.ADMIN_PASSWORD)
    BaseSteps.goToAdminPage()
    CreateLessonSteps.createLesson2()
    await CreateLessonSteps.verifyLessonDetailsInRow()
    CreateTestSteps.createTest2()
    CreateTestSteps.addQuestionsAnswers2()
    await CreateTestSteps.verifyTestDetailsInRow()
    

})