import React from 'react';
import Profile from '../components/Profile';
import PersonalInformation from '../components/PersonalInformation';

const UserProfile = () => {
  return (
    <div className="flex w-screen min-h-screen gap-4 bg-slate-950 px-10">
      <div className="flex-1">
        <Profile />
      </div>

      <div className="flex-2">
        <PersonalInformation />
      </div>
    </div>
  );
};

export default UserProfile;