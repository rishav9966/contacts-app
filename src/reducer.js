import * as actions from './action_types';

let totalConacts = 0;
export default function reducer(state = [], action) {
    switch (action.type) {
        case actions.ADD_CONTACT:
            return [
                ...state,
                // action.payload.contact
                {
                    id: ++totalConacts,
                    name: action.payload.contact.name,
                    mobile: action.payload.contact.mobile,
                    relation: action.payload.contact.relation,
                    email: action.payload.contact.email,
                    favourite: false
                }
            ]
        
        case actions.ADD_FAVOURITE:
            return state.map(contact =>
                contact.id !== action.payload.id ? contact : {...contact,favourite:true})
        
        case actions.REMOVE_FAVOURITE:
            return state.map(contact => 
                contact.id !== action.payload.id ? contact : {...contact, favourite: false})
        
        default:
            return state;
    }
}