import { act } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList from './UserList';
import { UserListProps } from '../../interfaces';

// Mock the getInitials function
jest.mock('../../utils', () => ({
    getInitials: jest.fn(
        (firstName: string, lastName: string) => `${firstName[0]}${lastName[0]}`
    ),
}));

// Test cases for UserList component
describe('UserList', () => {
    const mockUsers: UserListProps['users'] = [
        {
            avatar:
                'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/787.jpg',
            first_name: 'Blaise',
            last_name: 'Kautzer',
            country: 'Pakistan',
            vehicle: 'Honda CTS',
            id: '1',
        },
        {
            avatar:
                'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/387.jpg',
            first_name: 'Grover',
            last_name: 'Block',
            country: 'Uganda',
            vehicle: 'Fiat XC90',
            id: '2',
        },
    ];

    test('renders no results message when users list is empty', () => {
        act(() => {
            render(<UserList users={[]} />);
        });
        expect(
            screen.getByText(/No users found matching your search criteria./)
        ).toBeInTheDocument();
    });

    test('renders list of users when users are provided', () => {
        act(() => {
            render(<UserList users={mockUsers} />);
        });

        // Check if each user in the list is rendered
        mockUsers.forEach((user) => {
            expect(
                screen.getByText(`${user.first_name} ${user.last_name}`)
            ).toBeInTheDocument();
        });
    });
});
