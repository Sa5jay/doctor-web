import { CiSearch } from "react-icons/ci";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DoctorFaq = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#FFF7E2]">
      <nav className="pt-5 pb-5">
        <div className="hidden md:flex flex-col justify-between items-center">
          <img
            src="src/assets/DoctorRegImg/logoname.png"
            className="w-48 mb-10"
            alt="logo"
          />
          <div className="flex ml-90 gap-10 font-semibold text-[#3A643B] text-lg">
            <Link to={"/"}><a>Home</a></Link>
            <a>Find doctors</a>
            <a>Lab Tests</a>
            <a>Shop</a>
            <a>Forum</a>
            <a>About Us</a>
            <div className="flex ml-30 gap-8">
              <img src="/DoctoFaqImg/wallet.svg" alt="wallet" />
              <img src="/DoctoFaqImg/cart.svg" alt="cart" />
              <img src="/DoctoFaqImg/bellicon.svg" alt="bell" />
              <img src="/DoctoFaqImg/profile.svg" alt="profile" />
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <img
              src="src/assets/DoctorRegImg/logoname.png"
              className="w-40"
              alt="logo"
            />

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="p-2 rounded-md bg-white/10 hover:bg-white/20"
            >
              <svg className="w-6 h-6 text-[#3A643B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <div
            className={`fixed inset-0 z-50 transition-transform duration-200 ${
              open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />

            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-xl p-6 max-h-[85vh] overflow-auto">
              <div className="flex items-center justify-between mb-4">
                <img src="src/assets/DoctorRegImg/logoname.png" className="w-36" alt="logo" />
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Link to={"/"} onClick={() => setOpen(false)} className="block p-3 rounded-md bg-[#FFFBF2] text-center font-semibold text-[#3A643B]">Home</Link>
                <button onClick={() => setOpen(false)} className="block p-3 rounded-md bg-[#FFFBF2] text-center font-semibold text-[#3A643B]">Find doctors</button>
                <button onClick={() => setOpen(false)} className="block p-3 rounded-md bg-[#FFFBF2] text-center font-semibold text-[#3A643B]">Lab Tests</button>
                <button onClick={() => setOpen(false)} className="block p-3 rounded-md bg-[#FFFBF2] text-center font-semibold text-[#3A643B]">Shop</button>
                <button onClick={() => setOpen(false)} className="block p-3 rounded-md bg-[#FFFBF2] text-center font-semibold text-[#3A643B]">Forum</button>
                <button onClick={() => setOpen(false)} className="block p-3 rounded-md bg-[#FFFBF2] text-center font-semibold text-[#3A643B]">About Us</button>
              </div>

              <div className="mt-6 border-t pt-4">
                <h3 className="text-sm text-gray-600 mb-3">Quick actions</h3>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img src="/DoctoFaqImg/wallet.svg" className="w-6 h-6" alt="wallet" />
                    <span className="text-sm font-medium">Wallet</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/DoctoFaqImg/cart.svg" className="w-6 h-6" alt="cart" />
                    <span className="text-sm font-medium">Cart</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/DoctoFaqImg/bellicon.svg" className="w-6 h-6" alt="notifications" />
                    <span className="text-sm font-medium">Notifications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/DoctoFaqImg/profile.svg" className="w-7 h-7" alt="profile" />
                    <span className="text-sm font-medium">Profile</span>
                  </div>
                </div>

                <div className="mt-6">
                  <button onClick={() => setOpen(false)} className="w-full bg-[#3A643B] text-white py-3 rounded-md font-semibold">Join Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <header
        className="w-full bg-[url('/DoctoFaqImg/header.png')] bg-cover bg-center"
        style={{ minHeight: "202px" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-10 flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">FAQ</h1>

          <div className="w-full flex justify-center mt-4 md:mt-6">
            <div className="relative w-full max-w-[500px]">
              <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
              <input
                type="text"
                placeholder="Search for any queries that you have"
                className="bg-white w-full h-10 md:h-12 rounded-md pl-10 pr-4 text-sm md:text-base outline-none shadow-sm"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="pt-10 pb-10 px-4">
        <div className="text-lg sm:text-xl flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-20 font-semibold">
          <a className="text-[#3A643B] underline">Consultation</a>
          <a className="hover:underline text-gray-600">Wallet</a>
          <a className="hover:underline text-gray-600">Forum</a>
          <a className="hover:underline text-gray-600">Shop</a>
        </div>

        <div className="mt-10 w-full max-w-4xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">
                What types of consultations are available?
              </AccordionTrigger>
              <AccordionContent>
                We provide three types of consultations - video, instant call and chat consultation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">
                Can I get refund for the wallet money?
              </AccordionTrigger>
              <AccordionContent>
                We provide three types of consultations - video, instant call and chat consultation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">
                What is the Amrutam Forum?
              </AccordionTrigger>
              <AccordionContent>
                We provide three types of consultations - video, instant call and chat consultation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">
                Can I pause the audio consultation?
              </AccordionTrigger>
              <AccordionContent>
                We provide three types of consultations - video, instant call and chat consultation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg">
                Is there a minimum duration for an audio consultation?
              </AccordionTrigger>
              <AccordionContent>
                We provide three types of consultations - video, instant call and chat consultation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg">
                Can I get refund for the wallet money?
              </AccordionTrigger>
              <AccordionContent>
                We provide three types of consultations - video, instant call and chat consultation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg">
                What is the Amrutam Forum?
              </AccordionTrigger>
              <AccordionContent>
                We provide three types of consultations - video, instant call and chat consultation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg">
                Can I pause the audio consultation?
              </AccordionTrigger>
              <AccordionContent>
                We provide three types of consultations - video, instant call and chat consultation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="text-lg">
                Is there a minimum duration for an audio consultation?
              </AccordionTrigger>
              <AccordionContent>
                We provide three types of consultations - video, instant call and chat consultation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex justify-center mt-10">
          <Button className="bg-[#FFF7E2] px-6 py-5 text-lg text-[#3A643B] border shadow-lg">
            Load More &gt;
          </Button>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl mb-4 text-[#33643F] font-bold">
              Download Amrutam Ayurveda
              <br /> App Now
            </h1>

            <p className="text-base sm:text-md text-gray-500 mb-6">
              The Amrutam Ayurveda App is your one-stop app
              <br /> for all things Ayurveda! Apart from mimicking the
              <br /> website, the app has added benefits
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-[#33643F]">
              <div className="border flex gap-3 items-center rounded-md py-2 border-[#9E9E9E]">
                <img
                  src="/DoctoFaqImg/msg.svg"
                  className="w-8 h-8 sm:w-12 sm:h-12"
                />
                <p className="text-sm sm:text-base leading-tight">
                  Build Trust and
                  <br />
                  Community with Forum
                </p>
              </div>

              <div className="border flex gap-3 items-center rounded-md py-2 border-[#9E9E9E]">
                <img
                  src="/DoctoFaqImg/msg.svg"
                  className="w-8 h-8 sm:w-12 sm:h-12"
                />
                <p className="text-sm sm:text-base leading-tight">
                  Earn More with Pay
                  <br />
                  Per Conversation
                </p>
              </div>

              <div className="border flex gap-3 items-center rounded-md py-2 border-[#9E9E9E]">
                <img
                  src="/DoctoFaqImg/msg.svg"
                  className="w-8 h-8 sm:w-12 sm:h-12"
                />
                <p className="text-sm sm:text-base leading-tight">
                  Attract Patients with
                  <br />
                  5-Minute Free Call
                </p>
              </div>

              <div className="border flex gap-3 items-center rounded-md py-2 border-[#9E9E9E]">
                <img
                  src="/DoctoFaqImg/msg.svg"
                  className="w-8 h-8 sm:w-12 sm:h-12"
                />
                <p className="text-sm sm:text-base leading-tight">
                  Instant Access to Your
                  <br />
                  Earnings with Wallet
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-3 sm:gap-4 mt-6 w-full justify-center sm:justify-start">
              <Button className="w-40 sm:w-56 md:w-64 h-12 md:h-16 flex items-center justify-center gap-3 ">
                <span className="shrink-0 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                  <IoLogoGooglePlaystore
                    style={{ width: "40px", height: "40px" }}
                  />
                </span>
                <span className="text-xs sm:text-sm md:text-base leading-tight">
                  GET IT ON
                  <br />
                  Google Play
                </span>
              </Button>

              <Button className="w-40 sm:w-56 md:w-64 h-12 md:h-16 flex items-center justify-center gap-3 px-3 md:px-4">
                <span className="shrink-0 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                  <FaApple style={{ width: "40px", height: "40px" }} />
                </span>
                <span className="text-xs sm:text-sm md:text-base leading-tight">
                  Download on the
                  <br />
                  App Store
                </span>
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="/DoctorRegImg/sec5img1.svg"
              className="w-full max-w-[420px] h-auto"
            />
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default DoctorFaq;
