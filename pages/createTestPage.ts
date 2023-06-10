import { EnlearnQuestion, EnlearnTest } from "../testdata/types"
import { CONSTANTS } from "../utils/constants"

const { I } = inject()

export = {

    createTest(testName: string, descriptionTest: string, time: string) {

      const textarea = locate('textarea').inside('.admin-dashboard #description')

      I.click(locate('.btn-info').withText(' Teste'))
      I.click(locate('.table-actions .btn').withText('Adaugă Test'))
      I.waitForElement("input[id = 'title']")
      I.fillField("input[id = 'title']", testName)
      I.click(textarea)
      I.fillField(textarea, descriptionTest)
      I.click('#duration')
      I.selectOption('Durata testului', time)
      I.click(locate('button').withText(' Adaugă test'))
      I.waitForText('Lectia a fost adaugata cu success!', CONSTANTS.WAIT_TIME_FOR_ELEMENT_TO_BE_VISIBLE)
      },

      createTest2(test: EnlearnTest) {
        const textarea = locate('textarea').inside('.admin-dashboard #description')
  
        I.click(locate('.btn-info').withText(' Teste'))
        I.click(locate('.table-actions .btn').withText('Adaugă Test'))
        I.waitForElement("input[id = 'title']")
        I.fillField("input[id = 'title']", test.title!)
        I.click(textarea)
        I.fillField(textarea, test.description!)
        I.click('#duration')
        I.selectOption('Durata testului', test.time!)
        I.click(locate('button').withText(' Adaugă test'))
        I.waitForText('Lectia a fost adaugata cu success!', CONSTANTS.WAIT_TIME_FOR_ELEMENT_TO_BE_VISIBLE)
        },

      addQuestionAndAnswer(questionNo:string, question: string, answer1: string, answer2: string, answer3: string, answer4: string, correctAnswer: string ) {
        const questionContainer = this.getQuestionContainer("Întrebarea " + questionNo);
        // Adauga prima intrebare
        I.fillField(locate(`//input[contains(@class,'question')]`).inside(questionContainer), question);
        I.fillField(locate(`//input[contains(@class,'input-answer-1')]`).inside(questionContainer), answer1);
        I.fillField(locate(`//input[contains(@class,'input-answer-2')]`).inside(questionContainer), answer2);
        I.fillField(locate(`//input[contains(@class,'input-answer-3')]`).inside(questionContainer), answer3);
        I.fillField(locate(`//input[contains(@class,'input-answer-4')]`).inside(questionContainer), answer4);
        I.click(locate(`//label[contains(@class,'label-answer-${correctAnswer}')]`).inside(questionContainer));
        I.click(locate('button').withText('Finalizare'))
      },

      addQuestionAndAnswer2(q: EnlearnQuestion) {
        const questionContainer = this.getQuestionContainer("Întrebarea " + q.questionNo);
        // Adauga prima intrebare
        I.fillField(locate(`//input[contains(@class,'question')]`).inside(questionContainer), q.question!);
        I.fillField(locate(`//input[contains(@class,'input-answer-1')]`).inside(questionContainer), q.answer1!);
        I.fillField(locate(`//input[contains(@class,'input-answer-2')]`).inside(questionContainer), q.answer2!);
        I.fillField(locate(`//input[contains(@class,'input-answer-3')]`).inside(questionContainer), q.answer3!);
        I.fillField(locate(`//input[contains(@class,'input-answer-4')]`).inside(questionContainer), q.answer4!);
        I.click(locate(`//label[contains(@class,'label-answer-${q.correctAnswer!}')]`).inside(questionContainer));
        I.click(locate('button').withText('Finalizare'))
      },

        getTestByName(name: string) {
        return locate(`//tr[contains(.,  '${name}')]`)
      }, 

      clickAddQuestionsAnswers(name: string) {
        I.click(locate('a').withText(' Întrebări/Răspunsuri').inside(this.getTestByName(name)))
        I.waitForText('Întrebarea 1', CONSTANTS.WAIT_TIME_FOR_ELEMENT_TO_BE_VISIBLE)

      },

      getQuestionContainer(name: string) {
         return locate(`//div[contains(@class,'question-container') and contains(.,'${name}')]`)
    }, 

      async getTestDetails(name: string) {
        const test = {} as EnlearnTest;
        const row = this.getTestByName(name);
        const description = locate('td:nth-of-type(3)').inside(row)
        const time = locate('td:nth-of-type(4)').inside(row)      
        test.title = name;
        test.description = await I.grabTextFrom(description);
        test.time = await I.grabTextFrom(time)
        
        
        return test;
    }
  }