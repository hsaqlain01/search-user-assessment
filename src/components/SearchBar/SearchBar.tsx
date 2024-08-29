import React, { useState } from "react";
import './SearchBar.css'
import { SearchBarProps } from "../../interfaces";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setQuery(value);
        onSearch(value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search users..."
                value={query}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchBar;
