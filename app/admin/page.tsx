"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Users,
  PlayCircle,
  Search,
  TrendingUp,
  BarChart3,
  Eye,
  Clock,
  BookOpen,
  Settings,
  Shield,
  UserCog,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Menu,
  X,
  Bell,
  LogOut,
  Home,
  Video,
  HelpCircle,
  Layers,
  Lock,
  Unlock,
  Calendar,
  Timer,
  Globe,
  Edit3,
  ShoppingCart,
  Target,
} from "lucide-react";

// Dummy data for KPIs
const kpiData = {
  totalUsers: 12458,
  usersChange: 12.5,
  totalViews: 284592,
  viewsChange: 8.3,
  avgWatchTime: "4m 32s",
  watchTimeChange: -2.1,
  searchQueries: 45672,
  searchChange: 15.7,
  conversionRate: 24.8,
  conversionChange: 5.2,
};

// Conversion funnel data
const conversionFunnelData = {
  trialUsers: 8234,
  engagedUsers: 5421,
  purchasedUsers: 2042,
  trialToPurchase: 24.8,
};

// Course conversion data
const courseConversionData = [
  {
    course: "React Masterclass",
    trials: 2840,
    conversions: 892,
    rate: 31.4,
    revenue: 44600,
  },
  {
    course: "TypeScript Pro",
    trials: 2156,
    conversions: 548,
    rate: 25.4,
    revenue: 27400,
  },
  {
    course: "Next.js Advanced",
    trials: 1876,
    conversions: 412,
    rate: 22.0,
    revenue: 20600,
  },
  {
    course: "Node.js Backend",
    trials: 1362,
    conversions: 190,
    rate: 13.9,
    revenue: 9500,
  },
];

// Most searched questions data
const topSearchedQuestions = [
  { question: "What is React hooks?", searches: 3420, trend: 12 },
  { question: "How to use useState?", searches: 2890, trend: 8 },
  { question: "Explain useEffect lifecycle", searches: 2456, trend: -3 },
  { question: "What is TypeScript?", searches: 2234, trend: 15 },
  { question: "How to handle forms in React?", searches: 1987, trend: 5 },
  { question: "What is Next.js App Router?", searches: 1876, trend: 22 },
  { question: "Explain server components", searches: 1654, trend: 18 },
];

// Most played bits data
const topPlayedBits = [
  {
    title: "Introduction to React",
    plays: 8942,
    duration: "5:32",
    completion: 87,
  },
  {
    title: "useState Deep Dive",
    plays: 7654,
    duration: "8:15",
    completion: 72,
  },
  {
    title: "Building Custom Hooks",
    plays: 6543,
    duration: "12:45",
    completion: 65,
  },
  {
    title: "TypeScript Basics",
    plays: 5432,
    duration: "10:20",
    completion: 78,
  },
  { title: "Next.js Routing", plays: 4321, duration: "7:50", completion: 82 },
  {
    title: "Server vs Client Components",
    plays: 3987,
    duration: "6:15",
    completion: 91,
  },
];

// Weekly analytics data for chart
const weeklyData = [
  { day: "Mon", views: 4200, searches: 1800 },
  { day: "Tue", views: 5100, searches: 2100 },
  { day: "Wed", views: 4800, searches: 1950 },
  { day: "Thu", views: 6200, searches: 2400 },
  { day: "Fri", views: 5800, searches: 2250 },
  { day: "Sat", views: 3200, searches: 1200 },
  { day: "Sun", views: 2900, searches: 1100 },
];

// Course modules for creator's permission management (10 modules)
const courseModules = [
  {
    id: 1,
    name: "Module 1: React Basics",
    bits: 8,
    totalDuration: "45:00",
    previewDuration: "15:00",
    accessType: "full", // full, preview, scheduled, locked
    scheduledDate: null,
  },
  {
    id: 2,
    name: "Module 2: Components & Props",
    bits: 10,
    totalDuration: "52:30",
    previewDuration: "10:00",
    accessType: "preview",
    scheduledDate: null,
  },
  {
    id: 3,
    name: "Module 3: State Management",
    bits: 12,
    totalDuration: "1:15:00",
    previewDuration: "20:00",
    accessType: "full",
    scheduledDate: null,
  },
  {
    id: 4,
    name: "Module 4: Hooks Deep Dive",
    bits: 15,
    totalDuration: "1:30:00",
    previewDuration: "25:00",
    accessType: "scheduled",
    scheduledDate: "2026-01-15",
  },
  {
    id: 5,
    name: "Module 5: Context API",
    bits: 6,
    totalDuration: "35:00",
    previewDuration: "08:00",
    accessType: "locked",
    scheduledDate: null,
  },
  {
    id: 6,
    name: "Module 6: Performance",
    bits: 8,
    totalDuration: "48:00",
    previewDuration: "12:00",
    accessType: "locked",
    scheduledDate: null,
  },
  {
    id: 7,
    name: "Module 7: Testing",
    bits: 10,
    totalDuration: "55:00",
    previewDuration: "15:00",
    accessType: "scheduled",
    scheduledDate: "2026-02-01",
  },
  {
    id: 8,
    name: "Module 8: TypeScript",
    bits: 14,
    totalDuration: "1:20:00",
    previewDuration: "20:00",
    accessType: "preview",
    scheduledDate: null,
  },
  {
    id: 9,
    name: "Module 9: Next.js Basics",
    bits: 12,
    totalDuration: "1:10:00",
    previewDuration: "18:00",
    accessType: "locked",
    scheduledDate: null,
  },
  {
    id: 10,
    name: "Module 10: Deployment",
    bits: 5,
    totalDuration: "28:00",
    previewDuration: "05:00",
    accessType: "locked",
    scheduledDate: null,
  },
];

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [moduleAccess, setModuleAccess] = useState<
    Record<number, { accessType: string; scheduledDate: string | null }>
  >(
    courseModules.reduce(
      (acc, module) => ({
        ...acc,
        [module.id]: {
          accessType: module.accessType,
          scheduledDate: module.scheduledDate,
        },
      }),
      {}
    )
  );
  const handleAccessTypeChange = (moduleId: number, accessType: string) => {
    setModuleAccess((prev) => ({
      ...prev,
      [moduleId]: {
        ...prev[moduleId],
        accessType,
        scheduledDate: accessType === "scheduled" ? "2026-01-15" : null,
      },
    }));
  };

  const getAccessIcon = (accessType: string) => {
    switch (accessType) {
      case "full":
        return <Globe className="h-3 w-3" />;
      case "preview":
        return <Timer className="h-3 w-3" />;
      case "scheduled":
        return <Calendar className="h-3 w-3" />;
      default:
        return <Lock className="h-3 w-3" />;
    }
  };

  const getAccessColor = (accessType: string) => {
    switch (accessType) {
      case "full":
        return "text-green-600 border-green-600 bg-green-50";
      case "preview":
        return "text-blue-600 border-blue-600 bg-blue-50";
      case "scheduled":
        return "text-orange-600 border-orange-600 bg-orange-50";
      default:
        return "text-red-600 border-red-600 bg-red-50";
    }
  };

  const totalBits = courseModules.reduce((sum, m) => sum + m.bits, 0);
  const accessibleBits = courseModules.reduce(
    (sum, m) =>
      sum +
      (moduleAccess[m.id]?.accessType === "full" ||
      moduleAccess[m.id]?.accessType === "preview"
        ? m.bits
        : 0),
    0
  );

  const maxViews = Math.max(...weeklyData.map((d) => d.views));
  const maxSearches = Math.max(...weeklyData.map((d) => d.searches));

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-card border-r border-border transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="text-xl font-bold text-foreground">CourseHub</span>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <nav className="p-4 space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary/10 text-primary font-medium"
          >
            <Home className="h-5 w-5" />
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
          >
            <Users className="h-5 w-5" />
            Users
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
          >
            <Video className="h-5 w-5" />
            Content
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
          >
            <BarChart3 className="h-5 w-5" />
            Analytics
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
          >
            <Settings className="h-5 w-5" />
            Settings
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
          >
            <HelpCircle className="h-5 w-5" />
            Help
          </a>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9">
              <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                AD
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Admin User</p>
              <p className="text-xs text-muted-foreground truncate">
                admin@coursehub.com
              </p>
            </div>
            <Button variant="ghost" size="icon-sm">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-card border-b border-border">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-lg sm:text-xl font-bold">
                  Admin Dashboard
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                  Welcome back! Here&apos;s what&apos;s happening with your
                  platform.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full" />
              </Button>
              <Avatar className="h-8 w-8 sm:h-9 sm:w-9">
                <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                  AD
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="p-4 sm:p-6 space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            <Card>
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Total Users
                    </p>
                    <p className="text-xl sm:text-2xl font-bold mt-1">
                      {kpiData.totalUsers.toLocaleString()}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                      <span className="text-xs sm:text-sm text-green-500">
                        {kpiData.usersChange}%
                      </span>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-full">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Total Views
                    </p>
                    <p className="text-xl sm:text-2xl font-bold mt-1">
                      {(kpiData.totalViews / 1000).toFixed(1)}K
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                      <span className="text-xs sm:text-sm text-green-500">
                        {kpiData.viewsChange}%
                      </span>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 bg-blue-500/10 rounded-full">
                    <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Avg Watch Time
                    </p>
                    <p className="text-xl sm:text-2xl font-bold mt-1">
                      {kpiData.avgWatchTime}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <ArrowDownRight className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
                      <span className="text-xs sm:text-sm text-red-500">
                        {Math.abs(kpiData.watchTimeChange)}%
                      </span>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 bg-orange-500/10 rounded-full">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Search Queries
                    </p>
                    <p className="text-xl sm:text-2xl font-bold mt-1">
                      {(kpiData.searchQueries / 1000).toFixed(1)}K
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                      <span className="text-xs sm:text-sm text-green-500">
                        {kpiData.searchChange}%
                      </span>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 bg-purple-500/10 rounded-full">
                    <Search className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Conversion Rate
                    </p>
                    <p className="text-xl sm:text-2xl font-bold mt-1">
                      {kpiData.conversionRate}%
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                      <span className="text-xs sm:text-sm text-green-500">
                        {kpiData.conversionChange}%
                      </span>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 bg-emerald-500/10 rounded-full">
                    <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
            {/* Weekly Activity Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <BarChart3 className="h-5 w-5" />
                  Weekly Activity
                </CardTitle>
                <CardDescription>
                  Views and search queries over the past week
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between gap-2 sm:gap-4">
                  {weeklyData.map((data, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center gap-2"
                    >
                      <div className="w-full flex gap-1 items-end h-48">
                        <div
                          className="flex-1 bg-primary/80 rounded-t-sm transition-all hover:bg-primary"
                          style={{
                            height: `${(data.views / maxViews) * 100}%`,
                          }}
                          title={`Views: ${data.views}`}
                        />
                        <div
                          className="flex-1 bg-purple-500/80 rounded-t-sm transition-all hover:bg-purple-500"
                          style={{
                            height: `${(data.searches / maxSearches) * 100}%`,
                          }}
                          title={`Searches: ${data.searches}`}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {data.day}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-sm bg-primary" />
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      Views
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-sm bg-purple-500" />
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      Searches
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Engagement Pie Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <TrendingUp className="h-5 w-5" />
                  Content Engagement
                </CardTitle>
                <CardDescription>
                  Breakdown of user engagement by content type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Donut Chart */}
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full -rotate-90"
                    >
                      {/* Video Bits - 45% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="currentColor"
                        className="text-primary"
                        strokeWidth="20"
                        strokeDasharray="113.1 251.3"
                        strokeDashoffset="0"
                      />
                      {/* Search - 30% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="currentColor"
                        className="text-purple-500"
                        strokeWidth="20"
                        strokeDasharray="75.4 251.3"
                        strokeDashoffset="-113.1"
                      />
                      {/* Browse - 15% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="currentColor"
                        className="text-blue-500"
                        strokeWidth="20"
                        strokeDasharray="37.7 251.3"
                        strokeDashoffset="-188.5"
                      />
                      {/* Others - 10% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="currentColor"
                        className="text-orange-500"
                        strokeWidth="20"
                        strokeDasharray="25.1 251.3"
                        strokeDashoffset="-226.2"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold">284K</span>
                      <span className="text-xs text-muted-foreground">
                        Total
                      </span>
                    </div>
                  </div>
                  {/* Legend */}
                  <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-primary" />
                      <span className="text-sm">Video Bits (45%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-purple-500" />
                      <span className="text-sm">Search (30%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-blue-500" />
                      <span className="text-sm">Browse (15%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-orange-500" />
                      <span className="text-sm">Others (10%)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Metrics Tables */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
            {/* Top Searched Questions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Search className="h-5 w-5" />
                  Most Searched Questions
                </CardTitle>
                <CardDescription>
                  Top questions users are searching for
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 sm:px-6 sm:pb-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">
                          Question
                        </th>
                        <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground">
                          Searches
                        </th>
                        <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground hidden sm:table-cell">
                          Trend
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {topSearchedQuestions.map((item, index) => (
                        <tr
                          key={index}
                          className="border-b border-border last:border-0"
                        >
                          <td className="py-3 px-4">
                            <span className="text-sm line-clamp-1">
                              {item.question}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <span className="text-sm font-medium">
                              {item.searches.toLocaleString()}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right hidden sm:table-cell">
                            <div className="flex items-center justify-end gap-1">
                              {item.trend > 0 ? (
                                <>
                                  <ArrowUpRight className="h-4 w-4 text-green-500" />
                                  <span className="text-sm text-green-500">
                                    {item.trend}%
                                  </span>
                                </>
                              ) : (
                                <>
                                  <ArrowDownRight className="h-4 w-4 text-red-500" />
                                  <span className="text-sm text-red-500">
                                    {Math.abs(item.trend)}%
                                  </span>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Top Played Bits */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <PlayCircle className="h-5 w-5" />
                  Most Played Bits
                </CardTitle>
                <CardDescription>
                  Video bits with highest engagement
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 sm:px-6 sm:pb-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">
                          Title
                        </th>
                        <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground">
                          Plays
                        </th>
                        <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground hidden sm:table-cell">
                          Completion
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {topPlayedBits.map((bit, index) => (
                        <tr
                          key={index}
                          className="border-b border-border last:border-0"
                        >
                          <td className="py-3 px-4">
                            <div>
                              <span className="text-sm line-clamp-1">
                                {bit.title}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {bit.duration}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <span className="text-sm font-medium">
                              {bit.plays.toLocaleString()}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right hidden sm:table-cell">
                            <div className="flex items-center justify-end gap-2">
                              <Progress
                                value={bit.completion}
                                className="w-16 h-2"
                              />
                              <span className="text-xs text-muted-foreground w-8">
                                {bit.completion}%
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Conversion Rate Analytics Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
            {/* Conversion Funnel */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Target className="h-5 w-5" />
                  Trial to Purchase Funnel
                </CardTitle>
                <CardDescription>
                  How users convert from trying features to purchasing courses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Funnel visualization */}
                  <div className="space-y-3">
                    <div className="relative">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Trial Users</span>
                        <span className="text-sm text-muted-foreground">
                          {conversionFunnelData.trialUsers.toLocaleString()}
                        </span>
                      </div>
                      <div className="h-10 bg-blue-500 rounded-md flex items-center justify-center relative">
                        <span className="text-white text-sm font-medium">
                          100%
                        </span>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">
                          Engaged Users
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {conversionFunnelData.engagedUsers.toLocaleString()}
                        </span>
                      </div>
                      <div
                        className="h-10 bg-purple-500 rounded-md flex items-center justify-center"
                        style={{
                          width: `${
                            (conversionFunnelData.engagedUsers /
                              conversionFunnelData.trialUsers) *
                            100
                          }%`,
                        }}
                      >
                        <span className="text-white text-sm font-medium">
                          {(
                            (conversionFunnelData.engagedUsers /
                              conversionFunnelData.trialUsers) *
                            100
                          ).toFixed(1)}
                          %
                        </span>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">
                          Purchased Course
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {conversionFunnelData.purchasedUsers.toLocaleString()}
                        </span>
                      </div>
                      <div
                        className="h-10 bg-emerald-500 rounded-md flex items-center justify-center"
                        style={{
                          width: `${
                            (conversionFunnelData.purchasedUsers /
                              conversionFunnelData.trialUsers) *
                            100
                          }%`,
                        }}
                      >
                        <span className="text-white text-sm font-medium">
                          {conversionFunnelData.trialToPurchase}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Summary stats */}
                  <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-border">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-2xl font-bold text-emerald-600">
                        {conversionFunnelData.trialToPurchase}%
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Overall Conversion
                      </p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-2xl font-bold text-primary">
                        $
                        {(
                          conversionFunnelData.purchasedUsers * 50
                        ).toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Total Revenue
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Conversion Table */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <ShoppingCart className="h-5 w-5" />
                  Course Conversion Performance
                </CardTitle>
                <CardDescription>
                  Conversion rates by course after feature trials
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 sm:px-6 sm:pb-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">
                          Course
                        </th>
                        <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground">
                          Trials
                        </th>
                        <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground hidden sm:table-cell">
                          Conversions
                        </th>
                        <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground">
                          Rate
                        </th>
                        <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground hidden md:table-cell">
                          Revenue
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {courseConversionData.map((course, index) => (
                        <tr
                          key={index}
                          className="border-b border-border last:border-0"
                        >
                          <td className="py-3 px-4">
                            <span className="text-sm font-medium line-clamp-1">
                              {course.course}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <span className="text-sm">
                              {course.trials.toLocaleString()}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right hidden sm:table-cell">
                            <span className="text-sm">
                              {course.conversions.toLocaleString()}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <Badge
                              variant="outline"
                              className={
                                course.rate >= 25
                                  ? "text-emerald-600 border-emerald-600 bg-emerald-50"
                                  : course.rate >= 20
                                  ? "text-blue-600 border-blue-600 bg-blue-50"
                                  : "text-orange-600 border-orange-600 bg-orange-50"
                              }
                            >
                              {course.rate}%
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-right hidden md:table-cell">
                            <span className="text-sm font-medium text-emerald-600">
                              ${course.revenue.toLocaleString()}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Creator Control Panel */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <Layers className="h-5 w-5" />
                Module Access Control
              </CardTitle>
              <CardDescription>
                Control which modules users can access and set viewing
                permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Summary Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="bg-muted/50 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-foreground">10</p>
                  <p className="text-xs text-muted-foreground">Total Modules</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-green-600">
                    {
                      Object.values(moduleAccess).filter(
                        (m) => m.accessType === "full"
                      ).length
                    }
                  </p>
                  <p className="text-xs text-muted-foreground">Full Access</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-blue-600">
                    {
                      Object.values(moduleAccess).filter(
                        (m) => m.accessType === "preview"
                      ).length
                    }
                  </p>
                  <p className="text-xs text-muted-foreground">Preview Only</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-orange-600">
                    {
                      Object.values(moduleAccess).filter(
                        (m) => m.accessType === "scheduled"
                      ).length
                    }
                  </p>
                  <p className="text-xs text-muted-foreground">Scheduled</p>
                </div>
              </div>

              {/* Access Legend */}
              <div className="flex flex-wrap gap-3 mb-4 p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="text-green-600 border-green-600 bg-green-50"
                  >
                    <Globe className="h-3 w-3 mr-1" />
                    Full
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    All bits visible
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="text-blue-600 border-blue-600 bg-blue-50"
                  >
                    <Timer className="h-3 w-3 mr-1" />
                    Preview
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    Limited duration
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="text-orange-600 border-orange-600 bg-orange-50"
                  >
                    <Calendar className="h-3 w-3 mr-1" />
                    Scheduled
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    Unlocks on date
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="text-red-600 border-red-600 bg-red-50"
                  >
                    <Lock className="h-3 w-3 mr-1" />
                    Locked
                  </Badge>
                  <span className="text-xs text-muted-foreground">Hidden</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-2 sm:px-4 text-xs font-medium text-muted-foreground">
                        Module
                      </th>
                      <th className="text-center py-3 px-2 sm:px-4 text-xs font-medium text-muted-foreground hidden sm:table-cell">
                        Bits
                      </th>
                      <th className="text-center py-3 px-2 sm:px-4 text-xs font-medium text-muted-foreground hidden md:table-cell">
                        Duration
                      </th>
                      <th className="text-center py-3 px-2 sm:px-4 text-xs font-medium text-muted-foreground hidden lg:table-cell">
                        Preview Time
                      </th>
                      <th className="text-center py-3 px-2 sm:px-4 text-xs font-medium text-muted-foreground">
                        Access Type
                      </th>
                      <th className="text-right py-3 px-2 sm:px-4 text-xs font-medium text-muted-foreground">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseModules.map((module) => (
                      <tr
                        key={module.id}
                        className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                      >
                        <td className="py-3 px-2 sm:px-4">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="p-2 bg-primary/10 rounded-md hidden sm:flex items-center justify-center min-w-8">
                              <span className="text-xs font-bold text-primary">
                                {module.id}
                              </span>
                            </div>
                            <div>
                              <p className="text-sm font-medium line-clamp-1">
                                {module.name}
                              </p>
                              <p className="text-xs text-muted-foreground sm:hidden">
                                {module.bits} bits • {module.totalDuration}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-2 sm:px-4 text-center hidden sm:table-cell">
                          <Badge variant="outline">{module.bits}</Badge>
                        </td>
                        <td className="py-3 px-2 sm:px-4 text-center hidden md:table-cell">
                          <span className="text-sm text-muted-foreground">
                            {module.totalDuration}
                          </span>
                        </td>
                        <td className="py-3 px-2 sm:px-4 text-center hidden lg:table-cell">
                          <span className="text-sm text-muted-foreground">
                            {module.previewDuration}
                          </span>
                        </td>
                        <td className="py-3 px-2 sm:px-4">
                          <div className="flex justify-center">
                            <Select
                              value={moduleAccess[module.id]?.accessType}
                              onValueChange={(value) =>
                                handleAccessTypeChange(module.id, value)
                              }
                            >
                              <SelectTrigger className="w-28 sm:w-32 h-8 text-xs">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="full">
                                  <div className="flex items-center gap-2">
                                    <Globe className="h-3 w-3 text-green-600" />
                                    Full Access
                                  </div>
                                </SelectItem>
                                <SelectItem value="preview">
                                  <div className="flex items-center gap-2">
                                    <Timer className="h-3 w-3 text-blue-600" />
                                    Preview
                                  </div>
                                </SelectItem>
                                <SelectItem value="scheduled">
                                  <div className="flex items-center gap-2">
                                    <Calendar className="h-3 w-3 text-orange-600" />
                                    Scheduled
                                  </div>
                                </SelectItem>
                                <SelectItem value="locked">
                                  <div className="flex items-center gap-2">
                                    <Lock className="h-3 w-3 text-red-600" />
                                    Locked
                                  </div>
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </td>
                        <td className="py-3 px-2 sm:px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Badge
                              variant="outline"
                              className={getAccessColor(
                                moduleAccess[module.id]?.accessType
                              )}
                            >
                              {getAccessIcon(
                                moduleAccess[module.id]?.accessType
                              )}
                              <span className="ml-1 hidden sm:inline">
                                {moduleAccess[module.id]?.accessType ===
                                  "full" && "Public"}
                                {moduleAccess[module.id]?.accessType ===
                                  "preview" && "Limited"}
                                {moduleAccess[module.id]?.accessType ===
                                  "scheduled" &&
                                  moduleAccess[module.id]?.scheduledDate}
                                {moduleAccess[module.id]?.accessType ===
                                  "locked" && "Hidden"}
                              </span>
                            </Badge>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Summary Footer */}
              <div className="mt-4 p-4 bg-muted/30 rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="text-sm">
                  <span className="text-muted-foreground">
                    Users can access{" "}
                  </span>
                  <span className="font-bold text-primary">
                    {accessibleBits}
                  </span>
                  <span className="text-muted-foreground"> of </span>
                  <span className="font-bold">{totalBits}</span>
                  <span className="text-muted-foreground"> total bits</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Edit3 className="h-4 w-4 mr-1" />
                    Bulk Edit
                  </Button>
                  <Button size="sm">Save Changes</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <Settings className="h-5 w-5" />
                Quick Actions
              </CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                <Button
                  variant="outline"
                  className="flex flex-col h-20 sm:h-24 gap-2"
                >
                  <Users className="h-5 w-5" />
                  <span className="text-xs">Add User</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex flex-col h-20 sm:h-24 gap-2"
                >
                  <Video className="h-5 w-5" />
                  <span className="text-xs">New Course</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex flex-col h-20 sm:h-24 gap-2"
                >
                  <BarChart3 className="h-5 w-5" />
                  <span className="text-xs">Reports</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex flex-col h-20 sm:h-24 gap-2"
                >
                  <Shield className="h-5 w-5" />
                  <span className="text-xs">Permissions</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex flex-col h-20 sm:h-24 gap-2"
                >
                  <Bell className="h-5 w-5" />
                  <span className="text-xs">Notifications</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex flex-col h-20 sm:h-24 gap-2"
                >
                  <Settings className="h-5 w-5" />
                  <span className="text-xs">Settings</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
