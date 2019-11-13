
class Item extends React.Component {
    render() {
        return (
            <div>item</div>
        )
    }
}

const HOC = (props) => {
    return (Compnent) => {
        return () => {
            return <Compnent {...props} />
        }
    }
}

const HOCItem = HOC({
    name: 'yao'
})(class Item extends React.Component {
    render() {
        return (
            <div name={this.props.name}>item</div>
        )
    }
})


const template = (<div>
    <Item />
    <HOCItem />

</div>)
const el = document.querySelector('#demo')
ReactDOM.render(template, el)