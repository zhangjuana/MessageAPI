import React, { Component } from 'react'
import {
    Toast,
    NavBar,
    ListView,
    PullToRefresh
} from 'antd-mobile';
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class HomeScreen extends Component {
    render() {
        return (
            <div>
                <NavBar mode="dark"
                    leftContent={[
                    <span>
                        退出
                    </span>]}
                ></NavBar>
            </div>

        )
    }
}