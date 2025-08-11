import React from 'react';
import Navigation from './Navigation';
import { TrendingUp, Users, MessageSquare, Calendar, ArrowUpRight } from 'lucide-react';

interface DashboardProps {
  user: {
    type: 'buyer' | 'seller';
    name: string;
  };
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const stats = user.type === 'buyer' ? [
    { label: 'Profiles Viewed', value: '47', change: '+12%', icon: <Users className="w-5 h-5" /> },
    { label: 'Active Conversations', value: '3', change: '+1', icon: <MessageSquare className="w-5 h-5" /> },
    { label: 'Deals in Progress', value: '1', change: 'New', icon: <TrendingUp className="w-5 h-5" /> },
    { label: 'Meetings Scheduled', value: '2', change: 'This week', icon: <Calendar className="w-5 h-5" /> },
  ] : [
    { label: 'Profile Views', value: '89', change: '+23%', icon: <Users className="w-5 h-5" /> },
    { label: 'Interested Buyers', value: '12', change: '+5', icon: <MessageSquare className="w-5 h-5" /> },
    { label: 'Active Negotiations', value: '2', change: '+1', icon: <TrendingUp className="w-5 h-5" /> },
    { label: 'Meetings This Week', value: '4', change: '+2', icon: <Calendar className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation user={user} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user.name}
          </h1>
          <p className="text-gray-600 mt-1">
            {user.type === 'buyer' 
              ? 'Ready to discover your next business opportunity?' 
              : 'Let\'s connect you with qualified buyers today.'}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  {stat.icon}
                </div>
                <span className="text-emerald-600 text-sm font-medium flex items-center">
                  {stat.change}
                  <ArrowUpRight className="w-3 h-3 ml-1" />
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {user.type === 'buyer' ? (
            <>
              {/* Browse Profiles */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Discover Businesses</h3>
                <p className="text-gray-600 mb-6">Browse through curated business opportunities that match your criteria.</p>
                <button className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
                  Browse Opportunities
                </button>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">New message from TechFlow Solutions</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Meeting scheduled with MetalWorks Inc</p>
                      <p className="text-xs text-gray-500">5 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Buyer Interest */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Buyer Interest</h3>
                <p className="text-gray-600 mb-6">See which buyers are interested in your business and start conversations.</p>
                <button className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
                  View Interested Buyers
                </button>
              </div>

              {/* Profile Optimization */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Profile Optimization</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Profile Completeness</span>
                    <span className="text-sm font-medium text-emerald-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500">Add financial documents to reach 100%</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;