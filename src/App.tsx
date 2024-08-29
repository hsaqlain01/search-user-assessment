import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import UserList from "./components/UserList/UserList";
import SearchBar from "./components/SearchBar/SearchBar";
import { FuseResult, User } from "./interfaces";
import useFetch from "./hooks/useFetch";

const App: React.FC = () => {
  const { data: users, error } = useFetch<User[]>("/v1/users"); // Fetch user data
  const [searchResults, setSearchResults] = useState<User[]>([]); // State to hold filtered users

  // Update search results whenever users data changes
  useEffect(() => {
    if (users) {
      setSearchResults(users);
    }
  }, [users]);

  // Search function using Fuse.js
  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();

    if (!query) {
      setSearchResults(users || []);
      return;
    }

    const fuse = new Fuse(users || [], {
      keys: ["first_name", "last_name", "vehicle"],
      threshold: 0.3,
      useExtendedSearch: true,
      ignoreLocation: true,
      shouldSort: true,
      includeScore: true
    });

    const results = fuse.search(lowerCaseQuery).map((result: FuseResult<User>) => result.item);
    console.log('result', results);
    setSearchResults(results);
  };

  return (
    <div className="App">
      <h1>User Search App</h1>
      {error && <p className="error">{error}</p>}
      <SearchBar onSearch={handleSearch} /> {/* Search input component */}
      <UserList users={searchResults} /> {/* Passing search results to UserList */}
    </div>
  );
};


export default App;
