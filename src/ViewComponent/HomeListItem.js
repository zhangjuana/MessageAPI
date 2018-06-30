import React, { Component } from 'react'

import moment from 'moment';

import {
    imageBaseURL
} from '../DataServer/URLConfig';

import './HomeListItem.css'

import { 
    WingBlank, 
    WhiteSpace ,
    Card,
    Grid
} from 'antd-mobile';

export default class HomeListItem extends Component {
  render() {

    const images = this.props.images.map((image)=>{
        return {
            icon:imageBaseURL+image.url
        }
    })

    return (
        <div
            onClick={(e)=>{
                if(this.props.onItemClick){
                    e.stopPropagation();
                    this.props.onItemClick();
                }   
            }}
        >
            <WingBlank>
                <WhiteSpace/>
                <Card>
                    <Card.Header
                        title={this.props.title}
                        extra={moment(this.props.createdAt).format('YYYY-MM-DD HH:mm')}
                    />
                    <Card.Body>
                        <span id='content'>
                            {this.props.content}
                        </span>
                        <Grid
                            data={images}
                            columnNum={3}
                            hasLine={false}
                            renderItem={(image)=>{
                                return (
                                    <div style={{
                                        width: '88px',
                                        height: '88px',
                                        background: `url(${image.icon}) center center /  86px 86px no-repeat` }}
                                    />
                                )
                                
                            }}
                        />
                    </Card.Body>
                    <Card.Footer
                        content={'来自用户:'+this.props.message_user.username}
                    />
                </Card>
            </WingBlank>
        </div>
    )
  }
}