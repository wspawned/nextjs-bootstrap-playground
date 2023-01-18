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
      </div>
    </div>
  );
};

export default UtilityCards;