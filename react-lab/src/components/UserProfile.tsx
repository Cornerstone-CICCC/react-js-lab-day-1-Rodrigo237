import React from 'react'
import type { User } from '../types/User'

type Props = {
  showProfile: User | null
}

const UserProfile = ({ showProfile }: Props) => {
  if (!showProfile) return <div><h3>No user selected</h3></div>

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>ID:</strong> {showProfile.id}</p>
      <p><strong>Fullname:</strong> {showProfile.fullname}</p>
      <p><strong>Age:</strong> {showProfile.age}</p>
      <p><strong>Education:</strong> {showProfile.education}</p>
      <p><strong>Gender:</strong> {showProfile.gender}</p>
      <p><strong>Skills:</strong> {showProfile.skills.join(', ')}</p>
      <p><strong>Bio:</strong> {showProfile.bio}</p>
    </div>
  )
}

export default UserProfile;
