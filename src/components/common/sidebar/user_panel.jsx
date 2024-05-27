import React,{Component} from "react";
import userImg from '../../../assets/images/user.png'

export default class UserPanel extends Component{
    render(){
        return(
            <div className="sidebar-user text-center">
                <div><img className="img-60 rounded-circle lazyloaded blur-up" alt="User Image" src={userImg}/>
                </div>
                <h6 className="mt-3 f-14">Ram</h6>
                <p>rambabu64555@gmail.com</p>

            </div>
        )
    }
}