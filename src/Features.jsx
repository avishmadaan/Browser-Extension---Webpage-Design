import { useState } from "react"

export function Features() {

    const [activeTab, setActiveTab] = useState("simpleBookmarking");

    return (

        <div className="container mx-auto flex flex-col  items-center p-6 mt-3">

            <h1 className="text-4xl font-bold">Features</h1>
            <p className="text-softGray max-w-md  text-md mt-6 text-center  ">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>

            <div className="mt-10 mb-5 flex flex-col md:flex-row items-center gap-4 md:gap-16 border border-b-gray-300 border-white w-full md:w-auto " id="switching">

                <div className="border-4 w-full md:w-auto border-b-softRed md:border-none border-white " id="first" onClick={()=> setActiveTab('simpleBookmarking')}>
                    <h1 className={`text-gray-800 mx-auto  hover:text-softRed cursor-pointer  hover:border-2 border-white text-center   hover:border-b-softRed py-3 ${activeTab === "simpleBookmarking"?"border-b-softRed border-2":""} `}>Simple Bookmarking</h1>
                </div>

                
   
                <div className="border-4 w-full md:w-auto border-b-softRed md:border-none border-white " id="first" onClick={()=> setActiveTab('speedySearching')}>
                    <h1 className={`text-gray-800 text-center hover:text-softRed cursor-pointer  hover:border-2 border-white  hover:border-b-softRed py-3 ${activeTab === "speedySearching"?"border-b-softRed border-2":""} `}>Speedy Searching</h1>
                </div>

                
                <div className="border-4 w-full md:w-auto border-b-softRed md:border-none border-white" id="third" onClick={()=> setActiveTab('easySharing')}>
                    <h1 className={`text-gray-800 text-center hover:text-softRed cursor-pointer hover:border-2 border-white  hover:border-b-softRed py-3 ${activeTab === "easySharing"?"border-b-softRed border-2":""} `}>Easy Sharing</h1>
                </div>

            </div>

            <div className={`flex flex-col md:flex-row mt-10  md:w-auto gap-12 ${activeTab === "simpleBookmarking" ?"":"hidden"}`}>

                <img className="md:w-1/2 " src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-1.svg" alt="" />

                <div className={`2nd md:w-1/2 text-center mx-auto md:text-left `}>
                    <h1 className="text-2xl font-bold ">Bookmark in one click</h1>
                    <p className="mt-6 text-softGray max-w-md ">Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                    <button className=" mt-6 bg-softBlue p-3 rounded-md text-white text-sm border border-softBlue hover:bg-transparent hover:text-softBlue shadow-md md:text-base ">More Info</button>
                </div>
            </div>

            <div className={`flex flex-col md:flex-row mt-10 gap-12  ${activeTab === "speedySearching" ?"":"hidden"}`}>

                <img className="md:w-1/2  " src="	https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-2.svg" alt="" />

                <div className={`2nd md:w-1/2 text-center mx-auto  md:text-left`}>
                    <h1 className="text-2xl font-bold  ">Intelligent search</h1>
                    <p className="mt-6 text-softGray max-w-md">Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                    <button className=" mt-6 bg-softBlue p-3 rounded-md text-white text-sm border border-softBlue hover:bg-transparent hover:text-softBlue shadow-md md:text-base ">More Info</button>
                </div>
            </div>

            <div className={`flex flex-col md:flex-row gap-12 mt-10  ${activeTab === "easySharing" ?"":"hidden"}`}>

                <img className="md:w-1/2 " src="	https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-3.svg" alt="" />

                <div className={`2nd md:w-1/2  text-center mx-auto  md:text-left`}>
                    <h1 className="text-2xl font-bold ">Share your bookmarks</h1>
                    <p className="mt-6 text-softGray max-w-md">Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button.</p>
                    <button className=" mt-6 bg-softBlue p-3 rounded-md text-white text-sm border border-softBlue hover:bg-transparent hover:text-softBlue shadow-md md:text-base ">More Info</button>
                </div>
            </div>

        </div>
    )
}