import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { Phone, MapPin, Mail, Send } from "lucide-react";
import HeroSection from "../components/sections/HeroSection";

// Contact Form Component
const ContactForm = () => {
  const formRef = useRef(null);
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill in all fields");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormStatus("Please enter a valid email address");
      return;
    }

    // Simulate API call
    try {
      // Replace with your actual API endpoint
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData)
      // });

      // Simulate successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      setFormStatus("");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      setFormStatus("Something went wrong. Please try again.");
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {!isSubmitted ? (
        <div id="fcf-form">
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
            id="freeversion"
          >
            <div className="space-y-2">
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-gray-700"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none transition-colors"
                placeholder="Enter your name"
                maxLength="100"
                required
              />
            </div>

            <div className="space-y-2">
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700"
              >
                Your email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none transition-colors"
                placeholder="Enter your email"
                maxLength="100"
                required
              />
            </div>

            <div className="space-y-2">
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-gray-700"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none transition-colors resize-none"
                placeholder="Enter your message"
                maxLength="3000"
                required
              />
            </div>

            {formStatus && (
              <div className={`p-3 rounded-lg ${
                formStatus.includes("Sending") 
                  ? "bg-blue-50 text-blue-700" 
                  : "bg-red-50 text-red-700"
              }`}>
                {formStatus}
              </div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={formStatus === "Sending..."}
                className="w-full px-6 py-3 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-medium text-lg"
              >
                <Send size={20} />
                {formStatus === "Sending..." ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div 
          id="fcf-thank-you" 
          className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-green-100 rounded-full"
          >
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </motion.div>
          <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
          <p className="text-green-700">
            Thanks for contacting us. We'll get back in touch with you soon.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-4 text-red-600 hover:text-red-800 font-medium transition-colors"
          >
            Send another message
          </button>
        </div>
      )}
    </div>
  );
};

const ContactPage = () => {
  const heroData = {
    title: "Contact Us",
    subtitle: "Get in touch with our team. We're here to help and answer any questions you might have.",
    backgroundImage: "/images/home-intro-circle.png",
    primaryCta: { text: "Learn More About Us", link: "/about" },
    secondaryCta: { text: "View Our Projects", link: "/projects" },
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* <HeroSection {...heroData} /> */}

      <section className="py-12">
        <div className="container px-4 mx-auto">
          <main className="max-w-6xl mx-auto">
            <article>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* LEFT COLUMN - Contact Form */}
                <div className="space-y-6">
                  <div>
                    <h1 className="mb-4 text-3xl font-bold text-gray-900">Contact Us</h1>
                    <p className="text-lg text-gray-700">
                      Want to work with us on a project? Have a question for us? 
                      Maybe a topic you'd like us to write about? Or just want to say hi? 
                      Fill out the contact form below or give us a call. We'll get back 
                      to you within two business days.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-xl shadow-sm">
                    <ContactForm />
                  </div>
                </div>

                {/* RIGHT COLUMN - Contact Info */}
                <div className="space-y-8">
                  {/* Phone */}
                  <div className="p-6 bg-white rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 bg-red-100 rounded-lg">
                        <Phone className="text-red-600" size={24} />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">Phone</h2>
                    </div>
                    <p className="text-lg text-gray-700 ml-12">+251 933 920 666</p>
                    <p className="mt-2 text-sm text-gray-500 ml-12">Available Monday-Friday, 9AM-5PM EAT</p>
                  </div>

                  {/* P.O. Box */}
                  <div className="p-6 bg-white rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 bg-red-100 rounded-lg">
                        <Mail className="text-red-600" size={24} />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">P.O. Box</h2>
                    </div>
                    <p className="text-lg text-gray-700 ml-12">102030 Addis Ababa, Ethiopia</p>
                    <p className="mt-2 text-sm text-gray-500 ml-12">For postal correspondence</p>
                  </div>

                  {/* Address */}
                  <div className="p-6 bg-white rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 bg-red-100 rounded-lg">
                        <MapPin className="text-red-600" size={24} />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">Address</h2>
                    </div>
                    <p className="text-lg text-gray-700 ml-12">Bole Sub city woreda 04, kebele 07</p>
                    
                    {/* Map */}
                    <div className="mt-6 rounded-lg overflow-hidden">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5409329011404!2d38.78497911420362!3d9.014318791702157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b4e0bb4a7f%3A0xc66d0d74337d4bb5!2zSGFuYW4gSyBQbGF6YSB8IEhheWFodWxldCB8IOGIgOGKk-GKlSDhiqwg4Y2V4YiL4YubIHwg4YiD4Yur4YiB4YiI4Ym1!5e0!3m2!1sen!2set!4v1651515653928!5m2!1sen!2set"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="alignafrica Location"
                        className="rounded-lg"
                      />
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mt-4">
                      <a 
                        href="https://maps.google.com/?q=Bole+Sub+city+woreda+04,+kebele+07,+Addis+Ababa,+Ethiopia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <MapPin size={16} />
                        Open in Google Maps
                      </a>
                      <a 
                        href="https://www.google.com/maps/dir//Bole+Sub+city+woreda+04,+kebele+07,+Addis+Ababa,+Ethiopia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="p-6 bg-red-50 rounded-xl">
                    <h3 className="mb-3 text-lg font-semibold text-gray-900">Need immediate assistance?</h3>
                    <p className="text-gray-700 mb-3">
                      For urgent matters, please call our emergency line:
                    </p>
                    <div className="flex items-center gap-2">
                      <Phone size={18} className="text-red-600" />
                      <span className="font-medium text-red-700">+251 911 234 567</span>
                    </div>
                    <p className="mt-3 text-sm text-gray-600">
                      This line is monitored 24/7 for emergencies only.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </main>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-2xl font-bold text-center text-gray-900">Other Ways to Reach Us</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="p-6 text-center border border-gray-200 rounded-xl">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-red-600 bg-red-100 rounded-full">
                  <Mail size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">info@alignafrica.org</p>
                <p className="mt-2 text-sm text-gray-500">General inquiries</p>
              </div>
              
              <div className="p-6 text-center border border-gray-200 rounded-xl">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-red-600 bg-red-100 rounded-full">
                  <Mail size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">Partnerships</h3>
                <p className="text-gray-600">partnerships@alignafrica.org</p>
                <p className="mt-2 text-sm text-gray-500">Business & collaboration</p>
              </div>
              
              <div className="p-6 text-center border border-gray-200 rounded-xl">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-red-600 bg-red-100 rounded-full">
                  <Mail size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">Support</h3>
                <p className="text-gray-600">support@alignafrica.org</p>
                <p className="mt-2 text-sm text-gray-500">Technical & donor support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;