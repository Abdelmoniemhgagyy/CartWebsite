import { createStore } from 'redux';
import CounterRedux from "../ReduxCounter/ReduxCounter";
const store = createStore(CounterRedux);
export default store;
