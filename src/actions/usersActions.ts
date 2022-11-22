import { Dispatch } from 'redux';

import * as actionTypes from './actionTypes/userTypes';
import { ISingleUser } from '../entities/users';
import { IState } from '../reducers'

export const getUsers = () => ((dispatch: Dispatch, getState: () => IState) =>{

    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users: ISingleUser[]) => {
        dispatch({
            type: actionTypes.GET_USERS,
            users
        });
        return users;
    });
}) as any;