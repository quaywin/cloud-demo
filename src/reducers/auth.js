import request from "../services/request";

const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
const SET_LOGIN_USER = 'SET_LOGIN_USER';

const setLoginError = error => ({
  type: SET_LOGIN_ERROR,
  payload: { error },
});

const setLoginUser = user => ({
  type: SET_LOGIN_USER,
  payload: { user },
});

export const requestLogin = () => (dispatch) => {
  request.get('/authorize').then((res) => {
    const data = res.data;
    if(data.status) {
      dispatch(setLoginUser({
        status: data.status
      }));  
    }else {
      window.open(data.authUrl, '_self');
    }
  })
}

export const verifyLogin = () => async (dispatch) => {
  const res = await request.get('/authorize');
  console.log(res)
  if (!res) return false;
  dispatch(setLoginUser({
    status: res.data.status
  }));
  return res.data.status
  
}

export const processLoginCallback = (code) => async (dispatch) => {  
  try {
    const user = await request.get('/', {
      params: {
        code
      }
    })
    if (!user) {
      dispatch(setLoginError(true));
      return false;
    }  
    dispatch(setLoginUser({
      status: true
    }));
    return true;  
  } catch (e) {
    dispatch(setLoginError(true));
    return false;
  }  
}

export default function reducer(state = {
  user: null,
}, action) {
  switch (action.type) {
    case SET_LOGIN_USER: {
      return {
        ...state,
        user: action.payload.user,
      };
    }

    case SET_LOGIN_ERROR: {
      return {
        ...state,
        error: true,
      }
    }

    default:
      return state;
  }  
}
