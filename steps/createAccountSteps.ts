  const { CreateAccountPage } = inject()
  
  export = {

    clickCreateAccountButton(name: string, email: string, password: string, confirmPassword: string ) {
      CreateAccountPage.clickOnCreateAccountButton(name, email, password, confirmPassword) 
    }

  }

  
  