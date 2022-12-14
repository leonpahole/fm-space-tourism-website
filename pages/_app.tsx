import '../styles/index.scss';
import type { AppProps } from 'next/app';
import { barlowCondensedFont, barlowFont, bellefairFont } from '../utils/font-family.utils';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx global>
        {`
          html {
            --bellefair-font: ${bellefairFont.style.fontFamily};
            --barlow-condensed-font: ${barlowCondensedFont.style.fontFamily};
            --barlow-font: ${barlowFont.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
