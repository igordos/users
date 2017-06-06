import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import queryString from 'query-string';
import {
  UsersDetail,
  action,
} from '../../components/users';

class Detail extends PureComponent {
  componentWillMount() {
    const id = queryString.parse(this.props.location.search).id || null;
    this.props.usersAction.sendRequestDetail(id);
  }
  render() {
    return (
      <div className="detail">
        {
          this.props.loadedDetail ?
            <p>Загрузка ...</p>
            :
            <UsersDetail
              userDetail={this.props.userDetail}
              loadedDetail={this.props.loadedDetail}
            />
        }
      </div>
    );
  }
}

Detail.propTypes = {
  location: PropTypes.string.isRequired,
  userDetail: PropTypes.string.isRequired,
  usersAction: PropTypes.shape({
    sendRequestDetail: PropTypes.func.isRequired,
  }).isRequired,
  loadedDetail: PropTypes.bool.isRequired,
};

const mapStateToProps = state =>
  ({
    userDetail: state.users.userDetail,
    loadedDetail: state.users.loadedDetail,
  });

const mapDispatchToProps = dispatch =>
  ({
    usersAction: bindActionCreators(action, dispatch),
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail);
