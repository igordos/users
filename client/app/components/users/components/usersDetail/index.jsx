import React from 'react';
import PropTypes from 'prop-types';

const UsersDetail = (props) => {
  const {
    firstName,
    lastName,
    middleName,
    dateOfBirth,
    residentialAddress,
  } = props.userDetail;
  return (<div className="users-detail">
    {
      Object.keys(props.userDetail).length === 0 ?
        <p>Пользователь не найден</p>
        :
        <div>
          <p>Имя: {firstName}</p>
          <p>Фамилия: {lastName}</p>
          <p>Отчество: {middleName}</p>
          <p>Дата рождения: {new Date(dateOfBirth).toLocaleDateString()}</p>
          <p>Адрес проживания: {residentialAddress}</p>
        </div>
    }
  </div>);
};

UsersDetail.propTypes = {
  userDetail: PropTypes.string.isRequired,
};

export default UsersDetail;
