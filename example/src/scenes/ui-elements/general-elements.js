import React from 'react';
import { Page, PageTitle, Notification } from 'react-gentelella';
import GlobalSearch from "../app/global-search";
import LeftTabs from './general-elements/left-tabs'
import RightTabs from './general-elements/right-tabs'
import VerticalTabsLeft from "./general-elements/vertical-tabs-left";
import VerticalTabsRight from './general-elements/vertical-tabs-right'
import AccordionBox from './general-elements/accordion-box'
import Popovers from './general-elements/popovers'
import Tooltips from './general-elements/tooltips'
import Jumbotron from './general-elements/jumbotron'
import { Clearfix } from 'react-bootstrap'

const GeneralElements = () => (
  <Page>
    <PageTitle title={'General Elements'}>
      <GlobalSearch/>
    </PageTitle>
    <Notification type="info" addClass="dark" nonblock={{nonblock: true}} hide={ true } delay={10000} title="PNotify" text="Welcome. Try hovering over me. You can click things behind me, because I'm non-blocking."/>
    <div>
      <div className="col-md-6 col-sm-6 col-xs-12">
        <LeftTabs/>
      </div>
      <div className="col-md-6 col-sm-6 col-xs-12">
        <RightTabs/>
      </div>
      <div className="clearfix"/>
      <div className="col-md-6 col-sm-6 col-xs-12">
        <VerticalTabsLeft/>
      </div>
      <div className="col-md-6 col-sm-6 col-xs-12">
        <VerticalTabsRight/>
      </div>
      <div className="clearfix"/>
      <div className="col-md-6 col-sm-6 col-xs-12">
        <AccordionBox/>
      </div>
      <div className="col-md-6 col-sm-6 col-xs-12">
        <AccordionBox/>
      </div>
      <div className="clearfix"/>
      <div>
        <div className="col-md-6 col-sm-6 col-xs-12">
          <Popovers/>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12">
          <Tooltips/>
        </div>
        <div className="clearfix"/>
      </div>
      <div className="col-md-6 col-sm-6 col-xs-12">

      </div>
      <div className="col-md-6 col-sm-6 col-xs-12">
        <Jumbotron/>
      </div>
      <Clearfix/>
    </div>
  </Page>
);


export default GeneralElements;
