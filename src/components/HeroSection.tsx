
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Terminal, 
  Database, 
  Cpu, 
  Wifi, 
  Globe, 
  Server,
  Cloud,
  Monitor,
  Smartphone 
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-ict-blue/10 rounded-full animate-spin-slow"></div>
        <div className="absolute top-40 right-10 w-40 h-40 bg-ict-teal/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-52 h-52 bg-ict-purple/10 rounded-full animate-float"></div>
        
        {/* Enhanced tech symbols floating around with staggered animations */}
        <div className="absolute top-1/4 left-1/4 text-ict-blue/20 animate-float transition-all duration-300 hover:text-ict-blue/40 hover:scale-110">
          <Code size={40} />
        </div>
        <div className="absolute top-1/2 right-1/4 text-ict-teal/20 animate-pulse-slow transition-all duration-300 hover:text-ict-teal/40 hover:scale-110">
          <Terminal size={36} />
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-ict-purple/20 animate-spin-slow transition-all duration-300 hover:text-ict-purple/40 hover:scale-110">
          <Database size={30} />
        </div>
        <div className="absolute top-1/3 right-1/3 text-ict-pink/20 animate-float transition-all duration-300 hover:text-ict-pink/40 hover:scale-110" style={{ animationDelay: "2s" }}>
          <Cpu size={28} />
        </div>
        <div className="absolute bottom-1/3 right-1/2 text-ict-yellow/20 animate-pulse-slow transition-all duration-300 hover:text-ict-yellow/40 hover:scale-110" style={{ animationDelay: "1s" }}>
          <Wifi size={32} />
        </div>
        <div className="absolute top-2/3 left-1/5 text-ict-blue/20 animate-spin-slow transition-all duration-300 hover:text-ict-blue/40 hover:scale-110" style={{ animationDelay: "3s" }}>
          <Globe size={36} />
        </div>
        
        {/* Adding more floating tech symbols */}
        <div className="absolute top-1/5 right-1/5 text-ict-teal/20 animate-float transition-all duration-300 hover:text-ict-teal/40 hover:scale-110" style={{ animationDelay: "1.5s" }}>
          <Server size={34} />
        </div>
        <div className="absolute bottom-1/5 right-1/3 text-ict-pink/20 animate-pulse-slow transition-all duration-300 hover:text-ict-pink/40 hover:scale-110" style={{ animationDelay: "2.5s" }}>
          <Cloud size={38} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-[fadeInUp_0.6s_0.2s_forwards]">
            Discover the Future of 
            <span className="gradient-text block mt-2 opacity-0 animate-[fadeInUp_0.6s_0.5s_forwards]">ICT Learning</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 opacity-0 animate-[fadeInUp_0.6s_0.8s_forwards]">
            Master cutting-edge technology skills with our interactive courses, 
            expert instructors, and hands-on learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-[fadeInUp_0.6s_1.1s_forwards]">
            <Button className="btn-primary text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Explore Courses
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Hero visual element with animated entrance */}
        <div className="max-w-4xl mx-auto relative opacity-0 animate-[fadeInUp_0.8s_1.4s_forwards]">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:translate-y-[-5px]">
            <div className="bg-gray-900 h-8 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-gray-400 text-xs">ICT Learning Hub - Interactive Dashboard</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gray-50">
              {/* Staggered card animations */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 card-hover opacity-0 animate-[fadeIn_0.5s_1.7s_forwards]">
                <Monitor className="text-ict-blue mb-2" />
                <h3 className="font-medium">Web Development</h3>
                <p className="text-sm text-muted-foreground">HTML, CSS, JavaScript</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 card-hover opacity-0 animate-[fadeIn_0.5s_1.8s_forwards]">
                <Database className="text-ict-teal mb-2" />
                <h3 className="font-medium">Database Management</h3>
                <p className="text-sm text-muted-foreground">SQL, MongoDB</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 card-hover opacity-0 animate-[fadeIn_0.5s_1.9s_forwards]">
                <Server className="text-ict-purple mb-2" />
                <h3 className="font-medium">Networking</h3>
                <p className="text-sm text-muted-foreground">TCP/IP, Security</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 card-hover opacity-0 animate-[fadeIn_0.5s_2.0s_forwards]">
                <Cloud className="text-ict-pink mb-2" />
                <h3 className="font-medium">Cloud Computing</h3>
                <p className="text-sm text-muted-foreground">AWS, Azure</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 card-hover opacity-0 animate-[fadeIn_0.5s_2.1s_forwards]">
                <Code className="text-ict-yellow mb-2" />
                <h3 className="font-medium">Programming</h3>
                <p className="text-sm text-muted-foreground">Python, Java</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 card-hover opacity-0 animate-[fadeIn_0.5s_2.2s_forwards]">
                <Smartphone className="text-ict-blue mb-2" />
                <h3 className="font-medium">Mobile Development</h3>
                <p className="text-sm text-muted-foreground">Android, iOS</p>
              </div>
            </div>
          </div>
          
          {/* Enhanced decorative elements with animations */}
          <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-ict-teal animate-pulse shadow-lg"></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-ict-purple animate-float shadow-lg"></div>
        </div>

        {/* Stats section with counter animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16 opacity-0 animate-[fadeIn_0.6s_2.3s_forwards]">
          <div className="text-center transform transition-all duration-500 hover:scale-110">
            <h3 className="text-3xl font-bold text-ict-blue">50+</h3>
            <p className="text-muted-foreground">Courses</p>
          </div>
          <div className="text-center transform transition-all duration-500 hover:scale-110">
            <h3 className="text-3xl font-bold text-ict-teal">30k+</h3>
            <p className="text-muted-foreground">Students</p>
          </div>
          <div className="text-center transform transition-all duration-500 hover:scale-110">
            <h3 className="text-3xl font-bold text-ict-purple">100%</h3>
            <p className="text-muted-foreground">Satisfaction</p>
          </div>
          <div className="text-center transform transition-all duration-500 hover:scale-110">
            <h3 className="text-3xl font-bold text-ict-pink">24/7</h3>
            <p className="text-muted-foreground">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
