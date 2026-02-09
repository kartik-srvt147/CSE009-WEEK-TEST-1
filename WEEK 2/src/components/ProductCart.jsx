import { useState } from "react";

const products = [
  { id: 1, name: "Mobile", price: 15000 },
  { id: 2, name: "Fridge", price: 10000 },
  { id: 3, name: "AC", price: 30000 },
];

function ProductCart() {
  const [cart, setCart] = useState([]);

  const toggleCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart([...cart, product]);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="h-screen bg-gray-950 flex items-center justify-center">
      <div className="bg-white rounded-lg px-8 py-6 border-4 border-sky-300 w-105 flex flex-col gap-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-center">
          Product Dashboard
        </h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="text-left py-2 font-extrabold">Product</th>
              <th className="text-left py-2 font-extrabold">Price</th>
              <th className="text-center py-2 font-extrabold">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => {
              const inCart = cart.find((item) => item.id === product.id);

              return (
                <tr key={product.id} className="border-b border-gray-200">
                  <td className="py-2 font-bold text-gray-800">
                    {product.name}
                  </td>
                  <td className="py-2 font-bold text-gray-800">
                    ₹{product.price}
                  </td>
                  <td className="py-2 text-center">
                    <button
                      onClick={() => toggleCart(product)}
                      className={`px-3 py-1 rounded-lg text-sm font-extrabold transition transform hover:scale-110 ${
                        inCart
                          ? "bg-red-400/80 text-gray-950"
                          : "bg-green-400/80 text-gray-950"
                      }`}
                    >
                      {inCart ? "Remove from cart" : "Add to Cart"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-2 bg-gray-400/85 py-2 px-3 rounded-lg">
          <h3 className="text-xl font-extrabold">Total</h3>
          <p className="text-xl font-extrabold">₹{total}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
