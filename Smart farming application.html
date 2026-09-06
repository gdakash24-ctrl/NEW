import React, { useState } from 'react';
import { Home, Droplets, CloudRain, Leaf, TrendingUp, Bell, Menu, Camera, MapPin, Calendar, ThermometerSun, Wind } from 'lucide-react';

const SmartFarmingApp = () => {
  const [currentScreen, setCurrentScreen] = useState('home');

  const screens = {
    home: <HomeScreen onNavigate={setCurrentScreen} />,
    weather: <WeatherScreen onNavigate={setCurrentScreen} />,
    crops: <CropsScreen onNavigate={setCurrentScreen} />,
    irrigation: <IrrigationScreen onNavigate={setCurrentScreen} />
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ height: '740px' }}>
        {screens[currentScreen]}
        <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
      </div>
    </div>
  );
};

const HomeScreen = ({ onNavigate }) => {
  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-green-50 to-white">
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 pb-8 rounded-b-3xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Smart Farming</h1>
            <p className="text-green-100 text-sm flex items-center gap-1 mt-1">
              <MapPin size={14} /> chennai, Tamilnadu
            </p>
          </div>
          <div className="flex gap-3">
            <Bell className="cursor-pointer" size={24} />
            <Menu className="cursor-pointer" size={24} />
          </div>
        </div>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-100">Current Temperature</p>
              <p className="text-4xl font-bold">28°C</p>
              <p className="text-sm text-green-100 mt-1">Partly Cloudy</p>
            </div>
            <CloudRain size={64} className="opacity-80" />
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <ActionCard 
            icon={<Camera size={28} />}
            title="Crop Disease"
            subtitle="Scan & Detect"
            color="bg-blue-500"
          />
          <ActionCard 
            icon={<Droplets size={28} />}
            title="Irrigation"
            subtitle="Monitor"
            color="bg-cyan-500"
            onClick={() => onNavigate('irrigation')}
          />
          <ActionCard 
            icon={<TrendingUp size={28} />}
            title="Market Price"
            subtitle="Check Rates"
            color="bg-orange-500"
          />
          <ActionCard 
            icon={<Leaf size={28} />}
            title="My Crops"
            subtitle="View All"
            color="bg-green-500"
            onClick={() => onNavigate('crops')}
          />
        </div>

        <h2 className="text-lg font-bold text-gray-800 mb-3">Today's Insights</h2>
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-orange-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="bg-orange-500 text-white p-2 rounded-lg">
              <Calendar size={20} />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">Watering Reminder</p>
              <p className="text-sm text-gray-600 mt-1">Field A needs watering today. Soil moisture at 35%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WeatherScreen = ({ onNavigate }) => {
  const forecast = [
    { day: 'Mon', temp: '29°', icon: '☀️', rain: '10%' },
    { day: 'Tue', temp: '27°', icon: '⛅', rain: '30%' },
    { day: 'Wed', temp: '26°', icon: '🌧️', rain: '70%' },
    { day: 'Thu', temp: '28°', icon: '☀️', rain: '5%' },
    { day: 'Fri', temp: '30°', icon: '☀️', rain: '0%' }
  ];

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-blue-50 to-white overflow-y-auto pb-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 pb-8 rounded-b-3xl">
        <h1 className="text-2xl font-bold mb-6">Weather Forecast</h1>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5">
          <p className="text-sm text-blue-100 mb-2">Today, Jan 6</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-5xl font-bold">28°C</p>
              <p className="text-blue-100 mt-2">Partly Cloudy</p>
            </div>
            <CloudRain size={72} className="opacity-90" />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-white/30">
            <div className="text-center">
              <Wind size={20} className="mx-auto mb-1" />
              <p className="text-xs text-blue-100">Wind</p>
              <p className="font-semibold">12 km/h</p>
            </div>
            <div className="text-center">
              <Droplets size={20} className="mx-auto mb-1" />
              <p className="text-xs text-blue-100">Humidity</p>
              <p className="font-semibold">65%</p>
            </div>
            <div className="text-center">
              <CloudRain size={20} className="mx-auto mb-1" />
              <p className="text-xs text-blue-100">Rain</p>
              <p className="font-semibold">20%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">5-Day Forecast</h2>
        <div className="space-y-3">
          {forecast.map((day, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between">
              <p className="font-semibold text-gray-800 w-12">{day.day}</p>
              <p className="text-3xl">{day.icon}</p>
              <p className="text-xl font-bold text-gray-800">{day.temp}</p>
              <div className="flex items-center gap-1 text-blue-600">
                <Droplets size={16} />
                <p className="text-sm font-medium">{day.rain}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <p className="font-semibold text-gray-800 mb-2">⚠️ Weather Alert</p>
          <p className="text-sm text-gray-600">Heavy rain expected on Wednesday. Consider postponing fertilizer application.</p>
        </div>
      </div>
    </div>
  );
};

const CropsScreen = ({ onNavigate }) => {
  const crops = [
    { name: 'Wheat', area: '2.5 acres', status: 'Healthy', health: 95, color: 'green', icon: '🌾' },
    { name: 'Rice', area: '1.8 acres', status: 'Needs Attention', health: 70, color: 'yellow', icon: '🌾' },
    { name: 'Cotton', area: '3.2 acres', status: 'Healthy', health: 88, color: 'green', icon: '🌱' }
  ];

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-green-50 to-white overflow-y-auto pb-20">
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 pb-6">
        <h1 className="text-2xl font-bold mb-2">My Crops</h1>
        <p className="text-green-100">Total Area: 7.5 acres</p>
      </div>

      <div className="p-6 space-y-4">
        {crops.map((crop, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-4xl">{crop.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{crop.name}</h3>
                  <p className="text-sm text-gray-500">{crop.area}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                crop.color === 'green' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {crop.status}
              </span>
            </div>

            <div className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Crop Health</span>
                <span className="font-semibold text-gray-800">{crop.health}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${crop.color === 'green' ? 'bg-green-500' : 'bg-yellow-500'}`}
                  style={{ width: `${crop.health}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="text-center">
                <ThermometerSun size={18} className="mx-auto text-orange-500 mb-1" />
                <p className="text-xs text-gray-500">Temp</p>
                <p className="text-sm font-semibold">Optimal</p>
              </div>
              <div className="text-center">
                <Droplets size={18} className="mx-auto text-blue-500 mb-1" />
                <p className="text-xs text-gray-500">Moisture</p>
                <p className="text-sm font-semibold">{crop.health > 80 ? 'Good' : 'Low'}</p>
              </div>
              <div className="text-center">
                <Leaf size={18} className="mx-auto text-green-500 mb-1" />
                <p className="text-xs text-gray-500">Growth</p>
                <p className="text-sm font-semibold">Stage 3</p>
              </div>
            </div>
          </div>
        ))}

        <button className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors">
          + Add New Crop
        </button>
      </div>
    </div>
  );
};

const IrrigationScreen = ({ onNavigate }) => {
  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-cyan-50 to-white overflow-y-auto pb-20">
      <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white p-6 pb-6">
        <h1 className="text-2xl font-bold mb-2">Irrigation Control</h1>
        <p className="text-cyan-100">Smart water management</p>
      </div>

      <div className="p-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm mb-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">Field A - Wheat</h3>
            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
              Active
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 rounded-xl p-4">
              <Droplets className="text-blue-600 mb-2" size={24} />
              <p className="text-sm text-gray-600">Soil Moisture</p>
              <p className="text-2xl font-bold text-gray-800">35%</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <Clock className="text-purple-600 mb-2" size={24} />
              <p className="text-sm text-gray-600">Next Watering</p>
              <p className="text-2xl font-bold text-gray-800">2h</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-cyan-600 text-white py-3 rounded-xl font-semibold hover:bg-cyan-700 transition-colors">
              Start Now
            </button>
            <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
              Schedule
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm mb-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">Field B - Rice</h3>
            <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
              Offline
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 rounded-xl p-4">
              <Droplets className="text-blue-600 mb-2" size={24} />
              <p className="text-sm text-gray-600">Soil Moisture</p>
              <p className="text-2xl font-bold text-gray-800">68%</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <CheckCircle className="text-green-600 mb-2" size={24} />
              <p className="text-sm text-gray-600">Status</p>
              <p className="text-2xl font-bold text-gray-800">Good</p>
            </div>
          </div>

          <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
            View Details
          </button>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4">
          <h4 className="font-semibold text-gray-800 mb-2">💡 Smart Tip</h4>
          <p className="text-sm text-gray-600">Based on weather forecast, reduce watering by 30% on Wednesday due to expected rainfall.</p>
        </div>
      </div>
    </div>
  );
};

const ActionCard = ({ icon, title, subtitle, color, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className={`${color} text-white w-12 h-12 rounded-xl flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <h3 className="font-bold text-gray-800 text-sm">{title}</h3>
      <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
};

const BottomNav = ({ currentScreen, onNavigate }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'weather', icon: CloudRain, label: 'Weather' },
    { id: 'crops', icon: Leaf, label: 'Crops' },
    { id: 'irrigation', icon: Droplets, label: 'Water' }
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                isActive ? 'text-green-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon size={24} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const Clock = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const CheckCircle = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default SmartFarmingApp;