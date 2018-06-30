import React, { Component } from 'react'

import { 
    Toast,
    NavBar,
    ListView,
    PullToRefresh
} from 'antd-mobile';

import messageManager from '../DataServer/MessageManager';
import userManager from '../DataServer/UserManager';

import HomeListItem from '../ViewComponent/HomeListItem';


export default class HomeScreen extends Component {


    async componentDidMount(){

        if(userManager.isLogin() === false){
            this.props.history.replace('/');
            return;
        }

        const result = await messageManager.allMessages()
        if(result.success === false){
            Toast.fail(result.errorMessage);
            if(result.errorCode === 10004){
                userManager.logout();
                this.props.history.replace('/');
            }
            return;
        }
        this.setState((preState)=>{
            return{
                dataSource:preState.dataSource.cloneWithRows(result.data)
            }   
        })
    }

    constructor(props) {
        super(props)

        const dataSource = new ListView.DataSource({
            rowHasChanged:(row1, row2) => row1 !== row2,
        })

        this.state = {
            dataSource,
            refreshing:false
        }
    }

    onRefresh = async()=>{
        try {
            this.setState({refreshing:true});
            const result = await messageManager.allMessages();
            this.setState({refreshing:false});
            if(result.success === false){
                Toast.fail(result.errorMessage);
                if(result.errorCode === 10004){
                    userManager.logout();
                    this.props.history.replace('/');
                }
                return;
            }
            this.setState((preState)=>{
                return{
                    dataSource:preState.dataSource.cloneWithRows(result.data),
                }   
            })
        } catch (error) {
            Toast.fail(`${error}`);
            this.setState({refreshing:false});
        }

    }
    
    
  render() {
    return (
      <div>
        <NavBar
            mode="dark"
            leftContent={[
                <span
                    key={1}
                    onClick={()=>{
                        this.props.history.replace('/');
                        userManager.logout();
                    }}
                >退出</span>
            ]}
            rightContent={[
                <span
                    key={2}
                    onClick={()=>{
                        this.props.history.push('/CreateMessageScreen');
                    }}
                >发消息</span>
            ]}
        >留言板</NavBar>
        <ListView
            useBodyScroll={true}
            dataSource={this.state.dataSource}
            pullToRefresh={
                <PullToRefresh
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                />
            }
            renderRow={this.renderRow}
        />
      </div>
    )
  }

    renderRow = (message)=>{
        return (
            <HomeListItem 
                {...message}
                onItemClick={()=>{
                    this.props.history.push('/CommentScreen/'+message.id)
                }} 
            />
        )
    }
}

// import React, { Component } from 'react'

//  import {
//      Toast,
//      NavBar,
//      ListView,
//     PullToRefresh
//  }from 'antd-mobile';
//  import userManager from '../DataServer/UserManager'
// export default class HomeScreen extends Component {
//   render() {
//     return (
//       <div>
//       <NavBar
//       mode="dark"
//                     leftContent={[
//                      <span>
//                          退出
//                   </span>]}
//                   rightContent={[
//                          <span
//                          key={2}
//                         onClick={()=>{
//                         this.props.history.push('/CreateMessageScreen');
//                          }}
//                          >发消息</span>
//                      ]}>留言板
//       </NavBar>
//       </div>
//     )
//   }
// }
