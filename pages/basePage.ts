import { CONSTANTS } from "../utils/constants"

const { I } = inject()

export = {

  goto() {
    I.amOnPage(CONSTANTS.APP_URL)
    I.waitForText('Bun venit la EnLearn!', CONSTANTS.WAIT_TIME_FOR_ELEMENT_TO_BE_VISIBLE)
  },

  goToAdminPage() {
    I.amOnPage(CONSTANTS.APP_URL + "/dashboard/admin")
  },

  verifyLogout() {
    I.waitForVisible(locate('.create-account'))
  }
}
