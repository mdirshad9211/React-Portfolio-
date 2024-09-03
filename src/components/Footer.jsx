
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://x.com/Irshad45884161"><FaTwitter size={24} /></a>
              <a href="https://www.instagram.com/mdirshad_1248/"><FaInstagram size={24} /></a>
              <a href="https://www.linkedin.com/in/itsmdirshad/"><FaLinkedinIn size={24} /></a>
              
              
              
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024. All rights reserved.
              </p>
              <p className="text-sm">Md Irshad</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;