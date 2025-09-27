import axios from "../../../axios";
import { useEffect, useState } from "react";
import showNotification from "../../../notification.mjs";


function UsersAdmin(){

    const [users,setUsers] = useState([])
    const [update,setUpdate] = useState(0)

    useEffect(()=>{
        axios.get("/admin/users")
        .then((res) => {
            const data = res.data.allUsers;
            console.log(data);
            setUsers(data)
        })
        .catch((err) => console.log(err))
    },[update])


    const enableUser = (id) => {
        const reqValue = {id:id}
      axios.put("/admin/user/enable",reqValue)
      .then((res) => {
        const data = res.data.message
        showNotification(data);
        setUpdate(update+1)
      })
      .catch((err) => console.log(err))
    }

    const disableUser = (id)=>{
            const reqValue = {id:id}
      axios.put("/admin/user/disable",reqValue)
      .then((res) => {
        const data = res.data.message;

      showNotification(data);
        setUpdate(update-1)
       
      })
      .catch((err) => console.log(err))
    }

    return (
        <>
        
     
    <header class="bg-white shadow-sm border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-off-black rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-off-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0 0h-5m-3-6V9a2 2 0 10-4 0v6m12 0v-3a3 3 0 00-6 0v3"></path>
                        </svg>
                    </div>
                    <h1 class="text-2xl font-bold text-off-black font-michroma">All Users</h1>
                </div>
                 <button onclick="logout()" class="text-dark-gray hover:text-off-black font-medium">Logout</button>
            </div>
        </div>
    </header>

    <div class="w-full mt-[5%] py-8 flex justify-center font-comfortaa">

                
            <div class="overflow-x-auto w-[90%] rounded-xl shadow-xl border-[1px] border-gray-200">
                <table class="w-full">
                    <thead class="bg-soft-gray">
                        <tr>
                            <th class="px-6 py-4 text-center text-sm font-bold text-dark-gray">User ID</th>
                            <th class="px-6 py-4 text-center text-sm font-bold text-dark-gray">Email</th>
                            <th class="px-6 py-4 text-center text-sm font-bold text-dark-gray">Active</th>
                            <th class="px-6 py-4 text-center text-sm font-bold text-dark-gray">Action</th>

                        </tr>
                    </thead>

                    
                 { users.map((user,i)=> { 

                    return(
                    <tbody id="userductsTable" class="h-28 bg-[#F9F9F9] transition-all px-5 ease-in-out duration-300 border-t-[1px] border-gray-400 z-0">

                        <td class="text-center rounded-bl-xl" >{user._id}</td>  
                        <td class="text-center">{user.email }</td>     
                        <td class="text-center">{ user.active ? "yes" : "no" }</td>     
                        <td class="flex flex-col justify-center py-3 px-5 gap-3 mt-2">
                            <button onClick={()=> {disableUser(user._id)}} className="py-1 px-2 bg-red-300   rounded cursor-pointer hover:scale-110 transition-all duration-200 text-sm">Disable</button>
                            <button onClick={() => {enableUser(user._id)}} className="py-1 px-2 bg-green-200 rounded cursor-pointer hover:scale-110 transition-all duration-200 text-sm">Enable</button>
                        </td>     

                    </tbody>
                    )
                  }) }

                </table>
            </div>


    </div>
    
        </>
    )
}

export default UsersAdmin