export function  HeroSection() {

    return (

        <div className="container mx-auto p-6 flex flex-col-reverse lg:flex-row justify-center items-center lg:max-w-screen-1440 ">

            <div className="lg:w-1/2" id="left">

            <h1 className="text-3xl font-bold text-center lg:text-6xl lg:text-left">A Simple Bookmark Manager</h1>

            <p className="text-softGray max-w-md  text-lg lg:text-2xl mt-6 text-center lg:text-left ">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>

            <div className="flex mt-6 gap-5 justify-center lg:justify-start" id="buttons">

                <button className="bg-softBlue p-3 rounded-md text-white text-sm border border-softBlue hover:bg-transparent hover:text-softBlue shadow-md md:text-base ">Get It On Chrome</button>

                <button className="bg-softGray p-3 rounded-md text-white text-sm border border-softGray hover:bg-transparent hover:text-softGray shadow-md md:text-base ">Get It On FireFox</button>
            </div>

            </div>

            <div className="lg:w-1/2 relative 
            " id="right">
<div className="bg-softBlue w-[2000px] h-[300px] top-1/3 left-[30%] absolute rounded-bl-full rounded-tl-full hidden lg:block" ></div>


            <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-hero.svg" alt="main" className="z-20 relative" />

            </div>




        </div>
    )
}