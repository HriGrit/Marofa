import logo from "../../assets/marofa-whitebg.png";
import emplogo from "../../assets/employerlogo.png";
import helperlogo from "../../assets/helperlogo.png";


function GetStartedContent() {
    return (
        <>
            <div class="max-w-2xl mx-auto">
                <div class="flex items-center justify-center space-x-2 pb-0">
                    <img src={logo} class="h-10 sm:h-16" alt="MAROFA Logo" />
                    <span class="self-center text-xl font-semibold text-[#14415A] sm:text-3xl">MAROFA</span>
                </div>
                <hr class="my-2 border-[#14415A] border-[1px] rounded sm:mx-auto lg:my-2 " />
                <div class="text-center mb-6 pt-4">
                    <span class="text-xl text-align:center font-bold text-[#14415A] sm:text-3xl">Register</span>
                    <hr class="my-2 mx-auto w-[100px] border-[#14415A] border-[1px] rounded sm:w-[150px] lg:my-2" />
                </div>

                <div class="flex justify-center gap-4">
                    {/* <!-- Employer Card --> */}
                    <div class="bg-white shadow-2xl border-gray border-[1px] rounded-lg max-w-sm p-6">
                        <div class="flex items-center justify-center h-20 w-20 bg-gray-200 rounded-full mx-auto">
                            <img src={emplogo} alt="Employer" class="h-12 w-12" />
                        </div>
                        <div class="mt-4 text-center">
                            <h3 class="text-xl font-semibold text-[#14415A]">Employer</h3>
                            <p class="text-sm mt-2 text-gray-600 sm:text-xl">Get a chance to freely choose your future employer and be hired.</p>
                        </div>
                    </div>

                    {/* <!-- Helper Card --> */}
                    <div class="border-gray border-[1px] bg-white shadow-2xl rounded-lg max-w-sm p-6">
                        <div class="flex items-center justify-center h-20 w-20 bg-gray-200 rounded-full mx-auto">
                            <img src={helperlogo} alt="Helper" class="h-12 w-10" />
                        </div>
                        <div class="mt-4 text-center">
                            <h3 class="text-xl font-semibold text-[#14415A]">Helper</h3>
                            <p class="text-sm mt-2 text-gray-600 sm:text-xl">Be in touch with thousands of candidates and connect with the right one.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default GetStartedContent;