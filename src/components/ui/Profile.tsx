import React from "react";
import profile from "../../assets/images/profileimg.webp"
import Avatar from "./Avatar";
const Profile = () => {
  return (
    <div className="min-w-auto h-screen flex flex-col items-center justify-center  ">
      <div className="w-full flex flex-col gap-2 ">
        <h1 className="text-2xl   font-bold">Profile</h1>
        <div className="w-auto p-6 flex flex-col gap-2  border border-gray-200 shadow-md rounded-xl">
          <div className="flex flex-col items-center ">
            <Avatar image={profile} size={100} border />
            <h1 className="text-xl  font-bold">Jamie Anderson</h1>
            <p className="text-sm ">Senior Administrator</p>
          </div>
          <div className="border-t-[0.1px] "></div>
          <div className="flex flex-col items-start gap-2">
            <div className="w-full flex justify-between ">
              <h1>Email</h1>
              <p className="font-semibold ">jamie@dreamserp.com</p>
            </div>
            <div className="w-full flex justify-between ">
              <h1>Phone Number </h1>
              <p className="font-semibold ">+1 202 555 0173</p>
            </div>
            <div className="w-full flex justify-between ">
              <h1>Department</h1>
              <p className="font-semibold ">Engineering</p>
            </div>
            <div className="w-full flex justify-between ">
              <h1>Joined</h1>
              <p className="font-semibold ">11 Jan 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
