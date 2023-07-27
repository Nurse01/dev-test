function App() {
  return (
    <div className="  py-10">
      {/* header */}
      <div className='px-24 flex justify-between'>
        <div className="flex items-center gap-2 ">
          <p className='text-3xl font-bold text-blue'>oboosho</p>
          <p className='text-xs text-gray-400'>Home cleaning services</p>
        </div>
        <div className="flex items-center gap-x-10">
          <button className="bg-black text-white px-4 rounded-full" >Login</button>
          <div className="flex">
            <svg width="10" height="10">
              <circle cx="5" cy="5" r="3"
                fill="black" />
            </svg>
            <svg width="10" height="10">
              <circle cx="5" cy="5" r="3"
                fill="black" />
            </svg>
            <svg width="10" height="10">
              <circle cx="5" cy="5" r="3"
                fill="black" />
            </svg>
          </div>

        </div>
      </div>
      {/* detail */}
      <div className="px-36 py-20 ">
        <p className="font-medium text-5xl">Our Services</p>
        <div className=" py-32">
          <p className="text-xl font-semibold">Are you ready to schedule your first cleaning? <br />Or maybe you still have some questions?</p>

        </div>
        <div className="grid grid-cols-2 gap-y-20">
          <p className="text-gray-400">We have all the answers!</p>

          <p className="  text-gray-400">Our Support Team is here for you. Give us a call or shoot us an email during business <br /> hours for immediate support. You
            can also reach out to us after hours and  we will get <br /> back to you as <br /> quickly as possible.</p>

          <div>
            <p className="text-xl font-semibold py-5">Contact us</p>
            <div>
              <p>support@oboosho.com</p>
            </div>
            <div>
              <p>(917) 388-6727</p>
            </div>
          </div>
          <div className="font-semibold">
            <p className="text-xl  py-5">Business hours are in EST</p>
            <div className=" flex space-x-16">
              <p>Monday - Friday</p>
              <p>8am - 9pm</p>
            </div>
            <div className="flex space-x-14">
              <p>Saturday - Sunday</p>
              <p>9am- 6pm</p>
            </div>
          </div>
        </div>


      </div>
      {/* Contact */}
      <div className="flex justify-center ">
        <div className="bg-blue text-white w-1/2 py-20 flex flex-col items-center">
          <div className="px-24 flex flex-col items-center">
            <p className="font-medium text-5xl">Still have questions?</p>
            <p className="text-start py-10 text-sm ">Can't find the answer you're looking for? Call us at (917) 288-6727 or email <br />
              support@oboosho.com and we'll tell you oumelen!</p>
            <button className="bg-white rounded-md text-black py-5 px-8 my-24 ">Write E-mail</button>
          </div>
        </div>
        <div className="w-1/2 bg-gray-50  py-20 flex flex-col items-center">
          <div className="flex flex-col items-center">
            <p className="font-medium text-5xl">Book your cleaning</p>
            <p className="text-start py-10 text-sm mx-52">Leave for work  in the morning (or take a spa day). we'll have your place clean and looking great when you get back. We won't even tell anyone
              that we were there that'll be between us.
            </p>
            <button className="bg-blue rounded-md text-white py-5 px-4 my-20">Book your cleaning services today!</button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="px-24 py-32 flex justify-between">
        <div>
          <p className="text-3xl font-bold ">oboosho</p>
          <p className="text-gray-400 py-4 text-sm">Copyright 2017 Oboosho <br />All rights reserved</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="font-semibold">The Goods</p>
          <p className="text-gray-400 text-sm">About us</p>
          <p className="text-gray-400 text-sm">Careers</p>
          <p className="text-gray-400 text-sm">Contact Us</p>
          <p className="text-gray-400 text-sm">Become a Cleaner</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="font-semibold">Our Services</p>
          <p className="text-gray-400 text-sm">Home Cleaning</p>
          <p className="text-gray-400 text-sm">Office Cleaning</p>
          <p className="text-gray-400 text-sm">50 Point Checklist</p>
          <p className="text-gray-400 text-sm">Other menu point</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="font-semibold">Connect</p>
          <p className="text-gray-400 text-sm">Twitter</p>
          <p className="text-gray-400 text-sm">Facebook</p>
          <p className="text-gray-400 text-sm">Instagram</p>
          <p className="text-gray-400 text-sm">Help</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="font-semibold">We clean, you relax. It's that simple!</p>
          <div className="flex justify-end">
            <svg width="30" height="30">
              <circle cx="15" cy="15" r="10"
                fill="#4243c3" />
            </svg>
            <svg width="30" height="30">
              <circle cx="15" cy="15" r="10"
                fill="#4243c3" />
            </svg> <svg width="30" height="30">
              <circle cx="15" cy="15" r="10"
                fill="#4243c3" />
            </svg> <svg width="30" height="30">
              <circle cx="15" cy="15" r="10"
                fill="#4243c3" />
            </svg>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
