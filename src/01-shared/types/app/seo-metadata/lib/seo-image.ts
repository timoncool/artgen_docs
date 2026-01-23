import type { LoraShortItem } from '@/src/01-shared/types/app/generator';

export interface SeoImage {
  id: string;
  category?: string;
  prompt: string | null;
  negative_prompt: string | null;
  link_compress: string;
  model: {
    id: number;
    name: string;
  };
  loras: LoraShortItem[];
}
