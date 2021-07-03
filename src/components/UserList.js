import React from 'react'
import { UserCell } from './UserCell'

export const UserList = (props) => {
    return (
        <React.Fragment>
            { props.users.map(u => (
                <tr key={u.id}>
                    <UserCell key={u.id} u={u} />
                </tr>
            )) }
        </React.Fragment>
    )
}
