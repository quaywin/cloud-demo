import request from "../services/request";
import { SET_FILES } from "../constants/files";

const setListFiles = files => ({
  type: SET_FILES,
  payload: files
});
  
export const loadFiles = (id) => {
    const url = id ? `/files?id=${id}` : '/files'
    return dispatch => {
      request
        .get(url)
        .then(res => {
          dispatch(setListFiles(res.data.files));
        })
        .catch(err => {
          console.log(err);
        });
    };
  };
