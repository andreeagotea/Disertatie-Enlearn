const { I } = inject()

export = {

  loginUser(email: string, password: string) {
    I.click(locate('li').withText('Login'))
    I.fillField("input[id='email']", email)
    I.fillField("input[id='password']", password)
    I.click(locate('button').withText('Login'))
    I.waitForElement(locate('li').withText('Lecții'))
  },

  loginAdmin(emailAdmin: string, passwordAdmin: string) {
    I.click(locate('li').withText('Login'))
    I.fillField("input[id='email']", emailAdmin)
    I.fillField("input[id='password']", passwordAdmin)
    I.click(locate('button').withText('Login'))
    I.waitForElement(locate('li').withText('Lecții'))
  }

}
