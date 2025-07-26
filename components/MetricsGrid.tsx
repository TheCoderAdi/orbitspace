"use client";

import { TrendingUp, Target, Zap, Award, Users, Calendar } from "lucide-react";
import toast from "react-hot-toast";

const metrics = [
  {
    id: 1,
    title: "Sprint Velocity",
    value: "47",
    unit: "points",
    change: "+12%",
    trend: "up",
    icon: Zap,
    color: "neon-blue",
  },
  {
    id: 2,
    title: "OKR Progress",
    value: "78%",
    unit: "complete",
    change: "+5%",
    trend: "up",
    icon: Target,
    color: "neon-lime",
  },
  {
    id: 3,
    title: "Team Satisfaction",
    value: "98",
    unit: "/100",
    change: "+0.2",
    trend: "up",
    icon: Award,
    color: "neon-purple",
  },
  {
    id: 4,
    title: "Active Projects",
    value: "124",
    unit: "projects",
    change: "+8",
    trend: "up",
    icon: TrendingUp,
    color: "neon-purple",
  },
  {
    id: 5,
    title: "Team Members",
    value: "247",
    unit: "people",
    change: "+15",
    trend: "up",
    icon: Users,
    color: "neon-blue",
  },
  {
    id: 6,
    title: "Days Until Holiday",
    value: "18",
    unit: "days",
    change: "-1",
    trend: "down",
    icon: Calendar,
    color: "neon-lime",
  },
];

const MetricsGrid = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Company{" "}
            <span className="bg-gradient-to-r from-neon-lime to-neon-pink bg-clip-text text-transparent">
              Metrics
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real-time insights into our progress and performance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={metric.id}
              className="glass-panel p-6 rounded-xl hover-lift group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() =>
                toast.success(
                  `📊 Viewing detailed ${metric.title} analytics...`
                )
              }
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-xl bg-${metric.color}/10 group-hover:bg-${metric.color}/20 transition-colors`}
                >
                  <metric.icon className={`h-6 w-6 text-${metric.color}`} />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-semibold ${
                    metric.trend === "up" ? "text-neon-lime" : "text-neon-pink"
                  }`}
                >
                  <TrendingUp
                    className={`h-4 w-4 ${
                      metric.trend === "down" ? "rotate-180" : ""
                    }`}
                  />
                  {metric.change}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                  {metric.title}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className={`text-3xl font-bold text-${metric.color}`}>
                    {metric.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {metric.unit}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <div className="w-full bg-glass-border/20 rounded-full h-1">
                  <div
                    className={`h-1 rounded-full bg-gradient-to-r from-${metric.color} to-${metric.color}/60 transition-all duration-1000 ease-out`}
                    style={{
                      width: `${Math.min(100, parseInt(metric.value) || 75)}%`,
                      animationDelay: `${index * 0.2}s`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsGrid;
