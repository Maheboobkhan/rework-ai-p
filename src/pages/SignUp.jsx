import React from 'react';
import WelcomeSection from '../components/signup/WelcomeSection';
import SignUpForm from '../components/signup/SignUpForm';

const SignUp = () => {
    return (
        <div className="h-screen w-screen sm:flex overflow-x-hidden">
            <div className="sm:w-1/3 ml-1">
                <WelcomeSection />
            </div>
            <div className="sm:w-2/3 sm:pt-12 sm:pb-5">
                <main className="px-10 sm:pt-10 bg-white">
                    <div className="font-Archivo self-center mt-12 ml-3.5 text-4xl max-md:text-3xl font-semibold text-center text-black whitespace-nowrap max-md:mt-10">
                        Get Started{" "}
                    </div>
                    <div className="font-Poppins font-normal self-center mt-1.5 ml-3.5 text-lg leading-3 max-md:text-base text-center text-black whitespace-nowrap">
                        Register Today to Unlock Your Career
                    </div>
                    <section className="flex my-auto gap-5 mt-7 max-md:flex-col">
                        <div className="flex flex-col w-[90%] mx-auto">
                            <SignUpForm />
                            <div className="flex gap-1.5 self-center mt-4 max-md:mt-1 text-base max-md:text-sm text-center">
                                <div className="font-medium text-neutral-600">Already have an account?</div>
                                <button className="font-bold text-violet-800">Login</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default SignUp