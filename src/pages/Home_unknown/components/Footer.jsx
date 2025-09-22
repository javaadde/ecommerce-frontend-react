
function Footer(){


    return(<>
    
 {/* <!-- Footer --> */}
      <footer className="bg-dark-gray bg-black px-4">

      {/*  Newsletter Section */}
      <section className="py-16 bg-black px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-michroma font-bold text-white mb-4">
            STAY IN STYLE
          </h3>
          <p className="text-gray-300 font-comfortaa mb-8 max-w-2xl mx-auto">
            Be the first to know about new arrivals, exclusive collections, and
            special offers.
          </p>
          <div className="max-w-md mx-auto flex gap-4 flex-wrap justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white outline-none font-comfortaa bg-gray-200"
            />
            <button className="bg-white text-black px-6 py-3 rounded-lg font-comfortaa font-medium hover:bg-gray-200 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* <!-- Bottom Bar --> */}
          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-comfortaa">
              &copy; 2025 Monochrome. All rights reserved. | Designed with
              passion for timeless fashion.
            </p>
          </div>
        </div>
      </footer>


    </>)
}

export default Footer