import { Menu, X } from "lucide-react";
import { useState } from "react"

export function Navbar() {

    const [open, setOpen] = useState(false);


    return (
<div className="container mx-auto p-6 lg:max-w-screen-1440">

    <div className="flex items-center justify-between my-6  ">

    <img src={`${open?"https://tailwindfromscratch.com/website-projects/bookmark/images/logo-bookmark-footer.svg" :"https://tailwindfromscratch.com/website-projects/bookmark/images/logo-bookmark.svg"} `} className="z-20 " />

<div className="text-softGray md:flex gap-10 text-md items-center hidden "  id="menu">
    <a href="" className="tracking-widest cursor-pointer hover:text-red-300 uppercase ">Features</a>

    <a href="" className="tracking-widest cursor-pointer hover:text-red-300 uppercase ">Download</a>

    <a href="" className="tracking-widest cursor-pointer hover:text-red-300 uppercase ">faq</a>

    <a href="" className="tracking-widest cursor-pointer uppercase bg-softRed px-8 rounded-lg py-2 text-white shadow-md   hover:text-softRed hover:bg-transparent border border-softRed ">Login</a>
</div>

<div id="handburger" className="block md:hidden" onClick={() => setOpen(!open)}>
    {open? <X className="relative z-20 cursor-pointer text-white" /> :<Menu />}
    
</div>



<div id="mobilemenu" className={`absolute inset-0 gap-8 transition-all duration-100 ease-in bg-[#252b46] bg-opacity-90 flex flex-col ${open?" opacity-100 visible ":"opacity-0 invisible "}  py-6 px-6 pt-24 justify-normal items-center text-white uppercase md:hidden z-10`}>

    <a href="" className="mt-4 tracking-widest cursor-pointer hover:text-red-300 uppercase ">Features</a>

<a href="" className="tracking-widest cursor-pointer hover:text-red-300 uppercase ">Download</a>

<a href="" className="tracking-widest cursor-pointer hover:text-red-300 uppercase ">faq</a>

<a href="" className="tracking-widest cursor-pointeruppercase bg-softRed px-8 rounded-lg py-2 text-white shadow-md   hover:text-softRed hover:bg-transparent border border-softRed ">Login</a>




</div>


    </div>

  

</div>
    )
}