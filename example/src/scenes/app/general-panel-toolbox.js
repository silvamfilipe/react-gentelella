import React from 'react';
import { PanelToolbox, PanelToolboxItem, PanelToolboxDropdownItem } from "react-gentelella";

const GeneralPanelToolbox = () => (
    <PanelToolbox>
        <PanelToolboxItem>
            <a href="/" className="collapse-link"><i className="fa fa-chevron-up"/></a>
        </PanelToolboxItem>

        <PanelToolboxDropdownItem icon={'wrench'}>
            <PanelToolboxItem>
                <a href="/">Settings 1</a>
            </PanelToolboxItem>
            <PanelToolboxItem>
                <a href="/">Settings 2</a>
            </PanelToolboxItem>
        </PanelToolboxDropdownItem>

        <PanelToolboxItem>
            <a href="/" className="close-link"><i className="fa fa-close"/></a>
        </PanelToolboxItem>

    </PanelToolbox>
);

export default GeneralPanelToolbox;
