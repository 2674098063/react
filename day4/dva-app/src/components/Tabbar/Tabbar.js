import React from 'react'
import './Tabbar.css'
import { Link } from 'dva/router';
import IconTabbar from '../../assets/images/icon_tabbar.png'
export default class Tabbar extends React.Component {
    render() {
        return (
            <footer className="weui-tabbar" id="footer">
                <Link to="/home" className="weui-tabbar__item weui-bar__item_on">
                    <span style={{
                        display: 'inline-block',
                        position: 'relative'
                    }}>
                        <img src={IconTabbar} alt="" className="weui-tabbar__icon" />
                        <span className="weui-badge" style={{
                            position: 'absolute',
                            top: '-2px',
                            right: '-13px'
                        }}>8</span>
                    </span>
                    <p className="weui-tabbar__label">微信</p>
                </Link>
                <Link to="/contact" className="weui-tabbar__item">
                    <img src={IconTabbar} alt="" className="weui-tabbar__icon" />
                    <p className="weui-tabbar__label">通讯录</p>
                </Link>
                <a className="weui-tabbar__item">
                    <span style={{
                        display: 'inline-block',
                        position: 'relative'
                    }}>
                        <img src={IconTabbar} alt="" className="weui-tabbar__icon" />
                        <span className="weui-badge weui-badge_dot" style={{
                            position: 'absolute', top: 0,
                            right: '-6px'
                        }}></span>
                    </span>
                    <p className="weui-tabbar__label">发现</p>
                </a>
                <a className="weui-tabbar__item">
                    <img src={IconTabbar} alt="" className="weui-tabbar__icon" />
                    <p className="weui-tabbar__label">我</p>
                </a>
            </footer>
        )
    }
}