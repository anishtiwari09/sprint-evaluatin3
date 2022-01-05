import { actionType } from "./actionContraint"

export const getUserLogin = () => ({
    type: actionType.USER_LOGIN,
    payload:
        { isAuth: true }
})

export const getUserLogout = () => ({
    type: actionType.USER_LOGOUT,
    payload:
        { isAuth: true }
})
