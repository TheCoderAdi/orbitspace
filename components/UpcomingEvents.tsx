"use client";

import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const events = [
  {
    id: 1,
    title: "Q4 Innovation Summit",
    date: "Dec 15, 2025",
    time: "9:00 AM - 5:00 PM IST",
    location: "Virtual & HYD Office",
    attendees: 150,
    type: "Company-wide",
    color: "neon-blue",
  },
  {
    id: 2,
    title: "Engineering All-Hands",
    date: "Dec 10, 2025",
    time: "2:00 PM - 3:30 PM IST",
    location: "Virtual",
    attendees: 45,
    type: "Engineering",
    color: "neon-purple",
  },
  {
    id: 3,
    title: "Design System Workshop",
    date: "Dec 12, 2025",
    time: "10:00 AM - 12:00 PM IST",
    location: "BLR Office",
    attendees: 12,
    type: "Design",
    color: "neon-lime",
  },
  {
    id: 4,
    title: "Holiday Team Building",
    date: "Dec 20, 2025",
    time: "3:00 PM - 6:00 PM IST",
    location: "All Offices",
    attendees: 200,
    type: "Social",
    color: "neon-pink",
  },
];

const UpcomingEvents = () => {
  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-4">
              Upcoming{" "}
              <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                Events
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Stay connected with what&apos;s happening across OrbitSpace
            </p>
            <Button
              className="bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 glow-purple"
              onClick={() => toast.success("📅 Loading all events...")}
            >
              View All Events
            </Button>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="glass-panel p-6 rounded-xl hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-semibold bg-neon-blue/10 text-neon-blue border border-neon-blue/20`}
                      >
                        {event.type}
                      </div>
                      <h3 className="font-semibold text-lg group-hover:text-neon-blue transition-colors">
                        {event.title}
                      </h3>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-neon-blue" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-neon-purple" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-neon-lime" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-neon-pink" />
                        {event.attendees} attending
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="border-glass-border hover:bg-glass-secondary hover:glow-blue shrink-0 hover:text-neon-blue"
                    onClick={() =>
                      toast.success(`RSVP confirmed for ${event.title}!`)
                    }
                  >
                    RSVP
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
