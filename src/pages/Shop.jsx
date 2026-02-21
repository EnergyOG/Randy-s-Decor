import Navbar from "../component/NavBar";

function Shop() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-gray-200 pt-20">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-yellow-700 mb-10">Shop</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="w-full h-48 bg-gradient-to-br from-yellow-400 to-yellow-600" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">Product {item}</h3>
                <p className="text-gray-600">Premium decoration items</p>
                <p className="text-yellow-700 font-bold mt-2">$99.99</p>
                <button className="mt-3 w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg transition">
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

export default Shop;