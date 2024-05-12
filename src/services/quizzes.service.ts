import { IResponse } from 'types/response.type'
import { axiosInstance } from './axios.service'
import { IQuiz } from 'types/quiz.type'

export const getSingleQuiz = async (id: number): Promise<IResponse<IQuiz>> => {
  try {
    const data = await axiosInstance.get('/blog-entries/' + id, {
      headers: {
        'ngrok-skip-browser-warning': 'true'
      }
    })
    const quiz = {
      id: data.data.id,
      name: data.data.title,
      description: data.data.description,
      questions: data.data.questions,
    }

    return { success: true, data: quiz, message: 'Fetched successfully' }
  } catch (err: any) {
    return { success: false, message: err.message }
  }
}
