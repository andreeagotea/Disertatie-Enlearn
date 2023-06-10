import { CONSTANTS } from "../../utils/constants"

Feature('Logout Tests')

Scenario('Logout', async ({ LoginSteps, BaseSteps, BasePage }) => {
    BasePage.goto()
    LoginSteps.loginUser(CONSTANTS.USER_EMAIL, CONSTANTS.USER_PASSWORD)
    BaseSteps.logout()
})