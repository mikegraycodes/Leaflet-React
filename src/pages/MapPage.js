import React, { Component } from "react";
import Map from "../components/map/Map";
import DrawerToggleButton from "../components/common/SideDrawer/DrawerToggleButton";
import SideDrawer from "../components/common/SideDrawer/SideDrawer";

class MapPage extends Component {
  state = {
    sideDrawerOpen: true
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    return (
      <>
        <div>
          <Map />
          <SideDrawer show={this.state.sideDrawerOpen} />
          <DrawerToggleButton
            click={this.drawerToggleClickHandler}
          ></DrawerToggleButton>

          {/* <div className="sidebar">
            <ul>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
            </ul>
          </div>
          <div className="button" onClick={this.showSideBar()}>
            Button
          </div> */}
        </div>
      </>
    );
  }
}

export default MapPage;
