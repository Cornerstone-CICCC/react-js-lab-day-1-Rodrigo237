import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './components/UserList'
import UserProfile from './components/UserProfile'
import UserForm from './components/UserForm'
import  type { User } from './types/User'

type FormData = Omit<User, 'id'>

const initialForm: FormData = {
  fullname: '',
  age: 0,
  education: '',
  gender: '',
  skills: [],
  bio: ''
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [formData, setFormData] = useState<FormData>(initialForm)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const clearForm = () => {
    setFormData(initialForm)
    setEditingId(null)
  }

  const addOrUpdateUser = () => {
    if (editingId) {
      setUsers(prev => prev.map(u => u.id === editingId ? { ...u, ...formData } : u))
      clearForm()
      return
    }

    const newUser: User = { id: Date.now().toString(), ...formData }
    setUsers(prev => [newUser, ...prev])
    clearForm()
  }

  const handleView = (id: string) => {
    const u = users.find(x => x.id === id) || null
    setSelectedUser(u)
  }

  const handleEdit = (id: string) => {
    const u = users.find(x => x.id === id)
    if (!u) return
    setFormData({ fullname: u.fullname, age: u.age, education: u.education, gender: u.gender, skills: u.skills, bio: u.bio })
    setEditingId(id)
  }

  const handleDelete = (id: string) => {
    setUsers(prev => prev.filter(u => u.id !== id))
    if (selectedUser?.id === id) setSelectedUser(null)
    if (editingId === id) clearForm()
  }

  return (
    <div className="app-container">
      <h1>React Users — Lab</h1>
      <div style={{ display: 'flex', gap: 24 }}>
        <div style={{ flex: 1 }}>
          <UserForm formData={formData} setFormData={setFormData} onAdd={addOrUpdateUser} />
        </div>
        <div style={{ flex: 1 }}>
          <UserList users={users} onShow={handleView} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
        <div style={{ flex: 1 }}>
          <UserProfile showProfile={selectedUser} />
        </div>
      </div>
    </div>
  )
}

export default App
