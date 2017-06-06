import Users from '../models/Users.json';

function searchUsers(query) {
  const firstName = (query.firstName || '').toUpperCase();
  const lastName = (query.lastName || '').toUpperCase();
  const middleName = (query.middleName || '').toUpperCase();
  return Users.users.filter(item =>
      item.firstName.toUpperCase().indexOf(firstName) + 1 &&
      item.lastName.toUpperCase().indexOf(lastName) + 1 &&
      item.middleName.toUpperCase().indexOf(middleName) + 1);
}

function detailUser(id) {
  return Users.users.filter(item => item.id === parseInt(id, 10))[0];
}

export {
  searchUsers,
  detailUser,
};
