import '../styles/index.scss';
import type { AppProps } from 'next/app';
import { MotionConfig } from 'framer-motion';
import { barlowCondensedFont, barlowFont, bellefairFont } from '../utils/font-family.utils';
import { Breakpoints } from '../utils/breakpoints';

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

            --breakpoint-sm: ${Breakpoints.sm};
            --breakpoint-md: ${Breakpoints.md};
            --breakpoint-lg: ${Breakpoints.lg};
            --breakpoint-xl: ${Breakpoints.xl};
          }
        `}
      </style>
      <MotionConfig reducedMotion="user">
        <Component {...pageProps} />
      </MotionConfig>
    </>
  );
}
