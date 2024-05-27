import React, { Component } from "react";
import logo from '../../../assets/images/SahosoftMallBachend-logo.png';
import UserPanel from "./user_panel";
import { menuitems } from '../../../_constants/menu';
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            mainMenu: []
        }
    }

    setNavActive(item) {
        menuitems = menuitems.map(menuitem => {
            if (menuitem !== item) {
                menuitem.active = false;
            }
            return menuitem;
        });
        item.active = !item.active;
        this.setState({ mainMenu: menuitems });
    }

    componentDidMount() {
        this.setState({mainMenu: menuitems });
    }

    render() {
        const mainMenu = this.state.mainMenu.map((menuitem, i) => {
            return (
                <li key={i} className={`${menuitem.active ? 'active' : ''}`}>
                    {
                        menuitem.type === 'sub' ? (
                            <a className="sidebar-header" onClick={() => this.setNavActive(menuitem)}>
                                <menuitem.icon />
                                <span>{menuitem.title}</span>
                                <i className="fa fa-angle-right pull-right"></i>
                                <ul className="sidebar-submenu">
                                    {menuitem.children.map((submenu, j) => (
                                        <li key={j}>
                                            <Link to={submenu.path}>
                                                <span>{submenu.title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </a>
                        ) : (
                            <Link to={menuitem.path} className={`sidebar-header ${menuitem.active ? 'active' : ''}`}
                                onClick={() => this.setNavActive(menuitem)}>

                                <menuitem.icon />
                                <span>{menuitem.title}</span>

                            </Link>
                        )
                    }
                </li>
            );
        });

        return (
            <div className="page-sidebar">
                <div className="main-header-left d-none d-lg-block">
                    <div className="logo-wrapper">
                        <img className="blur-up lazyloaded" alt="sahosoft logo" src={logo} />
                    </div>
                </div>
                <div className="sidebar custom-scrollbar">
                    <div>
                        <UserPanel />
                    </div>

                    <ul className="sidebar-menu">
                        {mainMenu}
                    </ul>
                </div>
            </div>
        );
    }
}
