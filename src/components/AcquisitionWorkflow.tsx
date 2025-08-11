import React, { useState } from 'react';
import Navigation from './Navigation';
import { CheckCircle, Circle, Clock, AlertTriangle, FileText, DollarSign, Users, Calendar } from 'lucide-react';

interface AcquisitionWorkflowProps {
  user: {
    type: 'buyer' | 'seller';
    name: string;
  };
}

const AcquisitionWorkflow: React.FC<AcquisitionWorkflowProps> = ({ user }) => {
  const [selectedDeal, setSelectedDeal] = useState(0);

  const deals = [
    {
      id: 1,
      businessName: 'TechFlow Solutions',
      partner: user.type === 'buyer' ? 'Michael Chen (Seller)' : 'Sarah Rodriguez (Buyer)',
      value: '$2.5M',
      status: 'Due Diligence',
      progress: 65,
      lastActivity: '2 hours ago',
      urgentTasks: 2,
      completedTasks: 8,
      totalTasks: 12
    },
    {
      id: 2,
      businessName: 'Urban Coffee Co',
      partner: user.type === 'buyer' ? 'Lisa Thompson (Seller)' : 'David Kim (Buyer)',
      value: '$850K',
      status: 'Negotiation',
      progress: 40,
      lastActivity: '1 day ago',
      urgentTasks: 1,
      completedTasks: 5,
      totalTasks: 10
    }
  ];

  const workflowSteps = [
    {
      id: 1,
      name: 'Initial Interest',
      description: 'Connect and express mutual interest',
      status: 'completed',
      completedDate: '2024-01-15',
      tasks: [
        { name: 'Profile review', completed: true },
        { name: 'Initial conversation', completed: true },
        { name: 'NDA signed', completed: true }
      ]
    },
    {
      id: 2,
      name: 'Information Exchange',
      description: 'Share key business information',
      status: 'completed',
      completedDate: '2024-01-22',
      tasks: [
        { name: 'Executive summary shared', completed: true },
        { name: 'Financial overview provided', completed: true },
        { name: 'Management presentation', completed: true }
      ]
    },
    {
      id: 3,
      name: 'Letter of Intent',
      description: 'Agree on preliminary terms',
      status: 'completed',
      completedDate: '2024-02-01',
      tasks: [
        { name: 'Terms negotiated', completed: true },
        { name: 'LOI signed', completed: true },
        { name: 'Exclusivity period started', completed: true }
      ]
    },
    {
      id: 4,
      name: 'Due Diligence',
      description: 'Comprehensive business review',
      status: 'active',
      tasks: [
        { name: 'Financial audit', completed: true },
        { name: 'Legal review', completed: true },
        { name: 'Operations assessment', completed: false, urgent: true },
        { name: 'Market analysis', completed: false, urgent: true },
        { name: 'Technology review', completed: false }
      ]
    },
    {
      id: 5,
      name: 'Final Negotiation',
      description: 'Finalize terms and conditions',
      status: 'pending',
      tasks: [
        { name: 'Price adjustment discussions', completed: false },
        { name: 'Contract terms finalization', completed: false },
        { name: 'Escrow arrangements', completed: false }
      ]
    },
    {
      id: 6,
      name: 'Closing',
      description: 'Complete the transaction',
      status: 'pending',
      tasks: [
        { name: 'Final documentation', completed: false },
        { name: 'Funding confirmation', completed: false },
        { name: 'Asset transfer', completed: false },
        { name: 'Ownership transition', completed: false }
      ]
    }
  ];

  const currentDeal = deals[selectedDeal];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation user={user} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Deal Pipeline</h1>
          <p className="text-gray-600 mt-1">Track and manage your active acquisitions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Deal Sidebar */}
          <div className="lg:col-span-1">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Deals</h2>
            <div className="space-y-4">
              {deals.map((deal, index) => (
                <div
                  key={deal.id}
                  onClick={() => setSelectedDeal(index)}
                  className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                    selectedDeal === index
                      ? 'border-emerald-500 bg-emerald-50'
                      : 'border-gray-200 bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{deal.businessName}</h3>
                    {deal.urgentTasks > 0 && (
                      <div className="flex items-center space-x-1">
                        <AlertTriangle className="w-4 h-4 text-orange-500" />
                        <span className="text-xs text-orange-600">{deal.urgentTasks}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{deal.partner}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">{deal.value}</span>
                    <span className="text-xs text-gray-500">{deal.status}</span>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{deal.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-emerald-600 h-1.5 rounded-full"
                        style={{ width: `${deal.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Workflow */}
          <div className="lg:col-span-3">
            {/* Deal Header */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{currentDeal.businessName}</h2>
                  <p className="text-gray-600">{currentDeal.partner}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-900">{currentDeal.value}</p>
                  <p className="text-sm text-gray-500">Deal Value</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Last Activity</p>
                    <p className="font-medium">{currentDeal.lastActivity}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Tasks</p>
                    <p className="font-medium">{currentDeal.completedTasks}/{currentDeal.totalTasks}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="text-sm text-gray-600">Urgent Items</p>
                    <p className="font-medium text-orange-600">{currentDeal.urgentTasks}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <p className="font-medium">{currentDeal.status}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow Steps */}
            <div className="space-y-6">
              {workflowSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`bg-white rounded-xl p-6 shadow-sm border-2 transition-colors ${
                    step.status === 'active'
                      ? 'border-emerald-500 bg-emerald-50'
                      : step.status === 'completed'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    {/* Step Icon */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      step.status === 'completed'
                        ? 'bg-green-500'
                        : step.status === 'active'
                        ? 'bg-emerald-500'
                        : 'bg-gray-300'
                    }`}>
                      {step.status === 'completed' ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : step.status === 'active' ? (
                        <Clock className="w-6 h-6 text-white" />
                      ) : (
                        <Circle className="w-6 h-6 text-white" />
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{step.name}</h3>
                        {step.status === 'completed' && (
                          <span className="text-sm text-green-600">
                            Completed {step.completedDate}
                          </span>
                        )}
                        {step.status === 'active' && (
                          <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                            In Progress
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-4">{step.description}</p>

                      {/* Tasks */}
                      <div className="space-y-2">
                        {step.tasks.map((task, taskIndex) => (
                          <div
                            key={taskIndex}
                            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                              task.urgent
                                ? 'bg-orange-50 border border-orange-200'
                                : 'bg-gray-50'
                            }`}
                          >
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center ${
                                task.completed
                                  ? 'bg-green-500'
                                  : task.urgent
                                  ? 'bg-orange-500'
                                  : 'bg-gray-300'
                              }`}
                            >
                              {task.completed ? (
                                <CheckCircle className="w-3 h-3 text-white" />
                              ) : task.urgent ? (
                                <AlertTriangle className="w-3 h-3 text-white" />
                              ) : (
                                <Circle className="w-3 h-3 text-white" />
                              )}
                            </div>
                            <span className={`flex-1 ${
                              task.completed
                                ? 'text-gray-500 line-through'
                                : task.urgent
                                ? 'text-orange-700 font-medium'
                                : 'text-gray-700'
                            }`}>
                              {task.name}
                            </span>
                            {task.urgent && !task.completed && (
                              <span className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded">
                                Urgent
                              </span>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons for Active Step */}
                      {step.status === 'active' && (
                        <div className="mt-4 flex space-x-3">
                          <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                            Update Progress
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            Schedule Meeting
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            Upload Documents
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcquisitionWorkflow;