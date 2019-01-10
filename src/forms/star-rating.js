import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, HelpBlock } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

class StarRating extends Component {

  constructor(props) {
    super(props);
    const value = this.retrieveValue(props)
    this.state = { value: value ? value : 0 };
  }

  onStarClick = value => {
    this.handleOptionChange(value);
    this.setState({value});
  }

  retrieveValue = props => {
    const { name, formProps } = props;
    if ((!formProps || !formProps.values) && props.hasOwnProperty('value')) return props.value;
    if (!formProps.values) return 0;

    if (formProps.values.hasOwnProperty(name)) {
      return formProps.values[name];
    }
  };

  handleOptionChange = value => {
    const { setFieldValue } = this.props.formProps;
    if (setFieldValue) { setFieldValue(this.props.name, value, false); }
  };

  render() {
    const { label, name, starCount, layout, starColor, emptyStarColor, readOnly, helpText } = this.props;

    const labelRender = label
      ? (<label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor={ name }>{ label }</label>)
      : '';

    const layoutClass = layout === 'centered'
      ? 'col-md-6 col-sm-6 col-xs-12'
      : layout === 'vertical'
        ? ''
        : 'col-md-9 col-sm-9 col-xs-12';

    const renderHelp = helpText ? <HelpBlock>{ helpText.replace("%d", this.state.value) }</HelpBlock> : '';
    return (
      <FormGroup>
        { labelRender }
        <div className={ label ? layoutClass : ''}>
          <StarRatingComponent
            name={ name }
            starCount={ starCount }
            value={this.state.value}
            starColor={ starColor }
            emptyStarColor={ emptyStarColor }
            editing={ !readOnly }
            onStarClick={ this.onStarClick }
            renderStarIcon={ (nextValue) => {
              const icon = nextValue > this.state.value ? 'fa fa-star-o fa-2x' : 'fa fa-star fa-2x';
              return <i className={ icon }>&nbsp;</i>;
            }}
            renderStarIconHalf={ () => (
              <span className="star-stack">
                <i className="fa fa-star-o fa-2x half-a-star"> &nbsp;</i>
                <i style={{color: starColor}} className="fa fa-star-half fa-2x"> &nbsp;</i>
              </span>
            ) }
          />
          { renderHelp }
        </div>
      </FormGroup>
    );
  }
}

StarRating.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.any,
  starCount: PropTypes.number.isRequired,
  layout: PropTypes.oneOf(['horizontal', 'vertical', 'centered']).isRequired,
  starColor: PropTypes.string,
  emptyStarColor: PropTypes.string,
  readOnly: PropTypes.bool.isRequired,
  helpText: PropTypes.string
};

StarRating.defaultProps = {
  label: undefined,
  starCount: 5,
  layout: 'horizontal',
  starColor: '#ffb400',
  emptyStarColor: '#bebebe',
  readOnly: false,
  helpText: undefined
};

export default StarRating;
