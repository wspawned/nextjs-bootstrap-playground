import styles from '../../styles/Home.module.css'
import Image from 'next/image'

const CreateAppThings = () => {
  return (
    <div className={styles.description}>
    <p>
      Get started by editing&nbsp;
      <code className={styles.code}>pages/index.js</code>
    </p>
    <div>
      <a
      >
        By{' '}
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={100}
          height={24}
          priority
        />
      </a>
    </div>
  </div>
  )
}

export default CreateAppThings;