export interface ImageElement {
    alt_description: string;
    urls: ImageUrls;
}

export interface ImageUrls {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
}

export interface FilterOption {
    label: string
    value: string
}

export interface ImageListProps {
    searchedValues: string[]
}

// DTO
export type ImagesDto = ImageElement[];
