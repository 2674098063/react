(function () {
    var data = {
        name: 'yao',
        num: 50,
        isTrue: true
    };
    var methdos = {
        test: function () {
            console.log(1);
        },
        testTwo: function () {
            return 1;
        }
    };
    var template = (React.createElement("div", null,
        React.createElement("button", { onClick: methdos.test }, "\u70B9\u51FB\u4E8B\u4EF6"),
        React.createElement("p", null, methdos.testTwo())));
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
