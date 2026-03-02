import { PagesFolder } from '@/src/01-shared/types/app/docs-pages';
import { createLocalizedDocsSlugPage } from '@/src/05-pages/pages/docs-pages';
import { newsPages } from '@/src/05-pages/pages/docs-pages';

const { Page, generateMetadata } = createLocalizedDocsSlugPage(newsPages, PagesFolder.NEWS);

export { generateMetadata };
export default Page;
