import React from 'react';
import { connect } from 'dva';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
        };
    }

    render() {
        const { user } = this.props;

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

export default connect(mapStateToProps)(Index);
