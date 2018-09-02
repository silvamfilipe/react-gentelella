import React from 'react';
import DateTime from 'react-datetime';

import './date-time-picker.css';

const DateTimePicker = props => (
    <fieldset>
        <div className="control-group">
            <div className="controls">
                <div className="col-md-11 xdisplay_inputx form-group has-feedback">

                    <DateTime { ...props } inputProps={ {className: "form-control has-feedback-left"} } />
                    <span className="fa fa-calendar-o form-control-feedback left" aria-hidden="true"/>
                    <span id="inputSuccess2Status2" className="sr-only">(success)</span>
                </div>
            </div>
        </div>
    </fieldset>
);

export default DateTimePicker;