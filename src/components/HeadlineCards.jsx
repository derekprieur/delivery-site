const HeadlineCards = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* card */}
            <div className="rounded-xl relative">
                {/* overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">One For You, One For A Friend</p>
                    <p className="px-2">Through 2/26</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />
            </div>
            {/* card */}
            <div className="rounded-xl relative">
                {/* overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
                    <p className="px-2">Added Daily</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80" alt="" />
            </div>
            {/* card */}
            <div className="rounded-xl relative">
                {/* overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">Dessert Delivery Too!</p>
                    <p className="px-2">Explore Tasty Treats</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1612476957058-3328f66cbea7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            </div>
        </div>
    )
}

export default HeadlineCards