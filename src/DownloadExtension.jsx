 

export function DownloadExtension() {

    return (
        <>
        <div className="container mx-auto  p-7 my-16">

            
        <h1 className="text-3xl font-bold text-center   ">
        Download the extension
        </h1>

        <p className="text-softGray max-w-lg  text-md  mt-5 -2 w-full mx-auto text-center">
        We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
        </p>

        </div>



<div className="boxes flex flex-col md:flex-row  mx-auto md:gap-8 gap-16 px-10  pb-20   lg:max-w-5xl">

    <div className="rounded-lg shadow-md p-6 flex flex-col justify-center items-center w-full" id="one">

        <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-chrome.svg" alt="chrome" />

        <h1 className="py-6 text-xl font-bold"> Add To Chorme</h1>
        <p className="text-gray-400"> Minimum Version 62</p>

        <div className="pt-4 w-full " id="btn">

        <button className="bg-softBlue px-2 py-3 rounded-md text-white text-sm border border-softBlue hover:bg-transparent hover:text-softBlue shadow-md md:text-base w-full">Add & Install Extension</button>


        </div>
    </div>

    <div className="rounded-md shadow-md p-6 flex flex-col justify-center items-center w-full" id="two">

<img src="	https://tailwindfromscratch.com/website-projects/bookmark/images/logo-firefox.svg" alt="chrome" />

<h1 className="py-6 text-xl font-bold"> Add to Firefox</h1>
<p className="text-gray-400"> Minimum Version 55</p>

<div className="pt-4 w-full" id="btn">

<button className="bg-softBlue px-2 py-3 rounded-md text-white text-sm border border-softBlue hover:bg-transparent hover:text-softBlue shadow-md md:text-base w-full">Add & Install Extension</button>


</div>
</div>

<div className="rounded-md shadow-md p-6 flex flex-col justify-center items-center w-full" id="two">

<img src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-opera.svg" alt="chrome" />

<h1 className="py-6 text-xl font-bold">Add to Opera</h1>
<p className="text-gray-400"> Minimum Version 46</p>

<div className="pt-4 w-full" id="btn">

<button className="bg-softBlue px-2 py-3 rounded-md text-white text-sm border border-softBlue hover:bg-transparent hover:text-softBlue shadow-md md:text-base w-full">Add & Install Extension</button>


</div>
</div>
</div>

        </>
    )
}