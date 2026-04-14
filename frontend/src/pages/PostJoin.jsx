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
        documentTitle: "Demo Print121",
        onAfterPrint: () => alert("Print success!"),
        onPrintError: (error) => alert("Print failed: " + error.message),
    });

    const welLetPrintFn = useReactToPrint({
        contentRef: welLetRef, // ✅ NEW API
        documentTitle: "Demo Print121",
        onAfterPrint: () => alert("Print success!"),
        onPrintError: (error) => alert("Print failed: " + error.message),
    });

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 border gap-2">

                {/* Col 1 STARTS HERE */}
                <div className="border-2">
                    <button
                        className="w-full bg-green-100 rounded-lg"
                        onClick={idCardPrintFn}>
                        Download Membership Card
                    </button>

                    <div
                        ref={idCardRef}
                        className="flex justify-center items-center py-2 my-8">
                        <div className="border-2 w-[85.6mm] h-[54mm] bg-white shadow-xl rounded-lg">
                            <div className="flex flex-row justify-center gap-4 bg-gray-200 p-2 shadow-md">
                                <img src="/NGO_Logo.png" alt="NGO Logo" className="size-12" />
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
                    </div>
                </div>
                {/* ---------------------------------------------------------------------------------------------------------------- */}
                {/* Col 2 STARTS HERE */}
                <div className="border-2">
                    <button
                        className="w-full bg-green-100 rounded-lg"
                        onClick={welLetPrintFn}>Download Welcome Letter</button>

                    <div className="flex justify-center bg-gray-100 py-10">
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