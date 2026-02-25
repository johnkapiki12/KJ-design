import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import profileImage from 'figma:asset/b6b7b913a24c789ef033c2833b84a1b483de2c79.png';
import thriftShopDesign from 'figma:asset/2412e4c5daddbda8be52cf1f5bff5144a3464458.png';
import josmacDesign from 'figma:asset/78f56f5cd71e00e695b114dccd527cc33aefa5ee.png';
import { Sparkles, Users, Award, CheckCircle, ArrowRight, Star } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: '🎨',
      title: 'Logo Design',
      description: 'Logos and branding that capture your unique identity and make lasting impressions.'
    },
    {
      icon: '📢',
      title: 'Posters & Flyers',
      description: 'Eye-catching event and promo designs that grab attention and drive engagement.'
    },
    {
      icon: '📱',
      title: 'Social Media Graphics',
      description: 'Posts and ads designed to boost your online presence and increase engagement.'
    },
    {
      icon: '💼',
      title: 'Branding & Identity',
      description: 'Professional business cards and stationery that elevate your brand image.'
    },
    {
      icon: '📄',
      title: 'Print Design',
      description: 'High-quality brochures and banners that make your message stand out.'
    },
    {
      icon: '🌐',
      title: 'Web & Digital Design',
      description: 'Modern website and UI designs that deliver exceptional user experiences.'
    }
  ];

  const stats = [
    { icon: Users, value: '120+', label: 'Happy Clients' },
    { icon: Award, value: '250+', label: 'Projects Completed' },
    { icon: Sparkles, value: '4+', label: 'Years Experience' },
    { icon: Star, value: '4.9/5', label: 'Client Rating' }
  ];

  const testimonials = [
    {
      name: 'Joshua Macharia',
      role: 'CEO,josmac enterprises and gas point sagana',
      image: 'https://images.unsplash.com/photo-1668752741330-8adc5cef7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzE4OTMxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'KJ Design transformed our brand identity completely. The attention to detail and creative approach exceeded our expectations.'
    },
    {
      name: 'James Omondi',
      role: 'Founder, GreenLife Africa',
      image: 'https://images.unsplash.com/photo-1616804827035-f4aa814c14ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTgzMjg2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'Professional, creative, and always delivers on time. Our social media graphics have significantly improved our online presence.'
    },
    {
      name: 'Grace Kamau',
      role: 'Marketing Director, StyleCo Nairobi',
      image: 'https://images.unsplash.com/photo-1668752741330-8adc5cef7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzE4OTMxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'Working with KJ Design has been a game-changer for our marketing materials. Highly recommend their services!'
    }
  ];

  const recentWork = [
    {
      title: 'Modern Tech Branding',
      category: 'Logo Design',
      image: 'https://images.unsplash.com/photo-1726836584814-3c279642218b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2dvJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc3MTg0MDAwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'E-commerce Website',
      category: 'Web & Digital Design',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxODkzODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Event Promotion Poster',
      category: 'Posters & Flyers',
      image: 'https://images.unsplash.com/photo-1642067790937-0b5447355470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwcG9zdGVyJTIwZGVzaWdufGVufDF8fHx8MTc3MTg5NTIxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={profileImage}
            alt="John Kapiki - KJ Design"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 to-pink-900/95" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <Sparkles className="size-4 text-yellow-400" />
              <span className="text-white text-sm">Professional Design Services in Kenya</span>
            </div>
            <h1 className="text-5xl md:text-7xl mb-6 text-white">
              Transform Your Brand with Stunning Design
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Professional graphic design services from Sagana, Kenya. From logos to complete brand identities, 
              social media graphics to web design - we bring your vision to life with creativity and precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-purple-900 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Get Started <ArrowRight className="size-5" />
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="size-10 text-purple-600 mx-auto mb-3" />
                <div className="text-4xl mb-2 text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive design solutions tailored to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-purple-600 transition-colors group hover:shadow-xl"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-purple-600 hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="size-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Recent Work</h2>
            <p className="text-xl text-gray-600">
              Explore our latest design projects and success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {recentWork.map((work, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={work.image}
                    alt={work.title}
                    className="size-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-purple-600 mb-2">{work.category}</div>
                  <h3 className="text-xl text-gray-900">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              View Full Portfolio <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">Why Choose KJ Design?</h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine creativity, strategy, and technical expertise to deliver exceptional design solutions
                that drive results for your business.
              </p>
              
              <div className="space-y-4">
                {[
                  '4 years of professional design experience',
                  'Over 120 satisfied clients',
                  'Client satisfaction guarantee',
                  'Fast turnaround times',
                  'Unlimited revisions included',
                  'Dedicated support throughout'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="size-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1755705152396-4b719047af56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY3JlYXRpdmUlMjB0ZWFtfGVufDF8fHx8MTc3MTkxNzk4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Creative team"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">What Clients Say</h2>
            <p className="text-xl text-white/90">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 text-lg">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="size-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white">{testimonial.name}</div>
                    <div className="text-white/70 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's collaborate to create something amazing. Get in touch today for a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            Start Your Project <ArrowRight className="size-7" />
          </Link>
        </div>
      </section>
    </div>
  );
}