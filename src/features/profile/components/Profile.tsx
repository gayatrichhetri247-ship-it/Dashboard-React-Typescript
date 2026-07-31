import React from "react";
import profile from "../../../assets/images/profileimg.webp"
const Profile = () => {
  return (
    <div className="min-w-auto h-screen flex flex-col items-center justify-center  ">
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-2xl text-gray-700  font-bold">Profile</h1>
        <div className="w-auto p-6 flex flex-col gap-2  border bg-slate-950 text-white rounded-xl">
          <div className="flex flex-col items-center ">
            <div className="border h-30 w-30 rounded-full overflow-hidden">
                <img src={profile} className="h-30 w-30 object-cover"/>
            </div>
            <h1 className="text-xl text-gray-500 font-bold">Jamie Anderson</h1>
            <p className="text-sm text-gray-400">Senior Administrator</p>
          </div>
          <div className="border-t-[0.1px] border-gray-400"></div>
          <div className="flex flex-col items-start gap-2">
            <div className="w-full flex justify-between ">
              <h1>Email</h1>
              <p className="font-semibold text-gray-400">jamie@dreamserp.com</p>
            </div>
            <div className="w-full flex justify-between ">
              <h1>Phone Number </h1>
              <p className="font-semibold text-gray-400">+1 202 555 0173</p>
            </div>
            <div className="w-full flex justify-between ">
              <h1>Department</h1>
              <p className="font-semibold text-gray-400">Engineering</p>
            </div>
            <div className="w-full flex justify-between ">
              <h1>Joined</h1>
              <p className="font-semibold text-gray-400">11 Jan 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
