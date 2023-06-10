import { CONSTANTS } from "../../utils/constants"

Feature('Create account with email')

Scenario('Create account with email', async ({ BasePage, CreateAccountSteps }) => {
    BasePage.goto()
    CreateAccountSteps.clickCreateAccountButton(CONSTANTS.USER_NAME, CONSTANTS.USER_EMAIL, CONSTANTS.USER_PASSWORD, CONSTANTS.USER_PASSWORD)
})



