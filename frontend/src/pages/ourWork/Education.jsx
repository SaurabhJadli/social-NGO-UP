import React from 'react'
import Stories from '../../components/Stories'

const Education = () => {
  return (
    <>
     <section className='px-10 md:px-30'>
    <h1 className='mt-6 text-center text-5xl'>Education</h1>
    <div className='flex justify-center my-4'>
<img src="/edu1.jpeg" alt="children having lecture" className='rounded max-w-full max-h-120' />
    </div>
    </section>

    <section className='px-10 md:px-50 py-6'>
            <h2 className='mt-6 text-4xl font-bold'>WHY EDUCATION IS IMPORTANT?</h2>

      <p className="my-4 text-xl">Established in 2023, Mata Radhika Devi Samaj Kalyan Sansthan is an Indian development organization, impacting the lives of over 20 lakh children and their families every year. We have more than 400 projects on education, healthcare, livelihood, and women empowerment in over 2,000 remote villages and urban slums across 27 states of India.</p>
    </section>

    <section className='px-10 md:px-50 bg-base-300 py-6'>
            <h2 className='mt-6 text-4xl font-bold'>WHAT WE ARE DOING?</h2>

      <p className="my-4 text-xl">
        Our Foundation’s flagship programme Mission Education works with the objective of empowering underprivileged children by providing education, nutrition, and wellness support. The programme is well aligned to the New Education Policy (2020), and the SDG Goal 4 (Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all). Mission Education works with children (3-18 years) living in difficult circumstances, children from poor families, differently abled children, disaster-struck children, abandoned and street children, and children living in tribal belts, remote villages and hard to reach areas.
        </p>
    </section>

{/* IMAPACT AND PROGRESS */}
    <section>
      <div className='px-10 md:px-50 py-6'>
      <h2 className='mt-6 text-4xl font-bold text-center'>OUR IMPACT</h2>
      <div className='flex justify-center my-4'>
<img src="/edu2.jpeg" alt="children in class" className='rounded max-w-full max-h-80' />
    </div>
      </div>

      <div className="shadow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center md:px-26">
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg 
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block h-8 w-8 stroke-current"
      viewBox="0 0 640 640">
          <path fill="rgb(116, 192, 252)" 
          d="M320 205.3L320 514.6L320.5 514.4C375.1 491.7 433.7 480 492.8 480L512 480L512 160L492.8 160C450.6 160 408.7 168.4 369.7 184.6C352.9 191.6 336.3 198.5 320 205.3zM294.9 125.5L320 136L345.1 125.5C391.9 106 442.1 96 492.8 96L528 96C554.5 96 576 117.5 576 144L576 496C576 522.5 554.5 544 528 544L492.8 544C442.1 544 391.9 554 345.1 573.5L332.3 578.8C324.4 582.1 315.6 582.1 307.7 578.8L294.9 573.5C248.1 554 197.9 544 147.2 544L112 544C85.5 544 64 522.5 64 496L64 144C64 117.5 85.5 96 112 96L147.2 96C197.9 96 248.1 106 294.9 125.5z"/>
      </svg>
    </div>
    <div className="stat-value text-primary">5.6K</div>
    <div className="max-w-2xs text-gray-500">children received quality education</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg 
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block h-10 w-10 stroke-current" 
      viewBox="0 0 640 640">
        <path fill="rgb(255, 113, 224)" 
        d="M264 88C264 57.1 289.1 32 320 32C350.9 32 376 57.1 376 88C376 118.9 350.9 144 320 144C289.1 144 264 118.9 264 88zM240 448L214.2 448C203.3 448 195.6 437.3 199 426.9L242 297.9L193.7 363C183.2 377.2 163.1 380.2 148.9 369.6C134.7 359 131.7 339 142.3 324.8L212.8 229.8C238 196 277.7 176 320 176C362.3 176 402 196 427.2 229.9L497.7 324.9C508.2 339.1 505.3 359.1 491.1 369.7C476.9 380.3 456.9 377.3 446.3 363.1L398 298L441 426.9C444.5 437.3 436.7 448 425.8 448L400 448L400 576C400 593.7 385.7 608 368 608C350.3 608 336 593.7 336 576L336 448L304 448L304 576C304 593.7 289.7 608 272 608C254.3 608 240 593.7 240 576L240 448z"/>
      </svg>
    </div>
    <div className="stat-value text-secondary">1.6K</div>
    <div className="max-w-2xs text-gray-500">girls received vocational training support</div>
  </div>

  <div className="stat">
   <div className="stat-figure text-secondary">
      <svg 
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block h-10 w-10 stroke-current" 
      viewBox="0 0 640 640">
        <path fill="rgb(116, 192, 252)" 
        d="M337.3 51C325.9 48.7 314.2 48.7 302.8 51L115.3 88.5C104.1 90.7 96 100.6 96 112C96 122.3 102.5 131.3 112 134.6L112 208L96.3 286.6C96.1 287.5 96 288.5 96 289.5C96 297.5 102.5 304.1 110.6 304.1L145.5 304.1C153.5 304.1 160.1 297.6 160.1 289.5C160.1 288.5 160 287.6 159.8 286.6L144 208L144 141.3L192 150.9L192 208C192 278.7 249.3 336 320 336C390.7 336 448 278.7 448 208L448 150.9L524.7 135.6C535.9 133.3 544 123.4 544 112C544 100.6 535.9 90.7 524.7 88.5L337.3 51zM320 288C275.8 288 240 252.2 240 208L400 208C400 252.2 364.2 288 320 288zM216.1 384.1C154.7 412.3 112 474.3 112 546.3C112 562.7 125.3 576 141.7 576L296 576L296 430L238.6 387C232.1 382.1 223.4 380.8 216 384.2zM344 576L498.3 576C514.7 576 528 562.7 528 546.3C528 474.3 485.3 412.3 423.9 384.2C416.5 380.8 407.8 382.1 401.3 387L343.9 430L343.9 576z"/>
      </svg>
    </div>
    <div className="stat-value text-blue-500">480</div>
    <div className="max-w-2xs text-gray-500">children received scholarship support for higher studies</div>
  </div>
</div>
    </section>

    <div className='divider'></div>

    <section className='px-10 py-6 md:px-50 bg-base-300'>
      <h2 className='text-4xl font-bold'>Stories</h2>
      <br />
      <Stories/>
    </section>
    </>
    )
}

export default Education