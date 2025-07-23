import React from 'react';
import { Car, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">DriveEasy</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for premium car rentals. Drive with confidence and comfort.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="/cars" className="text-gray-400 hover:text-orange-500 transition-colors">Our Cars</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Economy Cars</span></li>
              <li><span className="text-gray-400">Luxury Vehicles</span></li>
              <li><span className="text-gray-400">SUVs & Trucks</span></li>
              <li><span className="text-gray-400">Long-term Rentals</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">123 Drive Street, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">info@driveeasy.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 DriveEasy. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;