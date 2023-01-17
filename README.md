
# Bootstrap

## Display in print
Change the display value of elements when printing with our print display utility classes. Includes support for the same display values as our responsive .d-* utilities.

# Next.js

## Fonts and Images

Next supports custom fonts and images

```
import Image from 'next/image';
```

https://nextjs.org/docs/basic-features/font-optimization

```
// pages/_app.js

import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
```

https://nextjs.org/docs/basic-features/font-optimization


# Tailwind CSS

## Add the Tailwind directives to your CSS

inside ./styles/globals.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# SSL Certificate

Create file inside root folder named; 

.env.local.example
```
NEXT_PUBLIC_TMDB_API_KEY=XXXXXXXXXXXXXX
NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN=XOXOXOXOXOXOXXOX
JWT_ACCESS_TOKEN=XOXOXOXO
SSL_CERTIFICATE_PATH=/path/to/cert.pem
SSL_CERTIFICATE_KEY_PATH=/path/to/key.pem
```
NEXT_PUBLIC_etc can be reached by browser, others only reachable with nodejs. So, it is needed to read key and pem inside getServerSideProps() by nodejs.

Read from environment 

```
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
```

https://www.ibm.com/docs/en/pac/9.1.5?topic=ipac-importing-cacertpem-certificate-into-browser-when-https-is-enabled

https://www.digicert.com/kb/ssl-support/pem-ssl-creation.htm