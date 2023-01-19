
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

https://blog.logrocket.com/debugging-tailwind-css-next-js/
https://github.com/nrwl/nx/issues/8355

## Bg images

https://tailwindcss.com/docs/background-origin

https://tailwindcss.com/docs/background-size

https://codepen.io/creativeresul/pen/ZEogdPR?editors=1010

https://codepen.io/tag/image-gallery

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

SSL files need to be read inside server.js It is also must be under root folder and fs can be used with nodejs.
```
const fs = require('fs');
const CERT_KEY = process.env.SSL_CERTIFICATE_KEY_PATH;
fs.readFile(CERT_KEY, 'utf8' );
```

server.js
```
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
```

https://www.ibm.com/docs/en/pac/9.1.5?topic=ipac-importing-cacertpem-certificate-into-browser-when-https-is-enabled

https://www.digicert.com/kb/ssl-support/pem-ssl-creation.htm

# Youtube Embedded Videos

Youtube IFrame expects the host to be running on <b>https</b> domain.

The IFrame would work just fine on localhost as localhost is considered as secure, but when hosted on public domain, it needs to be served through Https.

I have used free Certificates from LetsEncrypt to get ssl for the domain, and things started working thereafter.

-----

Videos must be allowed to be embedded and had no copyright issue.

---

It seems that you need to access your page that contains the embedded youtube player through a host name and NOT an IP address.

A Hacky word-around: I set a hostname for my VM in my hosts file and aliased my IP address to dev-vm.

[How to edit your host file](https://docs.rackspace.com/support/how-to/modify-your-hosts-file/)

Now i access the page which has my embedded player like this: `http://dev-vm:3000/video` and now videos that previously gave me a 'video unavailable' error are now playing.

----



