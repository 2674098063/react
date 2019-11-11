(function () {
    var Vif = function () {
        var num = 3;
        return (React.createElement("div", null,
            React.createElement("p", { style: {
                    display: num > 7 ? 'block' : 'none'
                } }, "\u9690\u85CF"),
            React.createElement("p", { style: {
                    display: num < 5 ? 'bloc' : 'none'
                } }, "\u663E\u793A")));
    };
    var template = (React.createElement("div", null,
        React.createElement(Vif, null)));
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
