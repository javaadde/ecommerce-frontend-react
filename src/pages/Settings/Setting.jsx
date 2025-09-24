import { useEffect, useState } from "react";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Setting() {
  const navigate = useNavigate();

  const logOut = () => {
    const verify = confirm("are you sure you wanna logour");

    if (verify) {
      axios.delete("/details/logout");
      navigate("/");
    }
  };

  const [name, setName] = useState("your name");
  const [email, setEmail] = useState();

  useEffect(() => {
    axios.get("/details").then((res) => {
      const user = res.data.user;
     

      setName(user.username);
      setEmail(user.email);
    });
  }, []);

  const handleSave = () => {
    alert("it will update soon");
  };

  return (
    <>
      <div className="bg-white min-h-screen">
        <button className="bg-gray-500 text-white w-10 h-10 rounded-full z-10 fixed left-5 top-4">
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        <div className="max-w-2xl mx-auto p-6">
          {/* <!-- Profile Card --> */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
            {/* <!-- Header --> */}
            <div className="flex items-center space-x-4 mb-8 font-michroma">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-3xl">
                <i className="fa-regular fa-user"></i>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-black">My Profile</h1>
                <p className="text-gray-600">Manage your account information</p>
              </div>
            </div>

            {/* <!-- User Information --> */}
            <div className="space-y-6 mb-8 font font-comfortaa">
              <div>
                <label className="block text-sm font-semibold text-gray-500 mb-2">
                  Username
                </label>
                <input
                  type="email"
                  value={name}
                  readOnly
                  className="w-full px-4 py-3 bg-gray-200 border-2 border-transparent rounded-lg text-black font-medium focus:outline-none focus:border-black focus:bg-white transition-all"
                />
              </div>

              {/* <!-- First Name & Last Name Row -->
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-500 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-200 border-2 border-transparent rounded-lg text-black font-medium focus:outline-none focus:border-black focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-500 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-200 border-2 border-transparent rounded-lg text-black font-medium focus:outline-none focus:border-black focus:bg-white transition-all"
                  />
                </div>
              </div> */}

              {/* <!-- Email Address --> */}
              <div>
                <label
                  onChange={(e) => setEmail(e.target.value)}
                  className="block text-sm font-semibold text-gray-500 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue={email}
                  className="w-full px-4 py-3 bg-gray-200 border-2 border-transparent rounded-lg text-black font-medium focus:outline-none focus:border-black focus:bg-white transition-all"
                />
              </div>

              {/* <!-- Action Buttons --> */}

              <div className="flex">
                <div className="flex justify-start w-1/2">
                  <button className="cursor-pointer font-bold underline">
                    change password
                  </button>
                </div>

                <div className="flex justify-end w-1/2">
                  <button
                    onClick={handleSave}
                    className="cursor-pointer px-4 py-2 bg-black text-white rounded-lg  hover:bg-gray-300 hover:text-black border-1 transition-colors text-sm font-medium"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Orders Button --> */}
            <div className="mb-4 font-comfortaa">
              <Link to="/orders">
              <button className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-black text-white rounded-xl  border-1 cursor-pointer transition-colors font-semibold hover:bg-gray-300 hover:text-black">
                <i className="fa-solid fa-bag-shopping"></i>
                <span>View Orders</span>
              </button>
              </Link>
            </div>
          </div>
        </div>

        <button
          onClick={logOut}
          className="cursor-pointer fixed bottom-6 right-9 underline font-bold font-comfortaa px-5 py-3 rounded-xl hover:bg-gray-200"
        >
          logout
        </button>
      </div>
    </>
  );
}

export default Setting;
