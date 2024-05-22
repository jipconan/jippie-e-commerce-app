import { Cloudinary } from "@cloudinary/url-gen";

const uploadToCloudinary = async (file, category) => {
  const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const CLOUDINARY_API_KEY = import.meta.env.VITE_CLOUDINARY_API_KEY;
  const CLOUDINARY_SECRET_KEY = import.meta.env.VITE_CLOUDINARY_SECRET_KEY;
  const CLOUDINARY_PRESET_KEY = import.meta.env.VITE_CLOUDINARY_PRESET_KEY;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_PRESET_KEY);
  formData.append("folder", category);

  console.log(formData);

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
  return { secureUrl: data.secure_url, publicId: data.public_id }; // Return secure URL and public ID
};

export default uploadToCloudinary;
