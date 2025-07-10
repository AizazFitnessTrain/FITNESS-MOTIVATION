
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-orange-600" style={{fontFamily: 'var(--font-pacifico)'}}>
              FitMotivate
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">Home</Link>
              <Link href="#programs" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">Programs</Link>
              <Link href="#trainers" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">Trainers</Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">Success Stories</Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">About Us</Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">Contact</Link>
            </div>
            <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors cursor-pointer whitespace-nowrap">
              Start Today
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-top"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Powerful%20fitness%20motivation%20scene%20with%20diverse%20group%20of%20athletic%20people%20working%20out%20intensely%20in%20modern%20gym%2C%20dramatic%20lighting%20with%20orange%20and%20black%20color%20scheme%2C%20high%20energy%20atmosphere%2C%20people%20lifting%20weights%20and%20doing%20cardio%2C%20inspirational%20fitness%20photography%2C%20professional%20sports%20photography%20style%2C%20dynamic%20action%20shots%2C%20modern%20equipment%20visible&width=1920&height=1080&seq=hero1&orientation=landscape')`
          }}
        />
        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/00923349009265?text=Hi%20Aizaz!%20I'm%20interested%20in%20your%20fitness%20programs"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            title="Chat with Aizaz on WhatsApp"
          >
            <i className="ri-whatsapp-fill text-2xl"></i>
          </a>
        </div>
        <div className="relative z-10 w-full px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your Body,
              <span className="text-orange-500">Transform Your Life</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Join thousands who've discovered their strongest self through our proven training programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors cursor-pointer whitespace-nowrap">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap">
                Watch Success Stories
              </button>
              <a
                href="https://wa.me/00923349009265?text=Hi%20Aizaz!%20I%20want%20to%20start%20my%20fitness%20journey"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors cursor-pointer whitespace-nowrap inline-block"
              >
                <i className="ri-whatsapp-fill mr-2"></i>WhatsApp Aizaz
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Motivation Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">10K+</div>
              <div className="text-gray-700">Lives Transformed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-700">Success Rate</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-700">Support Available</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-700">Expert Trainers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="programs" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Path to Greatness</h2>
            <p className="text-xl text-gray-600">Personalized programs designed to push your limits and achieve real results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-cover bg-center bg-top" style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Intense%20strength%20training%20workout%20scene%20with%20muscular%20athlete%20lifting%20heavy%20weights%20in%20professional%20gym%2C%20dramatic%20lighting%2C%20sweat%20and%20determination%20visible%2C%20black%20and%20orange%20color%20scheme%2C%20powerful%20motivation%20photography%2C%20professional%20fitness%20photography%2C%20dynamic%20action%20shot&width=400&height=300&seq=strength1&orientation=landscape')`
              }}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Strength Training</h3>
                <p className="text-gray-600 mb-4">Build lean muscle and unleash your inner strength with our scientifically-proven resistance training programs.</p>
                <ul className="text-sm text-gray-700 mb-6 space-y-2">
                  <li className="flex items-center"><i className="ri-check-line text-orange-600 mr-2"></i>Progressive overload system</li>
                  <li className="flex items-center"><i className="ri-check-line text-orange-600 mr-2"></i>Compound movement focus</li>
                  <li className="flex items-center"><i className="ri-check-line text-orange-600 mr-2"></i>Nutrition guidance included</li>
                </ul>
                <button className="w-full bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors cursor-pointer">
                  Start Program
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-cover bg-center bg-top" style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=High%20intensity%20cardio%20training%20with%20athletic%20person%20running%20on%20treadmill%20in%20modern%20gym%2C%20sweat%20and%20energy%20visible%2C%20motivational%20fitness%20scene%2C%20orange%20and%20black%20color%20scheme%2C%20professional%20sports%20photography%2C%20dynamic%20movement%20capture&width=400&height=300&seq=cardio1&orientation=landscape')`
              }}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">HIIT Cardio</h3>
                <p className="text-gray-600 mb-4">Torch calories and boost endurance with high-intensity interval training that delivers maximum results in minimum time.</p>
                <ul className="text-sm text-gray-700 mb-6 space-y-2">
                  <li className="flex items-center"><i className="ri-check-line text-orange-600 mr-2"></i>Fat burning optimization</li>
                  <li className="flex items-center"><i className="ri-check-line text-orange-600 mr-2"></i>20-30 minute sessions</li>
                  <li className="flex items-center"><i className="ri-check-line text-orange-600 mr-2"></i>Equipment-free options</li>
                </ul>
                <button className="w-full bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors cursor-pointer">
                  Start Program
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-cover bg-center bg-top" style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Yoga%20and%20flexibility%20training%20scene%20with%20peaceful%20athlete%20in%20warrior%20pose%20in%20bright%20modern%20studio%2C%20serene%20and%20powerful%20atmosphere%2C%20orange%20and%20white%20color%20scheme%2C%20zen%20fitness%20photography%2C%20graceful%20movement%20capture&width=400&height=300&seq=yoga1&orientation=landscape')`
              }}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Yoga & Flexibility</h3>
                <p className="text-gray-600 mb-4">Enhance mobility, reduce stress, and find your center with mindful movement practices that strengthen body and spirit.</p>
                <ul className="text-sm text-gray-700 mb-6 space-y-2">
                  <li className="flex items-center"><i className="ri-check-line text-orange-600 mr-2"></i>Stress reduction techniques</li>
                  <li className="flex items-center"><i className="ri-check-line text-orange-600 mr-2"></i>Injury prevention focus</li>
                  <li className="flex items-center"><i className="ri-check-line text-orange-600 mr-2"></i>Mind-body connection</li>
                </ul>
                <button className="w-full bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors cursor-pointer">
                  Start Program
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real People, Real Results</h2>
            <p className="text-xl text-gray-600">See how our members transformed their lives through dedication and our proven methods</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-cover bg-center bg-top rounded-full mr-4" style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20happy%20confident%20woman%20in%20athletic%20wear%20smiling%20after%20successful%20workout%2C%20bright%20lighting%2C%20motivational%20fitness%20portrait%2C%20orange%20background%20elements&width=200&height=200&seq=testimonial1&orientation=squarish')`
                }}></div>
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-600">Lost 35 lbs in 4 months</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">"I never thought I could be this strong. The trainers pushed me beyond what I thought was possible, and now I feel unstoppable!"</p>
              <div className="flex text-orange-500">
                <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-cover bg-center bg-top rounded-full mr-4" style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20confident%20athletic%20man%20smiling%20after%20intense%20workout%2C%20muscular%20build%20visible%2C%20motivational%20fitness%20portrait%2C%20orange%20background%20elements&width=200&height=200&seq=testimonial2&orientation=squarish')`
                }}></div>
                <div>
                  <h4 className="font-bold text-gray-900">Mike Rodriguez</h4>
                  <p className="text-gray-600">Gained 20 lbs muscle</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">"The strength program completely changed my physique. I'm lifting weights I never imagined possible. This place is life-changing!"</p>
              <div className="flex text-orange-500">
                <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-cover bg-center bg-top rounded-full mr-4" style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20determined%20woman%20in%20yoga%20attire%20smiling%20peacefully%20after%20flexibility%20training%2C%20serene%20expression%2C%20motivational%20fitness%20portrait%2C%20orange%20background%20elements&width=200&height=200&seq=testimonial3&orientation=squarish')`
                }}></div>
                <div>
                  <h4 className="font-bold text-gray-900">Emma Chen</h4>
                  <p className="text-gray-600">Improved flexibility 300%</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">"The yoga program helped me find balance in both body and mind. I'm more flexible and confident than ever before!"</p>
              <div className="flex text-orange-500">
                <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Your Transformation Starts Today</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands who've already discovered their strongest self. Don't wait for tomorrow - your future self is counting on the decision you make right now.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
              Start Free 7-Day Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors cursor-pointer whitespace-nowrap">
              Schedule Consultation
            </button>
            <a
              href="https://wa.me/00923349009265?text=Hi%20Aizaz!%20I%20want%20to%20schedule%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors cursor-pointer whitespace-nowrap inline-block"
            >
              <i className="ri-whatsapp-fill mr-2"></i>WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-orange-500 mb-4" style={{fontFamily: 'var(--font-pacifico)'}}>
                FitMotivate
              </div>
              <p className="text-gray-400 mb-4">Transforming lives through fitness, one workout at a time.</p>
              <p className="text-sm text-gray-500 mb-4">Created & Founded by Aizaz Ahmed</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full cursor-pointer hover:bg-orange-700 transition-colors">
                  <i className="ri-facebook-fill text-sm"></i>
                </div>
                <div className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full cursor-pointer hover:bg-orange-700 transition-colors">
                  <i className="ri-instagram-fill text-sm"></i>
                </div>
                <div className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full cursor-pointer hover:bg-orange-700 transition-colors">
                  <i className="ri-youtube-fill text-sm"></i>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Strength Training</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">HIIT Cardio</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Yoga & Flexibility</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Personal Training</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Nutrition Guide</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Workout Library</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Contact Us</Link></li>
                <li><Link href="/publish" className="hover:text-white transition-colors cursor-pointer">Publish Content</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Creator Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center"><i className="ri-phone-fill mr-2"></i>+92 334 9009265</p>
                <p className="flex items-center"><i className="ri-mail-fill mr-2"></i>aizaz4990@gmail.com</p>
                <p className="flex items-center"><i className="ri-map-pin-fill mr-2"></i>123 Fitness St, Health City</p>
                <p className="text-xs text-gray-500 mt-2">Direct line to Aizaz Ahmed</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FitMotivate. All rights reserved. Created by Aizaz Ahmed | Transform your life today.</p>
            <p className="text-xs mt-2">Monetized with Google AdSense & Affiliate Programs</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
