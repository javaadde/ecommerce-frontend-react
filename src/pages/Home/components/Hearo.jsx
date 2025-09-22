
function Hearo(){

    return(<>

  {/* <!-- Hero Section --> */}
      <section className="relative bg-gray-200 py-8 lg:py-13 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            {/* <!-- Model Image - Front and Center --> */}

            {/* <!-- big sreen --> */}
            <div className="order-1 lg:order-1 justify-center lg:flex hidden">
              <img
                src="https://image.hm.com/assets/hm/de/74/de74869d8c461f1455bb800621bf4a38be9d8030.jpg?imwidth=1260"
                alt="Fashion Model - Monochrome Style"
                className="w-80 h-96 lg:w-76 lg:h-[100%] object-cover rounded-2xl shadow-2xl hover:scale-102 transition-all ease-in"
              />
            </div>

            {/* <!-- small screen --> */}
            <div className="order-1 lg:order-1 lg:hidden flex">
              <img
                src="https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/bltdc40d5eb2bc08aff/68b16ff8c5c65564baa420f2/LANDING-BEST_SELLERS.jpg?imdensity=1&im=RegionOfInterestCrop,width=1920,height=823,regionOfInterest=(2332.5,1000)"
                alt="Fashion Model - Monochrome Style"
                className="w-[100%] object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* <!-- Store Description --> */}
            <div className="order-2 lg:order-2 space-y-8 px-4">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-5xl font-michroma font-bold text-black leading-tight">
                  TIMELESS
                  <span className="block bg-gradient-to-r from-gray-700 to-black bg-clip-text text-transparent">
                    ELEGANCE
                  </span>
                </h2>
                <div className="w-24 h-1 bg-black"></div>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed font-light font-comfortaa">
                  Discover the perfect balance of sophistication and comfort.
                  Our curated collection features premium fabrics, impeccable
                  tailoring, and designs that transcend seasons.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 font-michroma">
                <button className="bg-black text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-dark-gray transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                  <span>Explore Collection</span>
                  {/* have to add a icon */}
                </button>
                <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-medium text-lg hover:bg-black hover:text-white transition-all duration-200">
                  View Lookbook
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> 


      </>)
}

export default Hearo