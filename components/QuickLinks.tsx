"use client";

import {
  Slack,
  FileText,
  BarChart3,
  Users,
  Calendar,
  BookOpen,
  Settings,
  Coffee,
  MessageSquare,
  Zap,
} from "lucide-react";
import toast from "react-hot-toast";

const quickLinks = [
  { name: "Slack", icon: Slack, color: "neon-blue", href: "#" },
  { name: "Notion", icon: FileText, color: "neon-purple", href: "#" },
  { name: "Analytics", icon: BarChart3, color: "neon-lime", href: "#" },
  { name: "Teams", icon: Users, color: "neon-purple", href: "#" },
  { name: "Calendar", icon: Calendar, color: "neon-blue", href: "#" },
  { name: "Handbook", icon: BookOpen, color: "neon-purple", href: "#" },
  { name: "Settings", icon: Settings, color: "neon-lime", href: "#" },
  { name: "Coffee Chat", icon: Coffee, color: "neon-purple", href: "#" },
  { name: "Feedback", icon: MessageSquare, color: "neon-lime", href: "#" },
  { name: "Workflows", icon: Zap, color: "neon-purple", href: "#" },
];

const QuickLinks = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="glass-panel p-8 rounded-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Quick Access{" "}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Hub
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Jump into your favorite tools and workflows
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="group glass-panel p-6 rounded-xl hover-lift text-center transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={(e) => {
                  e.preventDefault();
                  toast.success(`🚀 Opening ${link.name}...`);
                }}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 bg-${link.color}/10 group-hover:bg-${link.color}/20 transition-colors`}
                >
                  <link.icon className={`h-6 w-6 text-${link.color}`} />
                </div>
                <h3 className="font-semibold text-sm group-hover:text-neon-blue transition-colors">
                  {link.name}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
