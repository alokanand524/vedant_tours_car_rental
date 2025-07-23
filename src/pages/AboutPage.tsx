import React from 'react';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: Users, number: '50,000+', label: 'Happy Customers' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: CheckCircle, number: '500+', label: 'Premium Cars' },
    { icon: Clock, number: '24/7', label: 'Customer Support' }
  ];

  const team = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Sarah Wilson',
      position: 'Operations Manager',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Mike Johnson',
      position: 'Fleet Manager',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-6">About DriveEasy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We've been providing exceptional car rental services for over 15 years, 
            helping customers explore the world with confidence and comfort.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <stat.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2010, DriveEasy began as a small family business with a simple mission: 
                to provide reliable, affordable, and premium car rental services to travelers and locals alike.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the years, we've grown from a handful of vehicles to a fleet of over 500 premium cars, 
                serving customers across multiple locations. Our commitment to excellence and customer satisfaction 
                has made us one of the most trusted names in car rental.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to innovate and expand our services while maintaining the personal touch 
                and attention to detail that has been our hallmark since day one.
              </p>
            </div>
            <div data-aos="fade-left">
              <img
                src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Our team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're driven by our commitment to providing exceptional service and 
              creating memorable experiences for every customer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg" data-aos="fade-up">
              <CheckCircle className="h-16 w-16 text-orange-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Customer First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every decision we make is centered around providing the best possible 
                experience for our customers.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <Award className="h-16 w-16 text-orange-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Quality Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest standards in vehicle maintenance, cleanliness, 
                and service delivery.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
              <Users className="h-16 w-16 text-orange-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Community Focus
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We're committed to supporting our local communities and environmental 
                sustainability initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our experienced team is dedicated to making your car rental experience exceptional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-medium">
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;