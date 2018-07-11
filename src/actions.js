import request, {onSuccess} from './lib/request';
import queryString from 'query-string';
const url = '10.138.227.219:8080/mplm/'
export const actions = {
  SAY_HELLO: 'SAY_HELLO',
  SEND_ASYNC_REQUEST: 'SEND_ASYNC_REQUEST',
};

export const actionCreators = {
  sayHello: (text) => ({type: actions.SAY_HELLO, payload: text}),
  sendAsyncRequest: (v) => {
    return request.post(`${url}login`, v)(actions.SEND_ASYNC_REQUEST)
  }
};


export const handlers = {
  [actions.SAY_HELLO]: (state, action) => {
    return {
      ...state,
      name: action.payload
    };
  },
  [onSuccess(actions.SEND_ASYNC_REQUEST)]: (state, action) => ({
    ...state,
    userInfo: action.payload.data
  })
};
