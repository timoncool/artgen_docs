import { createLocalizedDocsSlugPage } from '@/src/05-pages/pages/docs-pages';
import { aboutDocsPages } from '@/src/05-pages/pages/docs-pages';

const { Page, generateMetadata } = createLocalizedDocsSlugPage(aboutDocsPages);

export { generateMetadata };
export default Page;
