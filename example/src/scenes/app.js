import React from 'react'
import { Gentelella, BaseTheme, Footer } from 'react-gentelella';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from "./app/sidebar";
import HeadNav from "./app/head-nav";
import PlainPage from './extras/plain-page'
import MultiLevel from "./multi-level";
import GeneralElements from "./ui-elements/general-elements";
import Typography from './ui-elements/typography'

const App = () => (
    <div>
        <BaseTheme/>
          <Router>
              <Gentelella fixedFooter={ true } fixedSidebar={ true } >
                  <Sidebar/>
                  <HeadNav/>

                  <Switch>
                    <Route path="/extras/plain-page" component={ PlainPage }/>
                    <Route path="/ui-elements/general-elements" component={ GeneralElements }/>
                    <Route path="/ui-elements/typography" component={ Typography }/>
                    <Route path="/multilevel-menu" component={ MultiLevel }/>
                    <Route component={ PlainPage }/>
                  </Switch>

                  <Footer>
                      React-Gentelella * Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
                  </Footer>
              </Gentelella>
          </Router>
    </div>
);

export default App;
