/**
 * 设计器容器
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ContainerTop, ContainerBottom } from './components/privateComponents';
import DesignerContainerStyle from './DesignerContainer.less';
import * as actionCreators from './actions/actionCreators';

class DesignerContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    //建立context，用来发布数据 -begin
    static childContextTypes={
        controls:PropTypes.object,
        ui:PropTypes.object,
        addControl:PropTypes.func,
        selectControls:PropTypes.func
    }

    getChildContext(){
        return {
            controls:this.props.controls,
            ui:this.props.ui,
            addControl:this.props.addControl,
            selectControls:this.props.selectControls
        }
    }
    //建立context，用来发布数据 -end

    render() {
        console.log(this.props)
        return (
            <div className={DesignerContainerStyle['container']}>
                <ContainerTop></ContainerTop>
                <ContainerBottom 
                    ui={this.props.ui}
                    addControl={this.props.addControl}
                    selectControls={this.props.selectControls}
                ></ContainerBottom>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        controls:state.controls,
        ui:state.ui
    }
}

export default connect(mapStateToProps,actionCreators)(DesignerContainer);