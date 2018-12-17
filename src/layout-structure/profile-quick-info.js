import React from 'react';
import PropTypes from 'prop-types';

const ProfileQuickInfo = ({ picture, greeting, name}) => {
    return (
        <div className="profile clearfix">
            <div className="profile_pic">
                <img src={picture} alt="..." className="img-circle profile_img"/>
            </div>
            <div className="profile_info">
                <span>{greeting}</span>
                <h2>{name}</h2>
            </div>
            <div className="clearfix"/>
        </div>
    );
};

ProfileQuickInfo.propTypes = {
    picture: PropTypes.string.isRequired,
    greeting: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

ProfileQuickInfo.defaultProps = {
    picture: "https://randomuser.me/api/portraits/women/44.jpg",
    greeting: "Welcome,"
};

export default ProfileQuickInfo;
