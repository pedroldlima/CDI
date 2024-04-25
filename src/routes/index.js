import AuthRoute from "./auth"
import NotAuthRoutes from "./notAuth"
import {userStore} from "../store/userStore"




export  default function Route() {
  const user = userStore((state) => state.userToken)

  return (

  user.length > 0  ? <AuthRoute /> : <NotAuthRoutes /> 

  )
}