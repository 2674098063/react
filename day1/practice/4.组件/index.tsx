(() => {
    const TestOne = () => {
        interface Data {
            title: string
        }
        const data: Data = {
            title: 'hello world'
        }
        const methdos = {
            according() {
                console.log(1)
            },
            eCho() {
                console.log('echo')
                return 'echo'
            }
        }
        return (<div>
            <button onClick={methdos.according}>点我</button>
            <p>{data.title}</p>
            <p onClick={methdos.eCho}>{methdos.eCho()}</p>
        </div>)
    }
    const template = (
        <div>
            {TestOne()}
            {TestOne()}
            <TestOne />
            <TestOne />
        </div>
    )

    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})()