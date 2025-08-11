import React, { useState } from 'react';
import Navigation from './Navigation';
import { Edit, Camera, Building, MapPin, DollarSign, Calendar, TrendingUp } from 'lucide-react';

interface ProfileProps {
  user: {
    type: 'buyer' | 'seller';
    name: string;
  };
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation user={user} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="h-32 bg-gradient-to-r from-emerald-400 to-blue-500"></div>
          <div className="px-8 pb-8">
            <div className="flex items-end -mt-12 mb-4">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=120&h=120&fit=crop&crop=face"
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-700">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <div className="ml-6 flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                    <p className="text-gray-600 capitalize">{user.type}</p>
                  </div>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <Edit className="w-4 h-4" />
                    <span>Edit Profile</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Member Since</p>
                  <p className="font-medium">January 2024</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Profile Views</p>
                  <p className="font-medium">127 this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {user.type === 'buyer' ? (
          /* Buyer Profile */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
                {isEditing ? (
                  <textarea
                    className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Tell potential sellers about yourself and your acquisition goals..."
                    defaultValue="Experienced investor with 10+ years in private equity. Currently looking for established SaaS businesses with recurring revenue models and growth potential."
                  />
                ) : (
                  <p className="text-gray-700 leading-relaxed">
                    Experienced investor with 10+ years in private equity. Currently looking for established SaaS businesses with recurring revenue models and growth potential.
                  </p>
                )}
              </div>

              {/* Investment Criteria */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Investment Criteria</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Budget Range</p>
                    <p className="font-medium">$5M - $25M</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Industries</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Technology</span>
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">SaaS</span>
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Healthcare</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Preferred Locations</p>
                    <p className="font-medium">US & Canada</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Involvement Level</p>
                    <p className="font-medium">Strategic Oversight</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Stats */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Businesses Viewed</span>
                    <span className="font-medium">47</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Conversations</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Deals in Progress</span>
                    <span className="font-medium">2</span>
                  </div>
                </div>
              </div>

              {/* Verification */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Verification</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Email Verified</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Phone Verified</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Financial Verification</span>
                    <span className="text-orange-600">Pending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Seller Profile */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Business Overview */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Business Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Business Name</p>
                    <p className="font-medium text-lg">TechFlow Solutions</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Industry</p>
                    <p className="font-medium">Software Development</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Annual Revenue</p>
                    <p className="font-medium">$5.2M</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Asking Price</p>
                    <p className="font-medium">$15M</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Employees</p>
                    <p className="font-medium">45</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Founded</p>
                    <p className="font-medium">2018</p>
                  </div>
                </div>
              </div>

              {/* Business Description */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Business Description</h2>
                <p className="text-gray-700 leading-relaxed">
                  Established software development company specializing in custom business applications and SaaS solutions. 
                  Strong client base with recurring revenue model. Experienced development team with modern tech stack.
                  Looking for strategic buyer to accelerate growth and expand market reach.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Revenue Growth</span>
                      <span className="text-sm font-medium">+35%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Client Retention</span>
                      <span className="text-sm font-medium">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Profit Margin</span>
                      <span className="text-sm font-medium">28%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '56%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buyer Interest */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Buyer Interest</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Profile Views</span>
                    <span className="font-medium">156</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Interested Buyers</span>
                    <span className="font-medium">23</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Active Conversations</span>
                    <span className="font-medium">8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;