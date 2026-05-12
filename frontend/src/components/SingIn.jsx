const SingIn = () => {
    return (
        <div>
            
            <form action="" className="border h-screen flex flex-col items-center justify-center ">
                <div>
                    <p className="text-3xl font-light my-2">Sign In</p>

                </div>
                <div className="border space-y-3 p-5 rounded-2xl ">
                    
                    <div>

                        <input type="email" name="email" id="email" className="border inline px-3 py-2 rounded-2xl text-white  w-75" placeholder="Enter Your Email" />
                    </div>
                    <div>

                        <input type="password" name="password" id="password" className="border inline px-3 py-2 rounded-2xl text-white  w-75" placeholder="Enter Your PassWord" />
                    </div>
                    
                    <div>
                        <button className="border border-blue-500 text-center px-4 py-2 bg-blue-600 cursor-pointer rounded-2xl w-full">SingIn</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SingIn