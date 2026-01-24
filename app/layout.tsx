import { headers } from 'next/headers';
import React from 'react';

import { header_lng_param_name } from '@/src/01-shared/i18next';
import { RootLayout as Layout } from '@/src/05-pages/layouts/root-layout';

const RootLayout = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  const lng = headers().get(header_lng_param_name) as string;

  return <Layout lng={lng}>{children}</Layout>;
};

export default RootLayout;
