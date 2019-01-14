import React, { Component } from 'react';
import TagsInput from 'react-tagsinput';
import { retrieveValue } from './field'
import { FormGroup, HelpBlock } from 'react-bootstrap';
import AutosizeInput from 'react-input-autosize';

class TagsField extends Component {

  constructor(props) {
    super(props);
    this.state = {tags: this.retrieveTags(props)};
  }

  retrieveTags = props => {
    if (props.value) {
      return props.value;
    }

    const {name, formProps} = props;
    if (formProps && formProps.values[name]) {
      return formProps.values[name];
    }

    return [];
  };

  handleChange = tags => {
    const {name, formProps} = this.props;
    if (formProps && formProps.setFieldValue) {
      formProps.setFieldValue(name, tags);
    }
    this.setState({tags})
  };

  render() {
    const { name, label, required, layout} = this.props;
    const requiredTag = required ? <span className="required">*</span> : '';
    const touched = retrieveValue('touched', this.props);
    const error = retrieveValue('error', this.props);
    const isInvalid = touched && error;
    const validationState = isInvalid ? 'error' : null;

    const labelRender = label
      ? (<label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor={ name }>{ label } { requiredTag }</label>)
      : '';

    const layoutClass = layout === 'centered'
      ? 'col-md-6 col-sm-6 col-xs-12'
      : layout === 'vertical'
        ? ''
        : 'col-md-9 col-sm-9 col-xs-12';

    function autoSizingRenderInput ({addTag, ...props}) {
      let {onChange, value, ...other} = props;
      return (
        <AutosizeInput type='text' onChange={onChange} value={value} {...other} />
      )
    }

    return (
      <FormGroup validationState={ validationState }>
        { labelRender }
        <div className={ label ? layoutClass : ''}>
          <TagsInput renderInput={ autoSizingRenderInput } value={ this.state.tags } onChange={ this.handleChange } />

          { isInvalid
            ? <HelpBlock>{ error }</HelpBlock>
            : ''
          }
        </div>
      </FormGroup>
    );

  }
}

export default TagsField;
