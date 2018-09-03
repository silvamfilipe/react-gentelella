import React from 'react';
import DateTime from 'react-datetime';

import './date-time-picker.css';

const DateTimePicker = props => {
    let className = "form-control has-feedback-left ";
    if (props.inputProps && props.inputProps.className) {
        className += props.inputProps.className;
    }
    const { inputProps } = props;
    return (
        <fieldset>
            <div className="control-group date-time-picker">
                <div className="controls">
                    <div className="form-group has-feedback">

                        <DateTime { ...props } inputProps={ { ...inputProps, className} } />
                        <span className="fa fa-calendar-o form-control-feedback left" aria-hidden="true"/>
                        <span className="sr-only">(success)</span>
                    </div>
                </div>
            </div>
        </fieldset>
    );
};

export default DateTimePicker;