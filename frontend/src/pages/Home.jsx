import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const Home = () => {
  return (
<>
<Navbar/>
<br /><br />
<main>
  <Carousel/>
  <p className="p-4 mx-7 text-xl">Established in 2023, Mata Radhika Devi Samaj Kalyan Sansthan is an Indian development organization, impacting the lives of over 20 lakh children and their families every year. We have more than 400 projects on education, healthcare, livelihood, and women empowerment in over 2,000 remote villages and urban slums across 27 states of India.</p>

  <p className="p-4 mx-7 text-xl">Mata Radhika Devi Samaj Kalyan Sansthan works as a catalyst in the cycle of change, complementing and supplementing government efforts (view details) to achieve the Sustainable Development Goals. We sensitize and partner with like-minded institutions and individuals to implement high-impact programmes that enable access, enhance quality and help bring long term behavioural change at the grassroots.
</p>
<div className="text-xl text-center text-blue-500">
<a href="">read more..</a>
</div>

<div>
  <h2>Our Progress</h2>
</div>
<hr />
<div>
  <h2>Join Our Mission</h2>
  <button className="btn ">Donate</button>
  <button className="btn">Become a Member</button>
</div>

</main>

<Footer/>
</>  
)
}

export default Home