import axios from "../../../axios";
import { useState, useEffect } from "react";
import showNotification from "../../../notification.mjs";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";


function Category() {
  const [allCategory, setAllCtegory] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    axios
      .get("/category")
      .then((res) => {
        setAllCtegory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get(`/products/${category}`).then((res) => {
      setProducts(res.data);
    });
  }, [category, update]);

  const deleteCategory = (id) => {

    if(confirm("are you sure it will delete all the product inside the category")){

        axios
          .delete(`/admin/category/delete/${id}`)
          .then((res) => {
            const message = res.data.message;
            console.log(message);
            showNotification(message);
            setUpdate(update + 1);
          })
          .catch((err) => console.log(err));
      };
    }

  
  
  const schema = yup.object().shape({
    name:yup.string().required(),
    discription:yup.string(),
    url:yup.string().required()
  })

  const  {register,handleSubmit} = useForm({
      resolver:yupResolver(schema)
    })
    
    const createCategory = async (data) => {
      const res = await axios.post("/admin/category/add",data);
      const message = res.data.message;
      showNotification(message)
      setUpdate(update+1);
    };
  


  return (
    <>
      <div className="min-h-screen w-full bg-gray-200 grid grid-cols-1 lg:grid-cols-2 space-x-5 px-7 py-7">
        <div className="bg-gray-200 py-8 px-8 border-1 font-michroma border-white shadow-2xl rounded-2xl">
          <div className="h-[20%] w-full flex felx-row items-center justify-center">
            <h2>Filter By Category&nbsp;:&nbsp; &nbsp;</h2>

            <select
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              id="category"
              name=""
              className="p-2 px-8 rounded-full border-black border-2 "
            >
              <option value="">All</option>
              {allCategory.map((catg, index) => (
                <option key={index} value={catg.name}>
                  {catg.name}
                </option>
              ))}
            </select>
          </div>

          <div className="h-[60vh] w-full overflow-y-auto space-y-3 p-4">
            {products.map((pro, i) => (
              <div
                key={i}
                className="h-40 rounded-2xl w-full border-1 bg-white flex justify-between px-5 gap-2"
              >
                <div className="w-1/4 rounded-2xl h-full">
                  <img
                    src={pro.url}
                    alt={pro.name}
                    className="h-full w-full rounded-2xl"
                  />
                </div>
                <div className="w-1/3 h-full flex justify-center text-center items-center">
                  <h1 className="text-center">{pro.name}</h1>
                </div>
                <div className="w-1/4 h-full flex justify-center items-center">
                  <span className="text-center">{pro.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-200 py-12 px-12 border-1 border-white shadow-2xl rounded-2xl font-comfortaa">
          <div >

            <form
             className="h-1/2 w-full flex flex-col gap-5 justify-center items-center"
             onSubmit={handleSubmit(createCategory)}
             action="" 

            >

              <div className="flex space-x-2 justify-center">
                <input
                  className="bg-gray-100 outline-1 rounded-xl px-7 py-3 w-1/2 "
                  placeholder="Category Name"
                  type="text"
                  required
                  {...register("name")}
                />
                <input
                  className="bg-gray-100 outline-1 rounded-xl px-7 py-3 w-1/2 "
                  placeholder="Discription"
                  type="text"
                  {...register("discription")}
                />
              </div>

              <div className=" felx flex-row space-x-2 w-full items-center">
                <input
                  className="bg-gray-100 outline-1 rounded-xl px-5 py-3 w-3/4 "
                  placeholder="Image Url "
                  type="text"
                  required
                  {...register("url")}
                />

                <button
                 type="submit"
                 
                  className="bg-black cursor-pointer py-3 px-5 rounded-xl w-1/5 text-white"
                >
                  Create
                </button>
              </div>

            </form>



          </div>

          <div className="h-1/2 w-full flex justify-center items-center gap-3 flex-wrap overflow-y-auto mt-15">
            {allCategory.map((cat, i) => (
              <div
                key={i}
                className="w-[40%] h-25 bg-white rounded-xl shadow-xl flex flex-col gap-4 justify-center items-center font-michroma hover:scale-105 transition-all duration-100"
              >
                <h1>{cat.name}</h1>

                <div className="flex gap-2 font-comfortaa">
                  <button
                    onClick={() => {
                      deleteCategory(cat._id);
                    }}
                    className="hover:bg-black px-4 py-1 text-black border-1 cursor-pointer hover:text-white text-sm rounded-2xl"
                  >
                    delete
                  </button>
                  <button className="hover:bg-black px-4 py-1 text-black border-1 cursor-pointer hover:text-white text-sm rounded-2xl">
                    edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
