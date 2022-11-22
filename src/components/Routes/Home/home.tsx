import React from 'react';
import {FC} from 'react';
import {useSelector} from 'react-redux'

import {IState} from '../../../reducers';
import {IUsersReducer} from '../../../reducers/usersReducer'

export const Home: FC = props =>{

    const {users} = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    return(
        <>
            {users?.map(user => <span>{user.name} </span>)}
        </>
    );
}