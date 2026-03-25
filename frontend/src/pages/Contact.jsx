import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
<>
 <Navbar/>
    <section className='px-10 md:px-30'>
    <h1 className='mt-6 text-center text-4xl'>Contact Us</h1>
    <div className='flex justify-center my-4'>
<img src="https://images.pexels.com/photos/31127861/pexels-photo-31127861.jpeg" alt="" className='rounded max-w-full max-h-120' />
    </div>
    </section>

<section>
    <h2 className='m-6 text-4xl'>Visit Us</h2>

<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>

{/* Card 1 Address */}
<div className="card bg-base-100 w-80 shadow-sm hover:shadow-lg hover:bg-amber-100 transition">
  <figure className="px-10 pt-2">
     <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="70"
            height="70"
            viewBox="0 0 640 640">
            <path fill="rgb(99, 230, 190)" 
            d="M576 112C576 100.9 570.3 90.6 560.8 84.8C551.3 79 539.6 78.4 529.7 83.4L413.5 141.5L234.1 81.6C226 78.9 217.3 79.5 209.7 83.3L81.7 147.3C70.8 152.8 64 163.9 64 176L64 528C64 539.1 69.7 549.4 79.2 555.2C88.7 561 100.4 561.6 110.3 556.6L226.4 498.5L399.7 556.3C395.4 549.9 391.2 543.2 387.1 536.4C376.1 518.1 365.2 497.1 357.1 474.6L255.9 440.9L255.9 156.4L383.9 199.1L383.9 298.4C414.9 262.6 460.9 240 511.9 240C534.5 240 556.1 244.4 575.9 252.5L576 112zM512 288C445.7 288 392 340.8 392 405.9C392 474.8 456.1 556.3 490.6 595.2C502.2 608.2 521.9 608.2 533.5 595.2C568 556.3 632.1 474.8 632.1 405.9C632.1 340.8 578.4 288 512.1 288zM472 408C472 385.9 489.9 368 512 368C534.1 368 552 385.9 552 408C552 430.1 534.1 448 512 448C489.9 448 472 430.1 472 408z"/></svg>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Address</h2>
    <p>Village Parsona, Post Badhara
District, Siddharthnagar, (UP)</p>
    <div className="card-actions">
      <button className="btn btn-primary">Open in Maps</button>
    </div>
  </div>
</div>

{/* Card 2 Phone */}
<div className="card bg-base-100 w-80 shadow-sm hover:shadow-lg hover:bg-amber-100 transition">
  <figure className="px-10 pt-2">
     <svg xmlns="http://www.w3.org/2000/svg" 
     width="70"
     height="70"
     viewBox="0 0 640 640">
        <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>
    </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Phone</h2>
    <p>+91 98348XXXXX</p>
    <div className="card-actions">
      <button className="btn btn-primary">Open in Phone</button>
    </div>
  </div>
</div>

{/* Card 3 Email */}
<div className="card bg-base-100 w-80 shadow-sm hover:shadow-lg hover:bg-amber-100 transition">
  <figure className="px-10 pt-2">
            <svg xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 640 640">
                <path fill="rgb(116, 192, 252)" 
                d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z"/></svg>
    </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Email</h2>
    <p>ngo@ngo.com</p>
    <div className="card-actions">
      <button className="btn btn-primary">Open in Email</button>
    </div>
  </div>
</div>
    </div>
    
</section>
    <Footer/>
</>  )
}

export default Contact