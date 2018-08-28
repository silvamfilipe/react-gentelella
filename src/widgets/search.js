import React from 'react';
import PropTypes from 'prop-types';

let currentValue = '';

const SearchWidget = ({ onChange, value, placeholder, buttonLabel, onClick, onKeyUp }) => {
    const inputValue = value ? value : currentValue;
    return (
        <div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
            <div className="input-group">
                <input
                    onKeyUp={ onKeyUp }
                    onChange={ e => { onChange(e.target.value) } }
                    value={ inputValue }
                    type="text"
                    className="form-control"
                    placeholder={ placeholder }
                />
                <span className="input-group-btn">
                  <button onClick={ onClick } className="btn btn-default" type="button">{ buttonLabel }</button>
                </span>
            </div>
        </div>
    );
};

SearchWidget.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    buttonLabel: PropTypes.any,
    onClick: PropTypes.func,
    onKeyUp: PropTypes.func
};

SearchWidget.defaultProps = {
    value: currentValue,
    onChange: event => { currentValue = event.target.value;},
    placeholder: 'Search for...',
    buttonLabel: <i className='fa fa-search' />,
    onClick: e => {},
    onKeyUp: e => {}
};

export default SearchWidget;