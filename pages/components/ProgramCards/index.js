import Image from 'next/image'

const ProgramCards = () => {
  return(
    <div class="card-deck">
  <div class="card">
    <Image 
    class="card-img-top" 
    src="/vercel.svg" 
    alt="Card image cap"

    width={100}
    height={24}
    priority
    />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <Image 
      class="card-img-top" 
      src="/vercel.svg" 
      alt="Card image cap"

      width={100}
      height={24}
      priority
    />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
  <Image 
      class="card-img-top" 
      src="/vercel.svg" 
      alt="Card image cap"

      width={100}
      height={24}
      priority
    />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
  )
}

export default ProgramCards;

