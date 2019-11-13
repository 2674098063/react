const ThemeContext = React.createContext('light');
class App extends React.Component {
    render() {
        return (
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
        )
    }
}
class Toolbar extends React.Component {
    render() {
        return (
            <>
                <ThemedButton />
            </>
        )
    }
}

class ThemedButton extends React.Component {
    static contextType = ThemeContext
    render() {
        return (
            <button theme={this.context}>按钮</button>
        )
    }
}
const template = (<ul>
    <App />

</ul>)
const el = document.querySelector('#demo')
ReactDOM.render(template, el)