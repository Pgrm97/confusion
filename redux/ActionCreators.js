import * as ActionTypes from './ActionTypes';
import { BaseUrl } from '../shared/BaseUrl';

export const fetchComments = () => (dispatch) => {
    return fetch(BaseUrl + 'comments')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errMessage = new Error(error.message);
            throw errMessage;
        })
        .then(response => response.json)
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)))
}

export const commentsFailed = (errMessage) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMessage
});

export const addComments = (comments) => ({
    type:ActionTypes.ADD_COMMENTS,
    payload: comments
})

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading());
    return fetch(BaseUrl + 'dishes')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errMessage = new Error(error.message);
            throw errMessage;
        })
        .then(response => response.json)
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)))
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING,
    payload: errMessage
})

export const dishesFailed = (errMessage) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMessage
});

export const addDishes = (dishes) => ({
    type:ActionTypes.ADD_DISHES,
    payload: comments
})

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading());
    return fetch(BaseUrl + 'promos')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errMessage = new Error(error.message);
            throw errMessage;
        })
        .then(response => response.json)
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)))
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING,
    payload: errMessage
})

export const promosFailed = (errMessage) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errMessage
});

export const addPromos = (promos) => ({
    type:ActionTypes.ADD_PROMOS,
    payload: promos
})

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading());
    return fetch(BaseUrl + 'leaders')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errMessage = new Error(error.message);
            throw errMessage;
        })
        .then(response => response.json)
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)))
}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING,
    payload: errMessage
})

export const leadersFailed = (errMessage) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errMessage
});

export const addLeaders = (leaders) => ({
    type:ActionTypes.ADD_LEADERS,
    payload: leaders
})