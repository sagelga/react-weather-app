import React from 'react'
import { useContext } from 'react'

const MyContext = React.createContext()

function Searchbox({ getSearchQuery }) {
    const { inputData, setInputData } = useContext(MyContext)

    const handleInputChange = (event) => {
        const newValue = event.target.value
        getSearchQuery(newValue)
    }

    return (
        <div className="searchbox">
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    className="searchbox-input"
                    onChange={handleInputChange}
                ></input>
            </form>
        </div>
    )
}
export default Searchbox
