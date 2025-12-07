import { Button } from "@/components/ui/button";
import { FaUserDoctor } from "react-icons/fa6";
import LogoLoop from "@/components/LogoLoop";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Footer from "@/components/Footer";
import StaggerChars from "@/components/ui/stagger-chars";
import { Link } from "react-router-dom";

const DoctorReg = () => {
  const sec1imageLogos = [
    { src: "/src/assets/DoctorRegImg/logo1.png" },
    { src: "/src/assets/DoctorRegImg/logo2.png" },
    { src: "/src/assets/DoctorRegImg/logo3.png" },
    { src: "/src/assets/DoctorRegImg/logo4.png" },
    { src: "/src/assets/DoctorRegImg/logo5.png" },
    { src: "/src/assets/DoctorRegImg/logo6.png" },
    { src: "/src/assets/DoctorRegImg/logo7.png" },
    { src: "/src/assets/DoctorRegImg/logo8.png" },
    { src: "/src/assets/DoctorRegImg/logo9.png" },
  ];
  const Sec3 = [
    {
      steps: "Step 1: Get your referral code",
      desc: "Contact us to receive your unique referral code.",
    },
    {
      steps: "Step 2: Register on Amrutam",
      desc: "Sign up on the Amrutam Doctors app or website to join our specialist network.",
    },
    {
      steps: "Step 3: Complete KYC",
      desc: "Fill in your details and upload the required documents for verification.",
    },
    {
      steps: "Step 4: Start consulting",
      desc: "Once verified, begin offering consultations and helping patients.",
    },
  ];
  const sec4 = [
    {
      name: "Dr. Rajesh Iyer",
      doctor: "Ayurvedic Practitioner",
      des: "Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle.",
    },
    {
      name: "Dr. Pooja Deshmukh",
      doctor: " BAMS",
      profile: "",
      des: "Amrutam’s formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing.",
    },
    {
      name: "Dr. Ananya Sharma",
      doctor: " BAMS",
      profile: "",
      des: "As an Ayurvedic doctor, I appreciate Amrutam’s commitment to purity and efficacy. Their herbal blends are thoughtfully crafted, ensuring maximum benefits for mind and body. I’ve personally seen positive results in my patients using their products.",
    },
  ];
  const sec5 = [
    { title: "What is Amrutam?" },
    { title: "How does Amrutam help me grow as a practitioner?" },
    { title: "How do I become a part of Amrutam Doctor?" },
    { title: "What is Amrutam Global as a platform?" },
    { title: "What documents do I need to provide?" },
    { title: "Is there a fee to join Amrutam?" },
  ];

  return (
    <div>
      <div className="w-full bg-[#373636] text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-3 md:gap-5 px-4 py-3 md:h-[67px]">
          <p className="text-xs sm:text-sm md:text-lg text-center md:text-left w-full md:w-auto">
            Register Yourself As An Amrutam Doctor
          </p>

          <Button className="bg-[#3A643B] px-4 py-2 md:px-6 md:py-0 w-auto sm:w-32 md:w-72 flex items-center justify-center gap-2">
            <FaUserDoctor />
            <span className="text-sm md:text-base">Join Now</span>
          </Button>
        </div>
      </div>

      <main className="bg-[#FFF8E6]">
        <header>
          <div className="bg-[#FFF7E2] w-full flex-col flex  items-center md:h-[122px]">
            <img
              src="/src/assets/DoctorRegImg/logoname.png"
              className=" w-32 md:w-50 mt-2 mb-5 md:mb-10"
            />
            <nav>
              <ul className="flex gap-5 md:gap-10 text-sm md:text-lg font-medium">
                <li>About Us</li>
                <li>Onboarding</li>
                <Link to={"/faq"}>
                  <li>FAQ</li>
                </Link>
                <li>Testimonials</li>
              </ul>
            </nav>
          </div>
          <div className="bg-linear-to-r from-[#FFE6A5] to-[#FFF6DD] w-full">
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
              <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 md:gap-16">
                <div className="flex-1">
                  <p className="text-sm md:text-lg text-gray-700">
                    Namaste, Welcome to Amrutam
                  </p>

                  <h1 className="font-bold text-xl md:text-4xl mt-2 md:mt-4 leading-tight">
                    Join Amrutam -{" "}
                    <span className="text-[#3A643C]">Grow Your Practice</span>
                  </h1>

                  <p className="text-xs md:text-lg text-gray-700 mt-3 md:mt-5 max-w-xl">
                    Connect with more patients, set your own schedule,
                    <br className="hidden md:block" />
                    and grow your Ayurvedic practice effortlessly.
                  </p>

                  <div className="mt-6 md:mt-8">
                    <Button className="bg-[#3A643C] text-white font-medium rounded-md px-6 py-2 md:px-10 md:py-4">
                      <StaggerChars text="Join Now" className="text-white" />
                    </Button>
                  </div>

                  <div className="flex gap-6 md:gap-12 mt-6 md:mt-8">
                    <div className="text-center">
                      <p className="text-lg md:text-2xl font-semibold">500+</p>
                      <p className="text-xs md:text-sm text-gray-700">
                        Average Active Users
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-lg md:text-2xl font-semibold">40+</p>
                      <p className="text-xs md:text-sm text-gray-700">
                        Average daily free calls
                      </p>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 w-full md:w-auto flex justify-center md:justify-end">
                  <img
                    src="/src/assets/DoctorRegImg/header.png"
                    alt="Amrutam"
                    className="w-40 md:w-[420px] h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
        <section
          className="flex flex-col justify-center items-center   
  px-4 py-10 md:py-16 text-center"
        >
          <h1 className="text-[#33643F] text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Featured
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-8 max-w-2xl">
            Recognized and celebrated by leading publications – Amrutam in the
            spotlight!
          </p>

          <div className="w-full">
            <LogoLoop
              logos={sec1imageLogos}
              speed={120}
              direction="left"
              logoHeight={70}
              gap={40}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#FFF8E6"
              ariaLabel="Technology partners"
            />
          </div>
        </section>
        <section>
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-10">
              <h1 className="text-[#3A643C] text-2xl sm:text-3xl md:text-4xl font-bold">
                Why Doctors Choose Us?
              </h1>
              <p className="text-sm sm:text-base text-gray-700 mt-3">
                Unlock the Benefits of Smarter Healthcare Management and Patient
                Care
              </p>
            </div>
            <div className="grid gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                <div className="flex justify-center md:justify-start">
                  <img
                    src="/src/assets/DoctorRegImg/sec2img1.png"
                    alt="Instant Call"
                    className="w-40 md:w-96 h-auto object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-[#3A643C] text-xl md:text-2xl font-bold mb-3">
                    Instant FREE 5-Mins Call
                  </h2>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xl">
                    We understand the importance of building trust with your
                    patients. That’s why Amrutam offers a free 5-minute call,
                    helping you connect instantly and foster lasting patient
                    relationships with ease.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                <div className="order-2 md:order-1">
                  <h2 className="text-[#3A643C] text-xl md:text-2xl font-bold mb-3">
                    Forum for Meaningful Connections
                  </h2>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xl">
                    We value your journey in Ayurveda. The Amrutam Forum helps
                    you engage with patients and answer questions, while the
                    “Thoughts” section allows you to share deeper Ayurvedic
                    wisdom.
                  </p>
                </div>
                <div className="order-1 md:order-2 flex justify-center md:justify-end">
                  <img
                    src="/src/assets/DoctorRegImg/sec2img2.png"
                    alt="Forum"
                    className="w-40 md:w-96 h-auto object-contain"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                <div className="flex justify-center md:justify-start">
                  <img
                    src="/src/assets/DoctorRegImg/sec2img3.png"
                    alt="Session Mode"
                    className="w-40 md:w-96 h-auto object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-[#3A643C] text-xl md:text-2xl font-bold mb-3">
                    Choose Your Session Mode
                  </h2>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xl">
                    Amrutam lets you connect with patients via Instant Chat,
                    Instant Call, or Scheduled Video Call. Each option offers
                    flexibility and personalized care to suit individual needs.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                <div className="order-2 md:order-1">
                  <h2 className="text-[#3A643C] text-xl md:text-2xl font-bold mb-3">
                    Smart Wallet
                  </h2>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xl">
                    We understand the need for seamless transactions. With
                    Amrutam Wallet, you can easily withdraw payments, and for
                    your security a one-time password is sent to your registered
                    mobile number during withdrawals.
                  </p>
                </div>
                <div className="order-1 md:order-2 flex justify-center md:justify-end">
                  <img
                    src="/src/assets/DoctorRegImg/sec2img4.png"
                    alt="Smart Wallet"
                    className="w-40 md:w-96 h-auto object-contain"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 pb-6">
                <div className="flex justify-center md:justify-start">
                  <img
                    src="/src/assets/DoctorRegImg/sec2img3.png"
                    alt="Flexible Timing"
                    className="w-40 md:w-96 h-auto object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-[#3A643C] text-xl md:text-2xl font-bold mb-3">
                    Flexible Work Timing
                  </h2>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xl">
                    Manage your time with the availability toggle in the
                    doctor’s app — control when patients can book consultations,
                    ensuring a balanced and stress-free practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" px-4 py-10 md:py-16">
          <div className="text-center mb-10">
            <h1 className="text-[#33643F] text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              Join Our Circle of Care
            </h1>
            <p className="text-sm md:text-base text-gray-700">
              Becoming a part of Amrutam is simple
            </p>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center gap-10 md:gap-20">
            <div className="w-full md:w-auto">
              {Sec3.map((item, index) => (
                <div
                  key={index}
                  className="mb-6 border border-[#3A643C] px-4 py-5 w-full md:w-[578px] rounded-lg"
                >
                  <h2 className="text-[#3A643C] text-lg md:text-xl font-bold mb-2">
                    {item.steps}
                  </h2>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="md:mt-20 flex justify-center md:justify-end w-full md:w-auto">
              <img
                src="/src/assets/DoctorRegImg/sec3img1.png"
                className="w-58 sm:w-64 md:w-auto"
                alt="steps visual"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mt-8 px-4">
            <Button className="bg-[#3A643C] text-white px-3 py-2 md:px-6 md:py-2 rounded">
              Consultations
            </Button>

            <Button className="bg-[#FFF7E2] hover:text-white hover:bg-[#3A643C] text-[#3A643C] border border-[#3A643C] px-3 py-2 md:px-6 md:py-2 rounded">
              Payment withdrawal
            </Button>

            <Button className="bg-[#FFF7E2] hover:text-white hover:bg-[#3A643C] text-[#3A643C] border border-[#3A643C] px-3 py-2 md:px-6 md:py-2 rounded">
              Schedule
            </Button>
          </div>

          <div className="mt-10 pb-5 px-4">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-6">
              <div className="text-center text-[#3A643C]">
                <h2 className="text-[10px] sm:text-xs md:text-2xl font-bold">
                  Value Your Practice
                </h2>
                <img
                  src="/src/assets/DoctorRegImg/sec3img2.png"
                  className="mx-auto mt-2 w-[100px] sm:w-[90px] md:w-full md:max-w-[288px] h-auto"
                />
              </div>

              <div className="text-center text-[#3A643C]">
                <img
                  src="/src/assets/DoctorRegImg/sec3img2.png"
                  className="mx-auto w-[100px] sm:w-[90px] md:w-full md:max-w-[288px] h-auto"
                />
                <h2 className="text-[10px] sm:text-xs md:text-2xl mt-2 font-bold">
                  Today's Healing Journey
                </h2>
              </div>

              <div className="text-center text-[#3A643C]">
                <h2 className="text-[10px] sm:text-xs md:text-2xl font-bold">
                  Consultation Details
                </h2>
                <img
                  src="/src/assets/DoctorRegImg/sec3img2.png"
                  className="mx-auto mt-2 w-[100px] sm:w-[90px] md:w-full md:max-w-[288px] h-auto"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button className="bg-[#3A643C]  text-white mt-10 w-32 md:w-40 py-2">
              <StaggerChars text="Join Now" className="text-white" />
            </Button>
          </div>
        </section>
        <section className="flex flex-col gap-3 justify-center items-center p-10 bg-transparent">
          <div className="text-center max-w-4xl">
            <h1 className="text-3xl sm:text-4xl text-[#33643F] font-bold">
              What other Ayurvedic Doctors are Saying
            </h1>
            <p className="mt-2 text-sm sm:text-base">
              Trusted by experts – Hear what Ayurvedic doctors say about
              Amrutam!
            </p>
          </div>

          <div className="w-full max-w-7xl mx-auto px-4 mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {sec4.map((item, index) => (
                <article
                  key={index}
                  className="border border-gray-300 bg-[#FFEEC3] rounded-lg p-5 flex flex-col gap-4"
                >
                  <div className="flex items-start gap-3">
                    <img
                      src="/src/assets/DoctorRegImg/sec4profile.svg"
                      alt={`${item.name} profile`}
                      className="w-12 h-12 rounded-full shrink-0"
                    />
                    <div>
                      <h3 className="font-bold text-sm sm:text-base">
                        {item.name},{" "}
                        <span className="text-gray-500 text-sm">
                          {item.doctor}
                        </span>
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {item.des}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="p-5">
          <div className="text-center">
            <h1 className="text-4xl mb-2 text-[#33643F] font-bold">
              Frequently Asked Questions
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base">
              Find quick answers to common questions to help you navigate the
              app and its features easily.
            </p>
          </div>

          <div className="pt-5 flex flex-col justify-center items-center">
            <div className="w-full max-w-4xl px-4">
              {sec5.map((item, index) => (
                <div key={index} className="w-full mt-5">
                  <div className="flex items-center justify-between text-gray-500">
                    <h3 className="mb-7 text-lg">{item.title}</h3>
                    <span className="text-xl">+</span>
                  </div>
                  <hr />
                </div>
              ))}

              <div className="flex justify-center">
                <Button className="bg-[#3A643C] text-lg text-white mt-10 w-32 md:w-40 py-6">
                  See More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="bg-[#FFEDBF]">
            <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
              <div className="w-full lg:w-1/2">
                <h1 className="text-3xl sm:text-4xl mb-4 text-[#33643F] font-bold">
                  Get Started Today –<br /> Download the App Now!
                </h1>

                <p className="text-base sm:text-lg text-gray-500 mb-6">
                  Simplify consultations, manage patients, and
                  <br /> grow your practice—all in one place.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-[#33643F]">
                  <div className="border flex gap-3 items-center rounded-md p-2 border-[#9E9E9E]">
                    <img
                      src="/src/assets/DoctorRegImg/sec5leafimg.svg"
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                    <p className="text-sm sm:text-base leading-tight">
                      Build Trust and
                      <br />
                      Community with Forum
                    </p>
                  </div>

                  <div className="border flex gap-3 items-center rounded-md p-2 border-[#9E9E9E]">
                    <img
                      src="/src/assets/DoctorRegImg/sec5moneyimg.svg"
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                    <p className="text-sm sm:text-base leading-tight">
                      Earn More with Pay
                      <br />
                      Per Conversation
                    </p>
                  </div>

                  <div className="border flex gap-3 items-center rounded-md p-2 border-[#9E9E9E]">
                    <img
                      src="/src/assets/DoctorRegImg/sec5callimg.svg"
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                    <p className="text-sm sm:text-base leading-tight">
                      Attract Patients with
                      <br />
                      5-Minute Free Call
                    </p>
                  </div>

                  <div className="border flex gap-3 items-center rounded-md p-2 border-[#9E9E9E]">
                    <img
                      src="/src/assets/DoctorRegImg/sec5walletimg.svg"
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                    <p className="text-sm sm:text-base leading-tight">
                      Instant Access to Your
                      <br />
                      Earnings with Wallet
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-3 sm:gap-4 mt-6 w-full justify-center sm:justify-start">
                  <Button className="w-40 sm:w-56 md:w-64 h-12 md:h-16 flex items-center justify-center gap-3 px-3 md:px-4">
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
                  src="/src/assets/DoctorRegImg/sec5img1.svg"
                  className="w-full max-w-[420px] h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10 pb-10 px-4 md:px-8 lg:px-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-[#33643F] font-bold mb-5 text-2xl sm:text-3xl md:text-4xl">
              Let’s Connect
            </h1>
            <p className="text-sm sm:text-base text-gray-700">
              We’re here to help you on your wellness journey. Reach out to us
              for any questions, product inquiries, or personalized advice.
            </p>
          </div>

          <div className="mt-10 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src="/src/assets/DoctorRegImg/sec6img.jpg"
                  alt="Connect"
                  className="w-full max-w-[498px] md:h-[471px] rounded-lg h-auto object-cover"
                />
              </div>

              <form className="w-full lg:w-1/2 max-w-[718px] border border-[#C2C2C2] rounded-md p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-[#33643F] text-sm md:text-base font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full border-0 border-b border-b-[#C2C2C2] px-2 py-2 outline-none focus:border-b-[#8FBF8B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#33643F] text-sm md:text-base font-medium mb-2">
                      Your Contact Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full border-0 border-b border-b-[#C2C2C2] px-2 py-2 outline-none focus:border-b-[#8FBF8B]"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-[#33643F] text-sm md:text-base font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border-0 border-b border-b-[#C2C2C2] px-2 py-2 outline-none focus:border-b-[#8FBF8B]"
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-[#33643F] text-sm md:text-base font-medium mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full border border-[#E6E6E6] rounded-md p-2 resize-none focus:ring-0 focus:border-[#8FBF8B]"
                    placeholder="Write your message..."
                  />
                </div>

                <div className="mt-2 flex items-center gap-4">
                  <button
                    type="submit"
                    className="bg-[#315918] text-white px-6 py-3 rounded-md font-medium hover:bg-[#335233] transition w-full md:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorReg;
