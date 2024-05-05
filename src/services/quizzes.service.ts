import { IResponse } from 'types/response.type'
import { axiosInstance } from './axios.service'
import { IQuiz } from 'types/quiz.type'

export const getSingleQuiz = async (id: number): Promise<IResponse<IQuiz>> => {
  try {
    const data = await axiosInstance.get('blog-entries/' + id)

    return { success: true, data: data.data, message: 'Fetched successfully' }
  } catch (err: any) {
    return { success: false, message: err.message }
  }
}
