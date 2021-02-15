import * as actions from "./action_types"

export const addContact = contact => {
    return {
        type: actions.ADD_CONTACT,
        payload: {
            contact
        }
    }
}

export const addFavourite = id => {
    return {
        type: actions.ADD_FAVOURITE,
        payload: {
            id
        }
    }
}

export const removeFavourite = id => {
    return {
        type: actions.REMOVE_FAVOURITE,
        payload: {
            id
        }
    }
}