import { Phone, Mail } from "lucide-react";
import Link from "next/link";
function Contact() {
  return (
    <div className="w-full py-10 bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="w-[90%] max-w-screen-xl mx-auto mb-6">
        <nav className="text-sm text-gray-600">
          <ul className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-red-500">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-500">Contact</li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-[90%] max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Side: Contact Details */}
        <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-6">
          {/* Call To Us */}
          <div className="mb-6">
            <div className="flex items-center">
              <span className="bg-red-500 p-3 rounded-full">
                <Phone className="text-white" size={24} />
              </span>
              <h2 className="text-lg font-bold pl-4">Call To Us</h2>
            </div>
            <p className="text-sm mt-2 text-gray-600">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-sm text-gray-600">Phone: +8801611112222</p>
          </div>

          <hr className="my-4" />

          {/* Write To Us */}
          <div>
            <div className="flex items-center">
              <span className="bg-red-500 p-3 rounded-full">
                <Mail className="text-white" size={24} />
              </span>
              <h2 className="text-lg font-bold pl-4">Write To Us</h2>
            </div>
            <p className="text-sm mt-2 text-gray-600">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-sm text-gray-600">Email: customer@exclusive.com</p>
            <p className="text-sm text-gray-600">Email: support@exclusive.com</p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full lg:w-2/3 bg-white shadow-md rounded-lg p-6">
          <form className="flex flex-wrap gap-4">
            {/* Name Field */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full md:w-[48%] bg-gray-100 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {/* Email Field */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full md:w-[48%] bg-gray-100 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {/* Phone Field */}
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full bg-gray-100 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {/* Message Field */}
            <textarea
              placeholder="Your Message"
              className="w-full bg-gray-100 p-3 h-32 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            ></textarea>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

