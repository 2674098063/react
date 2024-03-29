
class Header extends React.Component {

    componentWillMount() {
        window.a = 1
        window.atimer = window.setInterval(() => {
            console.log('定时器')
        }, 1000)
        window.onscroll = () => {
            console.log('滚动')
        }
        console.log('--------componentWillMount---------')
    }
    render() {
        return (
            <div>
                <p>111</p>

            </div>
        )
    }
    // 组件销毁的时候触发
    componentWillUnmount() {
        // 带走定时器和全局变量
        window.onscroll = null
        delete window.a;
        clearInterval(window.atimer);
        console.log('--------componentWillUnmount---------')
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        bool: true
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        bool: !this.state.bool
                    })
                }}>ok</button>
                {this.state.bool ? this.props.component : ''}
            </div>
        )
    }
}

const template = <div style={{
    height: '2000px'
}}>
    <App component={<Header />} />
</div>
const el = document.querySelector('#demo')
ReactDOM.render(template, el)