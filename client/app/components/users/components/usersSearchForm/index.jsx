import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class UsersSearchForm extends PureComponent {
  state = {
    inputsForm: this.props.inputsForm,
  };
  inputs = {};
  handleGetValue = () => {
    this.props.onGetValues(this.state.inputsForm);
  };
  handleChangeInput = () => {
    const inputsForm = this.state.inputsForm;
    inputsForm.forEach((input, id) => {
      const hasProperty = Object.prototype.hasOwnProperty.call(this.inputs, input.name);
      if (hasProperty) {
        inputsForm[id].value = this.inputs[input.name].value;
      }
    });
    this.setState({ inputsForm });
  };
  renderInputs() {
    return this.props.inputsForm.map(input =>
      (<input
        className="users-search-form__ipt"
        key={input.id}
        type={input.type}
        defaultValue={input.value}
        placeholder={input.placeholder}
        ref={(ref) => { this.inputs[input.name] = ref; }}
        onChange={this.handleChangeInput}
      />));
  }
  render() {
    return (<div className="users-search-form">
      {this.renderInputs()}
      <button
        className="users-search-form__btn"
        onClick={this.handleGetValue}
      >
        Найти
      </button>
    </div>);
  }
}

UsersSearchForm.propTypes = {
  inputsForm: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  }).isRequired,
  onGetValues: PropTypes.func.isRequired,
};

export default UsersSearchForm;
