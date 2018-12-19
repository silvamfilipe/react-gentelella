import React from 'react';
import { Page, PageTitle, Notification } from 'react-gentelella';
import GlobalSearch from "../app/global-search";

const GeneralElements = () => (
    <Page>
        <PageTitle title={'General Elements'}>
            <GlobalSearch/>
        </PageTitle>
        <Notification type="info" title="Sticky Note" text="Sticky note... I'm not even gonna make a joke."/>
    </Page>
);

export default GeneralElements;
