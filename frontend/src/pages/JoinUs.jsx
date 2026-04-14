import Footer from "../components/Footer";
import { useNavigate } from "react-router";

const JoinUs = () => {

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        navigate("/post-join-us", {
            state: data
        });
        console.log(data);
    };

    return (
        <>
            <section className='px-10 md:px-30'>
                <h1 className='mt-6 text-center text-5xl'>Thank You for Joining Us!</h1>
            </section>

            {/* MEMBERSHIP FORM SECTION */}
            <section className='px-10 md:px-30'>
                <h2 className='m-6 text-4xl text-center bg-green-100 p-4 rounded-lg'>Fill in the form below to join us</h2>
                <div className='justify-items-center'>
                    <form
                        className="w-sm md:w-xl fieldset border-base-300 rounded-box border p-4 hover:shadow-lg hover:bg-gray-50 transition"
                        onSubmit={handleSubmit}>

                        <label className="label text-2xl">Full Name</label>
                        <input type="text" name="name" className="input w-full" placeholder="Aman Singh" maxLength="50" required />

                        <label className="label text-2xl">DOB</label>
                        <input type="date" name="dob" className="input w-full" required />

                        <label className="label mt-4 text-2xl">Phone</label>
                        <input type="number" name='phone' className="input w-full" placeholder="98575XXXXX" maxLength="12" required />

                        <label className="label mt-4 text-2xl">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="emma@gmail.com" maxLength="50" required />

                        <label className="label mt-4 text-2xl">Passport size Photo</label>
                        <input type="file" name="photo" className="file-input" accept="image/*" />
                        <label className="label">Max size 2MB</label>

                        <button className="btn btn-info sm:btn-sm md:btn-md lg:btn-lg mt-4">

                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24">
                                <path fill="rgb(232, 232, 239)"
                                    d="M3.5 7a5 5 0 1 1 10 0a5 5 0 0 1-10 0M5 14a5 5 0 0 0-5 5v2h17v-2a5 5 0 0 0-5-5zm19 7h-5v-2c0-1.959-.804-3.73-2.1-5H19a5 5 0 0 1 5 5zm-8.5-9a5 5 0 0 1-1.786-.329A6.97 6.97 0 0 0 15.5 7a6.97 6.97 0 0 0-1.787-4.671A5 5 0 1 1 15.5 12" />
                            </svg>
                            Pay ₹7000 and become member</button>
                    </form>
                </div>
            </section>

            <Footer />
        </>)
}

export default JoinUs