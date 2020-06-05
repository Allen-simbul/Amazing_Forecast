import React from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchBar extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <span>{error}</span>;
    }
  }

  renderInput = ({ input, meta }) => {
    return (
      <div>
        <input {...input} placeholder="Enter a Location" />
        <span>{this.renderError(meta)}</span>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="location" component={this.renderInput} />
        <button>Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.location) {
    errors.location = 'You must enter a location!';
  }

  return errors;
};

export default reduxForm({
  form: 'searchbarForm',
  validate,
})(SearchBar);
