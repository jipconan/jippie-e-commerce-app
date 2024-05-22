const googleImageConverter = (shareableLink) => {
  if (shareableLink && shareableLink.includes("drive.google.com")) {
    const parts = shareableLink.split("/");
    // console.log(parts); // Log the parts of the link for debugging
    const fileId = parts[5];
    // console.log(`File ID: ${fileId}`); // Log the extracted file ID
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
  } else {
    return shareableLink;
  }
};
export default googleImageConverter;
