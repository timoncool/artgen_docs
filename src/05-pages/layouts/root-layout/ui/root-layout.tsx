import '@/public/styles/index.scss';
import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import '@/public/styles/reset.scss';
import '@/public/styles/global.scss';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { FunctionComponent } from 'react';
import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
  lng: string;
}

const RootLayout: FunctionComponent<RootLayoutProps> = ({ children, lng }) => (
  <html lang={lng} data-mantine-color-scheme='dark'>
    <head>
      <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap' rel='stylesheet' />
      <link
        href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'
        rel='stylesheet'
      />

      <ColorSchemeScript defaultColorScheme='dark' />
    </head>

    <body id={'body'}>
      <MantineProvider defaultColorScheme={'dark'}>{children}</MantineProvider>
    </body>
  </html>
);

export default RootLayout;
