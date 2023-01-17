
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

## SSL Certificate

```
I made a file with the CA certificates that I get in my Plesk panel, then I added this line in Apache and now it's fixed.

SSLCertificateChainFile C:/Users/Administrator/Desktop/cert/ca-cert.crt
```

https://www.ibm.com/docs/en/pac/9.1.5?topic=ipac-importing-cacertpem-certificate-into-browser-when-https-is-enabled

https://www.digicert.com/kb/ssl-support/pem-ssl-creation.htm

## Tailwind CSS

Add the Tailwind directives to your CSS

inside ./styles/globals.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

