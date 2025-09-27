function Filter() {
  return (
    <>
      <div
        className="h-[15vh] w-full flex font-comfortaa
       bg-gray-200 border-b-1 shadow-2xl border-gray-300 rounded-b-2xl"
      >
        {/* search by text */}

        <div className="w-1/2 h-full "></div>

        {/* search by categories */}

        <div className="w-1/2 h-full">
          <div className="w-full flex flex-row gap-4 py-8 justify-center px-10 ">
            <select
              id="category"
              name=""
              className="p-2 px-8 rounded-full border-black border-2 "
            >
              <option className="bg-gray-300" id="null" value="null">
                Category
              </option>
              <option className="bg-gray-300" id="all" value="all">
                All
              </option>
              <option className="bg-gray-300" id="Jeans" value="Jeans">
                Jeans
              </option>
              <option className="bg-gray-300" id="Jackets" value="Jackets">
                Jackets
              </option>
              <option className="bg-gray-300" id="Shirts" value="Shirts">
                Shirts
              </option>
              <option className="bg-gray-300" id="T-Shirts" value="T-Shirts">
                T-Shirts
              </option>
              <option className="bg-gray-300" id="Hoodies" value="Hoodies">
                Hoodies
              </option>
            </select>

            <button
              className="w-11 h-11 cursor-pointer
                rounded-full border-2 border-black text-black ml-5
                hover:bg-black hover:text-white "
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
