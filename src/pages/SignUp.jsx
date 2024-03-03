import React from 'react';
import WelcomeSection from '../components/signup/WelcomeSection';
import SignUpForm from '../components/signup/SignUpForm';

const SignUp = () => {
    return (
        <div className="h-screen w-screen sm:flex overflow-x-hidden">
            <div className="sm:w-1/3 ml-1">
                <WelcomeSection />
            </div>
            <div className="sm:w-2/3">
                <main className="px-10 bg-white mt-5">
                    <div className="font-Archivo self-center ml-3.5 text-3xl max-md:text-2xl font-semibold text-center text-black whitespace-nowrap max-md:mt-10">
                        Get Started{" "}
                    </div>
                    <div className="font-Poppins font-normal self-center mt-1.5 ml-3.5 text-base leading-2 max-md:text-base text-center text-black whitespace-nowrap">
                        Register Today to Unlock Your Career
                    </div>
                    <section className="my-auto mt-5 max-md:flex-col">
                        <div className="flex flex-col w-[85%] mx-auto">
                            <SignUpForm />
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default SignUp