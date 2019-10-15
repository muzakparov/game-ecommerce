import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

export default function MyTabs(props) {
  const [activeTab, setActiveTab] = useState('1');
  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
            Tab 1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
            Tab 2
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">Tab 1 Content</TabPane>
        <TabPane tabId="2">Tab 2 Content</TabPane>
      </TabContent>
    </div>
  );
}
