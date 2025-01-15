import { StaticImageData } from 'next/image';

export interface Memory {
  id: number;
  description: string;
  imageUrl: StaticImageData | string;
}