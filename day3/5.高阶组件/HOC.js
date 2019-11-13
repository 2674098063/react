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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Item.prototype.render = function () {
        return (React.createElement("div", null, "item"));
    };
    return Item;
}(React.Component));
var HOC = function (props) {
    return function (Compnent) {
        return function () {
            return React.createElement(Compnent, __assign({}, props));
        };
    };
};
var HOCItem = HOC({
    name: 'yao'
})(/** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Item.prototype.render = function () {
        return (React.createElement("div", { name: this.props.name }, "item"));
    };
    return Item;
}(React.Component)));
var template = (React.createElement("div", null,
    React.createElement(Item, null),
    React.createElement(HOCItem, null)));
var el = document.querySelector('#demo');
ReactDOM.render(template, el);
