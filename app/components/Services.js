import React, { Component } from 'react';
import ServiceBlock from './ServiceBlock'


var description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a pulvinar nibh, a suscipit turpis. Proin porttitor facilisis pharetra. Ut pharetra volutpat massa. Donec porta diam ac erat euismod tristique. Sed vitae mattis tortor. Sed cursus purus quis leo molestie gravida. Duis pulvinar purus magna, eu mattis sapien feugiat at. Mauris mollis at ex ac tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";
var extraInfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a pulvinar nibh, a suscipit turpis. Proin porttitor facilisis pharetra. Ut pharetra volutpat massa. Donec porta diam ac erat euismod tristique. Sed vitae mattis tortor. Sed cursus purus quis leo molestie gravida. Duis pulvinar purus magna";

class Services extends Component {

  render() {
    return (
      <div className="service-container">
        <div className="service-header">OUR SERVICES</div>
        <ServiceBlock serviceTitle="Default website" serviceDescription={description} price={100} extraInfo={extraInfo}></ServiceBlock>
        <ServiceBlock serviceTitle="Webhosting" serviceDescription={description}></ServiceBlock>
        <ServiceBlock serviceTitle="Webhosting" serviceDescription={description}></ServiceBlock>
        <ServiceBlock serviceTitle="Webhosting" serviceDescription={description}></ServiceBlock>
      </div>
    );
  }
}

export default Services;
