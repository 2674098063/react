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
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            inputValue: ''
        };
        return _this;
    }
    Header.prototype.getInputValue = function (e) {
        this.setState({
            inputValue: e.target.value
        });
    };
    Header.prototype.shouldComponentUpdate = function () {
        //拦截过滤，当不满足条件时，忽略虚拟dom对真实dom的操作
        if (this.state.inputValue.length > 10) {
            return false;
        }
        else {
            return true;
        }
    };
    Header.prototype.render = function () {
        return (React.createElement("header", null,
            React.createElement("p", null, this.state.inputValue),
            React.createElement("input", { type: "text", onChange: this.getInputValue.bind(this), value: this.state.inputValue })));
    };
    return Header;
}(React.Component));
var template = (React.createElement("div", null,
    React.createElement(Header, null)));
var el = document.querySelector("#demo");
ReactDOM.render(template, el);
