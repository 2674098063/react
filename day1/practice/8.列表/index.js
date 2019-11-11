(function () {
    var teacchers = [{
            name: 'yao',
            age: 18
        }, {
            name: 'jing',
            age: 17
        }, {
            name: 'lin',
            age: 19
        }];
    var arr = [React.createElement("p", null,
            React.createElement("span", null,
                "name:",
                teacchers[0].name),
            "-",
            React.createElement("span", null,
                "age:",
                teacchers[0].age)),
        React.createElement("p", null,
            React.createElement("span", null,
                "name:",
                teacchers[1].name),
            "-",
            React.createElement("span", null,
                "age:",
                teacchers[1].age)),
        React.createElement("p", null,
            React.createElement("span", null,
                "name:",
                teacchers[2].name),
            "-",
            React.createElement("span", null,
                "age:",
                teacchers[2].age))];
    var template = (React.createElement("div", null,
        React.createElement("ul", null, (function () {
            return teacchers.map(function (item, index) {
                return (React.createElement("li", { key: index },
                    React.createElement("p", null,
                        "name:",
                        item.name),
                    React.createElement("p", null,
                        "age:",
                        item.age)));
            });
        })()),
        React.createElement("div", null, (function () {
            return arr.map(function (item) {
                return item;
            });
        })())));
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
