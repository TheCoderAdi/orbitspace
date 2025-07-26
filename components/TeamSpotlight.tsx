"use client";

import { ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Bengaluru, Karnataka",
    joinDate: "2021",
    funFact: "Optimized the design system, improving dev velocity by 65%",
    avatar: "/1_team.jpeg",
  },
  {
    id: 2,
    name: "Riya Sharma",
    role: "UX Design Lead",
    department: "Design",
    location: "Mumbai, Maharashtra",
    joinDate: "2020",
    funFact: "Led a complete redesign of the internal dashboard UX",
    avatar: "/2_team.png",
  },
  {
    id: 3,
    name: "Karan Joshi",
    role: "Product Manager",
    department: "Product",
    location: "Hyderabad, Telangana",
    joinDate: "2022",
    funFact: "Launched OKR tracking in OrbitSpace used by 95% of teams",
    avatar: "/3_team.jpeg",
  },
  {
    id: 4,
    name: "Soumya Das",
    role: "DevOps Engineer",
    department: "Infrastructure",
    location: "Pune, Maharashtra",
    joinDate: "2019",
    funFact: "Migrated our entire CI/CD to GitHub Actions with zero downtime",
    avatar: "/4_team.jpeg",
  },
];

const TeamSpotlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentMember = teamMembers[currentIndex];

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Team{" "}
            <span className="bg-gradient-to-r from-neon-lime to-neon-blue bg-clip-text text-transparent">
              Spotlight
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Meet the amazing people making OrbitSpace possible
          </p>
        </div>

        <div className="glass-panel p-8 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="relative inline-block mb-6">
                <Image
                  src={currentMember.avatar}
                  alt={currentMember.name}
                  className="w-32 h-32 rounded-2xl object-cover glow-blue"
                  width={128}
                  height={128}
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-neon-lime rounded-full flex items-center justify-center glow-lime">
                  <div className="w-3 h-3 bg-background rounded-full"></div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2">{currentMember.name}</h3>
              <p className="text-neon-blue font-semibold mb-1">
                {currentMember.role}
              </p>
              <p className="text-muted-foreground mb-4">
                {currentMember.department}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-neon-purple" />
                  {currentMember.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-neon-lime" />
                  Joined {currentMember.joinDate}
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-neon-blue/20 glow-blue">
              <h4 className="text-lg font-semibold mb-3 text-neon-blue">
                🚀 Achievement Unlocked
              </h4>
              <p className="text-foreground leading-relaxed">
                {currentMember.funFact}
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevMember}
              className="hover:bg-glass-secondary hover:glow-blue hover:text-neon-blue"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-neon-blue glow-blue"
                      : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextMember}
              className="hover:bg-glass-secondary hover:glow-blue hover:text-neon-blue"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSpotlight;
