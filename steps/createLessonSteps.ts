import { expect } from "chai";
import { EnlearnLesson } from "../testdata/types";
import { KEY_CONSTANTS } from "../utils/KeyConstants";
import getSessionInstance from "../utils/session";

const { CreateLessonPage } = inject()
  
export = {

  // createLesson(lessonName: string, lessonDescription: string, videoURL: string, path: string) {
  //   CreateLessonPage.createLesson(lessonName, lessonDescription, videoURL, path)
  // }, 

  createLesson(lessonName: string, lessonDescription: string, videoURL: string, path: string) {
    CreateLessonPage.createLesson(lessonName, lessonDescription, videoURL, path)
    const lesson = {} as EnlearnLesson;
    lesson.title = lessonName;
    lesson.description = lessonDescription;
    getSessionInstance().putOnSession(KEY_CONSTANTS.LESSON,lesson);
  }, 

  createLesson2() {
    const lesson = getSessionInstance().getFromSession(KEY_CONSTANTS.LESSON) as EnlearnLesson;
    CreateLessonPage.createLesson2(lesson)
  }, 

  async verifyLessonDetailsInRow() {
    const expectedLesson = await getSessionInstance().getFromSession(KEY_CONSTANTS.LESSON) as EnlearnLesson;
    const actualLesson = await CreateLessonPage.getLessonDetails(expectedLesson.title!)
    console.log(actualLesson)
    console.log(expectedLesson)
    expect(actualLesson.title).to.equal(expectedLesson.title)  
    expect(actualLesson.description).to.equal(expectedLesson.description)  
  }
}
