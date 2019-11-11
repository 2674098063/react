(function () {
    var TestOne = function () {
        var data = {
            title: 'hello world'
        };
        var methdos = {
            according: function () {
                console.log(1);
            },
            eCho: function () {
                console.log('echo');
                return 'echo';
            }
        };
        return (React.createElement("div", null,
            React.createElement("button", { onClick: methdos.according }, "\u70B9\u6211"),
            React.createElement("p", null, data.title),
            React.createElement("p", { onClick: methdos.eCho }, methdos.eCho())));
    };
    var template = (React.createElement("div", null,
        TestOne(),
        TestOne(),
        React.createElement(TestOne, null),
        React.createElement(TestOne, null)));
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
