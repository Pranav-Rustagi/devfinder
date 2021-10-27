const SearchBar = (props) => {
    return (
        <div className="search-bar">
            <input
                type="search"
                placeholder="Search Github username..."
                onChange={(event) => {props.setSearchQuery(event.target.value)}}
            />
            <button
                type="button"
                onClick={() => { 
                    if(props.searchQuery.length)
                        props.setMakeSearch(true);
                }}
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar;