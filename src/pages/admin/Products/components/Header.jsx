function Header(){


    return(
        <>
         <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-off-black rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-off-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1"></path>
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-off-black font-michroma">Products</h1>
                </div>
         <button  className="text-dark-gray hover:text-off-black font-medium">Logout</button> 

            </div>
        </div>
    </header>

        </>
    )
}

export default Header