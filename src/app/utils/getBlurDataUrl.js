const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export const getBlurDataUrl = (image) => {
  if (image) {
    if (image.formats?.thumbnail?.url) {
      return `${STRAPI_URL}${image.formats.thumbnail.url}`;
    } else if (image.formats?.small?.url) {
      return `${STRAPI_URL}${image.formats.small.url}`;
    }
  }
};
