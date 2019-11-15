import React, { Component } from "react";
import axios from 'axios';
import './panel.css'
import store from '../../stores'
export default class Header extends Component {
    constructor(props) {
        super(props)

        if (!window.sessionStorage.getItem('news')) {
            this.loadNews()
        } else {
            let news = JSON.parse(window.sessionStorage.getItem('news'))
            // console.log(news)
            this.state = {
                news: news,
                newsNumber: 0,
            }
        }

    }
    state = {
        news: [],
        newsNumber: 0,
        searchValue: ''
    }
    loadNews() {
        axios.get('https://cnodejs.org/api/v1/topics').then(data => {
            this.setState({
                news: data.data.data,
                newsNumber: data.data.data.length
            })
            window.sessionStorage.setItem('news', JSON.stringify(data.data.data))
        })
    }
    lazyLoad() {
        axios.get('https://cnodejs.org/api/v1/topics').then(data => {
            let arr = this.state.news
            let newNews = data.data.data
            arr = [...arr, ...newNews]
            this.setState({
                news: arr,
                newsNumber: arr.length
            })
            window.sessionStorage.setItem('news', JSON.stringify(arr))
            this.newApply(newNews)
        })
    }
    newApply(news) {
        store.subscribe(() => {
            this.setState({ searchValue: store.getState().searchValue })
        })
        let arr = news.map((item, index) => {
            return (
                <a key={index} className="weui-media-box weui-media-box_appmsg">
                    <div className="weui-media-box__hd">
                        <img className="weui-media-box__thumb" src={item.author.avatar_url} alt="" />
                    </div>
                    <div className="weui-media-box__bd">
                        <h4 className="weui-media-box__title">{item.title}</h4>
                        <p className="weui-media-box__desc">{item.author.loginname}</p>
                    </div>
                </a>
            )
        });
        return arr;
    }
    render() {
        return (
            <div className="weui-panel weui-panel_access">
                <div className="weui-panel__hd" style={{
                    display: this.state.news.length ? 'none' : 'block'
                }}>
                    <div className="weui-loadmore">
                        <i className="weui-loading"></i>
                        <span className="weui-loadmore__tips">正在加载</span>
                    </div>
                </div>
                <div className="weui-panel__bd">
                    {this.newApply(this.state.news)}
                </div>
                <div className="weui-panel__ft">
                    <a className="weui-cell weui-cell_access weui-cell_link">
                        <div className="weui-cell__bd" onClick={this.lazyLoad.bind(this)}>查看更多</div>
                        <span className="weui-cell__ft"></span>
                    </a>
                </div>
            </div>
        )
    }
}
