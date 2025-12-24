import type { User } from '../types/User'

type Props = {
  users: User[]
  onDelete: (id: string) => void
  onEdit: (id: string) => void
  onShow: (id: string) => void
}

const UserList = ({ users, onShow, onEdit, onDelete }: Props) => {
  return (
    <div>
      <h2>User List</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>ID</th>
            <th style={{ textAlign: 'left' }}>Full name</th>
            <th style={{ textAlign: 'left' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.fullname}</td>
              <td>
                <button onClick={() => onShow(u.id)}>View</button>
                <button onClick={() => onEdit(u.id)} style={{ marginLeft: 8 }}>Edit</button>
                <button onClick={() => onDelete(u.id)} style={{ marginLeft: 8 }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserList
