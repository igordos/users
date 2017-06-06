import {
  USER_SEND_REQUEST_SEARCH_INIT,
  USER_SEND_REQUEST_SEARCH_DONE,
  USER_SEND_REQUEST_DETAIL_INIT,
  USER_SEND_REQUEST_DETAIL_DONE,
} from '../constants/user';

const initialState = {
  test: 'test',
  inputsForm: [
    {
      id: 0,
      name: 'firstName',
      type: 'text',
      value: '',
      placeholder: 'Имя',
    },
    {
      id: 1,
      name: 'lastName',
      type: 'text',
      value: '',
      placeholder: 'Фамилия',
    },
    {
      id: 2,
      name: 'middleName',
      type: 'text',
      value: '',
      placeholder: 'Отчество',
    },
  ],
  users: [],
  userDetail: {},
  loadedSearch: false,
  loadedDetail: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SEND_REQUEST_SEARCH_INIT:
      return Object.assign({}, state, {
        loadedSearch: true,
      });
    case USER_SEND_REQUEST_SEARCH_DONE:
      return Object.assign({}, state, {
        users: action.payload.users,
        loadedSearch: false,
      });
    case USER_SEND_REQUEST_DETAIL_INIT:
      return Object.assign({}, state, {
        loadedDetail: true,
      });
    case USER_SEND_REQUEST_DETAIL_DONE:
      return Object.assign({}, state, {
        userDetail: action.payload.userDetail,
        loadedDetail: false,
      });
    default:
      return state;
  }
};
