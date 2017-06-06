import axios from 'axios';
import {
  USER_SEND_REQUEST_SEARCH_INIT,
  USER_SEND_REQUEST_SEARCH_DONE,
  USER_SEND_REQUEST_DETAIL_INIT,
  USER_SEND_REQUEST_DETAIL_DONE,
} from '../../../constants/user';

const HOST = 'http://0.0.0.0:8080';

function sendRequest(inputsForm) {
  return (dispatch) => {
    dispatch({
      type: USER_SEND_REQUEST_SEARCH_INIT,
    });
    const query = {};
    inputsForm.forEach((item) => {
      query[item.name] = item.value;
    });

    axios.get(`${HOST}/search`, {
      params: query,
    })
      .then((response) => {
        const users = response.data;
        dispatch({
          type: USER_SEND_REQUEST_SEARCH_DONE,
          payload: {
            users,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

function sendRequestDetail(id) {
  return (dispatch) => {
    dispatch({
      type: USER_SEND_REQUEST_DETAIL_INIT,
    });
    axios.get(`${HOST}/detail`, {
      params: {
        id,
      },
    })
      .then((response) => {
        const userDetail = response.data;
        dispatch({
          type: USER_SEND_REQUEST_DETAIL_DONE,
          payload: {
            userDetail,

          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export {
  sendRequest,
  sendRequestDetail,
};
