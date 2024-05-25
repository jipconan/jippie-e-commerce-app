import React, { useEffect, useState } from "react";

const ProductDataPage = () => {
  const [keychains, setKeychains] = useState([]);
  const [stickers, setStickers] = useState([]);
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [keychainsRes, stickersRes, pinsRes] = await Promise.all([
          fetch("/data/Keychains_response.json"),
          fetch("/data/Stickers_response.json"),
          fetch("/data/Pins_response.json"),
        ]);

        if (!keychainsRes.ok)
          throw new Error(`Keychains fetch error: ${keychainsRes.status}`);
        if (!stickersRes.ok)
          throw new Error(`Stickers fetch error: ${stickersRes.status}`);
        if (!pinsRes.ok) throw new Error(`Pins fetch error: ${pinsRes.status}`);

        const keychainsData = await keychainsRes.json();
        const stickersData = await stickersRes.json();
        const pinsData = await pinsRes.json();

        console.log("Keychains data:", keychainsData);
        console.log("Stickers data:", stickersData);
        console.log("Pins data:", pinsData);

        setKeychains(keychainsData);
        setStickers(stickersData);
        setPins(pinsData);
      } catch (error) {
        console.error("Error fetching JSON files:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Data Page</h1>
      <section>
        <h2>Keychains</h2>
        <ul>
          {keychains.map((item) => (
            <li key={item.id}>Price: ${item.price}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Stickers</h2>
        <ul>
          {stickers.map((item) => (
            <li key={item.id}>Price: ${item.price}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Pins</h2>
        <ul>
          {pins.map((item) => (
            <li key={item.id}>Price: ${item.price}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProductDataPage;
