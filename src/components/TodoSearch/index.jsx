import React, {useContext} from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {    
    const {searchValue, setSearchValue} = useContext(TodoContext);

    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <input
            className="TodoSearch"
            placeholder='search task'
            value={searchValue}
            onChange={onSearchValueChange}
        />
    )
}

export default TodoSearch;