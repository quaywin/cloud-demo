import request from "../services/request";
export const SET_MENU_VISIBILITY = 'SET_MENU_VISIBILITY';
export const SET_LOADING = 'SET_MENSET_LOADING_VISIBILITY';

export const toggleMenu = () => (dispatch, getState) => {
  const showMenu = getState().app.showMenu;
  dispatch({
    type: SET_MENU_VISIBILITY,
    payload: { showMenu: !showMenu },
  });
}


const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: { loading },
});


export const applicationInit = () => async (dispatch) => {  
  request.interceptors.request.use(
    config => {
      dispatch(setLoading(true));
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );
  request.interceptors.response.use(
    res => {
      dispatch(setLoading(false));
      return res;
    },
    error => {
      return Promise.reject(error);
    },
  )
}

export default function reducer(state = {
  showMenu: true,
  loading: false,
}, action) {
  switch (action.type) {
    case SET_MENU_VISIBILITY:
      return {
        ...state,
        showMenu: action.payload.showMenu,
      };
    case SET_LOADING: 
      return {
        ...state,
        loading: action.payload.loading
      }
    default:
      return state;
  }
}