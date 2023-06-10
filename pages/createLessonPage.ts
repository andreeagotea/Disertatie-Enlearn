import { CONSTANTS } from "../utils/constants"
import { EnlearnLesson, EnlearnTest } from "../testdata/types"


const { I } = inject()

export = {

    createLesson(lessonName: string, lessonDescription: string, videoURL: string, path: string) {
      I.click(locate('a').withText('Adaugă Lecție '))
      I.waitForText('Adăugare Lecție', CONSTANTS.WAIT_TIME_FOR_ELEMENT_TO_BE_VISIBLE)
      I.fillField("input[id = 'title']", lessonName)
      I.fillField("textarea[id = 'description']", lessonDescription)
      I.fillField("input[id = 'video_url']", videoURL)
      I.attachFile(locate('#image'), path)
      I.click(locate('button').withText('Adaugă lecție '))
      I.waitForText('Lectia a fost adaugata cu success!')
    },

    createLesson2(lesson: EnlearnLesson) {
      I.click(locate('a').withText('Adaugă Lecție '))
      I.waitForText('Adăugare Lecție', CONSTANTS.WAIT_TIME_FOR_ELEMENT_TO_BE_VISIBLE)
      I.fillField("input[id = 'title']", lesson.title!)
      I.fillField("textarea[id = 'description']", lesson.description!)
      I.fillField("input[id = 'video_url']", CONSTANTS.VIDEO_URL)
      I.attachFile(locate('#image'), CONSTANTS.UPLOAD_IMAGE_PATH)
      I.click(locate('button').withText('Adaugă lecție '))
      I.waitForText('Lectia a fost adaugata cu success!')
    },

    getLessonByName(name: string) {
      return locate(`//tr[contains(.,  '${name}')]`)
    }, 

    async getLessonDetails(name: string) {
      const lesson = {} as EnlearnTest;
      const row = this.getLessonByName(name);
      const description = locate('td:nth-of-type(4)').inside(row)      
      lesson.title = name;
      lesson.description = await I.grabTextFrom(description);
      
      return lesson;
  }

  }