
export interface EnlearnTest {
    title: string | null;
    description: string | null;
    time: string | null;
    questions: EnlearnQuestion [];
  }

  export interface EnlearnLesson {
    title: string | null;
    description: string | null;
    tests: EnlearnTest [];
  }

  export interface EnlearnQuestion {
    questionNo:string | null;
    question: string | null;
    answer1: string | null;
    answer2: string | null;
    answer3: string | null;
    answer4: string | null;
    correctAnswer: string | null;
  }

