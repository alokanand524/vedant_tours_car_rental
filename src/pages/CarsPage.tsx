import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Star, Users, Fuel, Settings } from 'lucide-react';

const CarsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const cars = [
    {
      id: 'bmw-3-series',
      name: 'BMW 3 Series',
      category: 'luxury',
      price: 89,
      rating: 4.8,
      passengers: 5,
      transmission: 'Automatic',
      fuel: 'Gasoline',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'tesla-model-3',
      name: 'Tesla Model 3',
      category: 'electric',
      price: 95,
      rating: 4.9,
      passengers: 5,
      transmission: 'Automatic',
      fuel: 'Electric',
      image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'mercedes-c-class',
      name: 'Mercedes C-Class',
      category: 'luxury',
      price: 99,
      rating: 4.7,
      passengers: 5,
      transmission: 'Automatic',
      fuel: 'Gasoline',
      image: 'https://images.pexels.com/photos/2168270/pexels-photo-2168270.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'honda-civic',
      name: 'Honda Civic',
      category: 'economy',
      price: 45,
      rating: 4.5,
      passengers: 5,
      transmission: 'Manual',
      fuel: 'Gasoline',
      image: 'https://images.pexels.com/photos/1118146/pexels-photo-1118146.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'ford-mustang',
      name: 'Ford Mustang',
      category: 'sports',
      price: 120,
      rating: 4.6,
      passengers: 4,
      transmission: 'Manual',
      fuel: 'Gasoline',
      image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'toyota-prius',
      name: 'Toyota Prius',
      category: 'hybrid',
      price: 55,
      rating: 4.4,
      passengers: 5,
      transmission: 'Automatic',
      fuel: 'Hybrid',
      image: 'https://images.pexels.com/photos/972648/pexels-photo-972648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'jeep-wrangler',
      name: 'Jeep Wrangler',
      category: 'suv',
      price: 85,
      rating: 4.3,
      passengers: 5,
      transmission: 'Automatic',
      fuel: 'Gasoline',
      image: 'https://images.pexels.com/photos/1319839/pexels-photo-1319839.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'audi-a4',
      name: 'Audi A4',
      category: 'luxury',
      price: 92,
      rating: 4.7,
      passengers: 5,
      transmission: 'Automatic',
      fuel: 'Gasoline',
      image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'economy', label: 'Economy' },
    { value: 'luxury', label: 'Luxury' },
    { value: 'sports', label: 'Sports' },
    { value: 'suv', label: 'SUV' },
    { value: 'electric', label: 'Electric' },
    { value: 'hybrid', label: 'Hybrid' }
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-50', label: '$0 - $50' },
    { value: '51-80', label: '$51 - $80' },
    { value: '81-100', label: '$81 - $100' },
    { value: '100+', label: '$100+' }
  ];

  const filteredCars = cars.filter(car => {
    const categoryMatch = selectedCategory === 'all' || car.category === selectedCategory;
    
    let priceMatch = true;
    if (priceRange !== 'all') {
      if (priceRange === '0-50') priceMatch = car.price <= 50;
      else if (priceRange === '51-80') priceMatch = car.price >= 51 && car.price <= 80;
      else if (priceRange === '81-100') priceMatch = car.price >= 81 && car.price <= 100;
      else if (priceRange === '100+') priceMatch = car.price > 100;
    }
    
    return categoryMatch && priceMatch;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-6">Our Car Collection</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Choose from our extensive fleet of premium vehicles for your perfect ride
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-6" data-aos="fade-up">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-gray-800">Filters:</span>
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {priceRanges.map(range => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>

            <span className="text-gray-600">
              {filteredCars.length} {filteredCars.length === 1 ? 'car' : 'cars'} available
            </span>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCars.map((car, index) => (
              <div
                key={car.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {car.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {car.name}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{car.rating}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {car.passengers} seats
                    </div>
                    <div className="flex items-center">
                      <Settings className="h-4 w-4 mr-1" />
                      {car.transmission}
                    </div>
                    <div className="flex items-center col-span-2">
                      <Fuel className="h-4 w-4 mr-1" />
                      {car.fuel}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-orange-500">
                        ${car.price}
                      </span>
                      <span className="text-gray-500 text-sm">/day</span>
                    </div>
                    <Link
                      to={`/booking/${car.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="text-center py-16" data-aos="fade-up">
              <p className="text-xl text-gray-600">
                No cars found matching your criteria. Please adjust your filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CarsPage;