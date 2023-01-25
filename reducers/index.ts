import {combineReducers, AnyAction, Reducer} from 'redux';
import lodash from 'lodash';
import notes from './notes';
import enableHeaderMenu from './enableHeaderMenu';

const PERSIST = {
  notes,
  enableHeaderMenu,
};
const rootReducer: Reducer<MobileState, AnyAction> = combineReducers({
  ...PERSIST,
});

export const PERSIST_KEYS = lodash.keys(PERSIST);
export default rootReducer;
