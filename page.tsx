
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PublishPage() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
    tags: '',
    featured: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate publishing process
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({
        title: '',
        category: '',
        content: '',
        tags: '',
        featured: false
      });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-orange-600" style={{fontFamily: 'var(--font-pacifico)'}}>
              FitMotivate
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">Home</Link>
              <Link href="/#programs" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">Programs</Link>
              <Link href="/#trainers" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">Trainers</Link>
              <Link href="/#testimonials" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">Success Stories</Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">About Us</Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">Contact</Link>
              <Link href="/publish" className="text-orange-600 font-semibold cursor-pointer">Publish</Link>
            </div>
            <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors cursor-pointer whitespace-nowrap">
              Creator Panel
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Content Publishing Center</h1>
          <p className="text-xl opacity-90">Share your fitness expertise and inspire others on their journey</p>
        </div>
      </section>

      {/* Creator Authority Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="w-24 h-24 bg-cover bg-center bg-top rounded-full mx-auto mb-6" style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20confident%20fitness%20creator%20and%20entrepreneur%2C%20athletic%20build%2C%20inspirational%20expression%2C%20modern%20professional%20headshot%2C%20orange%20background%20elements%2C%20leadership%20authority&width=200&height=200&seq=creator1&orientation=squarish')`
            }}></div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Aizaz Ahmed</h2>
            <p className="text-orange-600 font-semibold text-lg mb-4">Founder & Head Creator - FitMotivate</p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Certified fitness professional with over 8 years of experience in transforming lives through fitness. 
              Passionate about creating content that motivates and educates people on their wellness journey. 
              Published fitness author and motivational speaker.
            </p>
            <div className="flex justify-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">500+</div>
                <div className="text-sm text-gray-600">Articles Published</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">50K+</div>
                <div className="text-sm text-gray-600">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">5</div>
                <div className="text-sm text-gray-600">Years Publishing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publishing Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Publish New Content</h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                  <i className="ri-check-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Content Published Successfully!</h3>
                <p className="text-gray-700 mb-6">Your content has been published and is now live on the platform.</p>
                <div className="flex justify-center space-x-4">
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Publish More Content
                  </button>
                  <Link href="/" className="border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-colors cursor-pointer whitespace-nowrap inline-block">
                    View Live Site
                  </Link>
                </div>
              </div>
            ) : (
              <form id="publish-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Content Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 text-sm"
                    placeholder="Enter your content title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Category</label>
                  <div className="relative">
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 text-sm appearance-none pr-8 bg-white cursor-pointer"
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="workout-tips">Workout Tips</option>
                      <option value="nutrition">Nutrition Guide</option>
                      <option value="motivation">Motivation & Mindset</option>
                      <option value="success-stories">Success Stories</option>
                      <option value="exercise-tutorials">Exercise Tutorials</option>
                      <option value="wellness">Health & Wellness</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Content</label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    maxLength={500}
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 text-sm resize-none"
                    placeholder="Write your content here..."
                    required
                  ></textarea>
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {formData.content.length}/500 characters
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Tags</label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 text-sm"
                    placeholder="fitness, motivation, workout, health (comma separated)"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                    className="mr-3 w-4 h-4 text-orange-600 cursor-pointer"
                  />
                  <label className="text-gray-700 font-semibold cursor-pointer">Featured Content</label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-orange-600 text-white py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Publishing...
                    </span>
                  ) : (
                    'Publish Content'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Published Content Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Publishing Impact</h2>
            <p className="text-xl text-gray-600">Your content is making a difference</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">127</div>
              <div className="text-gray-700">Articles Published</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">45.2K</div>
              <div className="text-gray-700">Total Views</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">2.8K</div>
              <div className="text-gray-700">Shares</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">92%</div>
              <div className="text-gray-700">Engagement Rate</div>
            </div>
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
                <li><Link href="/#programs" className="hover:text-white transition-colors cursor-pointer">Strength Training</Link></li>
                <li><Link href="/#programs" className="hover:text-white transition-colors cursor-pointer">HIIT Cardio</Link></li>
                <li><Link href="/#programs" className="hover:text-white transition-colors cursor-pointer">Yoga & Flexibility</Link></li>
                <li><Link href="/#programs" className="hover:text-white transition-colors cursor-pointer">Personal Training</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Creator</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/publish" className="hover:text-white transition-colors cursor-pointer">Publish Content</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors cursor-pointer">About Creator</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors cursor-pointer">Contact Creator</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Content Library</Link></li>
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
            <p className="text-xs mt-2">Affiliate & AdSense Monetized Platform</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
