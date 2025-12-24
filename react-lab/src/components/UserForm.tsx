import {type ChangeEvent, type FormEvent } from 'react'
import type {User} from '../types/User'
type FormData = Omit<User, 'id'>

type Props = {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  onAdd: (user: FormData) => void;
}

const UserForm = ({ formData, setFormData, onAdd }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement

    setFormData((prev) => ({
        ...prev, [name]: value,
    })) 

  }

  const handleSkillsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
        const skills = checked 
        ? [...prev.skills, value] 
        : prev.skills.filter((skill) => skill !== value);
        return { ...prev, skills };
    });
  }

    const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAdd(formData);

    setFormData({
        fullname: '',
        age: 0,
        education: '',
        gender  : '',
        skills: [],
        bio: ''
        })
    }

    const handleClear = () => {
    setFormData({
        fullname: '',
        age: 0,
        education: '',
        gender  : '',
        skills: [],
        bio: ''
        })
    }


  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <label>Full Name</label>
        <input name="fullname" type="text" value={formData.fullname} onChange={handleChange} placeholder='FullName' />

        <label>Age</label>
        <input name="age" type="number" value={formData.age} onChange={handleChange} placeholder='Age' />

        <label>Education</label>
        <select name="education" value={formData.education} onChange={handleChange}>
          <option value="">Select education</option>
          <option value="grade">Grade School</option>
          <option value="highschool">High School</option>
          <option value="college">College</option>
        </select>
        <label>Gender</label>
        <div>
          <label>
            <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} /> Male
          </label>
          <label style={{ marginLeft: 8 }}>
            <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} /> Female
          </label>
          <label style={{ marginLeft: 8 }}>
            <input type="radio" name="gender" value="Other" checked={formData.gender === 'Other'} onChange={handleChange} /> Other
          </label>
        </div>

        <label>Skills</label>
        <div>
          <input type="checkbox" name="skills" value="JavaScript" checked={formData.skills.includes("JavaScript")} onChange={handleSkillsChange} /> JavaScript
          <input type="checkbox" name="skills" value="TypeScript" checked={formData.skills.includes("TypeScript")} onChange={handleSkillsChange} /> TypeScript
          <input type="checkbox" name="skills" value="React" checked={formData.skills.includes("React")} onChange={handleSkillsChange} /> React
          <input type="checkbox" name="skills" value="Node" checked={formData.skills.includes("Node")} onChange={handleSkillsChange} /> Node
          <input type="checkbox" name="skills" value="NoSQL" checked={formData.skills.includes("NoSQL")} onChange={handleSkillsChange} /> NoSQL
        </div>

        <label>Bio</label>
        <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder='Tell me about yourself' />

        <div style={{ display: 'flex', gap: 8 }}>
          <button type="submit">Save User/Add User</button>
          <button type="button" onClick={handleClear}>Clear</button>
        </div>
      </form>
    </div>
  )
}

export default UserForm



