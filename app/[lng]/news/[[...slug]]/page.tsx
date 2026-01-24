import { createLocalizedDocsSlugPage } from '@/src/05-pages/pages/docs-pages';
import { newsPages } from '@/src/05-pages/pages/docs-pages';

const { Page, generateMetadata } = createLocalizedDocsSlugPage(newsPages);

export { generateMetadata };
export default Page;
