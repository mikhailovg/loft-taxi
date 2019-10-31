import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import {AppConsumer} from '../App';

export const Profile = ({setPage}) =>
    <AppConsumer>
        {context => {
            return context.isLoggedIn ?
                <div>
                    <h1 className={'PageTitle'}>Профиль</h1>
                </div> :
                <div>
                    <h1 className={'PageTitle'}>Сначала залогиньтесь</h1>
                </div>
        }}
    </AppConsumer>

Profile.propTypes = {
    setPage: PropTypes.func
}
