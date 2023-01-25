import Head from 'next/head'
import UtilityCards from '../components/UtilityCards'
import CreateAppThings from '../components/CreateAppThings'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>UI Sandbox Next</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <CreateAppThings/>
        <UtilityCards/>
        <Link href="/formv3" >
        <button type="button" class="btn btn-secondary">Secondary</button>
        </Link>

      </main>
    </>
  )
}
