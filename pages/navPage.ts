const { I } = inject()

export = {

  navigateMenu(menu: string) {
    I.click(locate('.sidebar-nav li a').withText(menu))
  },

}
