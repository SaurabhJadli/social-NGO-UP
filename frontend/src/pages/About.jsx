import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
    <section className='px-10 md:px-50'>
    <h1 className='mt-6 text-center text-5xl'>About Us</h1>
    <div className='flex justify-center my-4'>
<img src="/aboutUs1.jpeg" alt="" className='rounded max-w-full max-h-120' />
    </div>

      <p className="p-4 mx-7 text-xl">Established in 2023, Mata Radhika Devi Samaj Kalyan Sansthan is an Indian development organization, impacting the lives of over 20 lakh children and their families every year. We have more than 400 projects on education, healthcare, livelihood, and women empowerment in over 2,000 remote villages and urban slums across 27 states of India.</p>
    </section>

{/* OUR MISSION */}
    <section className='px-10 md:px-50 bg-base-300 py-6'>
            <h2 className='mt-6 text-center text-4xl font-bold'>Our Mission</h2>
    <div className='flex justify-center my-4'>
<img src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg" alt="" className='rounded max-w-full max-h-120' />
    </div>

      <p className="p-4 mx-7 text-xl">Established in 2023, Mata Radhika Devi Samaj Kalyan Sansthan is an Indian development organization, impacting the lives of over 20 lakh children and their families every year. We have more than 400 projects on education, healthcare, livelihood, and women empowerment in over 2,000 remote villages and urban slums across 27 states of India.</p>
    </section>


{/* FOUNDERS */}
    <section className='px-10 md:px-50'>
            <h2 className='mt-6 text-center text-4xl font-bold'>Founders</h2>

<div className='flex justify-center p-4 gap-5'>
    <div className="avatar block">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
  </div>
  <p className='text-center p-2'>spdi</p>
</div>

<div className="avatar block">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
  </div>
    <p className='text-center p-2'>spdi</p>
</div>

<div className="avatar block">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
  </div>
  <p className='text-center p-2'>spdi</p>
</div>
</div>

      <p className="p-4 mx-7 text-xl">Established in 2023, Mata Radhika Devi Samaj Kalyan Sansthan is an Indian development organization, impacting the lives of over 20 lakh children and their families every year. We have more than 400 projects on education, healthcare, livelihood, and women empowerment in over 2,000 remote villages and urban slums across 27 states of India.</p>
    </section>
    </>
  )
}

export default About