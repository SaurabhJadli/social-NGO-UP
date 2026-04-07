const StoryCard = () => {
  return (
    <>
      <div className="card bg-base-100 w-full min-w-40 max-w-60 shadow-sm rounded">
        <figure>
          <img
            src="https://images.pexels.com/photos/31219729/pexels-photo-31219729.jpeg"
            alt="story person"
            className='cover-object w-full h-52' />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">Neha</h2>
          <p>Some people say I am unlucky. My father went away when I was born, and later my mother died in an accident.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-ghost">Read more</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default StoryCard