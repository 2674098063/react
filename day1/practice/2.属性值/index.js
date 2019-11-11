(function () {
    var data = {
        name: 'yao',
        age: 18,
        id: 1,
        style: {
            fontSize: "50px",
            color: '#58bc58',
            backgroundColor: '#ccc'
        }
    };
    var template = (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement("p", null, "1.\u5C5E\u6027\u503C"),
            React.createElement("p", { "class": 'name_' + data.name, age: data.age, style: { fontSize: '50px', color: '#58bc58' } }, 'name:' + data.name),
            React.createElement("p", { style: { fontSize: '50px', backgroundColor: '#ccc' } }, 'name:' + data.age),
            React.createElement("p", null, 'name:' + data.id))));
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
