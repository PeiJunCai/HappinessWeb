import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import GoogleMapReact from "google-map-react";  //  Google Map React套件
// import GoogleMapLoader from "react-google-maps-loader";

import {
  Layout,
  Row,
  Col,
  Button,
} from 'antd';

class IndexPage extends React.Component {
  static defaultProps = {
    center: {
      lat: 25.051845,   //  緯度
      lng: 121.5187274,  //  經度
    },
    zoom: 11
  };

  constructor(props, context) {
    super(props, context);

    this.dispatch = props.dispatch;

    this.state = {
    };
  }

  render() {
    const { } = this.props;

    return (
      <div style={{ height: '60vh', width: '65%' /* Google Map 顯示的大小 */}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyDFTKbcSXEN22pUx3zfaabEOGyy7oOZtmI' /* Google Map API 金鑰 */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(IndexPage);
