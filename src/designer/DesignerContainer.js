/**
 * 设计器容器
 */

import React from 'react';
import { connect } from 'react-redux';
import { ContainerTop, ContainerBottom } from './components/privateComponents';
import DesignerContainerStyle from './DesignerContainer.less';

class DesignerContainer extends React.Component {
    constructor(props) {
        super(props);
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
        ...state
    }
}

export default connect(mapStateToProps)(DesignerContainer);