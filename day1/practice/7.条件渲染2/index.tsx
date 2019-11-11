(() => {
    const Vif = () => {
        let num: number = 3
        return (<div>
            <p style={{
                display: num > 7 ? 'block' : 'none'
            }}>隐藏</p>
            <p style={{
                display: num < 5 ? 'bloc' : 'none'
            }}>显示</p>
        </div>)
    }
    const template = (
        <div>
            <Vif />
        </div>)

    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})()