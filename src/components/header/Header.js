import SearchBar from './SearchBar';
import Announcement from './Announcement';

// https://tailwindcomponents.com/component/header
function Header() {
    return (
        <div>
            <Announcement />
            <div className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <SearchBar></SearchBar>
                </div>
            </div>
        </div>
    );
}

export default Header;
