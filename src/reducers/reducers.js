import { 
    combineReducers 
} from 'redux';
import {
     connectRouter 
} from 'connected-react-router';

import setPlayerReducer from './setPlayerReducer';
import mainBoxReducer from './mainBoxReducer';
import mainBox4x4Reducer from './mainBox4x4Reducer';
import winnerReducer from './winnerReducer';
import sideDrawerReducer from './sideDrawerReducer';
import authReducer from './authReducer'

export default (history) => combineReducers({
    router: connectRouter(history),
    setPlayer: setPlayerReducer,
    mainBox: mainBoxReducer,
    mainBox4x4: mainBox4x4Reducer,
    gameOver: winnerReducer,
    sideDrawer: sideDrawerReducer,
    auth: authReducer
});
