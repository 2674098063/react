(() => {
    interface teachersType {
        name: string,
        age: number
    }
    const teacchers: teachersType[] = [{
        name: 'yao',
        age: 18
    }, {
        name: 'jing',
        age: 17
    }, {
        name: 'lin',
        age: 19
    }]

    const arr = [<p><span>name:{teacchers[0].name}</span>-<span>age:{teacchers[0].age}</span></p>,
    <p><span>name:{teacchers[1].name}</span>-<span>age:{teacchers[1].age}</span></p>,
    <p><span>name:{teacchers[2].name}</span>-<span>age:{teacchers[2].age}</span></p>]

    const template = (
        <div>
            <ul>
                {(() => {
                    return teacchers.map((item, index) => {
                        return (<li key={index}>
                            <p>name:{item.name}</p>
                            <p>age:{item.age}</p>
                        </li>)
                    })
                })()}
            </ul>
            <div>
                {(() => {
                    return arr.map(item => {
                        return item
                    })
                })()}
            </div>
        </div>)

    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})()