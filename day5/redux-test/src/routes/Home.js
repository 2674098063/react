import React from 'react'
import Header from '../components/Header/Header'
import Panel from '../components/Panel/Panel'
import Search from '../components/Search/Search'
import Tabbar from '../components/Tabbar/Tabbar'
export default class Home extends React.Component {
    state = {
        istrue: true
    }
    render() {
        return (
            <div>
                <Header />
                <Search />
                <Panel />
                <Tabbar />
            </div>
        )
    }
}