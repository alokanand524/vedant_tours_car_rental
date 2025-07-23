import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Clock, CreditCard, CheckCircle, User, Mail, Phone } from 'lucide-react';

const BookingPage: React.FC = () => {
  const { carId } = useParams();
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    dropoffDate: '',
    pickupTime: '',
    dropoffTime: '',
    selectedCar: carId || '',
    customerInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      licenseNumber: ''
    },
    extras: {
      gps: false,
      childSeat: false,
      insurance: false
    }
  });

  const cars = [
    {
      id: 'bmw-3-series',
      name: 'BMW 3 Series',
      price: 89,
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 'tesla-model-3',
      name: 'Tesla Model 3',
      price: 95,
      image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 'mercedes-c-class',
      name: 'Mercedes C-Class',
      price: 99,
      image: 'https://images.pexels.com/photos/2168270/pexels-photo-2168270.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  const selectedCarData = cars.find(car => car.id === bookingData.selectedCar) || cars[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (name.includes('.')) {
      const [section, field] = name.split('.');
      setBookingData(prev => ({
        ...prev,
        [section]: {
          ...prev[section as keyof typeof prev],
          [field]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }
      }));
    } else {
      setBookingData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
      }));
    }
  };

  const calculateTotal = () => {
    const pickupDate = new Date(bookingData.pickupDate);
    const dropoffDate = new Date(bookingData.dropoffDate);
    const days = Math.ceil((dropoffDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24)) || 1;
    
    let total = selectedCarData.price * days;
    
    if (bookingData.extras.gps) total += 10 * days;
    if (bookingData.extras.childSeat) total += 15 * days;
    if (bookingData.extras.insurance) total += 25 * days;
    
    return { days, total };
  };

  const { days, total } = calculateTotal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      alert('Booking confirmed! You will receive a confirmation email shortly.');
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Progress Steps */}
        <div className="mb-12" data-aos="fade-up">
          <div className="flex justify-center items-center space-x-8">
            {[
              { number: 1, title: 'Details & Car' },
              { number: 2, title: 'Customer Info' },
              { number: 3, title: 'Payment' }
            ].map((stepItem) => (
              <div key={stepItem.number} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= stepItem.number
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {stepItem.number}
                </div>
                <span className="ml-2 font-medium text-gray-700">
                  {stepItem.title}
                </span>
                {stepItem.number < 3 && (
                  <div className="w-16 h-0.5 bg-gray-300 ml-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              {step === 1 && (
                <div data-aos="fade-up">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Rental Details & Vehicle Selection
                  </h2>

                  {/* Car Selection */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Select Vehicle
                    </label>
                    <div className="grid md:grid-cols-3 gap-4">
                      {cars.map((car) => (
                        <div
                          key={car.id}
                          className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                            bookingData.selectedCar === car.id
                              ? 'border-orange-500 bg-orange-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => setBookingData(prev => ({ ...prev, selectedCar: car.id }))}
                        >
                          <img
                            src={car.image}
                            alt={car.name}
                            className="w-full h-24 object-cover rounded mb-2"
                          />
                          <h3 className="font-semibold text-gray-800">{car.name}</h3>
                          <p className="text-orange-500 font-bold">${car.price}/day</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Location & Date */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 mb-2">
                        Pickup Location *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <select
                          id="pickupLocation"
                          name="pickupLocation"
                          value={bookingData.pickupLocation}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select pickup location</option>
                          <option value="downtown">Downtown Office</option>
                          <option value="airport">Airport Terminal</option>
                          <option value="north">North Branch</option>
                          <option value="south">South Branch</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="dropoffLocation" className="block text-sm font-medium text-gray-700 mb-2">
                        Dropoff Location *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <select
                          id="dropoffLocation"
                          name="dropoffLocation"
                          value={bookingData.dropoffLocation}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select dropoff location</option>
                          <option value="downtown">Downtown Office</option>
                          <option value="airport">Airport Terminal</option>
                          <option value="north">North Branch</option>
                          <option value="south">South Branch</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Pickup Date *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="date"
                          id="pickupDate"
                          name="pickupDate"
                          value={bookingData.pickupDate}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="pickupTime" className="block text-sm font-medium text-gray-700 mb-2">
                        Pickup Time *
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <select
                          id="pickupTime"
                          name="pickupTime"
                          value={bookingData.pickupTime}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select time</option>
                          <option value="09:00">9:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="13:00">1:00 PM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                          <option value="17:00">5:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label htmlFor="dropoffDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Dropoff Date *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="date"
                          id="dropoffDate"
                          name="dropoffDate"
                          value={bookingData.dropoffDate}
                          onChange={handleInputChange}
                          required
                          min={bookingData.pickupDate || new Date().toISOString().split('T')[0]}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="dropoffTime" className="block text-sm font-medium text-gray-700 mb-2">
                        Dropoff Time *
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <select
                          id="dropoffTime"
                          name="dropoffTime"
                          value={bookingData.dropoffTime}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select time</option>
                          <option value="09:00">9:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="13:00">1:00 PM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                          <option value="17:00">5:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Extras */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Optional Extras
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="extras.gps"
                          checked={bookingData.extras.gps}
                          onChange={handleInputChange}
                          className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                        />
                        <span className="ml-3 text-gray-700">GPS Navigation (+$10/day)</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="extras.childSeat"
                          checked={bookingData.extras.childSeat}
                          onChange={handleInputChange}
                          className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                        />
                        <span className="ml-3 text-gray-700">Child Safety Seat (+$15/day)</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="extras.insurance"
                          checked={bookingData.extras.insurance}
                          onChange={handleInputChange}
                          className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                        />
                        <span className="ml-3 text-gray-700">Premium Insurance (+$25/day)</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div data-aos="fade-up">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Customer Information
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="firstName"
                          name="customerInfo.firstName"
                          value={bookingData.customerInfo.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="John"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="lastName"
                          name="customerInfo.lastName"
                          value={bookingData.customerInfo.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="customerInfo.email"
                          value={bookingData.customerInfo.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="john.doe@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="customerInfo.phone"
                          value={bookingData.customerInfo.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Driver's License Number *
                    </label>
                    <input
                      type="text"
                      id="licenseNumber"
                      name="customerInfo.licenseNumber"
                      value={bookingData.customerInfo.licenseNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="DL123456789"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div data-aos="fade-up">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Payment Information
                  </h2>

                  <div className="mb-6">
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number *
                    </label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="md:col-span-2">
                      <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-2">
                        Name on Card *
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        placeholder="123"
                        maxLength={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label htmlFor="expiryMonth" className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Month *
                      </label>
                      <select
                        id="expiryMonth"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Month</option>
                        {Array.from({ length: 12 }, (_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {String(i + 1).padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="expiryYear" className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Year *
                      </label>
                      <select
                        id="expiryYear"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Year</option>
                        {Array.from({ length: 10 }, (_, i) => (
                          <option key={i} value={2025 + i}>
                            {2025 + i}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-green-700 font-medium">
                        Secure Payment - Your information is protected with 256-bit SSL encryption
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </button>
                )}
                <button
                  type="submit"
                  className="ml-auto bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  {step === 3 ? 'Confirm Booking' : 'Continue'}
                </button>
              </div>
            </form>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24" data-aos="fade-left">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Booking Summary
              </h3>

              {/* Selected Car */}
              <div className="mb-6">
                <img
                  src={selectedCarData.image}
                  alt={selectedCarData.name}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h4 className="font-semibold text-gray-800">{selectedCarData.name}</h4>
                <p className="text-orange-500 font-bold">${selectedCarData.price}/day</p>
              </div>

              {/* Rental Details */}
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Pickup:</span>
                  <span className="text-gray-800">
                    {bookingData.pickupDate || 'Not selected'} {bookingData.pickupTime}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dropoff:</span>
                  <span className="text-gray-800">
                    {bookingData.dropoffDate || 'Not selected'} {bookingData.dropoffTime}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="text-gray-800">{days} {days === 1 ? 'day' : 'days'}</span>
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="border-t pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Car rental ({days} {days === 1 ? 'day' : 'days'})</span>
                  <span className="text-gray-800">${selectedCarData.price * days}</span>
                </div>
                
                {bookingData.extras.gps && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">GPS Navigation</span>
                    <span className="text-gray-800">${10 * days}</span>
                  </div>
                )}
                
                {bookingData.extras.childSeat && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Child Safety Seat</span>
                    <span className="text-gray-800">${15 * days}</span>
                  </div>
                )}
                
                {bookingData.extras.insurance && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Premium Insurance</span>
                    <span className="text-gray-800">${25 * days}</span>
                  </div>
                )}

                <div className="border-t pt-2 mt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-gray-800">Total</span>
                    <span className="text-orange-500">${total}</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold text-gray-800 mb-2">Need Help?</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Call us at <span className="font-medium">+1 (555) 123-4567</span>
                </p>
                <p className="text-sm text-gray-600">
                  Available 24/7 for assistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;