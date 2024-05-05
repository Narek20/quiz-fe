export type IResponse<T> = {
  data?: T
  message: string
  success: boolean
  accessToken?: string
}

