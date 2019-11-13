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
var ThemeContext = React.createContext('light');
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(ThemeContext.Provider, { value: "dark" },
            React.createElement(Toolbar, null)));
    };
    return App;
}(React.Component));
var Toolbar = /** @class */ (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toolbar.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(ThemedButton, null)));
    };
    return Toolbar;
}(React.Component));
var ThemedButton = /** @class */ (function (_super) {
    __extends(ThemedButton, _super);
    function ThemedButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemedButton.prototype.render = function () {
        return (React.createElement("button", { theme: this.context }, "\u6309\u94AE"));
    };
    ThemedButton.contextType = ThemeContext;
    return ThemedButton;
}(React.Component));
var template = (React.createElement("ul", null,
    React.createElement(App, null)));
var el = document.querySelector('#demo');
ReactDOM.render(template, el);
