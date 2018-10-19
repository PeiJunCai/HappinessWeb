import React from 'react';
import { connect } from 'dva';
import styles from './Search.css';

import {
  Layout,
  Row,
  Col,
  Button,
} from 'antd';

class Search extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.dispatch = props.dispatch;

    this.state = {
    };
  }

  render() {
    const { } = this.props;

    return (
      <div></div>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(Search);
