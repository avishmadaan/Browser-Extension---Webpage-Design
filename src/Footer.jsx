
export function Footer() {

    return (
        <div className=" bg-[#242A46] p-7 py-10  " >


            <div className="lg:max-w-screen-1440 flex flex-col md:flex-row items-center justify-between">


            <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-bookmark-footer.svg" alt="" />

<div className="text-softGray flex gap-6 text-md items-center flex-col md:flex-row my-10"  id="menu">
<a href="" className="tracking-widest cursor-pointer hover:text-red-300 uppercase ">Features</a>

<a href="" className="tracking-widest cursor-pointer hover:text-red-300 uppercase ">Download</a>

<a href="" className="tracking-widest cursor-pointer hover:text-red-300 uppercase ">faq</a>




</div>

<div className="flex gap-10 mt-5" id="socials">
<img src="	https://tailwindfromscratch.com/website-projects/bookmark/images/icon-facebook.svg" alt="" />

<img src="https://tailwindfromscratch.com/website-projects/bookmark/images/icon-twitter.svg" alt="" />
</div>


            </div>
            
        </div>
    )
}