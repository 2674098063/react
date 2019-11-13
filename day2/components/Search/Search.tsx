interface State {
    isFocus: boolean,
    searchValue: string
}
class Search extends React.Component {
    state: State = {
        isFocus: true,
        searchValue: ''
    }
    toggle() {
        this.setState({
            isFocus: !this.state.isFocus
        })
        this.refs.search.focus()
    }
    creaSeacrh() {
        this.setState({
            searchValue: ''
        })
        this.refs.search.focus()
    }
    setSearchValue(e) {
        this.setState({
            searchValue: e.target.value
        })
    }
    render() {
        let { isFocus } = this.state
        return (
            <div className={isFocus ? 'weui-search-bar' : 'weui-search-bar weui-search-bar_focusing'} id="searchBar">
                <form className="weui-search-bar__form">
                    <div className="weui-search-bar__box">
                        <i className="weui-icon-search"></i>
                        <input ref="search" onChange={this.setSearchValue.bind(this)} value={this.state.searchValue} type="search" className="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" />
                        <a className="weui-icon-clear" id="searchClear" onClick={this.creaSeacrh.bind(this)}></a>
                    </div>
                    <label onClick={this.toggle.bind(this)} className="weui-search-bar__label" id="searchText" style={{
                        transformOrigin: '0px 0px',
                        opacity: 1,
                        transform: ' scale(1, 1)'
                    }}>
                        <i className="weui-icon-search" ></i>
                        <span>搜索</span>
                    </label>
                </form>
                <a className="weui-search-bar__cancel-btn" id="searchCancel" onClick={this.toggle.bind(this)}>取消</a>
            </div>
        )
    }
}