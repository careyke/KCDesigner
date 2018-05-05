/**
 * 设计器容器
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ContainerTop, ContainerBottom } from './components/privateComponents';
import DesignerContainerStyle from './DesignerContainer.less';

class DesignerContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    static childContextTypes={
        controls:PropTypes.object
    }

    getChildContext(){
        return {
            controls:this.props.controls
        }
    }

    render() {
        return (
            <div className={DesignerContainerStyle['container']}>
                <ContainerTop></ContainerTop>
                <ContainerBottom></ContainerBottom>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        controls:state.controls
    }
}

export default connect(mapStateToProps)(DesignerContainer);