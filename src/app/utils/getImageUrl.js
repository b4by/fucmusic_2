const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export const getImageUrl = (image) => {
  if (image) {
    if (image.formats?.large?.url) {
      return `${STRAPI_URL}${image.formats.large.url}`;
    } else if (image.formats?.medium?.url) {
      return `${STRAPI_URL}${image.formats.medium.url}`;
    } else if (image.url) {
      return `${STRAPI_URL}${image.url}`;
    }
  }
  return `${STRAPI_URL}${image.url}`;
};
