import { Dispatch, SetStateAction } from 'react'

export interface IUserContext {
  user: IUser | null
  getUser: () => void
  setUser: Dispatch<SetStateAction<IUser | null>>
}

export interface IUser {
  id: number
  email: string
  password: string
  createdAt: Date
}
