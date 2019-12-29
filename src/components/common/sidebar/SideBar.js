import React from "react";
import SideBarItem from "./SideBarItem";
import { Menu, Divider } from "semantic-ui-react";
import "./SideBar.scss";
import { SideBarHeader } from "./SideBarHeader";
import { SideBarFooter } from "./SideBarFooter";

class SideBar extends React.Component {
  render() {
    return (
      <Menu borderless vertical stackable fixed="left" className="side-nav">
        <SideBarHeader title="Assets" />
        <SideBarItem label="History" icon="history" />
        <SideBarItem label="Watch later" icon="clock" />
        <SideBarItem label="Liked videos" icon="thumbs up" />
        <Divider />
        <SideBarHeader title="Incidents" />
        <SideBarItem label="Movies and Shows" icon="film" />
        <Divider />
        <SideBarItem label="Report history" icon="flag" />
        <SideBarItem label="Help" icon="help circle" />
        <SideBarItem label="Send feedback" icon="comment" />
        <Divider />
        <SideBarFooter />
      </Menu>
    );
  }
}

export default SideBar;
