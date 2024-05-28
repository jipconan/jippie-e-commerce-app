// Will come back to use this component to get json file for snipcart (JSON Crawler) to autheticate the price and id
// I need to send the fetched json data to a backend server to store the data which is possible with django, mongoldb, etc.
// For the snipcart add to cart is just for aesthethic

// I actually thought of just creating the json data in airtable to authethicate maybe thats the best idea

import React, { useEffect, useState } from "react";
import useAirtable from "../utilities/useAirtable";

const GetProductPage = () => {
  const keychains = useAirtable("Keychains", true);
  const stickers = useAirtable("Stickers", true);
  const pins = useAirtable("Pins", true);

  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const keychainsData = await keychains.datas;
      const stickersData = await stickers.datas;
      const pinsData = await pins.datas;

      const combinedData = [...keychainsData, ...stickersData, ...pinsData];
      setJsonData(combinedData);

      // Send JSON data to backend
      sendJsonDataToBackend(combinedData);
    };

    fetchData();
  }, [keychains, stickers, pins]);

  const sendJsonDataToBackend = async (data) => {
    try {
      const response = await axios.post("YOUR_BACKEND_ENDPOINT", data);
      console.log("Data sent to backend:", response.data);
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  if (jsonData.length === 0) {
    return <div>Loading...</div>;
  }

  const ngrokUrl = "https://factual-octopus-cuddly.ngrok-free.app"; // Replace with your Ngrok URL
  const productUrl = `${ngrokUrl}/getproductpage`;

  // Transform the data into the desired format for Snipcart
  const snipcartProducts = jsonData.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    url: productUrl,
    description: item.description,
    imageUrl: item.imageUrl,
  }));

  // Render Snipcart products
  return (
    <div>
      {snipcartProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button
            className="snipcart-add-item"
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-url={product.url}
            data-item-description={product.description}
            data-item-image={product.imageUrl}
            data-item-name={product.name}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default GetProductPage;
