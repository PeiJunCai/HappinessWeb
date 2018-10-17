IndexPage

import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
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
      <div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    
  };
}

export default connect(mapStateToProps)(IndexPage);
