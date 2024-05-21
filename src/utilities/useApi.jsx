import { useState, useEffect } from "react";

const useApi = (tableName) => {
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
  const [filter, setFilter] = useState("");
  const [filterField, setFilterField] = useState(null);

  const fetchDatas = async (filterValue = "", field = null) => {
    let url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;
    if (filterValue && field) {
      const filterFormula = encodeURIComponent(`{${field}}="${filterValue}"`);
      url = `${baseUrl}?filterByFormula=${filterFormula}`;
    }

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
    try {
      const payload = {
        fields: fields,
      };

      const response = await fetch(baseUrl, {
        ...options,
        method: "POST",
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Error creating data: ${response.statusText}`);
      }

      const newData = await response.json();
      setDatas([...datas, newData]);
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  useEffect(() => {
    fetchDatas(filter, filterField);
  }, [filter, filterField]);

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
    setFilter,
    setFilterField,
  };
};

export default useApi;
