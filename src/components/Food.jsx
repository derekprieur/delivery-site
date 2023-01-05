import { useState } from 'react'
import { data } from '../data/data.js'

const Food = () => {
    const [foods, setFoods] = useState(data)

    // filter type function
    const filterType = (type) => {
        if (type === 'all') {
            setFoods(data)
            return
        }
        const newFoods = data.filter((item) => item.category === type)
        setFoods(newFoods)
    }

    // filter price function
    const filterPrice = (price) => {
        const newFoods = data.filter((item) => item.price === price)
        setFoods(newFoods)
    }

    return (
        <div className='max-w-[1640px] mx-auto px-4 py-12'>
            <h1 className='text-green-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
            {/* filter row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* filter type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={() => filterType('all')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>All</button>
                        <button onClick={() => filterType('burger')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Burgers</button>
                        <button onClick={() => filterType('pizza')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Pizza</button>
                        <button onClick={() => filterType('salad')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Salad</button>
                        <button onClick={() => filterType('wraps')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Wraps</button>
                    </div>
                </div>
                {/* filter price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={() => filterPrice('$')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>$</button>
                        <button onClick={() => filterPrice('$$')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>$$</button>
                        <button onClick={() => filterPrice('$$$')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>$$$</button>
                        <button onClick={() => filterPrice('$$$$')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>$$$$</button>
                    </div>
                </div>
            </div>
            {/* display foods */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((item, index) => (
                    <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
                        <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p><span className='bg-green-500 text-white p-1 rounded-full'>{item.price}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Food