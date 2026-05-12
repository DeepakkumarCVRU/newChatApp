const SingUp = () => {
    return (
        <div>
            
            <form action="" className="border h-screen flex flex-col items-center justify-center ">
                <div>
                    <p className="text-3xl font-light my-2">Sign Up</p>

                </div>
                <div className="border space-y-3 p-5 rounded-2xl ">
                    <div >

                        <input type="text" name="name" id="name" className="border inline px-3 py-2 rounded-2xl text-white w-75 " placeholder="Enter Your Name" />
                    </div>
                    <div>

                        <input type="email" name="email" id="email" className="border inline px-3 py-2 rounded-2xl text-white  w-75" placeholder="Enter Your Email" />
                    </div>
                    <div>

                        <input type="password" name="password" id="password" className="border inline px-3 py-2 rounded-2xl text-white  w-75" placeholder="Enter Your PassWord" />
                    </div>
                    <div>

                        <input type="text" name="confirmPassword" id="confirmPassword" className="border inline px-3 py-2 rounded-2xl text-white w-75" placeholder="Enter Your Confirm PassWord" />
                    </div>
                    <div>
                        <button className="border border-blue-500 text-center px-4 py-2 bg-blue-600 cursor-pointer rounded-2xl w-full">SingUp</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SingUp