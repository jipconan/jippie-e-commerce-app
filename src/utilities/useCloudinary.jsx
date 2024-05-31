import CryptoJS from "crypto-js";

const useCloudinary = () => {
  const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const CLOUDINARY_API_KEY = import.meta.env.VITE_CLOUDINARY_API_KEY;
  const CLOUDINARY_SECRET_KEY = import.meta.env.VITE_CLOUDINARY_SECRET_KEY;
  const CLOUDINARY_PRESET_KEY = import.meta.env.VITE_CLOUDINARY_PRESET_KEY;

  const uploadImage = async (file, category) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_PRESET_KEY);
    formData.append("folder", category);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`Error uploading image: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      secureUrl: data.secure_url,
      publicId: data.public_id,
    };
  };

  const generateSignature = (publicId, apiSecret, timestamp) => {
    const stringToSign = `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
    return CryptoJS.SHA1(stringToSign).toString();
  };

  const deleteImage = async (publicId) => {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const signature = generateSignature(
      publicId,
      CLOUDINARY_SECRET_KEY,
      timestamp
    );

    const formData = new FormData();
    formData.append("public_id", publicId);
    formData.append("timestamp", timestamp);
    formData.append("api_key", CLOUDINARY_API_KEY);
    formData.append("signature", signature);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/destroy`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`Error deleting image: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  };

  return {
    uploadImage,
    deleteImage,
  };
};

export default useCloudinary;
