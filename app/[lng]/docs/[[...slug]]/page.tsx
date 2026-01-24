import { createLocalizedDocsSlugPage } from '@/src/05-pages/pages/docs-pages';
import { docsPages } from '@/src/05-pages/pages/docs-pages';

const { Page, generateMetadata } = createLocalizedDocsSlugPage(docsPages);

export { generateMetadata };
export default Page;
