(() => {
    const Vif = () => {
        let num: number = 3
        if (num > 5) {
            return 1
        } else {
            return 0
        }
    }
    const template = (
        <div>
            {(() => {
                let num: number = 6
                if (num > 5) {
                    return 1
                } else {
                    return 0
                }
            })()}
            <br />
            {Vif()}
            <br />
            <Vif />
        </div>)

    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})()