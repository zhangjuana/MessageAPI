import React, { Component } from 'react'
import { 
    Button,
    Toast,
    NavBar,
    WingBlank, 
    WhiteSpace ,
    List,
    InputItem,
    Icon,
    TextareaItem,
    Modal,
    ImagePicker
} from 'antd-mobile';

import userManager from '../DataServer/UserManager'
import messageManager from '../DataServer/MessageManager';

export default class CreateMessageScreen extends Component {
    componentDidMount(){
        if(userManager.isLogin() === false){
            this.props.history.replace('/');
        }
    }

    constructor(props) {
      super(props)
    
      this.state = {
         title:'',
         content:'',
         files:[]
      }
    }
  render() {
    return (
      <div>
      <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={() => {this.props.history.goBack()}}
        >发消息</NavBar>
        <WhiteSpace/>
        <List>
            <InputItem
            type={'text'}
            vale={this.state.title}
            onChange={(title)=>{this.setState({title})}}
            placeholder={'请输入事项标题'}>
            标题
            </InputItem>
            <TextareaItem
            type={'text'}
                value={this.state.content}
                onChange={(content)=>{this.setState({content})}}
                placeholder={'请输入内容'}
                autoHeight={true}/>
        </List>
        <WhiteSpace/>
        <WingBlank>
            <ImagePicker
                files={this.state.files}
                onChange={(files)=>{this.setState({files})}}
                selectable={this.state.files.length <= 9}
            />
            <WhiteSpace/>
            <Button
                type={'primary'}
                onClick={this.submitMessage}
            >
                提交
            </Button>
        </WingBlank>
      </div>
    )
  }

    submitMessage = async()=>{
        Toast.loading('内容上传中...',0);
        const resutl = await messageManager.postMessage(this.state.title,this.state.content,this.state.files);
        Toast.hide();
        if(resutl.success === false){
            Toast.fail(resutl.errorMessage);
            return;
        }
        Modal.alert('提交成功','点击确认键返回',[{
            text:'确认',
            onPress:()=>{this.props.history.goBack()}
        }])
    }
}
