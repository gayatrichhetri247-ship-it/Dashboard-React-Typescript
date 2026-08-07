import React from 'react';
import Profile from '../../../components/ui/Profile';
import PersonalInformation from '../../../components/ui/PersonalInformation';

const UserProfile = () => {
  return (
    <div className="flex w-screen min-h-screen gap-4  px-10">
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