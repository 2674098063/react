var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            news: [],
            newsNumber: 0
        };
        _this.getNews();
        return _this;
    }
    Panel.prototype.getNews = function () {
        var _this = this;
        axios.get('https://cnodejs.org/api/v1/topics').then(function (data) {
            _this.setState({
                news: data.data.data,
                newsNumber: data.data.data.length
            });
        });
    };
    Panel.prototype.lazyLoad = function () {
        var _this = this;
        axios.get('https://cnodejs.org/api/v1/topics').then(function (data) {
            var arr = _this.state.news;
            var newNews = data.data.data;
            arr = __spreadArrays(arr, newNews);
            _this.setState({
                news: arr,
                newsNumber: arr.length
            });
            _this.newApply(newNews);
            // console.log(this.state.news)
        });
    };
    Panel.prototype.newApply = function (news) {
        var arr = news.map(function (item, index) {
            return (React.createElement("a", { key: index, className: "weui-media-box weui-media-box_appmsg" },
                React.createElement("div", { className: "weui-media-box__hd" },
                    React.createElement("img", { className: "weui-media-box__thumb", src: item.author.avatar_url, alt: "" })),
                React.createElement("div", { className: "weui-media-box__bd" },
                    React.createElement("h4", { className: "weui-media-box__title" }, item.title),
                    React.createElement("p", { className: "weui-media-box__desc" }, item.author.loginname))));
        });
        return arr;
    };
    Panel.prototype.render = function () {
        return (React.createElement("div", { className: "weui-panel weui-panel_access" },
            React.createElement("div", { className: "weui-panel__hd", style: {
                    display: this.state.news.length ? 'none' : 'block'
                } },
                React.createElement("div", { className: "weui-loadmore" },
                    React.createElement("i", { className: "weui-loading" }),
                    React.createElement("span", { className: "weui-loadmore__tips" }, "\u6B63\u5728\u52A0\u8F7D"))),
            React.createElement("div", { className: "weui-panel__bd" }, this.newApply(this.state.news)),
            React.createElement("div", { className: "weui-panel__ft" },
                React.createElement("a", { className: "weui-cell weui-cell_access weui-cell_link" },
                    React.createElement("div", { className: "weui-cell__bd", onClick: this.lazyLoad.bind(this) }, "\u67E5\u770B\u66F4\u591A"),
                    React.createElement("span", { className: "weui-cell__ft" })))));
    };
    return Panel;
}(React.Component));
