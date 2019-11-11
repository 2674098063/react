(function () {
    var Vif = function () {
        var num = 3;
        if (num > 5) {
            return 1;
        }
        else {
            return 0;
        }
    };
    var template = (React.createElement("div", null,
        (function () {
            var num = 6;
            if (num > 5) {
                return 1;
            }
            else {
                return 0;
            }
        })(),
        React.createElement("br", null),
        Vif(),
        React.createElement("br", null),
        React.createElement(Vif, null)));
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
