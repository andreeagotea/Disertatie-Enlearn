  const { LoginPage } = inject()
  
  export = {

    loginUser(name: string, password: string) {
      LoginPage.loginUser(name, password)
    }, 

    loginAdmin(emailAdmin: string, passwordAdmin: string) {
      LoginPage.loginUser(emailAdmin, passwordAdmin)
    }

  }

  
  