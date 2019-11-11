(function () {
    var data = {
        name: 'yao',
        age: 18,
        id: 1
    };
    var template = (React.createElement("div", null,
        React.createElement("p", null, "1.\u4E09\u5143\u8868\u8FBE\u5F0F"),
        !0 ? data.name : '假的',
        React.createElement("p", null, "2.\u4E8C\u5143\u8868\u8FBE\u5F0F"),
        data.age + '岁',
        React.createElement("p", null, "3.\u4E00\u5143\u8868\u8FBE\u5F0F"),
        data.id));
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
