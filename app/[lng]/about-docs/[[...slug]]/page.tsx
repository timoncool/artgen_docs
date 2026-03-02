import { PagesFolder } from '@/src/01-shared/types/app/docs-pages';
import { createLocalizedDocsSlugPage } from '@/src/05-pages/pages/docs-pages';
import { aboutDocsPages } from '@/src/05-pages/pages/docs-pages';

const { Page, generateMetadata } = createLocalizedDocsSlugPage(aboutDocsPages, PagesFolder.ABOUT_DOCS);

export { generateMetadata };
export default Page;
