import React from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchBar extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div>
          <div>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, meta }) => {
    return (
      <div>
        <input {...input} placeholder="Enter a Location" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    // console.log('formValues', formValues);
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
  // TODO: Fix Redux-Form Validation
  const errors = {};

  if (!formValues.location) {
    errors.title = 'You must enter a location!';
  }

  return errors;
};

export default reduxForm({
  form: 'searchbarForm',
  validate: validate,
})(SearchBar);
