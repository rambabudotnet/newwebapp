import { Component } from "react";
import userImg from '../../../assets/images/user.png';
import {User, LogOut} from 'react-feather';
import { Link } from "react-router-dom";

export default class UserMenu extends Component {
    render() {
        return (
            <div className="nav-right col"  >
                <ul className="nav-menu open">
                    <li>
                        <ul>
                            <li className="onhover-dropdown">
                                <div className="align-items-center">
                                    <img className="align-self-center pull-right img-50 round-circle blur-up lazyloaded"
                                        alt="header-user"
                                        src={userImg} />
                                    <div className="dotted-animation"><span className="animatecircle"></span><span className="main-circle"></span>
                                    </div>
                                    <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
                                        <li><Link to="/settings/profile"><User/> Edit profile</Link></li>
                                        <li><Link to="/auth/login"><LogOut/>LogOut</Link></li>
                                    </ul>
                                </div>

                            </li>
                        </ul>
                    </li>

                </ul>

            </div>
        )
    }
}
