import React from "react";
import './UserList.css'
import { getInitials } from "../../utils";
import { UserListProps } from "../../interfaces";

const UserList: React.FC<UserListProps> = ({ users }) => {
    if (users.length === 0) {
        // No users found message
        return <p className="no-results">No users found matching your search criteria.</p>;
    }
    return (
        <ul className="user-list">
            {users.map((user) => (
                <li key={user.id} className="user-list-item">
                    {/* Due to this Error: You do not have access to cloudflare-ipfs.com. */}
                    {/* <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="user-avatar" /> */}
                    <div className="user-avatar-placeholder">
                        {getInitials(user.first_name, user.last_name)}
                    </div>
                    <div className="user-info">
                        <p className="user-name">
                            {user.first_name} {user.last_name}
                        </p>
                        <p className="user-details">
                            {user.vehicle} - {user.country}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default UserList;
