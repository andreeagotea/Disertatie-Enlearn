import { expect } from "chai"
import { EnlearnLesson, EnlearnQuestion, EnlearnTest } from "../testdata/types"
import { KEY_CONSTANTS } from "../utils/KeyConstants"
import getSessionInstance from "../utils/session"

const { CreateTestPage } = inject()
  
export = {

  createTest(testName: string, descriptionTest: string, time: string) {
    CreateTestPage.createTest(testName, descriptionTest, time)
    const test = {} as EnlearnTest;
    test.title = testName;
    test.description = descriptionTest;
    test.time = time;
    getSessionInstance().putOnSession(KEY_CONSTANTS.TEST,test);
  }, 

  createTest2() {
    const lesson = getSessionInstance().getFromSession(KEY_CONSTANTS.LESSON) as EnlearnLesson;
    const tests: any [] = lesson.tests;
    for (const test of tests) {
      CreateTestPage.createTest2(test)
    }
   
  
  }, 

  clickAddQuestionsAnswers(name: string) {
    CreateTestPage.clickAddQuestionsAnswers(name)
  }, 


  addQuestionsAnswers2() {
    const lesson = getSessionInstance().getFromSession(KEY_CONSTANTS.LESSON) as EnlearnLesson;
    const tests: EnlearnTest [] = lesson.tests;
    for (const test of tests) {
      CreateTestPage.clickAddQuestionsAnswers(test.title!)
      const questions: EnlearnQuestion [] = test.questions
      for (const question of questions) {
        CreateTestPage.addQuestionAndAnswer2(question)
      }
    }
    
  }, 

  addQuestionAndAnswer(questionNo:string, question: string, answer1: string, answer2: string, answer3: string, answer4: string, correctAnswer: string ) {
    CreateTestPage.addQuestionAndAnswer(questionNo, question, answer1, answer2, answer3, answer4, correctAnswer )
  }, 

  async verifyTestDetailsInRow() {
    const lesson = getSessionInstance().getFromSession(KEY_CONSTANTS.LESSON) as EnlearnLesson;
    const tests: EnlearnTest [] = lesson.tests;
    for (const test of tests) {
      const actualTest = await CreateTestPage.getTestDetails(test.title!)
      actualTest.time = actualTest!.time!.replace('m',' minute');
      console.log(actualTest) 
      console.log(test)
      expect(actualTest.title).to.equal(test.title)
      expect(actualTest.description).to.equal(test.description)
      expect(actualTest.time).to.equal(test.time)
    }
  },

  
}