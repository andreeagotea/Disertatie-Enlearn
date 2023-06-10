import { EnlearnLesson, EnlearnQuestion, EnlearnTest } from "./types";

const enlearnQuestion1: EnlearnQuestion = {
    questionNo: "1",
    question: "What is the capital of France?",
    answer1: "London",
    answer2: "Paris",
    answer3: "Berlin",
    answer4: "Rome",
    correctAnswer: "2",
  };
  
  const enlearnQuestion2: EnlearnQuestion = {
    questionNo: "2",
    question: "Who painted the Mona Lisa?",
    answer1: "Leonardo da Vinci",
    answer2: "Pablo Picasso",
    answer3: "Vincent van Gogh",
    answer4: "Michelangelo",
    correctAnswer: "1",
  };

  const enlearnQuestion3: EnlearnQuestion = {
    questionNo: "3",
    question: "What is the largest planet in our solar system?",
    answer1: "Mars",
    answer2: "Jupiter",
    answer3: "Saturn",
    answer4: "Earth",
    correctAnswer: "2",
  };
  
  const enlearnQuestion4: EnlearnQuestion = {
    questionNo: "4",
    question: "Who wrote the play 'Romeo and Juliet'?",
    answer1: "William Shakespeare",
    answer2: "Jane Austen",
    answer3: "Charles Dickens",
    answer4: "Mark Twain",
    correctAnswer: "1",
  };
  
  const enlearnQuestion5: EnlearnQuestion = {
    questionNo: "5",
    question: "What is the chemical symbol for gold?",
    answer1: "Go",
    answer2: "Au",
    answer3: "Ag",
    answer4: "Gd",
    correctAnswer: "2",
  };
  
  
  const enlearnTest: EnlearnTest = {
    title: "General Knowledge Test",
    description: "Test your knowledge about various topics.",
    time: "15 minute",
    questions: [enlearnQuestion1, enlearnQuestion2, enlearnQuestion3, enlearnQuestion4, enlearnQuestion5],
  };
  
  export const enlearnLesson: EnlearnLesson = {
    title: "Introduction to World History",
    description: "Learn about significant events and civilizations.",
    tests: [enlearnTest],
  };
  