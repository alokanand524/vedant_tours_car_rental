import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Star, CheckCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'All our vehicles come with comprehensive insurance coverage for your peace of mind.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you whenever you need help.'
    },
    {
      icon: Star,
      title: 'Premium Fleet',
      description: 'Choose from our carefully maintained collection of premium vehicles.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Excellent service and beautiful cars. The booking process was seamless!'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'Great experience from start to finish. Highly recommend DriveEasy!'
    },
    {
      name: 'Emma Davis',
      rating: 5,
      comment: 'Professional service and well-maintained vehicles. Will definitely use again.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      >
        <div className="text-center text-white px-4" data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Drive Your
            <span className="text-orange-500"> Dreams</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience the freedom of the road with our premium car rental service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cars"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors inline-flex items-center"
            >
              Browse Cars
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/booking"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose DriveEasy?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide exceptional service and premium vehicles to make your journey unforgettable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <feature.icon className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Featured Vehicles
            </h2>
            <p className="text-xl text-gray-600">
              Discover our most popular rental cars
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'BMW 3 Series',
                category: 'Luxury Sedan',
                price: '$89',
                image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
              },
              {
                name: 'Tesla Model 3',
                category: 'Electric',
                price: '$95',
                image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
              },
              {
                name: 'Mercedes C-Class',
                category: 'Premium',
                price: '$99',
                image: 'https://images.pexels.com/photos/2168270/pexels-photo-2168270.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
              }
            ].map((car, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {car.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {car.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-500">
                      {car.price}
                      <span className="text-gray-500 text-base font-normal">/day</span>
                    </span>
                    <Link
                      to={`/booking/${car.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link
              to="/cars"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center"
            >
              View All Cars
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <p className="font-semibold text-gray-800">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your perfect car today and experience the freedom of the road
          </p>
          <Link
            to="/booking"
            className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors inline-flex items-center"
          >
            Book Your Car Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;