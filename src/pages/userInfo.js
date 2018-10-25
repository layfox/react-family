import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from 'myRedux/actions/userInfo';
import './scss/userInfo.scss';

class UserInfo extends Component {
    render() {
        const { isLoading, errorMsg, userInfo } = this.props.userInfo;
        return (
            <div className="user-info">
                {
                    isLoading ? '正在请求中...':
                        (
                            errorMsg ? errorMsg :
                                <div>
                                    <p>用户信息:</p>
                                    <p>用户名：{userInfo.name}</p>
                                    <p>介绍： {userInfo.intro}</p>
                                </div>
                        )
                }
                <button onClick={this.props.getUserInfo}>换取用户信息</button>
            </div>
        )
    }
}

export default connect((state) => ({userInfo: state.userInfo}), { getUserInfo })(UserInfo);