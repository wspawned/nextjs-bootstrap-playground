import Image from 'next/image'

const CreateAppThings = () => {
  return (
    <div>
    <p>
      Get started by editing&nbsp;
      <code>pages/index.js</code>
    </p>
    <div>
      <a
      >
        By{' '}
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
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