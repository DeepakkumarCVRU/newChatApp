
const User = ( {user}) => {
  return (

    <>
    
    <div>
        <div className="flex space-x-4 items-center px-5 py-5 cursor-pointer hover:bg-slate-700 hover:ease-in-out  hover:duration-500 ">
      <div className="avatar avatar-online">
        <div className="w-14 rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
        </div>
      </div>

      <div>
        <h1>{user.name}</h1>
        <span>{user.email}</span>
      </div>
    </div>
    </div>
    </>


  );
};

export default User;
