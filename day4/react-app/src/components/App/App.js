import React from 'react';
import Header from '../Header/Header'
import Panel from '../Panel/Panel'
import Search from '../Search/Search'
import Tabbar from '../Tabbar/Tabbar'

function App() {
    return (
        <div className="App" >
            <Header />
            <Search />
            <Panel />
            <Tabbar />
        </div>
    );
}

export default App;