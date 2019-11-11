(() => {
    interface Data {
        name: string,
        num: number,
        isTrue: boolean,

    }
    const data: Data = {
        name: 'yao',
        num: 50,
        isTrue: true,

    }
    const methdos = {
        test() {
            console.log(1)
        },
        testTwo() {
            return 1
        }
    }
    const template = (
        <div>
            <button onClick={methdos.test}>点击事件</button>
            <p>{methdos.testTwo()}</p>
        </div>
    )

    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})()