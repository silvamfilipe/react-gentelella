import React from 'react';
import { Gentelella, BaseTheme, Page } from 'react-gentelella';
import Sidebar from "./app/sidebar";
import HeadNav from "./app/head-nav";

const App = () => (
    <div>
        <BaseTheme/>
        <Gentelella>
            <Sidebar/>
            <HeadNav/>
            <Page>
                Hello!
            </Page>
        </Gentelella>
    </div>
);

export default App;
