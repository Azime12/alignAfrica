import React, { useState } from 'react';
import { 
  LockClosedIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  BanknotesIcon,
  DevicePhoneMobileIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const Donate = () => {
  const [amount, setAmount] = useState(50);
  const [frequency, setFrequency] = useState('one-time');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const presetAmounts = [25, 50, 100, 250, 500];
  const impactExamples = [
    { amount: 25, impact: 'Provides school supplies for 5 children' },
    { amount: 50, impact: 'Vaccinates 100 children against polio' },
    { amount: 100, impact: 'Supports a family\'s food for one month' },
    { amount: 250, impact: 'Trains one community health worker' },
    { amount: 500, impact: 'Installs a water purification system' },
  ];

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCardIcon },
    { id: 'bank', name: 'Bank Transfer', icon: BanknotesIcon },
    { id: 'mobile', name: 'Mobile Payment', icon: DevicePhoneMobileIcon },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission
    console.log({ amount, frequency, paymentMethod });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="text-white bg-gradient-to-br from-blue-900 to-teal-800">
        <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Make a Difference Today
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Your donation creates sustainable change across Africa. 80%+ goes directly to program beneficiaries.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="p-8 bg-white shadow-lg rounded-2xl">
                <form onSubmit={handleSubmit}>
                  {/* Amount Selection */}
                  <div className="mb-8">
                    <label className="block mb-4 text-lg font-semibold text-gray-900">
                      Select Donation Amount
                    </label>
                    <div className="grid grid-cols-2 gap-3 mb-4 sm:grid-cols-5">
                      {presetAmounts.map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setAmount(preset)}
                          className={`px-4 py-3 rounded-lg border text-lg font-semibold transition-colors ${
                            amount === preset
                              ? 'border-blue-600 bg-blue-50 text-blue-600'
                              : 'border-gray-300 text-gray-700 hover:border-blue-600'
                          }`}
                        >
                          ${preset}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2">$</span>
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
                        className="w-full py-3 pl-8 pr-4 text-lg font-semibold border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        min="1"
                      />
                    </div>
                  </div>

                  {/* Frequency */}
                  <div className="mb-8">
                    <label className="block mb-4 text-lg font-semibold text-gray-900">
                      Donation Frequency
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFrequency('one-time')}
                        className={`px-4 py-3 rounded-lg border text-lg font-semibold transition-colors ${
                          frequency === 'one-time'
                            ? 'border-blue-600 bg-blue-50 text-blue-600'
                            : 'border-gray-300 text-gray-700 hover:border-blue-600'
                        }`}
                      >
                        One-time
                      </button>
                      <button
                        type="button"
                        onClick={() => setFrequency('monthly')}
                        className={`px-4 py-3 rounded-lg border text-lg font-semibold transition-colors ${
                          frequency === 'monthly'
                            ? 'border-blue-600 bg-blue-50 text-blue-600'
                            : 'border-gray-300 text-gray-700 hover:border-blue-600'
                        }`}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="mb-8">
                    <label className="block mb-4 text-lg font-semibold text-gray-900">
                      Payment Method
                    </label>
                    <div className="space-y-3">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setPaymentMethod(method.id)}
                          className={`w-full px-4 py-3 rounded-lg border flex items-center justify-between transition-colors ${
                            paymentMethod === method.id
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-300 hover:border-blue-600'
                          }`}
                        >
                          <div className="flex items-center">
                            <method.icon className={`h-6 w-6 mr-3 ${
                              paymentMethod === method.id ? 'text-blue-600' : 'text-gray-400'
                            }`} />
                            <span className={`font-medium ${
                              paymentMethod === method.id ? 'text-blue-600' : 'text-gray-700'
                            }`}>
                              {method.name}
                            </span>
                          </div>
                          {paymentMethod === method.id && (
                            <div className="flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                              <div className="w-3 h-3 bg-white rounded-full"></div>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-6 py-4 text-xl font-bold text-blue-900 transition-all duration-300 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-400 hover:shadow-xl"
                  >
                    <LockClosedIcon className="w-6 h-6 mr-3" />
                    Donate ${amount} {frequency === 'monthly' ? 'Monthly' : 'Today'}
                  </button>
                </form>
              </div>
            </div>

            {/* Impact Sidebar */}
            <div>
              <div className="sticky p-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl top-24">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Your Impact
                </h3>
                
                <div className="mb-8 space-y-4">
                  {impactExamples.map((example) => (
                    <div 
                      key={example.amount}
                      className={`p-4 rounded-lg border transition-all ${
                        amount >= example.amount
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-bold">${example.amount}</span>
                        {amount >= example.amount && (
                          <div className="flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                      <p className="text-gray-700">{example.impact}</p>
                    </div>
                  ))}
                </div>

                {/* Trust Indicators */}
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <ShieldCheckIcon className="w-5 h-5 mr-3 text-green-600" />
                    <span>SSL Secure Payment</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <ArrowPathIcon className="w-5 h-5 mr-3 text-blue-600" />
                    <span>80%+ goes to beneficiaries</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <LockClosedIcon className="w-5 h-5 mr-3 text-purple-600" />
                    <span>100% secure & encrypted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;