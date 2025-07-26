"use client";

import { Calendar, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/public/bg.jpeg";
import toast from "react-hot-toast";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt="Futuristic workspace"
          className="w-full h-full object-cover opacity-30"
          height={1080}
          width={1920}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-surface/60 to-background/90"></div>
      </div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full opacity-60 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="glass-panel p-8 rounded-2xl hover-lift">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-lime bg-clip-text text-transparent">
                  OrbitSpace
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Your central hub for collaboration, productivity, and
                innovation. Connect with your team, track progress, and launch
                into the future of work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 glow-blue font-semibold"
                  onClick={() =>
                    toast.success("🚀 Redirecting to dashboard...")
                  }
                >
                  View Dashboard
                </Button>
                <Button
                  variant="outline"
                  className="border-glass-border hover:bg-glass-secondary hover:glow-purple hover:text-neon-blue"
                  onClick={() => toast.success("👥 Loading team directory...")}
                >
                  Team Directory
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-xl hover-lift float">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-neon-blue/10 glow-blue">
                  <Users className="h-6 w-6 text-neon-blue" />
                </div>
                <h3 className="font-semibold">Active Teams</h3>
              </div>
              <p className="text-3xl font-bold text-neon-blue mb-2">247</p>
              <p className="text-sm text-muted-foreground">+12% this week</p>
            </div>

            <div
              className="glass-panel p-6 rounded-xl hover-lift float"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-neon-lime/10 glow-lime">
                  <TrendingUp className="h-6 w-6 text-neon-lime" />
                </div>
                <h3 className="font-semibold">Projects</h3>
              </div>
              <p className="text-3xl font-bold text-neon-lime mb-2">124</p>
              <p className="text-sm text-muted-foreground">
                8 launching this week
              </p>
            </div>

            <div
              className="glass-panel p-6 rounded-xl hover-lift float sm:col-span-2"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-neon-purple/10 glow-purple">
                  <Calendar className="h-6 w-6 text-neon-purple" />
                </div>
                <h3 className="font-semibold">Next Company Event</h3>
              </div>
              <p className="text-xl font-bold text-neon-purple mb-2">
                Q4 Innovation Summit
              </p>
              <p className="text-sm text-muted-foreground">
                December 15, 2025 • Virtual & HYD Office
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
