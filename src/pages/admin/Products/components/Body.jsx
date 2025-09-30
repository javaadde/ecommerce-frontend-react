import { useEffect, useState } from "react";
import axios from "../../../../axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import showNotification from "../../../../notification.mjs";
import { serialize } from "object-to-formdata";

function Body() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [allCategory, setAllCtegory] = useState([]);
  const [update, setUpdate] = useState(0);

  const openEditModal = (proID) => {
    document.getElementById("editModal").classList.remove("hidden");
    document.getElementById("editModal").classList.add("flex");
    document.getElementById("editModalProductId").value = proID;
  };

  const closeEditModel = () => {
    // document.getElementById("editModal").classList.remove("flex");
    document.getElementById("editModal").classList.add("hidden");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      axios
        .get("/products")
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const fetchByCat = async () => {
      axios.get(`/products/${category}`).then((res) => {
        setProducts(res.data);
      });
    };

    const fetchAllCategories = () => {
      axios
        .get("/category")
        .then((res) => {
          setAllCtegory(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchAllCategories();
    fetchProducts();
    fetchByCat();
  }, [category, update]);

  const schemaAddProduct = yup.object().shape({
    discription: yup
      .string("discription must be in text")
      .required("please enter the discription"),
    name: yup
      .string("name must be string")
      .required("please add a name to the product"),
    price: yup
      .number("price must be a psitive number")
      .required("please add a price to the product"),
    category_id: yup
      .string("catergory must be selected")
      .required("please select a category"),
    image: yup
      .mixed()
      .required("An image file is required")
      .test("fileSize", "The file is too large", (value) => {
        // Check if a file is present and its size is within limits (e.g., 5MB
        return value && value[0] && value[0].size <= 5242880; // 5MB
      })
      .test("fileType", "Unsupported File Format", (value) => {
        return (
          value &&
          value[0] &&
          ["image/jpeg", "image/png", "image/gif", "image/avif"].includes(
            value[0].type
          )
        );
      }),
  });

  const {
    register: register,
    handleSubmit: handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaAddProduct),
  });

  const addProduct = async (data) => {
    document.getElementById("loading").classList.remove("hidden");

    console.log(data);

    const fixedData = { ...data, image: data.image[0] };
    const formData = serialize(fixedData);

    const res = await axios.post("/admin/products/add", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    document.getElementById("loading").classList.add("hidden");
    const message = res.data.message;
    showNotification(message);
    setUpdate(update + 1);
  };

  const deleteProduct = async (id) => {
    if (confirm("are you sure wanna delete")) {
      const res = await axios.delete(`/admin/products/delete/${id}`);
      const message = res.data.message;
      showNotification(message);
      setUpdate(update + 1);
    }
  };

  const schemaEditProduct = yup.object().shape({
    _id: yup.string("it must be a strign value not a number"),
    name: yup.string("name must be a text"),
    price: yup.number("price must be a number"),
    category_id: yup.string("must be a text"),
    image: yup.mixed(),
  });

  const {
    register: registerEditPro,
    handleSubmit: handleSubmitEditPro,
    formState: { errors: err },
  } = useForm({
    resolver: yupResolver(schemaEditProduct),
  });

  const editProduct = (data) => {
    document.getElementById("loading").classList.remove("hidden");

    console.log(data);

    const id = document.getElementById("editModalProductId").value;
    data._id = id;

    const fixedData = { ...data, image: data.image[0] };
    const formData = serialize(fixedData);

    axios.put("admin/products/update", formData).then((res) => {
      console.log(res);
      const message = res.data.message;
      showNotification(message);
      closeEditModel();
      setTimeout(() => {
        setUpdate(update - 1);
      }, 200);
      document.getElementById("loading").classList.add("hidden");
    });
  };

  return (
    <>
      <div id="loading" className="hidden fixed top-0 h-screen w-full">
        <div className="h-screen w-full flex bg-white justify-center items-center">
          <div className="loader fixed z-999">
            <span className="loader-text">loading</span>
            <span className="load"></span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 font-comfortaa">
        {/* <!-- Add New Product Section --> */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-black mb-6">Add New Product</h2>

          <form
            onSubmit={handleSubmit(addProduct)}
            id="productForm"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-500 mb-2">
                  Product Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Enter product name"
                  className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent rounded-lg text-black"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">
                    🚨 {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-500 mb-2">
                  Product Discription
                </label>
                <input
                  {...register("discription")}
                  type="text"
                  id="discriptionPro"
                  placeholder="Product discription"
                  className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent rounded-lg text-black"
                />
                {errors.discription && (
                  <p className="text-red-500 text-sm">
                    🚨 {errors.discription.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-500 mb-2">
                  Price ($)
                </label>
                <input
                  {...register("price")}
                  type="number"
                  id="productPrice"
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent rounded-lg text-black"
                />
                {errors.price && (
                  <p className="text-red-500 text-sm">
                    🚨 {errors.price.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-500 mb-2">
                  Category
                </label>
                <select
                  {...register("category_id")}
                  id="productCategory"
                  className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent rounded-lg text-black"
                >
                  <option value="">All</option>
                  {allCategory.map((catg, index) => (
                    <option key={index} value={catg.name}>
                      {catg.name}
                    </option>
                  ))}
                </select>
                {errors.category_id && (
                  <p className="text-red-500 text-sm">
                    🚨 {errors.category_id.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-between w-full gap-5">
              {/* <div className="flex flex-col w-1/2">
                <label className="block text-sm font-semibold text-gray-500 mb-2">
                  Upload Image
                </label>
                <input
                  {...register("image")}
                  type="file"
                  id="productImage"
                  placeholder="upload your image"
                  className="w-full px-4 py-3 bg-gray-200 cursor-pointer border-2 border-transparent rounded-lg text-black"
                />
                {errors.image && (
                  <p className="text-red-500 text-sm">
                    🚨 {errors.image.message}
                  </p>
                )}
              </div> */}
              <div class="flex flex-col w-1/2 max-w-xs  gap-1.5">
                <label class="text-sm text-gray-500 font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Picture
                </label>
                <input
                  id="picture"
                  type="file"
                  class="flex h-15 w-full rounded-md border border-gray-300 bg-white px-5 py-3 text-sm text-gray-600
                      file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-700
                    hover:file:bg-gray-200 hover:file:cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-white"
                />
              </div>

              <div className="flex justify-end w-1/2 pt-4">
                <button
                  type="submit"
                  defaultValue="Add product"
                  className="cursor-pointer w-full h-15 border-2 text-black  duration-200 hover:bg-black hover:text-white rounded-lg hover:bg-gray-text-gray-500 transition-all font-semibold"
                >
                  Add Product
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* <!-- Search BAr --> */}

        <div>
          <div className="font-comfortaa font-bold text-2xl mt-20 p-5">
            <h1> Search by id or category :</h1>
          </div>

          {/* <div className="flex gap-6 p-[2%]">
            <div className="w-[50%] bg-white rounded-xl shadow-sm border-[1px] border-gray-800 p-6 mb-8 flex flex-row justify-between items-center py-8 px-20 ">
              <label for="">Product Id</label>
              <input
                id="pro_id"
                className="px-4 py-2 rounded-full border-2 border-black ml-5 "
                type="text"
                placeholder="type the product_id"
                value=" id "
              />
              <button
                onclick="SearchId()"
                className="w-11 h-11 rounded-full border-2 border-black text-black"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>

            <div className="w-[45%] bg-white rounded-xl shadow-sm border-[1px] border-gray-800 p-6 mb-8 flex flex-row gap-4 py-8 justify-center px-20 ">
              <select
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                id="category"
                name=" category "
                className="p-2 px-6 rounded-full border-black border-2"
              >
                <option value="">All</option>
                {allCategory.map((catg, index) => (
                  <option key={index} value={catg._id}>
                    {catg._id}
                  </option>
                ))}
              </select>

              <button
                onclick="SearchCategory()"
                className="w-11 h-11 rounded-full border-2 border-black text-black"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div> */}
        </div>

        {/* <!-- Products List --> */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-500">
          <div className="p-6 border-b border-gray-100 text-center font-michroma">
            <h2 className="text-4xl font-bold text-black">Products</h2>
          </div>

          <div className="overflow-x-auto ">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-500">
                    Name
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-500">
                    Image
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-500">
                    Discription
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-500">
                    Price
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-500">
                    Category
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>

              {products.map((pro, i) => {
                return (
                  <tbody
                    key={i}
                    id="productsTable"
                    className="h-48 bg-[#F9F9F9] transition-all ease-in-out duration-300 border-t-[1px] border-gray-400 z-0"
                  >
                    <tr>
                      <td className="text-center rounded-bl-xl">{pro.name}</td>

                      <td className="w-[20%]">
                        <img src={pro.url} alt="" />
                      </td>

                      <td className="text-center"> {pro.discription} </td>
                      <td className="text-center"> {pro.price} </td>
                      <td className="text-center"> {pro.category_id} </td>

                      <td className="rounded-br-xl">
                        <div className="w-full flex flex-col justify-center items-center gap-6">
                          <button
                            onClick={() => {
                              openEditModal(pro._id);
                            }}
                            className="text-2xl hover:text-blue-600"
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </button>

                          <button
                            onClick={() => {
                              deleteProduct(pro._id);
                            }}
                            className="text-2xl hover:text-blue-600"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>

      {/* //  Edit Modal  */}
      <div
        id="editModal"
        className="hidden fixed inset-0 h-screen bg-black bg-opacity-50 items-center justify-center p-4 z-50"
      >
        <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
          <h3 className="text-lg font-bold text-black mb-4">Edit Product</h3>

          <form onSubmit={handleSubmitEditPro(editProduct)} id="updateForm">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-500 mb-2">
                  Product ID
                </label>
                <input
                  type="text"
                  name="id"
                  id="editModalProductId"
                  className="w-full px-3 py-2 bg-gray-100 rounded-lg text-black"
                  readOnly
                  {...registerEditPro("_id")}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-500 mb-2">
                  Name
                </label>
                <input
                  {...registerEditPro("name")}
                  type="text"
                  name="name"
                  className="w-full px-3 py-2 bg-gray-100 border-2 border-transparent rounded-lg text-black"
                />
                {err.name && (
                  <p className="text-red-500 text-sm">🚨 {err.name.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-500 mb-2">
                  Price ($)
                </label>
                <input
                  {...registerEditPro("price")}
                  type="number"
                  className="w-full px-3 py-2 bg-gray-100 border-2 border-transparent rounded-lg text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-500 mb-2">
                  Image URL
                </label>
                <input
                  {...registerEditPro("image")}
                  type="file"
                  className="w-full px-3 py-2 bg-gray-100 border-2 border-transparent rounded-lg text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-500 mb-2">
                  Category
                </label>
                <select
                  name="category"
                  className="w-full px-3 py-2 bg-gray-100 border-2 border-transparent rounded-lg text-black"
                  {...registerEditPro("category_id")}
                >
                  <option value="">All</option>
                  {allCategory.map((catg, index) => (
                    <option key={index} value={catg.name}>
                      {catg.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={closeEditModel}
                id="closeModal"
                className="px-4 py-2 cursor-pointer border-2 border-black rounded-md text-gray-500 hover:text-black transition-colors"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-text-gray-500 transition-colors font-medium"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Body;
