import React from 'react';
import favicon from '../images/あ.svg';

export default function OgImage(): JSX.Element {
  return (
    <>
        <meta property="og:image" content={favicon} />
        <meta property="twitter:image" content={favicon} />
    </>
  );
}
