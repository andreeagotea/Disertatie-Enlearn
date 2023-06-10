import basePage from "../pages/basePage"
import navPage from "../pages/navPage"
  
  export = {

    goTo() {
      basePage.goto()
    }, 

    logout() {
      navPage.navigateMenu(' Logout')
      basePage.verifyLogout()
    }, 

    goToTeste() {
      navPage.navigateMenu('Teste')
    },

    goToCatalog() {
      navPage.navigateMenu('Catalog')
    },

    goToLecții() {
      navPage.navigateMenu('Lecții')
    }, 

    goToAdminPage() {
      basePage.goToAdminPage()
    }
  }

  
  