/**
 * Utility to generate a cropped image from a source and pixels.
 * @param {string} imageSrc - The source of the image (object URL or data URL)
 * @param {Object} pixelCrop - The pixel crop coordinates from react-easy-crop
 * @returns {Promise<string>} - A promise that resolves with the cropped image as a data URL
 */
export const getCroppedImg = async (imageSrc, pixelCrop) => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return null;
  }

  // Set canvas size to the cropped area
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // Draw the cropped image onto the canvas
  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height,
  );

  // Return the canvas content as a data URL
  return canvas.toDataURL("image/jpeg");
};

/**
 * Helper to wrap image loading in a promise.
 * @param {string} url - The URL of the image
 * @returns {Promise<HTMLImageElement>}
 */
const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous"); // Needed to avoid cross-origin issues on some images
    image.src = url;
  });
