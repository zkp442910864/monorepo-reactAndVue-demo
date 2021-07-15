import React from 'react';
import {Layout, Modal, message} from 'antd';
import {connect} from 'dva';
import moment from 'moment';
import DocumentTitle from 'react-document-title';
import * as utils from '@mono/common-utils';
import 'antd/dist/antd.css';

// console.log(utils);
window.utils = utils;
utils.utilsConfig.moment = moment;
utils.utilsConfig.modal = Modal;
utils.utilsConfig.message = {
    1: (msg) => message.success(msg),
    2: (msg) => message.warning(msg),
    3: (msg) => message.error(msg),
};

utils.ajaxConfig.domain.apiUrl = '';
utils.ajaxConfig.handleUnauthorized = (info) => {
    console.log(info);
};
utils.ajaxConfig.interceptParams = () => ({});
utils.ajaxConfig.interceptHeaders = () => ({});
utils.ajaxConfig.loadBefore = () => ({});
utils.ajaxConfig.loadAfter = () => ({});

const {Content} = Layout;


class BasicLayout extends React.PureComponent {

    render () {

        const {
            children,
        } = this.props;

        return (
            <React.Fragment>
                <DocumentTitle title="组件">
                    <Content >{children}</Content>
                </DocumentTitle>
            </React.Fragment>
        );
    }
}

export default connect((store) => store)(BasicLayout);
