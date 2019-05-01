import { FETCH_FORECAST } from '../actions';

export default function(state= {
    loading: false, error: '', data: []
}, action) {
    switch(action.type) {
        case `${FETCH_FORECAST}_PENDING` : 
            return {
                loading: true,
                erorr: '',
                data: [...state.data]
            };
        case `${FETCH_FORECAST}_FULFILLED` : 
            return {
                loading: false,
                error: '',
                data: [action.payload.data, ...state.data]
            };
        case `${FETCH_FORECAST}_REJECTED` : 
            return {
                loading: false,
                error: action.payload,
                data: [ ...state.data]
            };
        default :
            return state;
    }
}