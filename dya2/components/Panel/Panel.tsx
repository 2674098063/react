class Panel extends React.Component {
    constructor(props) {
        super(props)
        this.getNews()
    }
    state = {
        news: [],
        newsNumber: 0
    }
    getNews() {
        axios.get('https://cnodejs.org/api/v1/topics').then(data => {
            this.setState({
                news: data.data.data,
                newsNumber: data.data.data.length
            })
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
            this.newApply(newNews)
            // console.log(this.state.news)
        })
    }
    newApply(news) {
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
                    {/* <a className="weui-media-box weui-media-box_appmsg">
                        <div className="weui-media-box__hd">
                            <img className="weui-media-box__thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==" alt="" />
                        </div>
                        <div className="weui-media-box__bd">
                            <h4 className="weui-media-box__title">标题一</h4>
                            <p className="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                        </div>
                    </a> */}
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