'use client'
import React from 'react';
import { ArrowRight, TrendingUp, Zap, Target, MessageCircle, ThumbsUp, Eye, Rocket } from 'lucide-react';

export default function MateiLanding() {
  const calendlyLink = "https://calendly.com/your-link"; // Replace with your actual Calendly link

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden" style={{ fontFamily: 'var(--font-lato)' }}>
      {/* Simple dots pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(230, 180, 0, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6" style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(230, 180, 0, 0.2)'
      }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold relative" style={{ fontFamily: 'var(--font-poppins)' }}>
            <span className="relative">
              Matei Piele
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
            </span>
          </div>
          <a 
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-black text-base font-bold rounded-full hover:scale-105 transition-all duration-300"
            style={{ 
              fontFamily: 'var(--font-poppins)',
              backgroundColor: '#FFD700',
              boxShadow: '0 0 30px rgba(255, 215, 0, 0.4)'
            }}
          >
            Book a Call
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-32 px-6 relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
            Take your brand to<br />
            the next level{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#FFD700] via-[#E6B400] to-[#FFD700] bg-clip-text text-transparent">
                in days
              </span>
              <div className="absolute inset-0 blur-xl bg-gradient-to-r from-[#FFD700] to-[#E6B400] opacity-50"></div>
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Content that stands out and offers that{' '}
            <span className="font-bold" style={{ color: '#E6B400' }}>sell</span>
          </p>

          <a 
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-6 text-black font-bold rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg inline-flex items-center gap-3"
            style={{ 
              fontFamily: 'var(--font-poppins)',
              backgroundColor: '#FFD700',
              boxShadow: '0 10px 50px rgba(255, 215, 0, 0.5)'
            }}
          >
            Work With Me
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Results Section */}
     <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
              My{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#FFD700] to-[#E6B400] bg-clip-text text-transparent">
                  results
                </span>
                <div className="absolute bottom-2 left-0 w-full h-3 bg-[#E6B400] opacity-30 blur-sm"></div>
              </span>
              {' '}speak for themselves.
            </h2>
            <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.6)', fontStyle: 'italic' }}>
              (In the first few weeks of working with clients)
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <MessageCircle className="w-7 h-7" />,
                before: "47",
                after: "63",
                label: "Daily DMs (Leads)",
                color: "#E6B400"
              },
              {
                icon: <ThumbsUp className="w-7 h-7" />,
                before: "70",
                after: "94",
                label: "Average Post Likes",
                color: "#FFD700"
              },
              {
                icon: <Eye className="w-7 h-7" />,
                before: "1.7K",
                after: "2.3K",
                label: "Daily Profile Views",
                color: "#E6B400"
              },
              {
                icon: <Rocket className="w-7 h-7" />,
                before: "0",
                after: "10+",
                label: "Creators Hit 6-Figures",
                color: "#FFD700"
              }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="relative p-8 rounded-3xl backdrop-blur-xl border-2 hover:-translate-y-2 hover:border-[#FFD700] transition-all duration-500"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderColor: 'rgba(230, 180, 0, 0.3)',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
                }}
              >
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-2xl" style={{ 
                      backgroundColor: stat.color,
                      boxShadow: `0 8px 25px ${stat.color}60`
                    }}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center gap-4">
                      <span className="text-3xl font-bold" style={{ 
                        fontFamily: 'var(--font-poppins)',
                        color: 'rgba(255, 255, 255, 0.3)'
                      }}>
                        {stat.before}
                      </span>
                      <div className="p-1 rounded-full" style={{ backgroundColor: '#10b981' }}>
                        <ArrowRight className="w-4 h-4" style={{ color: '#000' }} />
                      </div>
                      <span className="text-4xl font-bold" style={{ 
                        fontFamily: 'var(--font-poppins)',
                        color: '#FFD700'
                      }}>
                        {stat.after}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-center font-semibold" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Services */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: 'var(--font-poppins)' }}>
              What I{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#FFD700] to-[#E6B400] bg-clip-text text-transparent">
                  offer
                </span>
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Brand Strategy",
                description: "Personalized calls in which we develop a strategy for your growth, test it and refine it to perfection.",
                color: "#FFD700"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Ghostwriting",
                description: "Daily high quality posts that drive both engagement and leads.",
                color: "#E6B400"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Expertise",
                description: "I have been there. I know what it's like to post non stop with no results. I am here to fix that.",
                color: "#FFD700"
              }
            ].map((service, idx) => (
              <div 
                key={idx}
                className="group relative p-10 rounded-3xl backdrop-blur-xl border-2 hover:-translate-y-3 hover:border-[#FFD700] transition-all duration-500"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderColor: 'rgba(230, 180, 0, 0.2)',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
                }}
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500" style={{
                    background: `linear-gradient(135deg, ${service.color}, ${service.color}CC)`,
                    boxShadow: `0 10px 30px ${service.color}60`
                  }}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#FFD700] transition-colors" style={{ fontFamily: 'var(--font-poppins)' }}>
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-base" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    {service.description}
                  </p>
                </div>

                {/* Top accent line */}
                <div className="absolute top-0 left-1/4 w-1/2 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                  style={{ backgroundColor: service.color, boxShadow: `0 0 10px ${service.color}` }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 md:p-16 rounded-3xl backdrop-blur-xl border-2 relative overflow-hidden" style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderColor: 'rgba(230, 180, 0, 0.3)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
          }}>
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-32 h-32 opacity-30" style={{
              background: 'radial-gradient(circle at top left, #FFD700, transparent)'
            }}></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-30" style={{
              background: 'radial-gradient(circle at bottom right, #E6B400, transparent)'
            }}></div>

            {/* Gold accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-poppins)' }}>
                <span className="bg-gradient-to-r from-[#FFD700] to-[#E6B400] bg-clip-text text-transparent">About Me</span>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-[#E6B400] to-transparent"></div>
              </h2>
              <div className="space-y-4 text-lg leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                <p>
                  Hey! My name is <span className="font-bold text-[#FFD700]">Matei</span> and I am from Romania. I am an avid reader and writer. I study computer science, but I managed to build a successful personal brand and business part time.
                </p>
                <p className="font-semibold" style={{ color: '#E6B400' }}>
                  Happy to meet you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 relative" style={{ fontFamily: 'var(--font-poppins)' }}>
            Let's Work{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#FFD700] via-[#FFDF33] to-[#E6B400] bg-clip-text text-transparent">
                Together
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
            </span>
          </h2>

          <a 
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-6 text-black font-bold rounded-full hover:scale-105 transition-all duration-300 text-xl inline-flex items-center gap-3"
            style={{ 
              fontFamily: 'var(--font-poppins)',
              backgroundColor: '#FFD700',
              boxShadow: '0 15px 60px rgba(255, 215, 0, 0.6)'
            }}
          >
            <span>Book a call</span>
            <ArrowRight className="w-6 h-6" />
          </a>

          <div className="mt-12 text-base" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            <p>
              Social: <a href="https://x.com/mateipiele" className="font-semibold transition-all duration-300 hover:text-[#FFD700]">@mateipiele</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-sm relative" style={{ 
        color: 'rgba(255, 255, 255, 0.5)',
        borderTop: '1px solid rgba(230, 180, 0, 0.2)'
      }}>
        <p>© 2025 Matei Piele. All rights reserved.</p>
      </footer>
    </div>
  );
}