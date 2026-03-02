import { HeadingItem } from '@/src/01-shared/types/app/docs-pages';

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .normalize('NFC')
    .replace(/[^\p{Letter}\p{Number}\s-]/gu, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

export const getHeadingItems = (content: string): HeadingItem[] => {
  const slugCount: Record<string, number> = {};

  return content
    .split('\n')
    .filter((line) => /^#{1,6}\s/.test(line))
    .map((line) => {
      const level = line.match(/^#{1,6}/)?.[0]?.length || 1;
      const text = line.replace(/^#{1,6}\s/, '').trim();

      let slug = slugify(text);

      if (slugCount[slug] !== undefined) {
        slugCount[slug] += 1;
        slug = `${slug}-${slugCount[slug] - 1}`;
      } else {
        slugCount[slug] = 1;
      }

      return {
        level,
        text,
        id: slug,
      };
    });
};
