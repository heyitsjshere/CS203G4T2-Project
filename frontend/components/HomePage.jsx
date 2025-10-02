import React from 'react';
import { ArrowRight, Globe, TrendingDown, Shield, Zap } from 'lucide-react';
import { getThemeColours } from '../utils/themeColours';
import ThemeToggle from './ThemeToggle';

const HomePage = ({ onGetStarted, theme, toggleTheme }) => {
  const colours = getThemeColours(theme);

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-amber-50' : 'bg-black'} py-8 px-4`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-4">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <img 
              src="/TariffNomLogo.png" 
              alt="TariffNom Logo" 
              className="w-64 h-auto"
            />
          </div>
          
          <h1 className={`text-5xl font-bold ${colours.text} mb-4`}>
            Welcome to TariffNom
          </h1>
          <p className={`text-xl ${colours.textMuted} mb-8 max-w-2xl mx-auto`}>
            Smart Livestock Tariff Calculator - Navigate international trade tariffs with ease and accuracy
          </p>
          
          <button
            onClick={onGetStarted}
            className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-3 font-semibold text-lg shadow-lg hover:shadow-xl mx-auto"
          >
            Get Started
            <ArrowRight size={24} />
          </button>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className={`${colours.cardBg} rounded-lg p-6 border ${colours.border} text-center`}>
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-green-100 rounded-full">
                <Globe className="text-green-600" size={32} />
              </div>
            </div>
            <h3 className={`text-lg font-semibold ${colours.text} mb-2`}>Global Coverage</h3>
            <p className={`text-sm ${colours.textMuted}`}>
              Calculate tariffs for trade routes across multiple countries
            </p>
          </div>

          <div className={`${colours.cardBg} rounded-lg p-6 border ${colours.border} text-center`}>
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Zap className="text-blue-600" size={32} />
              </div>
            </div>
            <h3 className={`text-lg font-semibold ${colours.text} mb-2`}>Instant Results</h3>
            <p className={`text-sm ${colours.textMuted}`}>
              Get accurate tariff calculations in seconds
            </p>
          </div>

          <div className={`${colours.cardBg} rounded-lg p-6 border ${colours.border} text-center`}>
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-orange-100 rounded-full">
                <TrendingDown className="text-orange-600" size={32} />
              </div>
            </div>
            <h3 className={`text-lg font-semibold ${colours.text} mb-2`}>Cost Savings</h3>
            <p className={`text-sm ${colours.textMuted}`}>
              Compare options to find the most cost-effective tariff rates
            </p>
          </div>

          <div className={`${colours.cardBg} rounded-lg p-6 border ${colours.border} text-center`}>
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <Shield className="text-purple-600" size={32} />
              </div>
            </div>
            <h3 className={`text-lg font-semibold ${colours.text} mb-2`}>Trade Compliance</h3>
            <p className={`text-sm ${colours.textMuted}`}>
              Stay compliant with current trade agreements and regulations
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className={`${colours.cardBg} rounded-lg p-8 border ${colours.border} mb-16`}>
          <h2 className={`text-3xl font-bold ${colours.text} mb-8 text-center`}>How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className={`w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4`}>
                1
              </div>
              <h3 className={`text-lg font-semibold ${colours.text} mb-2`}>Enter Trade Details</h3>
              <p className={`text-sm ${colours.textMuted}`}>
                Input your import/export countries, HS code, and shipment information
              </p>
            </div>

            <div className="text-center">
              <div className={`w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4`}>
                2
              </div>
              <h3 className={`text-lg font-semibold ${colours.text} mb-2`}>Calculate Tariffs</h3>
              <p className={`text-sm ${colours.textMuted}`}>
                Our system analyzes multiple tariff options and trade agreements
              </p>
            </div>

            <div className="text-center">
              <div className={`w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4`}>
                3
              </div>
              <h3 className={`text-lg font-semibold ${colours.text} mb-2`}>Review Results</h3>
              <p className={`text-sm ${colours.textMuted}`}>
                Compare costs and choose the best tariff option for your trade
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className={`text-3xl font-bold ${colours.text} mb-4`}>
            Ready to Calculate Your Tariffs?
          </h2>
          <p className={`text-lg ${colours.textMuted} mb-6`}>
            Start making smarter trade decisions today
          </p>
          <button
            onClick={onGetStarted}
            className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-3 font-semibold text-lg shadow-lg hover:shadow-xl mx-auto"
          >
            Calculate Tariffs Now
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;