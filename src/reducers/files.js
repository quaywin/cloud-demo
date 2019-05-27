import { SET_FILES, SET_FILES_ID } from "../constants/files";

export default function reducer(state = {
    list: [],
    id: null
  }, action) {
    switch (action.type) {
      case SET_FILES: {
        return {
          ...state,
          list: action.payload
        };
      }
      case SET_FILES_ID: {
        return {
          ...state,
          id: action.payload
        };
      }
      default:
        return state;
    }  
  }