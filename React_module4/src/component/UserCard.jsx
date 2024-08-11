import React from "react";

function UserCard({ id, url }) {
  return (
    <div >
      <img src={url} alt="Image" className="w-[300px] h-[300px] border-2 border-black"/>
      <h1 className="text-center p-2 text-xl font-semibold bg-black text-white m-2 rounded-md">{id}</h1>
    </div>
  );
}

export default UserCard;
