(() => {
    const template = (
        <div>
            {(() => {
                return <p>yao</p>
            })()}
        </div>)

    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})()