import { CONSTANTS } from "../../utils/constants"

Feature('Create Lesson')

Scenario('Create Lesson', async ({ BaseSteps, BasePage, LoginSteps, CreateLessonSteps }) => {
    BasePage.goto()
    LoginSteps.loginAdmin(CONSTANTS.ADMIN_EMAIL, CONSTANTS.ADMIN_PASSWORD)
    BaseSteps.goToAdminPage()
    CreateLessonSteps.createLesson(CONSTANTS.LESSON_NAME, CONSTANTS.LESSON_DESCRIPTION, CONSTANTS.VIDEO_URL, CONSTANTS.UPLOAD_IMAGE_PATH)
    // await CreateLessonSteps.verifyLessonDetailsInRow(CONSTANTS.LESSON_NAME)

    
})

