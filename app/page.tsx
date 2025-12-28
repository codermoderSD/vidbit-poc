"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Clock,
  Search,
  Loader,
  Play,
  Star,
  Award,
  Zap,
  RefreshCw,
} from "lucide-react";
import course from "@/data/course";

export default function Home() {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [randomSeed, setRandomSeed] = useState(0);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const searchSectionRef = useRef<HTMLDivElement>(null);

  // Get 4 random sample questions
  const randomQuestions = useMemo(() => {
    const shuffled = [...course.sampleQuestions].sort(
      () => Math.random() - 0.5
    );
    return shuffled.slice(0, 4);
  }, [randomSeed]);

  const handleQuestionClick = (question: string) => {
    setSearchQuery(question);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const q = course.sampleQuestions.find(
        (item) => item.question === searchQuery
      );
      if (q) {
        const questionIndex = course.sampleQuestions.indexOf(q);
        setSelectedQuestion(String(questionIndex));
        setIsVideoLoading(true);
      }
    }
  };

  const handleRefreshQuestions = () => {
    setRandomSeed((prev) => prev + 1);
  };

  const handleAskAnother = () => {
    setSelectedQuestion(null);
    setSearchQuery("");
    setIsVideoLoading(false);
    setTimeout(() => {
      searchSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  // Auto-scroll to video section when question is selected
  useEffect(() => {
    if (selectedQuestion && videoSectionRef.current) {
      setTimeout(() => {
        videoSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [selectedQuestion]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold text-foreground">CourseHub</span>
            <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Categories
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Teach
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                My Learning
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </header>

      {/* Course Hero - Dark Banner */}
      <div className="bg-zinc-900 text-white">
        <div className="container mx-auto px-4 py-10 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Video Preview - Compact */}
            <div className="lg:w-80 shrink-0">
              <div className="aspect-video bg-zinc-800 rounded-lg relative overflow-hidden group cursor-pointer shadow-lg">
                <video
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  <source src={course.videoUrl} type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-zinc-900 ml-0.5" />
                  </div>
                </div>
                <p className="absolute bottom-2 left-0 right-0 text-center text-xs text-white/80">
                  Preview this course
                </p>
              </div>
            </div>

            {/* Course Info */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-zinc-400">Development</span>
                <span className="text-zinc-600">›</span>
                <span className="text-zinc-400">Operating Systems</span>
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold leading-tight">
                {course.title}
              </h1>
              <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                {course.description}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs pt-1">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-amber-400">
                    {course.rating}
                  </span>
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="text-zinc-500">
                    ({course.students.toLocaleString()})
                  </span>
                </div>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-400">
                  {course.students.toLocaleString()} students
                </span>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-400">By {course.instructor}</span>
              </div>

              {/* Pricing & CTA - Inline */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl lg:text-3xl font-bold">
                    ${course.price}
                  </span>
                  <span className="text-sm text-zinc-500 line-through">
                    ${course.originalPrice}
                  </span>
                  <span className="text-xs font-medium text-green-500 bg-green-500/10 px-2 py-0.5 rounded">
                    25% OFF
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 font-medium"
                  >
                    Buy now
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-zinc-600 bg-transparent text-zinc-100 hover:bg-zinc-800 hover:text-white font-medium"
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
              <p className="text-xs text-zinc-500 pt-1">
                30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Vidbit Section - Highlighted */}
        <div className="relative mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-sm"></div>
          <Card className="relative border-2 border-primary/30 shadow-lg bg-card overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-bl-lg flex items-center gap-1.5">
              <Zap className="w-3 h-3" />
              Powered by vidbit
            </div>
            <CardContent className="p-6 pt-10 space-y-5" ref={searchSectionRef}>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">
                  Not sure if this course covers what you need?
                </h2>
                <p className="text-sm text-muted-foreground">
                  Ask any question and instantly see the exact video clip that
                  answers it.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g., How does paging work?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                    className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/30 focus:outline-none transition-all"
                  />
                  <Button
                    onClick={handleSearch}
                    className="px-5 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-xs text-muted-foreground py-1">
                    Try:
                  </span>
                  {randomQuestions.map((q) => (
                    <button
                      key={q.question}
                      onClick={() => handleQuestionClick(q.question)}
                      className="px-3 py-1 text-xs text-muted-foreground rounded-full bg-muted/60 hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/30 transition-all"
                    >
                      {q.question}
                    </button>
                  ))}
                  <button
                    onClick={handleRefreshQuestions}
                    className="p-1 rounded-full hover:bg-muted transition-colors"
                    title="Refresh questions"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-muted-foreground hover:text-foreground" />
                  </button>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 hidden">
                {course.sampleQuestions.map((q, idx) => (
                  <button
                    key={q.question}
                    onClick={() => {
                      setSelectedQuestion(String(idx));
                    }}
                    className={`text-left p-5 rounded-xl border-2 transition-all duration-200 ${
                      selectedQuestion === String(idx)
                        ? "bg-primary text-primary-foreground border-primary shadow-lg scale-[1.02] ring-2 ring-primary/30"
                        : "bg-card text-foreground border-border hover:border-primary/60 hover:shadow-md hover:scale-[1.01]"
                    }`}
                  >
                    <p className="text-sm leading-relaxed font-medium">
                      {q.question}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <Clock className="w-3.5 h-3.5 opacity-70" />
                      <span className="text-xs opacity-70 font-medium">
                        {q.start_timestamp} - {q.end_timestamp}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {selectedQuestion && (
                <div
                  ref={videoSectionRef}
                  className="space-y-4 pt-4 border-t border-border"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-foreground">
                        Found in this course
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {
                        course.sampleQuestions[parseInt(selectedQuestion)]
                          ?.start_timestamp
                      }{" "}
                      -{" "}
                      {
                        course.sampleQuestions[parseInt(selectedQuestion)]
                          ?.end_timestamp
                      }
                    </span>
                  </div>
                  <div className="relative aspect-video bg-zinc-900 rounded-lg overflow-hidden">
                    {isVideoLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 z-10">
                        <div className="flex flex-col items-center gap-2">
                          <Loader className="w-6 h-6 text-primary animate-spin" />
                          <p className="text-xs text-zinc-400">
                            Finding the exact moment...
                          </p>
                        </div>
                      </div>
                    )}
                    <video
                      key={selectedQuestion}
                      className="w-full h-full"
                      controls
                      autoPlay
                      preload="metadata"
                      onCanPlay={() => setIsVideoLoading(false)}
                    >
                      <source
                        src={
                          course.sampleQuestions[parseInt(selectedQuestion)]
                            ?.file_name
                        }
                        type="video/mp4"
                      />
                      Your browser does not support video playback.
                    </video>
                  </div>

                  {/* CTA below video */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          This topic is covered in detail in the full course
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Get complete access for ${course.price}
                        </p>
                      </div>
                      <Button className="shrink-0">Enroll Now</Button>
                    </div>

                    {/* Ask Another Question Button */}
                    <div className="text-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleAskAnother}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        Still not convinced? Ask another question →
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* What you'll learn */}
        <div className="mb-10">
          <Card className="border border-border">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">What you&apos;ll learn</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Understand how modern operating systems manage memory",
                  "Master paging and page table structures",
                  "Learn virtual memory and address translation",
                  "Implement memory protection mechanisms",
                  "Handle page faults effectively",
                  "Understand TLB and caching strategies",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Course Content */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Course content</h2>
          <div className="text-sm text-muted-foreground mb-4">
            4 sections • 14 lectures • 6h 15m total length
          </div>
          <Card className="border border-border divide-y divide-border">
            {course.curriculum.map((section, index) => (
              <div key={index} className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-foreground">
                    {section.section}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {section.lessons.length} lectures • {section.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {section.lessons.map((lesson, lessonIndex) => (
                    <li
                      key={lessonIndex}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <Play className="w-3 h-3 shrink-0" />
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Card>
        </div>

        {/* Instructor */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Instructor</h2>
          <Card className="border border-border">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-muted-foreground">
                  {course.instructor
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary hover:underline cursor-pointer">
                    {course.instructor}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Computer Science Professor
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" /> 4.8 Instructor Rating
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" /> 12,459 Students
                    </span>
                    <span className="flex items-center gap-1">
                      <Play className="w-4 h-4" /> 3 Courses
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Dr. Sarah Chen is a Computer Science professor with 15+
                    years of experience teaching operating systems and computer
                    architecture. Her courses focus on building deep
                    understanding through practical examples.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mobile Sticky Footer */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 flex items-center justify-between gap-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold">${course.price}</span>
              <span className="text-sm text-muted-foreground line-through">
                ${course.originalPrice}
              </span>
            </div>
          </div>
          <Button size="lg" className="flex-1 max-w-[200px]">
            Add to cart
          </Button>
        </div>
      </main>
    </div>
  );
}
