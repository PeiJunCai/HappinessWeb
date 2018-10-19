import React from 'react';
import { connect } from 'dva';
import GoogleMapReact from "google-map-react";  //  Google Map React套件
// import GoogleMapLoader from "react-google-maps-loader";

import {
  Layout,
  Row,
  Col,
  Button,
} from 'antd';

class GoogleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 25.0481577,   //  緯度
      lng: 121.5172357,  //  經度
    },
    zoom: 16  //  地圖縮放比例
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

export default connect(mapStateToProps)(GoogleMap);
