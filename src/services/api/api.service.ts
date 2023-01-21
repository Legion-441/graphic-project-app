import { ImagesDto } from "./types";


const apiServiceDef = () => {
  // private properties
  const baseUrl = `https://api.unsplash.com`
  // end private properties

  const getImagesByQuery = async (queryTags: string[]): Promise<ImagesDto | undefined> => {
    try {
      const query = queryTags.join('+')
      const response = await fetch(`${baseUrl}/search/photos?query=${query}&order_by=latest&content_filter=low&per_page=30&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
      const images = await response.json()
      return images.results;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    getImagesByQuery,
  }
}

export const apiService = apiServiceDef()