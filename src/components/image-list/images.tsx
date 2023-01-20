import { useEffect, useState } from "react"
import { apiService } from "../../services/api/api.service"; 
import { ImagesDto } from "../../services/api/types"; 
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from "@mui/material";


const ImagesList: React.FC = () => {
  const [images, setImages] = useState<ImagesDto>([])
  useEffect(() => {
    (async() => {
      const imagesData: ImagesDto | undefined = await apiService.getImagesByQuery(['industrial', 'interior', 'design', 'home', 'decor', 'indoor']);
      if (imagesData) {
        setImages(imagesData)
      }
    })()
  }, [])

  const sizes = {
    width: 1400,
    cols: 6,
    gap: 8,
  }
  const itemSize = Math.ceil((sizes.width-((sizes.cols-1)*sizes.gap))/sizes.cols)

  return (
    <Box sx={{ width: 1400, marginInline: 'auto', height: 'min-content'}}>
      <ImageList variant="masonry" cols={6} gap={8}>
        {images.map((item) => (
          <ImageListItem key={item.urls.raw}>
            <img
              src={`${item.urls.raw}&w=${itemSize}&fit=crop&auto=format`}
              srcSet={`${item.urls.raw}&w=${itemSize}&fit=crop&auto=format&dpr=2 2x`}
              alt={item.alt_description}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default ImagesList