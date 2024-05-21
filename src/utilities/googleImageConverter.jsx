const googleImageConverter = (shareableLink) => {
  if (shareableLink && shareableLink.includes("drive.google.com")) {
    const fileId = shareableLink.split("/")[5];
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
  } else {
    return shareableLink;
  }
};

export default googleImageConverter;
