import React, { useState } from 'react';
import { Heart, Filter, Grid, List } from 'lucide-react';

function Socks() {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');

const socks = [
  {
    id: 1,
    name: "Merino Wool Dress Socks",
    price: 29,
    originalPrice: 39,
    image: "https://images.pexels.com/photos/1598513/pexels-photo-1598513.jpeg", // Merino wool dress socks
    colors: ["black", "navy", "charcoal"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    discount: 25
  },
  {
    id: 2,
    name: "Cotton Casual Socks",
    price: 19,
    image: "https://images.pexels.com/photos/1598514/pexels-photo-1598514.jpeg", // Cotton casual socks
    colors: ["white", "grey", "black"],
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
    discount: 0
  },
  {
    id: 3,
    name: "Athletic Performance Socks",
    price: 24,
    image: "https://images.pexels.com/photos/1598515/pexels-photo-1598515.jpeg", // Athletic performance socks
    colors: ["white", "black", "grey"],
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
    discount: 0
  },
  {
    id: 4,
    name: "Bamboo Fiber Socks",
    price: 32,
    originalPrice: 42,
    image: "https://images.pexels.com/photos/1598516/pexels-photo-1598516.jpeg", // Bamboo fiber socks
    colors: ["beige", "brown", "green"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    discount: 24
  },
  {
    id: 5,
    name: "Striped Casual Socks",
    price: 22,
    image: "https://images.pexels.com/photos/1598517/pexels-photo-1598517.jpeg", // Striped casual socks
    colors: ["blue-white", "red-white", "green-white"],
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
    discount: 0
  },
  {
    id: 6,
    name: "Compression Socks",
    price: 35,
    image: "https://images.pexels.com/photos/1598518/pexels-photo-1598518.jpeg", // Compression socks
    colors: ["black", "navy", "white"],
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
    discount: 0
  }
];



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-[#193254] mb-4">Men's Socks Collection</h1>
          <p className="text-gray-600 text-lg">Premium comfort and style from the ground up</p>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <Filter size={20} />
              Filters
            </button>
            <span className="text-gray-600">{socks.length} products</span>
          </div>

          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#193254]"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>

            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-[#193254] text-white' : 'bg-white text-gray-600'} transition-colors duration-300`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-[#193254] text-white' : 'bg-white text-gray-600'} transition-colors duration-300`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {socks.map((item) => (
            <div key={item.id} className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden ${viewMode === 'list' ? 'flex' : ''}`}>
              <div className={`relative ${viewMode === 'list' ? 'w-64' : 'w-full'}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={`object-cover transition-transform duration-300 hover:scale-105 ${viewMode === 'list' ? 'h-64 w-64' : 'w-full h-80'}`}
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {item.isNew && (
                    <span className="bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded">NEW</span>
                  )}
                  {item.discount > 0 && (
                    <span className="bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">-{item.discount}%</span>
                  )}
                </div>

                {/* Heart Icon */}
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors duration-300">
                  <Heart size={20} className="text-gray-600 hover:text-red-500" />
                </button>
              </div>

              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <h3 className="text-xl font-semibold text-[#193254] mb-2 hover:text-red-600 cursor-pointer transition-colors duration-300">
                  {item.name}
                </h3>

                {/* Colors */}
                <div className="flex gap-2 mb-3">
                  {item.colors.map((color, index) => (
                    <div
                      key={index}
                      className={`w-6 h-6 rounded-full border-2 border-gray-300 cursor-pointer hover:scale-110 transition-transform duration-300 ${
                        color === 'black' ? 'bg-black' :
                        color === 'navy' ? 'bg-blue-900' :
                        color === 'charcoal' ? 'bg-gray-700' :
                        color === 'white' ? 'bg-white' :
                        color === 'grey' ? 'bg-gray-500' :
                        color === 'beige' ? 'bg-yellow-200' :
                        color === 'brown' ? 'bg-yellow-800' :
                        color === 'green' ? 'bg-green-600' :
                        color === 'blue-white' ? 'bg-blue-400' :
                        color === 'red-white' ? 'bg-red-400' :
                        color === 'green-white' ? 'bg-green-400' :
                        'bg-gray-500'
                      }`}
                    ></div>
                  ))}
                </div>

                {/* Sizes */}
                <div className="flex gap-2 mb-4">
                  {item.sizes.map((size) => (
                    <span key={size} className="px-2 py-1 text-xs border border-gray-300 rounded hover:border-[#193254] cursor-pointer transition-colors duration-300">
                      {size}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-[#193254]">${item.price}</span>
                  {item.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">${item.originalPrice}</span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-[#193254] text-white py-3 rounded-lg hover:bg-blue-800 transition-colors duration-300 font-semibold">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Socks;