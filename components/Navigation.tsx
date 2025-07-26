"use client";

import { useState, useRef, useEffect } from "react";
import {
  Bell,
  Search,
  Settings,
  User,
  Menu,
  X,
  CheckCircle,
  AlertCircle,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const notificationRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setIsNotificationOpen(false);
      }
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setIsSettingsOpen(false);
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-glass-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center glow-blue">
              <div className="w-4 h-4 rounded-full bg-white"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              OrbitSpace
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#hero"
              className="text-foreground hover:text-neon-blue transition-colors"
            >
              Dashboard
            </a>
            <a
              href="#team"
              className="text-muted-foreground hover:text-neon-blue transition-colors"
            >
              Teams
            </a>
            <a
              href="#events"
              className="text-muted-foreground hover:text-neon-blue transition-colors"
            >
              Events
            </a>
            <a
              href="#knowledge"
              className="text-muted-foreground hover:text-neon-blue transition-colors"
            >
              Resources
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-glass-secondary hover:glow-blue hover:text-neon-blue"
              onClick={() => toast.success("🔍 Global search activated!")}
            >
              <Search className="h-4 w-4" />
            </Button>

            <div className="relative" ref={notificationRef}>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-glass-secondary hover:glow-blue relative hover:text-neon-blue"
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              >
                <Bell className="h-4 w-4" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-neon-lime rounded-full glow-lime"></div>
              </Button>

              {isNotificationOpen && (
                <div className="absolute -right-16 md:right-0 top-full mt-2 w-80 glass-panel border border-glass-border/30 rounded-xl p-4 z-50 bg-surface/95 backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">Notifications</h3>
                    <span className="text-xs bg-neon-lime/20 text-neon-lime px-2 py-1 rounded-full">
                      3 new
                    </span>
                  </div>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    <div className="flex items-start gap-3 p-3 hover:bg-glass-secondary rounded-lg cursor-pointer">
                      <CheckCircle className="h-5 w-5 text-neon-lime mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          Project &ldquo;Nebula&rdquo; completed
                        </p>
                        <p className="text-xs text-muted-foreground">
                          2 minutes ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 hover:bg-glass-secondary rounded-lg cursor-pointer">
                      <Calendar className="h-5 w-5 text-neon-blue mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          Team meeting in 30 minutes
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Just now
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 hover:bg-glass-secondary rounded-lg cursor-pointer">
                      <AlertCircle className="h-5 w-5 text-neon-pink mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          System maintenance scheduled
                        </p>
                        <p className="text-xs text-muted-foreground">
                          1 hour ago
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-glass-border/20">
                    <Button
                      variant="ghost"
                      className="w-full text-sm hover:bg-glass-secondary hover:text-neon-blue"
                    >
                      View all notifications
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative" ref={settingsRef}>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-glass-secondary hover:glow-blue hover:text-neon-blue"
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              >
                <Settings className="h-4 w-4" />
              </Button>

              {isSettingsOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 glass-panel border border-glass-border/30 rounded-xl p-4 z-50 bg-surface/95 backdrop-blur-xl">
                  <h3 className="font-semibold text-lg mb-4">Settings</h3>
                  <div className="space-y-2">
                    <button className="w-full text-left p-2 hover:bg-glass-secondary rounded-lg text-sm">
                      Account Settings
                    </button>
                    <button className="w-full text-left p-2 hover:bg-glass-secondary rounded-lg text-sm">
                      Notification Preferences
                    </button>
                    <button className="w-full text-left p-2 hover:bg-glass-secondary rounded-lg text-sm">
                      Privacy & Security
                    </button>
                    <button className="w-full text-left p-2 hover:bg-glass-secondary rounded-lg text-sm">
                      Appearance
                    </button>
                    <div className="border-t border-glass-border/20 pt-2 mt-2">
                      <button className="w-full text-left p-2 hover:bg-glass-secondary rounded-lg text-sm">
                        Help & Support
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative" ref={profileRef}>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-glass-secondary hover:glow-blue hover:text-neon-blue"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <User className="h-4 w-4" />
              </Button>

              {isProfileOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 glass-panel border border-glass-border/30 rounded-xl p-4 z-50 bg-surface/95 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-glass-border/20">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                      <span className="text-white font-semibold">AS</span>
                    </div>
                    <div>
                      <p className="font-semibold">Aditya Swayam Siddha</p>
                      <p className="text-sm text-muted-foreground">
                        aditya@orbitspace.com
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <button className="w-full text-left p-2 hover:bg-glass-secondary rounded-lg text-sm">
                      View Profile
                    </button>
                    <button className="w-full text-left p-2 hover:bg-glass-secondary rounded-lg text-sm">
                      Edit Profile
                    </button>
                    <button className="w-full text-left p-2 hover:bg-glass-secondary rounded-lg text-sm">
                      My Projects
                    </button>
                    <button className="w-full text-left p-2 hover:bg-glass-secondary rounded-lg text-sm">
                      Time Off Requests
                    </button>
                    <div className="border-t border-glass-border/20 pt-2 mt-2">
                      <button className="w-full text-left p-2 hover:bg-glass-secondary rounded-lg text-sm text-neon-pink">
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden glass-panel mt-2 rounded-xl border border-glass-border/20 p-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#hero"
                className="text-foreground hover:text-neon-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </a>
              <a
                href="#team"
                className="text-muted-foreground hover:text-neon-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Teams
              </a>
              <a
                href="#events"
                className="text-muted-foreground hover:text-neon-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </a>
              <a
                href="#knowledge"
                className="text-muted-foreground hover:text-neon-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
