import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class GGMap extends Component {
  render() {
    return (
      <div className="col-lg-6 d-flex align-items-stretch">
        <div id="map" className="bg-white">
          <Map
            className="style-gg-map"
            google={this.props.google}
            zoom={8}
            //254 NGUYEN VAN LINH
            initialCenter={{ lat: 16.06044678410693, lng: 108.20979584114299 }}
          >
            
            <Marker position={{ lat: 16.06044678410693, lng: 108.20979584114299 }} />
          </Map>
          
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD1uW3oMcA5QbrESWBBue9tPJti_vukNpQ",
})(GGMap);