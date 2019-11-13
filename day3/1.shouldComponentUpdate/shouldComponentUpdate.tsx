class Header extends React.Component {
    state = {
        inputValue: ''
    }
    getInputValue(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    shouldComponentUpdate() {
        //拦截过滤，当不满足条件时，忽略虚拟dom对真实dom的操作
        if (this.state.inputValue.length > 10) {
            return false
        } else {
            return true
        }
    }
    render() {
        return (
            <header>
                <p>{this.state.inputValue}</p>
                <input type="text" onChange={this.getInputValue.bind(this)} value={this.state.inputValue} />
            </header>
        )
    }
}

const template = (
    <div>
        <Header />
    </div>
)
const el = document.querySelector("#demo")
ReactDOM.render(template, el)