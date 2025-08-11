import React, { useState } from 'react';
import Navigation from './Navigation';
import { Heart, X, MapPin, DollarSign, TrendingUp, Users, Calendar, Eye, MessageSquare, ChevronDown } from 'lucide-react';

interface ProfileBrowsingProps {
  user: {
    type: 'buyer' | 'seller';
    name: string;
  };
}

const ProfileBrowsing: React.FC<ProfileBrowsingProps> = ({ user }) => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<any>(null);

  // Sample buyer profiles for sellers to browse
  const buyerProfiles = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'Private Equity Partner',
      location: 'San Francisco, CA',
      experience: '8 years in acquisitions',
      budget: '$5M - $25M',
      industries: ['Technology', 'Healthcare', 'SaaS'],
      previousDeals: 12,
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?w=100&h=100&fit=crop&crop=face',
      verified: true,
      lastActive: '2 hours ago',
      bio: 'Experienced investor focused on growth-stage technology companies. Looking for businesses with strong recurring revenue and scalable models.',
      dealPreferences: {
        involvement: 'Strategic oversight',
        timeline: '3-6 months',
        financing: 'Mix of equity and debt'
      },
      recentActivity: [
        'Completed acquisition of SaaS company - $8M',
        'Active in 3 deal processes',
        'Attended 15 meetings this month'
      ]
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      title: 'Serial Entrepreneur',
      location: 'Austin, TX',
      experience: '15 years operating businesses',
      budget: '$2M - $10M',
      industries: ['Manufacturing', 'Services', 'Retail'],
      previousDeals: 5,
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?w=100&h=100&fit=crop&crop=face',
      verified: true,
      lastActive: '1 day ago',
      bio: 'Hands-on operator looking for established businesses to grow and scale. Prefer companies with strong local market presence.',
      dealPreferences: {
        involvement: 'Hands-on operator',
        timeline: '6-12 months',
        financing: 'SBA loan + personal investment'
      },
      recentActivity: [
        'Sold manufacturing business for $12M',
        'Currently evaluating 2 opportunities',
        'Strong track record of growth'
      ]
    },
    {
      id: 3,
      name: 'Jennifer Walsh',
      title: 'Family Office Investment Manager',
      location: 'Boston, MA',
      experience: '12 years in private investments',
      budget: '$10M - $50M+',
      industries: ['Healthcare', 'Technology', 'Real Estate'],
      previousDeals: 20,
      avatar: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?w=100&h=100&fit=crop&crop=face',
      verified: true,
      lastActive: '4 hours ago',
      bio: 'Managing investments for ultra-high-net-worth family. Seeking established, profitable businesses with strong management teams.',
      dealPreferences: {
        involvement: 'Board participation',
        timeline: '6-18 months',
        financing: 'Cash or seller financing'
      },
      recentActivity: [
        'Closed $35M healthcare acquisition',
        'Portfolio company exited for 3x return',
        'Evaluating add-on acquisitions'
      ]
    }
  ];

  const currentProfile = buyerProfiles[currentProfileIndex];

  const handleSwipe = (direction: 'left' | 'right') => {
    // Simulate swipe action
    setTimeout(() => {
      setCurrentProfileIndex((prev) => (prev + 1) % buyerProfiles.length);
    }, 200);
  };

  const handleViewDetails = (profile: any) => {
    setSelectedProfile(profile);
  };

  if (selectedProfile) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation user={user} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => setSelectedProfile(null)}
            className="mb-6 text-emerald-600 hover:text-emerald-700 font-medium"
          >
            ← Back to browsing
          </button>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Profile Header */}
            <div className="p-8 bg-gradient-to-r from-emerald-50 to-blue-50">
              <div className="flex items-start space-x-6">
                <img
                  src={selectedProfile.avatar}
                  alt={selectedProfile.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h1 className="text-3xl font-bold text-gray-900">{selectedProfile.name}</h1>
                    {selectedProfile.verified && (
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <p className="text-xl text-gray-700 mb-2">{selectedProfile.title}</p>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedProfile.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Active {selectedProfile.lastActive}</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                    Connect
                  </button>
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Save
                  </button>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Bio */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedProfile.bio}</p>
                  </div>

                  {/* Deal Preferences */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Deal Preferences</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Involvement Level</p>
                        <p className="font-medium">{selectedProfile.dealPreferences.involvement}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Timeline</p>
                        <p className="font-medium">{selectedProfile.dealPreferences.timeline}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Financing</p>
                        <p className="font-medium">{selectedProfile.dealPreferences.financing}</p>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                      {selectedProfile.recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <p className="text-gray-700">{activity}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Key Stats */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Experience</span>
                        <span className="font-medium">{selectedProfile.experience}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Budget Range</span>
                        <span className="font-medium">{selectedProfile.budget}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Previous Deals</span>
                        <span className="font-medium">{selectedProfile.previousDeals}</span>
                      </div>
                    </div>
                  </div>

                  {/* Industries */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Target Industries</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProfile.industries.map((industry, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation user={user} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {user.type === 'buyer' ? 'Discover Businesses' : 'Interested Buyers'}
            </h1>
            <p className="text-gray-600 mt-1">
              {user.type === 'buyer' 
                ? 'Swipe through business opportunities that match your criteria'
                : 'Connect with qualified buyers interested in your business'}
            </p>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <span>Filters</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Profile Card */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-96 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Profile Image */}
              <div className="relative h-48 bg-gradient-to-br from-emerald-400 to-blue-500">
                <img
                  src={currentProfile.avatar}
                  alt={currentProfile.name}
                  className="absolute bottom-4 left-4 w-20 h-20 rounded-full object-cover border-4 border-white"
                />
                {currentProfile.verified && (
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                )}
              </div>

              {/* Profile Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{currentProfile.name}</h2>
                  <p className="text-gray-600">{currentProfile.title}</p>
                </div>

                {/* Key Info Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{currentProfile.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{currentProfile.budget}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{currentProfile.previousDeals} deals</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{currentProfile.experience}</span>
                  </div>
                </div>

                {/* Industries */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">Target Industries</p>
                  <div className="flex flex-wrap gap-2">
                    {currentProfile.industries.map((industry, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio Preview */}
                <div className="mb-6">
                  <p className="text-gray-700 text-sm line-clamp-3">{currentProfile.bio}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <button
                    onClick={() => handleSwipe('left')}
                    className="w-14 h-14 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                  
                  <button
                    onClick={() => handleViewDetails(currentProfile)}
                    className="w-14 h-14 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Eye className="w-6 h-6 text-blue-600" />
                  </button>

                  <button
                    onClick={() => handleSwipe('right')}
                    className="w-14 h-14 bg-emerald-100 hover:bg-emerald-200 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Heart className="w-6 h-6 text-emerald-600" />
                  </button>
                </div>

                <p className="text-center text-xs text-gray-500">
                  Active {currentProfile.lastActive}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {buyerProfiles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProfileIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentProfileIndex ? 'bg-emerald-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileBrowsing;