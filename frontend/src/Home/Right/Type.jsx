import { IoSend } from "react-icons/io5";

const Type = () => {
    return (
        <>
            <div className="h-[10vh]  px-2 flex w-full items-center space-x-2 ">
                <div className=" w-[95%] outline-none">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input outline-none w-full rounded-xl"
                    />
                </div>
                <button className="w-[5%] cursor-pointer">
                    <IoSend size={30} />
                </button>
            </div>
        </>
    );
};

export default Type;
