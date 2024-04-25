import {create} from "zustand"

export const userStore = create((set) => ({
   userToken: '',
   updateUserToken: (token) => set((_) => ({userToken: token}))
}))