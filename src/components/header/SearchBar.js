function SearchBar() {
    return (
        <div className="search-bar">
            <img
                src="https://img.icons8.com/ios/50/000000/search--v1.png"
                alt="Search icon"
            />
            <input type="text" placeholder="Search for a city" />
            <button>Search</button>
        </div>
    );
}

export default SearchBar;
