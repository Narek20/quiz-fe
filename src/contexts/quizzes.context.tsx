import { createContext, ReactNode, useEffect, useState } from 'react'
import { IQuiz, IQuizzesContext } from 'types/quiz.type'

// Create a QuizzesContext
export const QuizzesContext = createContext<IQuizzesContext>({
  quizzes: [],
  getQuizzes: () => {},
  setQuizzes: () => {},
})

// QuizzesProvider component that wraps your app
export const QuizzesProvider = ({ children }: { children: ReactNode }) => {
  const [quizzes, setQuizzes] = useState<IQuiz[]>([])
  // const [login, { data }] = useMutation(LOGIN)

  const getQuizzes = async () => {
    // const data = await getSingleQuizzes()

    // if (data.success && data.data) {
    //   setQuizzes(data.data)
    // }
  }

  useEffect(() => {
    getQuizzes()
  }, [])

  return (
    <QuizzesContext.Provider value={{ quizzes, getQuizzes, setQuizzes }}>
      {children}
    </QuizzesContext.Provider>
  )
}
