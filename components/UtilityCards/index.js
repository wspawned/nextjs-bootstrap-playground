import Image from 'next/image'
import Link from 'next/link';
import UtilCard from './UtilCard';

const UtilityCards = () => {
  return (
    <div class="container">
      <div class="row card-deck">
        <UtilCard title={"Tailwind"} route={`/tailwind`} />
        <UtilCard title={"NextJS"} route={`/nextjs`} />
        <UtilCard title={"Bootstrap"} route={`/bootstrap`} />
        {/* <div class="col-sm-4 card text-center">
          <Link href={`/tailwind`}>
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
              <h5 class="card-title">Bootstrap</h5>
              <p class="card-text">Sandbox</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </Link>
        </div>
        <div class="col-sm-4 card text-center">
          <Link href={`/tailwind`}>
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
              <h5 class="card-title">Tailwind</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </Link>
        </div>
        <div class="col-sm-4 card text-center">
          <Link href={`/tailwind`}>
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
              <h5 class="card-title">Next</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default UtilityCards;