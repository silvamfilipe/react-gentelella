import React from 'react';
import { Gentelella, BaseTheme } from 'react-gentelella';
import Sidebar from "./app/sidebar";
import HeadNav from "./app/head-nav";

const App = () => (
    <div>
        <BaseTheme/>
        <Gentelella>
            <Sidebar/>
            <HeadNav/>
        </Gentelella>
    </div>
);

export default App;
