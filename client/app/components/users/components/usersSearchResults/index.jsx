import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class UsersSearchResults extends PureComponent {
  handleClick = (id) => {
    this.context.router.history.push(`detail/?id=${id}`);
  };
  render() {
    return (<div className="users-search-results">
      <table className="users-search-result__table">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Отчество</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.users.map(item =>
              (<tr
                key={item.id}
                onClick={() => this.handleClick(item.id)}
              >
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.middleName}</td>
              </tr>))
          }
        </tbody>
      </table>
    </div>);
  }
}

UsersSearchResults.propTypes = {
  users: PropTypes.string.isRequired,
};

UsersSearchResults.contextTypes = {
  router: PropTypes.object,
};

export default UsersSearchResults;
