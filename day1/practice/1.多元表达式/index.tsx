(() => {
    interface Data {
        name: string,
        age: number,
        id: number
    }
    const data: Data = {
        name: 'yao',
        age: 18,
        id: 1
    }
    const template = (
        <div>
            <p>1.三元表达式</p>
            {!0 ? data.name : '假的'}
            <p>2.二元表达式</p>
            {data.age + '岁'}
            <p>3.一元表达式</p>
            {data.id}
        </div>
    )
    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})()