(() => {
    interface Data {
        name: string,
        age: number,
        id: number,
        style: {
            fontSize: string,
            color: string,
            backgroundColor: string
        }
    }
    const data: Data = {
        name: 'yao',
        age: 18,
        id: 1,
        style: {
            fontSize: `50px`,
            color: '#58bc58',
            backgroundColor: '#ccc'
        }
    }
    const template = (
        <div>
            <div>
                <p>1.属性值</p>
                <p class={'name_' + data.name} age={data.age} style={{ fontSize: '50px', color: '#58bc58' }}>{'name:' + data.name}</p>
                <p style={{ fontSize: '50px', backgroundColor: '#ccc' }}>{'name:' + data.age}</p>
                <p>{'name:' + data.id}</p>
            </div>
        </div>
    )
    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})()