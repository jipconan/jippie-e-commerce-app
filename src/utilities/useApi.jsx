import { useState, useEffect } from "react";

const useApi = (tableName, shouldFetchData = true) => {
  const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
  const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
  const TABLE_NAME = tableName;

  const options = {
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
  };

  const [datas, setDatas] = useState([]);

  // const fetchDatas = async (filterValue = "", field = null) => {
  const fetchDatas = async () => {
    let url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;
    // if (filterValue && field) {
    //   const filterFormula = encodeURIComponent(`{${field}}="${filterValue}"`);
    //   url = `${baseUrl}?filterByFormula=${filterFormula}`;
    // }

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const jsonData = await response.json();
      setDatas(jsonData.records);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const createDatas = async (fields) => {
    let url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;
    try {
      const payload = {
        fields: fields,
      };

      // console.log(payload);

      const response = await fetch(url, {
        ...options,
        method: "POST",
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Error creating data: ${response.statusText}`);
      }

      // const newData = await response.json();
      // setDatas([...datas, newData]);
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  useEffect(() => {
    if (shouldFetchData) {
      fetchDatas();
    }
  }, [shouldFetchData]);

  const datasData = () => {
    if (!datas) return [];
    return datas.map((data) => ({
      id: data.id,
      ...data.fields,
    }));
  };

  return {
    datas: datasData(),
    createDatas,
    fetchDatas,
  };
};

export default useApi;
