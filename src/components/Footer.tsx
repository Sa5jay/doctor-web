import { FaFacebookF,FaInstagram,FaYoutube,FaTwitter,FaLinkedinIn,FaPinterestP} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#DBDCC4] pt-10 pb-10 px-4 md:px-0">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-evenly gap-8 md:gap-0">
    <div className="w-full md:w-auto text-center md:text-left">
      <img src="/DoctorRegImg/logoname.png" className="w-40 md:w-48 mb-4 mx-auto md:mx-0" />
      <h2 className="text-[#33643F] ml-0 md:ml-4 font-semibold mb-2 text-xl">Get in touch</h2>
      <p className="mb-5 md:ml-4">support@amrutam.global</p>
      <p className="mb-2 md:ml-4 text-sm">
        Amrutam Pharmaceuticals Pvt Ltd.,<br className="block md:hidden" />
        chitragupt ganj, Nai Sadak, Lashkar,<br className="block md:hidden" />
        Gwalior - 474001
      </p>
      <p className="md:ml-4">+91 9713171999</p>
    </div>

    <div className="w-full md:w-auto text-center md:text-left">
      <h2 className="text-xl text-[#33643F] font-semibold mb-6 md:mb-10">Information</h2>
      <div className="flex flex-col gap-2 text-sm">
        <a className="hover:underline">About Us</a>
        <a className="hover:underline">Terms and Conditions</a>
        <a className="hover:underline">Privacy Policy</a>
        <a className="hover:underline">Privacy Policy for Mobile App</a>
        <a className="hover:underline">Shipping and Return Policy</a>
        <a className="hover:underline">International Delivery</a>
        <a className="hover:underline">For Business, Hotels and Resorts</a>
      </div>
    </div>

    <div className="w-full md:w-auto text-center md:text-left">
      <h2 className="text-xl text-[#33643F] font-semibold mb-6 md:mb-10">Follow Us</h2>
      <div className="flex justify-center md:justify-start items-center gap-4 flex-wrap">
        <a aria-label="facebook" className="inline-block"><FaFacebookF size={20} /></a>
        <a aria-label="instagram" className="inline-block"><FaInstagram size={20} /></a>
        <a aria-label="youtube" className="inline-block"><FaYoutube size={20} /></a>
        <a aria-label="twitter" className="inline-block"><FaTwitter size={20} /></a>
        <a aria-label="linkedin" className="inline-block"><FaLinkedinIn size={20} /></a>
        <a aria-label="pinterest" className="inline-block"><FaPinterestP size={20} /></a>
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer