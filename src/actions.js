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
  },
  // getAutoPlayPic: (v) => {
  //   return request.get(`${dirUrl}/home?hometime=${moment().unix()}`)(actions.GET_AUTOPLAY_PIC);
  // },
  // loginHandler: (v) => {
  //   return request.post(`${dirUrl}/login?logintime=${moment().unix()}`,v)(actions.LOGIN);
  // },
  // sendMessageHandler: (v) => {
  //   return request.get(`${dirUrl}/sendMessage?phone=${v}`)(actions.SEND_MESSAGE_HANDLER);
  // }
};


export const handlers = {
  [actions.SAY_HELLO]: (state, action) => {
    return {
      ...state,
      name: action.payload
    };
  },
  // onFailure
  [onSuccess(actions.SEND_ASYNC_REQUEST)]: (state, action) => ({
    ...state,
    userInfo: action.payload.data
  })
  // [onSuccess(actions.GET_AUTOPLAY_PIC)]: (state , action) => ({
  //   ...state,
  //   picSourec: action.payload.picSource,
  //   newHomeGame: action.payload.newHomeGame,
  //   newHomeComment: action.payload.newHomeComment,
  //   newHomeChannel: action.payload.newHomeChannel,
  // }),
  // [onSuccess(actions.LOGIN)]: (state , action) => ({
  //   ...state,
  //   isLogin: action.payload.isLogin,
  // }),
  // [onSuccess(actions.SEND_MESSAGE_HANDLER)]: (state , action) => ({
  //   ...state,
  // }),
};
