export const getScenarioCases = () => {
  const shortPasswordCase = new DataTable(['userEmail', 'password', 'errorMessage'])

  shortPasswordCase.add(['user_new33@teleporthq.io', '1234567', 'Password must have at least 8 characters'])

  const invalidEmailCases = new DataTable(['userEmail', 'password', 'errorMessage'])
  invalidEmailCases.add(['bla', '12345678', 'Email is not valid'])
  invalidEmailCases.add(['123abc', '', 'Email is not valid'])
  invalidEmailCases.add(['123 abc@gmail.com', '', 'Email is not valid'])
  invalidEmailCases.add(['email@domain', '', 'Email is not valid'])
  invalidEmailCases.add(['email.com', '', 'Email is not valid'])
  invalidEmailCases.add(['@gmail.com', '', 'Email is not valid'])

  // const correctEmailAndPassData= new DataTable([
  //   "userEmail",
  //   "password",
  //   "errorMessage",
  // ]);
  // correctEmailAndPassData.add(["teledependent71@outlook.com","Randomoutlookpass",""])

  return {
    // correctEmailAndPassData,
    invalidEmailCases,
    shortPasswordCase,
  }
}
