import React, { Component, Fragment } from "react";
// import { Button } from "semantic-ui-react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/navBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import Order from "../../features/order/order";
import OrderCheck from "../../features/order/OrderCheck";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import DetailsRoute from "../../features/route/DetailsRoute";
import Map from "../../features/route/Map";
import RouteTime from "../../features/route/RouteTime";
import Waze from "../../features/route/Waze";
import PhotoEmpty from "../../features/delivery/PhotoEmpty";
import Photo from "../../features/delivery/Photo";
import InRoute from "../../features/event/EventDashboard/InRoute";
import Sign from "../../features/delivery/Sign";
import SignEmpty from "../../features/delivery/SignEmpty";
import Profile from "../../features/profile/Profile";


class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route path="/order" component={Order} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Route path="/events" component={EventDashboard} />
                <Route path="/photo" component={Photo} />
                <Route path="/photoempty" component={PhotoEmpty} />
                <Route path="/signempty" component={SignEmpty} />
                <Route path="/sign" component={Sign} />
                <Route path="/detailsroute" component={DetailsRoute} />
                <Route path="/waze" component={Waze} />
                <Route path="/map" component={Map} />
                <Route path="/routetime" component={RouteTime} />
                <Route path="/ordercheck" component={OrderCheck} />
                <Route path="/inroute" component={ InRoute }/>
                {/* <EventDashboard /> */}
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default App;
