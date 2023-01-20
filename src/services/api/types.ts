export interface ImageElement {
    alt_description: string;
    urls: Urls;
}

export interface Urls {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
}

// DTO
export type ImagesDto = ImageElement[];
