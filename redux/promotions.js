import * as ActionTypes from './ActionTypes';

export const promotions = (state = {
    isLoading: true,
    errMessage: null,
    promotions: []
    }, action) => {
        switch(action.type) {
            case ActionTypes.ADD_PROMOTIONS:
                return {...state, isLoading: false, errMessage: null, promotions: action.payload};
            case ActionTypes.PROMOTIONS_LOADING:
                return {...state, isLoading: true, errMessage: null, promotions: []};
            case ActionTypes.PROMOTIONS_FAILED:
                return {...state, isLoading: false, errMessage: action.payload, promotions: []};
            default:
                return state;
        }
    }