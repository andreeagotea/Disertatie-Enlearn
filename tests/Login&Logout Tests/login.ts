import { CONSTANTS } from "../../utils/constants"

Feature('Login Tests')

Scenario('Login as user with email', async ({ BasePage, LoginSteps }) => {
    BasePage.goto()
    LoginSteps.loginUser(CONSTANTS.USER_EMAIL, CONSTANTS.USER_PASSWORD)
})

Scenario('Login as admin with email', async ({ BasePage, LoginSteps }) => {
    BasePage.goto()
    LoginSteps.loginAdmin(CONSTANTS.ADMIN_EMAIL, CONSTANTS.ADMIN_PASSWORD)
})