"use client";

import { Search, BookOpen, FileText, Video, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

const knowledgeItems = [
  {
    id: 1,
    title: "Getting Started Guide",
    description: "Everything you need to know to get up and running",
    type: "Guide",
    icon: BookOpen,
    color: "neon-blue",
    popular: true,
  },
  {
    id: 2,
    title: "Design System Documentation",
    description: "Components, patterns, and guidelines for designers",
    type: "Documentation",
    icon: FileText,
    color: "neon-purple",
    popular: true,
  },
  {
    id: 3,
    title: "Engineering Onboarding",
    description: "Dev environment setup and code standards",
    type: "Video",
    icon: Video,
    color: "neon-lime",
    popular: false,
  },
  {
    id: 4,
    title: "Company Handbook",
    description: "Policies, benefits, and company culture",
    type: "Handbook",
    icon: BookOpen,
    color: "neon-pink",
    popular: true,
  },
];

const KnowledgeBase = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="knowledge" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Knowledge{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-lime bg-clip-text text-transparent">
              Base
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers, learn new skills, and stay informed
          </p>
        </div>

        <div className="glass-panel p-8 rounded-2xl mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              ref={inputRef}
              placeholder="Search documentation, guides, policies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 bg-glass-secondary border-glass-border focus:border-neon-blue focus:glow-blue text-lg"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <kbd className="px-2 py-1 text-xs bg-muted rounded border">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span>🔥</span> Popular Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {knowledgeItems
              .filter((item) => item.popular)
              .map((item, index) => (
                <div
                  key={item.id}
                  className="glass-panel p-6 rounded-xl hover-lift group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => toast.success(`📖 Opening ${item.title}...`)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl bg-${item.color}/10 group-hover:bg-${item.color}/20 transition-colors shrink-0`}
                    >
                      <item.icon className={`h-6 w-6 text-${item.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold group-hover:text-neon-blue transition-colors truncate">
                          {item.title}
                        </h4>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-neon-blue transition-colors shrink-0" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-${item.color}/10 text-${item.color} border border-${item.color}/20`}
                      >
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBase;
