import React from "react";

function Pagination({ totalPosts, postsPerPage , setCurrentPage ,currentPage}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="w-full h-27 flex gap-4 justify-center items-center">
      {pages.map((page, index) => (
        <button
          onClick={()=>{setCurrentPage(page)}}
          className={ page === currentPage ?"bg-black text-white px-4 py-2 rounded border-1":"" + "px-4 py-2 rounded border-1 hover:text-white hover:bg-black cursor-pointer"}
          key={index}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
