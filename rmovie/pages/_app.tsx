import '../styles/globals.css';

import type { AppProps } from 'next/app';
import React from 'react';

import Footer from '../src/Footer';
import Header from '../src/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps}></Component>
      <Footer />
    </>
  );
}
