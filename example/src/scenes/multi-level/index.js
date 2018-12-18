import React from 'react';
import {Switch, Route} from "react-router-dom";

import LevelOne from './level-one'
import LevelTwo from "./level-two";

const MultiLevel = () => (
    <Switch>
        <Route path={'/multilevel-menu/level-1'} component={LevelOne}/>
        <Route path={'/multilevel-menu/level-2'} component={LevelTwo}/>
        <Route component={ LevelOne }/>
    </Switch>
);

export default MultiLevel;
