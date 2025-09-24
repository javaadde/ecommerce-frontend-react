import { Link } from "react-router-dom"
function Header(){

    return(
        <>
        
         <header className="bg-white shadow-sm border-b border-gray-200 font-michroma">
        <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-off-black rounded-lg flex items-center justify-center">
                         
                    </div>
                    <h1 className="text-2xl font-bold text-off-black font-michroma">Shoping Cart</h1>
                </div>
                <Link to="/settings">
                <button className="cursor-pointer text-dark-gray hover:text-off-black text-3xl">
                 <i className="fa-solid fa-circle-user"></i> 
                </button>
                </Link>
            </div>
        </div>
    </header>
        
        </>
    )
}

export default Header