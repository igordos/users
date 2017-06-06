import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  UsersSearchForm,
  UsersSearchResults,
  action,
} from '../../components/users';

class Search extends PureComponent {
  getValues = (inputsForm) => {
    this.props.usersAction.sendRequest(inputsForm);
  };
  render() {
    console.log(this.props.loadedSearch);
    return (
      <div className="search">
        <UsersSearchForm
          inputsForm={this.props.inputsForm}
          onGetValues={this.getValues}
        />
        {
          this.props.loadedSearch ?
            <p>Загрузка ...</p>
            :
            <UsersSearchResults
              users={this.props.users}
            />
        }
      </div>
    );
  }
}

Search.propTypes = {
  inputsForm: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  }).isRequired,
  usersAction: PropTypes.shape({
    sendRequest: PropTypes.func.isRequired,
  }).isRequired,
  users: PropTypes.string.isRequired,
  loadedSearch: PropTypes.bool.isRequired,
};

const mapStateToProps = state =>
  ({
    inputsForm: state.users.inputsForm,
    users: state.users.users,
    loadedSearch: state.users.loadedSearch,
  });

const mapDispatchToProps = dispatch =>
  ({
    usersAction: bindActionCreators(action, dispatch),
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
