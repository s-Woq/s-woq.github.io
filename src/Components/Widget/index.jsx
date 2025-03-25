
function Widget ({children}){
    return (
        <div className=" border grid place-items-center  w-96 h-96  bg-black rounded-xl"> 
            <div className=" flex items-center justify-center w-full h-96  text-white ">
            {children}
            </div>
            <div>

            </div>
        </div>

    )
}
export default Widget;