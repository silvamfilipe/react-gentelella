import React from 'react';
import { TopDropdownList, MenuItem, FaIcon  } from 'react-gentelella';

const MessagesMenu = () => (
    <TopDropdownList number={'4'} customClass={'bg-green'} label={<FaIcon icon='envelope-o'/>}>
        <MenuItem>
            <a href="/">
                <span className="image"><img src="https://randomuser.me/api/portraits/men/44.jpg" alt="John Smith"/></span>
                <span>
                        <span>John Smith</span>
                        <span className="time">3 mins ago</span>
                      </span>
                <span className="message">
                        Film festivals used to be do-or-die moments for movie makers. They were where...
                      </span>
            </a>
        </MenuItem>

        <MenuItem>
            <a href="/">
                <span className="image"><img src="https://randomuser.me/api/portraits/men/44.jpg" alt="John Smith"/></span>
                <span>
                        <span>John Smith</span>
                        <span className="time">3 mins ago</span>
                      </span>
                <span className="message">
                        Film festivals used to be do-or-die moments for movie makers. They were where...
                      </span>
            </a>
        </MenuItem>

        <MenuItem>
            <a href="/">
                <span className="image"><img src="https://randomuser.me/api/portraits/men/44.jpg" alt="John Smith"/></span>
                <span>
                        <span>John Smith</span>
                        <span className="time">3 mins ago</span>
                      </span>
                <span className="message">
                        Film festivals used to be do-or-die moments for movie makers. They were where...
                      </span>
            </a>
        </MenuItem>

        <MenuItem>
            <a href="/">
                <span className="image"><img src="https://randomuser.me/api/portraits/men/44.jpg" alt="John Smith"/></span>
                <span>
                        <span>John Smith</span>
                        <span className="time">3 mins ago</span>
                      </span>
                <span className="message">
                        Film festivals used to be do-or-die moments for movie makers. They were where...
                      </span>
            </a>
        </MenuItem>
    </TopDropdownList>
);

export default MessagesMenu;
