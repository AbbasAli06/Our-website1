import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-700 bg-gradient-to-br from-black via-gray-900 to-black text-neutral-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">About Us</h3>
          <p className="text-sm">
            We're a team of web developers specializing in modern, high-performance websites and applications. We work with HTML, JavaScript, React.js, Node.js, Next.js, Tailwind CSS, and WordPress to materialize your ideas.
          </p>
          <Link to="/about" className="mt-4 inline-block text-orange-500 hover:text-orange-400 transition">
            Learn More →
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/services" className="hover:text-orange-500 transition">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-orange-500 transition">Portfolio</Link></li>
            <li><Link to="/testimonials" className="hover:text-orange-500 transition">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact & Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Get in Touch</h3>
          <p className="text-sm mb-2">Reach us for your any kind of web development/web designing project.</p>
          <p className="text-sm">Email: <a href="mailto:robustarktech@gmail.com" className="text-orange-500 hover:text-orange-400 transition">robustarktech@gmail.com</a></p>
          <p className="text-sm">Phone: <a href="tel:+91-7330225080" className="text-orange-500 hover:text-orange-400 transition">+91 7330225080</a></p>

<div className="flex space-x-1 mt-1">
            <a href="https://www.instagram.com/robustarktech/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
              <Instagram className="w-5 h-5" /> <p>Robust Ark Tech</p>

          {/* <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/shahbaz-ahmed-821043352/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/ahmed123598" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/shahbaz_dev" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
              <Twitter className="w-5 h-5" /> */}
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm border-t border-gray-700 mt-10 pt-4">
        © {new Date().getFullYear()} Robust Ark Tech | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
