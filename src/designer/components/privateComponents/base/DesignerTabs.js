/**
 * 设计器两边的tab控件
 */

import React from 'react';
import classnames from 'classnames';
import tabStyle from './DesignerTabs.less';

export class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
        this.renderChild = this.renderChild.bind(this);
        this.switchTab = this.switchTab.bind(this);
    }

    //切换页签
    switchTab(index) {
        this.setState({
            activeIndex: index
        })
    }

    renderChild() {
        let activeIndex = this.state.activeIndex;
        let children = React.Children.map(this.props.children, (child, index) => {
            if (child.props.type === 'title') {
                return React.cloneElement(child, { activeIndex: activeIndex, switchTab: this.switchTab });
            } else {
                return React.cloneElement(child, { activeIndex: activeIndex });
            }
        })
        return children;
    }

    render() {
        let children = this.renderChild();
        return (
            <div className={tabStyle['tabContainer']}>
                {children}
            </div>
        )
    }
}

export class TabTitle extends React.Component {
    constructor(props) {
        super(props);
        this.renderChild = this.renderChild.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index) {
        if (index !== this.props.activeIndex) {
            this.props.switchTab(index);
        }
    }

    renderChild() {
        let tities = this.props.titleData;
        let titleItems = tities.map((item, index) => {
            let titleClass = classnames({
                [tabStyle['titleItem']]: true,
                [tabStyle['activeTitleItem']]: this.props.activeIndex === index
            });
            return (
                <span key={index} className={titleClass} onClick={e => this.handleClick(index)} >{item}</span>
            )
        });
        return titleItems;
    }

    render() {
        let titleItems = this.renderChild();
        return (
            <div className={tabStyle['title']}>
                {titleItems}
            </div>
        )
    }
}

export class TabPanelContainer extends React.Component {
    constructor(props) {
        super(props);
        this.renderChild = this.renderChild.bind(this);
    }

    renderChild() {
        let activeIndex = this.props.activeIndex;
        let child;
        React.Children.forEach(this.props.children, (item, index) => {
            if (index === activeIndex) {
                child = item;
            }
        })
        return child;
    }

    render() {
        let child = this.renderChild();
        return (
            <div className={tabStyle['panelContainer']}>
                {child}
            </div>
        )
    }
}

export class TabPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let children = this.props.children;
        return (
            <div className={tabStyle['panel']}>
                {children}
            </div>
        )
    }
}