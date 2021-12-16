import React from "react"

function Filter({search, setSearch}) {

    function handleSearch(event) {
        setSearch(event.target.value)
    }

    return (

        <div>
            <input
                type="text"
                name="search"
                placeholder="Search..."
                value={search}
                onChange={handleSearch}
            />
        </div>
    )

}

export default Filter