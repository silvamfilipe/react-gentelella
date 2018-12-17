import React from 'react';
import { Gentelella, BaseTheme, Page, Footer } from 'react-gentelella';
import Sidebar from "./app/sidebar";
import HeadNav from "./app/head-nav";

const App = () => (
    <div>
        <BaseTheme/>
        <Gentelella fixedFooter={ false }>
            <Sidebar/>
            <HeadNav/>
            <Page>
                Hello!
            </Page>
            <Footer>
                React-Gentelella * Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
            </Footer>
        </Gentelella>
    </div>
);

export default App;
