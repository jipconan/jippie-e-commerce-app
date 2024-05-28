import { useState, useEffect, useCallback } from "react";

const useAirtable = (tableName, shouldFetchData = true) => {
  const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
  const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;

  const options = {
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
  };

  const [datas, setDatas] = useState([]);

  // Fetch data function
  const fetchDatas = useCallback(async () => {
    let url = `https://api.airtable.com/v0/${BASE_ID}/${tableName}`;

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
  }, [BASE_ID, tableName, options]);

  // Create data function
  const createDatas = async (fields) => {
    let url = `https://api.airtable.com/v0/${BASE_ID}/${tableName}`;
    try {
      const payload = {
        fields: fields,
      };

      const response = await fetch(url, {
        ...options,
        method: "POST",
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Error creating data: ${response.statusText}`);
      }
      // Refetch data after successful creation
      await fetchDatas();
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  // Update data function
  const updateData = async (id, fields) => {
    let url = `https://api.airtable.com/v0/${BASE_ID}/${tableName}/${id}`;
    try {
      const payload = {
        fields: fields,
      };

      const response = await fetch(url, {
        ...options,
        method: "PATCH",
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Error updating data: ${response.statusText}`);
      }
      // Refetch data after successful update
      await fetchDatas();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  // Delete data function
  const deleteData = async (id) => {
    let url = `https://api.airtable.com/v0/${BASE_ID}/${tableName}/${id}`;
    try {
      const response = await fetch(url, {
        ...options,
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Error deleting data: ${response.statusText}`);
      }
      // Refetch data after successful deletion
      await fetchDatas();
    } catch (error) {
      console.error("Error deleting data:", error);
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
    updateData,
    deleteData,
    refetch: fetchDatas, // Expose refetch function
  };
};

export default useAirtable;
