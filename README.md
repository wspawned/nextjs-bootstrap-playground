
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