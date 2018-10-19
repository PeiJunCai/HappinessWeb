import React from 'react';
import { connect } from 'dva';
import GoogleMap from '../components/GoogleMap';

import {
  Layout,
  Row,
  Col,
  Button,
} from 'antd';

class IndexPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.dispatch = props.dispatch;

    this.state = {
    };
  }

  render() {
    const { } = this.props;

    return (
      <GoogleMap />
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(IndexPage);
