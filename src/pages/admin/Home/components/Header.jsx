import axios  from "../../../../axios"
import { useNavigate } from "react-router-dom";

function Header(){

    const navigate = useNavigate()

    const logOut = ()=>{
     axios.delete("/details/logout")
     .then((res) => {
        console.log(res);
        navigate("/admin/login");
        
     })
     .catch(err => console.log(err))
    }

    return(
        <>
         <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold font-michroma text-black">Admin Dashboard</h1>
                        <p className="text-dark-gray font-comfortaa">Manage your store</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="text-right">
                        <p className="text-sm font-comfortaa font-bold text-black">Welcome, Admin</p>
                         <p className="text-xs text-dark-gray font-comfortaa">Last login: Today 9:30 AM</p> 
                    </div>
                    <button onClick={logOut} className="px-4 font-comfortaa py-2  text-white bg-black cursor-pointer rounded-lg transition-colors font-medium">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    </header>
        </>
    )
}

export default Header