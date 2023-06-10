const { I } = inject()

export = {

    clickOnCreateAccountButton(name: string, email: string, password: string, confirmPassword: string ) {
      I.click(locate('.create-account'))
      I.fillField("input[id='name']", name)
      I.fillField("input[id='email']", email)
      I.fillField("input[id='password']", password)
      I.fillField("input[id='password-confirm']", confirmPassword)
      I.click(locate('button').withText('Inregistrare'))
      // I.waitForText('Bun venit,' + name + '!')
      I.waitForElement(locate('li').withText('Lecții'))
    
      },
  
}
