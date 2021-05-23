import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducers } from '@/store/reducer/index';

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
