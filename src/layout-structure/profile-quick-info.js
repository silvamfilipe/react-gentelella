import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfileQuickInfo extends Component {

    render() {
        const { imageUrl, greeting, name } = this.props;
        return (
            <div className="profile clearfix">
                <div className="profile_pic">
                    <img src={ imageUrl } alt="..." className="img-circle profile_img" />
                </div>
                <div className="profile_info">
                    <span>{ greeting }</span>
                    <h2>{ name }</h2>
                </div>
                <div className="clearfix"/>
            </div>
        );
    }
}

ProfileQuickInfo.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    greeting: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

ProfileQuickInfo.defaultProps = {
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    greeting: "Welcome,"
};

export default ProfileQuickInfo;
