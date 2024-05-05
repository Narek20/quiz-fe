import { Dispatch, SetStateAction } from "react"

export interface IQuizzesContext {
  quizzes: IQuiz[]
  getQuizzes: () => void
  setQuizzes: Dispatch<SetStateAction<IQuiz[]>>
}

export interface IQuiz {
 id: number,
 name: string,
 description: string,
 questions: IQuestion[]
}

export interface IQuestion {
  id: 1,
  questionText: string,
  options: string[],
  correctAnswer: number
}