import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { useLocation } from "react-router";

const PostJoin = () => {
    const location = useLocation();
    const data = location.state;

    const idCardRef = useRef(null);
    const welLetRef = useRef(null);

    const idCardPrintFn = useReactToPrint({
        contentRef: idCardRef, // ✅ NEW API
        documentTitle: "NGO_member_idCard",
        onAfterPrint: () => alert("Print success!"),
        onPrintError: (error) => alert("Print failed: " + error.message),
    });

    const welLetPrintFn = useReactToPrint({
        contentRef: welLetRef, // ✅ NEW API
        documentTitle: "NGO_member_welcome_letter",
        onAfterPrint: () => alert("Print success!"),
        onPrintError: (error) => alert("Print failed: " + error.message),
    });

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 m-10">

                {/* Col 1 STARTS HERE */}
                <div className="border-2 rounded-lg border-gray-200">
                    <button
                        className="btn w-full bg-green-100 rounded-lg"
                        onClick={idCardPrintFn}>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-[1.2em]"
                            viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M12.554 16.506a.75.75 0 0 1-1.107 0l-4-4.375a.75.75 0 0 1 1.107-1.012l2.696 2.95V3a.75.75 0 0 1 1.5 0v11.068l2.697-2.95a.75.75 0 1 1 1.107 1.013z" />
                            <path fill="currentColor"
                                d="M3.75 15a.75.75 0 0 0-1.5 0v.055c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.981 2.26c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h6.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337V15a.75.75 0 0 0-1.5 0c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103H9c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191" />
                        </svg>
                        Download Membership Card
                    </button>

                    <div
                        ref={idCardRef}
                        className="flex justify-center items-center py-2 my-8">

                        {/* DIV FOR 3D HOVER EFFECT STARTS HERE */}
                        <div className="hover-3d my-12 mx-2 cursor-pointer">
                            {/* CARD STARTS HERE */}
                            <div className="border-2 w-[85.6mm] h-[54mm] bg-white shadow-xl rounded-lg">
                                <div className="flex flex-row justify-center gap-4 bg-gray-200 p-2 shadow-md">
                                    <img src="/NGO_Logo.png" alt="member photo" className="size-12" />
                                    <p className="font-semibold">Mata Radhika Devi Samaj Kalyan Sansthan</p>
                                </div>

                                <div className="grid grid-cols-[30%_auto] p-2">
                                    <div className="justify-center items-center flex">
                                        <img src="/NGO_Logo.png" alt="NGO Logo" className="size-15 flex" />
                                    </div>

                                    <div>
                                        <p>Name: {data.name}</p>
                                        <p>DOB: {data.dob}</p>
                                        <p>Phone: {data.phone}</p>
                                        <p>Email: {data.email}</p>
                                    </div>
                                </div>
                            </div>

                            {/* 8 empty divs needed for the 3D effect */}
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                    </div>
                </div>
                {/* ---------------------------------------------------------------------------------------------------------------- */}
                {/* Col 2 STARTS HERE */}
                <div className="border-2 rounded-lg border-gray-200">
                    <button
                        className="btn w-full bg-green-100 rounded-lg"
                        onClick={welLetPrintFn}>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-[1.2em]"
                            viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M12.554 16.506a.75.75 0 0 1-1.107 0l-4-4.375a.75.75 0 0 1 1.107-1.012l2.696 2.95V3a.75.75 0 0 1 1.5 0v11.068l2.697-2.95a.75.75 0 1 1 1.107 1.013z" />
                            <path fill="currentColor"
                                d="M3.75 15a.75.75 0 0 0-1.5 0v.055c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.981 2.26c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h6.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337V15a.75.75 0 0 0-1.5 0c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103H9c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191" />
                        </svg>
                        Download Welcome Letter</button>

                    <div className="flex justify-center py-8">
                        <div
                            className="w-[210mm] min-h-[297mm] bg-white p-10 shadow-lg"
                            ref={welLetRef}>

                            <h1 className="text-center text-2xl font-bold mb-6">
                                WELCOME LETTER
                            </h1>

                            <p className="mb-4">Dear <strong>{data.name}</strong>,</p>

                            <p className="mb-4">
                                We are delighted to welcome you as a valued member of our organization.
                            </p>

                            <p className="mb-4">
                                On behalf of the entire team at <strong>Mata Radhika Devi Samaj Kalyan Sansthan</strong>, we extend our heartfelt gratitude for joining us and supporting our mission.
                            </p>

                            <p className="mb-4">
                                As a member, you are now part of a community working in education, health, and environment.
                            </p>

                            <p className="mb-4">
                                We encourage your participation and ideas to make a greater impact.
                            </p>

                            <p className="mb-6">
                                Welcome to the NGO family. We look forward to your support.
                            </p>

                            <div className="mt-10">
                                <p>Warm regards,</p>
                                <p className="font-semibold">NGO head name..</p>
                                <p>xyz member</p>
                                <p>Mata Radhika Devi Samaj Kalyan Sansthan</p>
                            </div>

                        </div>
                    </div>


                </div >
            </div>
        </>
    )
}

export default PostJoin