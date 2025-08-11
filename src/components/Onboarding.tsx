import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Building, User, DollarSign, Target, Briefcase, MapPin } from 'lucide-react';

interface OnboardingProps {
  onComplete: (userData: any) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [userType, setUserType] = useState<'buyer' | 'seller' | null>(null);
  const [formData, setFormData] = useState<any>({});

  const buyerQuestions = [
    {
      id: 'experience',
      title: 'What\'s your acquisition experience?',
      type: 'select',
      options: ['First-time buyer', '1-2 previous acquisitions', '3-5 acquisitions', '5+ acquisitions'],
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      id: 'budget',
      title: 'What\'s your investment range?',
      type: 'select',
      options: ['Under $500K', '$500K - $2M', '$2M - $10M', '$10M - $50M', '$50M+'],
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      id: 'industries',
      title: 'Which industries interest you most?',
      type: 'multiselect',
      options: ['Technology', 'Healthcare', 'Manufacturing', 'Retail', 'Services', 'Real Estate', 'Food & Beverage'],
      icon: <Building className="w-6 h-6" />
    },
    {
      id: 'location',
      title: 'Preferred business locations?',
      type: 'multiselect',
      options: ['Local (within 50 miles)', 'Regional (same state)', 'National', 'International'],
      icon: <MapPin className="w-6 h-6" />
    },
    {
      id: 'involvement',
      title: 'How involved do you want to be?',
      type: 'select',
      options: ['Hands-on operator', 'Strategic oversight', 'Passive investor', 'Depends on the business'],
      icon: <Target className="w-6 h-6" />
    }
  ];

  const sellerQuestions = [
    {
      id: 'business_type',
      title: 'What type of business are you selling?',
      type: 'select',
      options: ['Technology/Software', 'Healthcare', 'Manufacturing', 'Retail', 'Professional Services', 'Real Estate', 'Food & Beverage'],
      icon: <Building className="w-6 h-6" />
    },
    {
      id: 'revenue_range',
      title: 'What\'s your annual revenue?',
      type: 'select',
      options: ['Under $1M', '$1M - $5M', '$5M - $25M', '$25M - $100M', '$100M+'],
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      id: 'asking_price',
      title: 'Expected sale price range?',
      type: 'select',
      options: ['Under $2M', '$2M - $10M', '$10M - $50M', '$50M - $200M', '$200M+'],
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      id: 'timeline',
      title: 'When do you want to sell?',
      type: 'select',
      options: ['Within 6 months', '6-12 months', '1-2 years', '2+ years', 'Exploring options'],
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 'reason',
      title: 'Primary reason for selling?',
      type: 'select',
      options: ['Retirement', 'New opportunities', 'Financial needs', 'Partnership changes', 'Market timing', 'Other'],
      icon: <User className="w-6 h-6" />
    }
  ];

  const questions = userType === 'buyer' ? buyerQuestions : sellerQuestions;
  const currentQuestion = questions[step - 1];

  const handleNext = () => {
    if (step === 0) {
      if (userType) setStep(1);
    } else if (step <= questions.length) {
      if (step === questions.length) {
        // Complete onboarding
        onComplete({
          type: userType,
          name: formData.name || `${userType === 'buyer' ? 'Buyer' : 'Seller'} User`,
          ...formData
        });
      } else {
        setStep(step + 1);
      }
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleAnswer = (answer: string | string[]) => {
    setFormData({
      ...formData,
      [currentQuestion.id]: answer
    });
  };

  const progress = userType ? ((step) / questions.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Progress Bar */}
        {userType && (
          <div className="mb-8">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Step {step} of {questions.length}
            </p>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {step === 0 ? (
            // User Type Selection
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Welcome to DealBridge
              </h1>
              <p className="text-lg text-gray-600 mb-12">
                Let's get started by understanding your role in the acquisition process
              </p>

              <div className="space-y-4">
                <button
                  onClick={() => setUserType('buyer')}
                  className={`w-full p-6 border-2 rounded-xl transition-all ${
                    userType === 'buyer'
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                      : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-4">
                    <User className="w-8 h-8" />
                    <div className="text-left">
                      <h3 className="text-xl font-semibold">I'm looking to buy a business</h3>
                      <p className="text-gray-600">Discover and connect with business sellers</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setUserType('seller')}
                  className={`w-full p-6 border-2 rounded-xl transition-all ${
                    userType === 'seller'
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                      : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-4">
                    <Building className="w-8 h-8" />
                    <div className="text-left">
                      <h3 className="text-xl font-semibold">I'm looking to sell my business</h3>
                      <p className="text-gray-600">Find qualified buyers for your business</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            // Questions
            <div>
              <div className="flex items-center space-x-3 mb-6">
                {currentQuestion.icon}
                <h2 className="text-2xl font-bold text-gray-900">
                  {currentQuestion.title}
                </h2>
              </div>

              <div className="space-y-3">
                {currentQuestion.type === 'select' && 
                  currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      className={`w-full p-4 text-left border-2 rounded-lg transition-all ${
                        formData[currentQuestion.id] === option
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                          : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50'
                      }`}
                    >
                      {option}
                    </button>
                  ))
                }

                {currentQuestion.type === 'multiselect' && 
                  currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        const current = formData[currentQuestion.id] || [];
                        const updated = current.includes(option)
                          ? current.filter((item: string) => item !== option)
                          : [...current, option];
                        handleAnswer(updated);
                      }}
                      className={`w-full p-4 text-left border-2 rounded-lg transition-all ${
                        (formData[currentQuestion.id] || []).includes(option)
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                          : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50'
                      }`}
                    >
                      {option}
                    </button>
                  ))
                }
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              disabled={step === 0}
              className="flex items-center space-x-2 px-6 py-3 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              onClick={handleNext}
              disabled={step === 0 ? !userType : !formData[currentQuestion?.id]}
              className="flex items-center space-x-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <span>{step === questions.length ? 'Get Started' : 'Next'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;