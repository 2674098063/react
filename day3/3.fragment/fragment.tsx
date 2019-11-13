
class List extends React.Component {
    render() {
        return (
            <React.Fragment>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </React.Fragment>
        )
    }
}
class List2 extends React.Component {
    render() {
        return (
            <>
                <li>a</li>
                <li>b</li>
                <li>c</li>
            </>
        )
    }
}


const template = (<ul>
    <List />
    <List2 />
</ul>)
const el = document.querySelector('#demo')
ReactDOM.render(template, el)