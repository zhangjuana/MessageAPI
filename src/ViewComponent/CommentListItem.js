import React, { Component } from 'react'

import moment from 'moment';

import './HomeListItem.css'

import { 
    WingBlank, 
    WhiteSpace ,
    Card,
} from 'antd-mobile';

export default class HomeListItem extends Component {
  render() {

    return (
        <div>
            <WingBlank>
                <WhiteSpace/>
                <Card>
                    <Card.Header
                        title={this.props.message_user.username}
                        extra={moment(this.props.createdAt).format('YYYY-MM-DD HH:mm')}
                    />
                    <Card.Body>
                        <span id='content'>
                            {this.props.content}
                        </span>
                    </Card.Body>
                </Card>
            </WingBlank>
        </div>
    )
  }
}
