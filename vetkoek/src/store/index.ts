import { store } from "@risingstack/react-easy-state"

export const recommendedPostsList = store({
    size: 0,
    data: []
})
export const userAuth= store({
    isLoggedIn: false
})