import React, { Component } from 'react';
import { styles } from '../styles/services.scss'

var moreInfoSection;

class Services extends Component {

  constructor() {
    super();
    this.state = {
      showMoreInfo: false,
      infoText: "More info"
    }
    this.toggleSelection = this.toggleSelection.bind(this);
    //moreInfoSection = <h1>{this.props.price}</h1>
  }

  createInfoSection(props) {
    moreInfoSection =
      <div>
        <br></br>
        <p>{props.extraInfo}</p>
        <div>Price: {props.price}</div>
      </div>
  }

  toggleSelection() {
    this.setState({ showMoreInfo: !this.state.showMoreInfo });
    if (!this.state.showMoreInfo) {
      this.setState({ infoText: "Less info" });
      if (!moreInfoSection)
        this.createInfoSection(this.props);
    } else
      this.setState({ infoText: "More info" })


  }

  render() {
    return (
      <div className={"serice-block-container " + (this.state.showMoreInfo ? 'large-service-block' : '')}>
        <div className={"service-block"}>
        <h3>{this.props.serviceTitle}</h3>
        <p>{this.props.serviceDescription}</p>
        {this.state.showMoreInfo ? moreInfoSection : null}
        <button type="input" onClick={this.toggleSelection}>{this.state.infoText}</button>
        </div>
      </div>
    );
  }
}

export default Services;
