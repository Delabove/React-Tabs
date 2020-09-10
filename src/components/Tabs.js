import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import tabData from '../tabdata';


export default function TabsApp() {

    return(
  <Tabs>
    <TabList>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
    </TabList>
   {tabData.map((tab) => (

    <TabPanel key={tab.title}>
        {tab.title}
    </TabPanel>

    ))}
{/*
    {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>

          {archive.title}
        </Link> */}


  </Tabs>
    )
}
