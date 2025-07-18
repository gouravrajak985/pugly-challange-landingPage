"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Github, Twitter, Instagram, Trophy, Calendar } from "lucide-react";
import BlurText from "@/components/ui/blur-text";
import VariableProximity from "@/components/ui/variable-proximity";
import StarBorder from "@/components/ui/star-border";
import TargetCursor from "@/components/ui/target-cursor";
import AuroraBackground from "@/components/ui/aurora-background";
import ShinyText from "@/components/ui/shiny-text";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      setFormData({ name: '', email: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <AuroraBackground className="min-h-screen bg-black text-white">
      {/* Target Cursor */}
      <TargetCursor />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-green-400/20 border border-green-500/30 mb-8 animate-glow">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-green-200">$10,000 Prize Pool</span>
            </div>

            {/* Main Heading with Animation */}
            <div className="text-center mb-6">
              <div className="text-4xl sm:text-6xl lg:text-7xl font-bold">
                <ShinyText 
                  text="Pugly Dropshipping Challenge"
                  className="text-4xl sm:text-6xl lg:text-7xl font-bold"
                  speed="2s"
                />
              </div>
            </div>

            {/* Animated Subtitle */}
            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 min-h-12 flex items-center justify-center">
              <VariableProximity
                text="Launch. Sell. Win. $10,000 Prize Pool."
                className="text-center"
                animationDuration={0.6}
              />
            </div>

            {/* Event Status */}
            <div className="flex items-center justify-center gap-2 mb-8 text-lg text-gray-400">
              <Calendar className="w-5 h-5" />
              <span className="animate-pulse">Event Starts Soon</span>
            </div>

            {/* CTA Button */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button className="glass-button text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 border-0">
                  <StarBorder speed="3s" className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 mr-2" />
                    Join the Waitlist
                  </StarBorder>
                </Button>
              </DialogTrigger>
              <DialogContent className="glass-effect text-white max-w-md border-green-500/20">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                    <ShinyText 
                      text="Join the Challenge"
                      className="text-2xl font-bold"
                      speed="2.5s"
                    />
                  </DialogTitle>
                </DialogHeader>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="glass-effect text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500 border-green-500/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="glass-effect text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500 border-green-500/20"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full glass-button text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      Notify Me
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8 animate-fade-in">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-green-400 mb-2">You're In!</h3>
                    <p className="text-gray-300">We'll notify you when the challenge begins.</p>
                  </div>
                )}
              </DialogContent>
            </Dialog>

          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
            <div className="text-gray-400 mb-4">
              Built by <ShinyText text="Pugly" className="text-green-400 font-semibold inline" speed="3s" /> • Powered by <ShinyText text="ReactBits" className="text-green-300 font-semibold inline" speed="3s" />
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </AuroraBackground>
  );
}