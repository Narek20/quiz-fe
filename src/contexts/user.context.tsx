import { createContext, ReactNode, useEffect, useState } from 'react'
import { IUser, IUserContext } from 'types/user.type'

// Create a UserContext
export const UserContext = createContext<IUserContext>({
  user: null,
  getUser: () => {},
  setUser: () => {},
})

// UserProvider component that wraps your app
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null)

  const getUser = async () => {
    // const data = await getSingleUser()

    // if (data.success && data.data) {
    //   setUser(data.data)
    // }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <UserContext.Provider value={{ user, getUser, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
