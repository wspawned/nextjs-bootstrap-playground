import Image from 'next/image';
import Link from 'next/link';

const UtilCard = ({title, route, icon}) => {

  return (
    <div class="col-sm-4 card text-center">
    <Link href={route}>
    {/* <Link href={`/tailwind`}> */}
      <div class="container p-5">
        <Image
          class="card-img-top"
          src="/vercel.svg"
          alt="Card image cap"
          width={100}
          height={24}
          priority
        />
      </div>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">Sandbox</p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </Link>
  </div>
  )
};

export default UtilCard;