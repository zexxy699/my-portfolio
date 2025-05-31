"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "./app/actions"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Code,
  BookOpen,
  User,
  Sparkles,
  Heart,
  Coffee,
  Music,
  Gamepad2,
  Brain,
  Zap,
  Download,
  Send,
  Star,
  Trophy,
  Rocket,
  Globe,
  Smartphone,
  Cpu,
  PenTool,
  Lightbulb,
  CheckCircle,
  GitBranch,
  Users,
  Award,
  Clock,
  MessageCircle,
} from "lucide-react"

export default function Component() {
  const [activeSection, setActiveSection] = useState("about")
  const [currentTime, setCurrentTime] = useState(new Date())
  const [typedText, setTypedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const words = ["developer", "designer", "tech enthusiast"]
  const baseText = "I'm a "

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const fullText = baseText + currentWord

    const timeout = setTimeout(
      () => {
        if (isTyping) {
          if (typedText.length < fullText.length) {
            setTypedText(fullText.slice(0, typedText.length + 1))
          } else {
            setTimeout(() => setIsTyping(false), 2000)
          }
        } else {
          if (typedText.length > baseText.length) {
            setTypedText(typedText.slice(0, -1))
          } else {
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
            setIsTyping(true)
          }
        }
      },
      isTyping ? 150 : 75,
    )

    return () => clearTimeout(timeout)
  }, [typedText, currentWordIndex, isTyping, words, baseText])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        setIsSubmitted(true)
        setSubmitMessage(result.message)
        e.currentTarget.reset()
        setTimeout(() => {
          setIsSubmitted(false)
          setSubmitMessage("")
        }, 5000)
      }
    } catch (error) {
      setSubmitMessage("Failed to send message. Please try again.")
      setTimeout(() => setSubmitMessage(""), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      image: "/placeholder.svg?height=224&width=150",
      goodreadsUrl: "https://www.goodreads.com/book/show/40121378-atomic-habits",
      rating: 5,
    },
    {
      title: "The 48 Laws of Power",
      author: "Robert Greene",
      image: "/book-48-laws.png",
      goodreadsUrl: "https://www.goodreads.com/book/show/1303.The_48_Laws_of_Power",
      rating: 4,
    },
    {
      title: "Ikigai",
      author: "Héctor García",
      image: "/book-ikigai.png",
      goodreadsUrl: "https://www.goodreads.com/book/show/40534545-ikigai",
      rating: 5,
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      image: "/book-rich-dad.png",
      goodreadsUrl: "https://www.goodreads.com/book/show/69571.Rich_Dad_Poor_Dad",
      rating: 4,
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      image: "/placeholder.svg?height=224&width=150",
      goodreadsUrl: "https://www.goodreads.com/book/show/41881472-the-psychology-of-money",
      rating: 5,
    },
  ]

  const projects = [
    {
      title: "AI Chat Bot",
      description: "Discord bot with AI capabilities",
      tech: ["Python", "OpenAI", "Discord.py"],
      icon: Cpu,
    },
    {
      title: "Web3 DApp",
      description: "Decentralized application on Ethereum",
      tech: ["React", "Solidity", "Web3.js"],
      icon: Globe,
    },
    {
      title: "Mobile App",
      description: "React Native productivity app",
      tech: ["React Native", "Firebase", "TypeScript"],
      icon: Smartphone,
    },
    {
      title: "Design System",
      description: "Component library for startups",
      tech: ["Figma", "React", "Storybook"],
      icon: PenTool,
    },
  ]

  const achievements = [
    { title: "First GitHub Repo", date: "2023", icon: GitBranch },
    { title: "50+ Commits", date: "2024", icon: Code },
    { title: "Local Meetup Speaker", date: "2024", icon: Users },
    { title: "Completed First Project", date: "2024", icon: Award },
  ]

  const quickStats = [
    { label: "Projects Built", value: "15+", icon: Code },
    { label: "Coffee Cups", value: "∞", icon: Coffee },
    { label: "Lines of Code", value: "10K+", icon: Zap },
    { label: "Learning Hours", value: "500+", icon: Brain },
  ]

  const currentActivities = [
    { activity: "Building Discord bots", icon: Gamepad2 },
    { activity: "Learning Web3", icon: Code },
    { activity: "Reading tech blogs", icon: BookOpen },
    { activity: "Watching anime", icon: Heart },
  ]

  const skillLevels = [
    { skill: "Frontend Development", level: "Intermediate", description: "React, Next.js, TypeScript" },
    { skill: "Backend Development", level: "Learning", description: "Node.js, Python, APIs" },
    { skill: "UI/UX Design", level: "Intermediate", description: "Figma, Design Systems" },
    { skill: "AI/ML", level: "Beginner", description: "OpenAI API, Basic ML concepts" },
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid lg:grid-cols-[380px_1fr] gap-8">
          {/* Simplified Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card className="bg-zinc-900/90 border-zinc-800 backdrop-blur-sm shadow-xl">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="relative mx-auto w-32 h-32">
                    <div className="absolute inset-0 bg-blue-500 rounded-full p-1">
                      <img
                        src="/profile-kitten.png"
                        alt="Gaurav Gupta"
                        className="w-full h-full rounded-full object-cover bg-zinc-900"
                        loading="eager"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-zinc-900 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <h1 className="text-2xl font-bold text-white">Gaurav Gupta</h1>
                    <p className="text-gray-400 text-sm mt-1 flex items-center justify-center gap-1">
                      <span>*meow*</span>
                      <Heart className="w-3 h-3 text-pink-500 fill-pink-500" />
                      <span>
                        {">"} w {"<"}
                      </span>
                    </p>
                    <Badge className="mt-2 bg-green-600 text-white border-0">Available for work</Badge>
                  </div>

                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3 text-gray-200 hover:text-blue-400 transition-colors cursor-pointer">
                      <Mail className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">gaurav@dev.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-200">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">Mumbai, India</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-200">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">{currentTime.toLocaleTimeString()}</span>
                    </div>
                  </div>

                  <div className="flex justify-center gap-2 pt-4">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white border-0">
                      <Download className="w-4 h-4 mr-2" />
                      Resume
                    </Button>
                    <Button
                      size="sm"
                      className="bg-zinc-700 hover:bg-zinc-600 text-white border-0"
                      onClick={() => setActiveSection("contact")}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-zinc-900/90 border-zinc-800 backdrop-blur-sm shadow-xl">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-500" />
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickStats.map((stat) => {
                    const Icon = stat.icon
                    return (
                      <div
                        key={stat.label}
                        className="text-center p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-800/70 transition-colors"
                      >
                        <Icon className="w-5 h-5 mx-auto mb-1 text-blue-500" />
                        <div className="text-lg font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-gray-300">{stat.label}</div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Skill Levels - Redesigned */}
            <Card className="bg-zinc-900/90 border-zinc-800 backdrop-blur-sm shadow-xl">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-blue-500" />
                  Skills & Experience
                </h3>
                <div className="space-y-4">
                  {skillLevels.map((skill) => (
                    <div key={skill.skill} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm">{skill.skill}</span>
                        <Badge
                          variant="secondary"
                          className={`text-xs ${
                            skill.level === "Intermediate"
                              ? "bg-blue-600 text-white"
                              : skill.level === "Learning"
                                ? "bg-yellow-600 text-white"
                                : "bg-green-600 text-white"
                          }`}
                        >
                          {skill.level}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-300">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Current Activities */}
            <Card className="bg-zinc-900/90 border-zinc-800 backdrop-blur-sm shadow-xl">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Music className="w-5 h-5 text-blue-500" />
                  Currently Into
                </h3>
                <div className="space-y-2">
                  {currentActivities.map((item) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={item.activity}
                        className="flex items-center gap-3 p-2 bg-zinc-800/30 rounded-lg hover:bg-zinc-800/50 transition-colors"
                      >
                        <Icon className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-gray-200">{item.activity}</span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-zinc-900/90 border-zinc-800 backdrop-blur-sm shadow-xl">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
                <div className="flex justify-center gap-3">
                  <Button size="icon" className="bg-zinc-800 hover:bg-zinc-700 text-gray-400 hover:text-white">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button size="icon" className="bg-zinc-800 hover:bg-blue-600 text-gray-400 hover:text-white">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button size="icon" className="bg-zinc-800 hover:bg-blue-500 text-gray-400 hover:text-white">
                    <Twitter className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1">
                  <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 flex items-center gap-3">
                    Hello!
                    <Sparkles className="w-8 h-8 lg:w-12 lg:h-12 text-blue-500" />
                  </h2>
                  <div className="text-2xl lg:text-3xl font-semibold text-gray-300 mb-4 min-h-[3rem] flex items-center">
                    <span className="text-blue-400">
                      {typedText}
                      <span className="text-blue-400">|</span>
                    </span>
                  </div>
                  <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                    <span className="text-blue-400 font-semibold">17-year-old tech enthusiast</span> from Mumbai who
                    loves building things and exploring new technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {activeSection === "contact" && (
              <Card className="bg-zinc-900/90 border-zinc-800 backdrop-blur-sm shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-600 rounded-lg">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Get In Touch</h3>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                      <p className="text-gray-300">{submitMessage}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-200 mb-2">Name</label>
                          <Input
                            name="name"
                            placeholder="Your name"
                            className="bg-zinc-800/50 border-zinc-700 text-white placeholder-gray-400 focus:border-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                          <Input
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            className="bg-zinc-800/50 border-zinc-700 text-white placeholder-gray-400 focus:border-blue-500"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-200 mb-2">Subject</label>
                        <Input
                          name="subject"
                          placeholder="What's this about?"
                          className="bg-zinc-800/50 border-zinc-700 text-white placeholder-gray-400 focus:border-blue-500"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-200 mb-2">Message</label>
                        <Textarea
                          name="message"
                          placeholder="Tell me about your project or just say hi!"
                          rows={5}
                          className="bg-zinc-800/50 border-zinc-700 text-white placeholder-gray-400 focus:border-blue-500 resize-none"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white border-0 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}

                  {submitMessage && !isSubmitted && (
                    <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <p className="text-red-400 text-sm text-center">{submitMessage}</p>
                    </div>
                  )}

                  <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <p className="text-gray-200 text-sm text-center">
                      <Mail className="w-4 h-4 inline mr-2 text-blue-400" />
                      Or email me directly at{" "}
                      <a href="mailto:gaurav@dev.com" className="text-blue-400 hover:text-blue-300">
                        gaurav@dev.com
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Featured Projects */}
            <Card className="bg-zinc-900/90 border-zinc-800 backdrop-blur-sm shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Featured Projects</h3>
                  <Badge className="bg-green-600 text-white border-0">New</Badge>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {projects.map((project) => {
                    const Icon = project.icon
                    return (
                      <div
                        key={project.title}
                        className="p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800/70 transition-colors group"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-blue-600 rounded-lg">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h4>
                        </div>
                        <p className="text-gray-200 text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} className="bg-zinc-700 text-gray-200 border-0 hover:bg-zinc-600">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-zinc-900/90 border-zinc-800 backdrop-blur-sm shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Milestones</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {achievements.map((achievement) => {
                    const Icon = achievement.icon
                    return (
                      <div
                        key={achievement.title}
                        className="text-center p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800/70 transition-colors"
                      >
                        <Icon className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                        <h4 className="text-sm font-semibold text-white mb-1">{achievement.title}</h4>
                        <p className="text-xs text-gray-300">{achievement.date}</p>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Bookshelf */}
            <Card className="bg-zinc-900/90 border-zinc-800 backdrop-blur-sm shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Bookshelf</h3>
                  <Badge className="bg-blue-600 text-white border-0">{books.length} Books</Badge>
                </div>
                <p className="text-gray-200 mb-6">Here are some of my favorite books that have shaped my thinking:</p>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {books.map((book) => (
                    <div key={book.title} className="max-w-[120px] mx-auto">
                      <a href={book.goodreadsUrl} target="_blank" rel="noopener noreferrer" className="group relative">
                        <div className="relative overflow-hidden rounded-md transition-transform group-hover:scale-105 shadow-lg">
                          <img
                            src={book.image || "/placeholder.svg"}
                            alt={book.title}
                            className="w-full h-56 object-cover object-center rounded-md"
                            style={{ aspectRatio: "2/3" }}
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <ExternalLink className="w-6 h-6 text-white" />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"></div>
                          {/* Rating Stars */}
                          <div className="absolute top-2 right-2 flex gap-1">
                            {[...Array(book.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm font-medium text-white truncate">{book.title}</p>
                          <p className="text-xs text-gray-300 truncate">{book.author}</p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* About Section */}
            <Card className="bg-zinc-900/90 border-zinc-800 backdrop-blur-sm shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  About Me
                  <Badge className="bg-blue-600 text-white border-0">Still Learning</Badge>
                </h3>

                <div className="prose prose-slate prose-invert max-w-none">
                  <p className="text-gray-200 leading-relaxed mb-4">
                    I've been into tech since I was 15 — It all started with my curiosity about how things work. And
                    that spark never really died. In fact, it only grew stronger.
                  </p>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    Coding felt like a superpower to me, so I dove in headfirst. Since then, I've explored everything
                    from Web3 to AI to Robotics. I've never liked sticking to just one lane — if something sparks my
                    interest, I chase it. I guess I've always had this itch to learn everything I can, and I'm still
                    learning every single day.
                  </p>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    Outside the tech world, I like to keep things diverse. I read, write, draw, play chess, binge anime,
                    and get way too deep into conversations about science, politics, or whatever weird question pops
                    into my head. Whether I'm building a Discord bot or sketching out a half-baked idea, I like having
                    something to tinker with.
                  </p>
                  <p className="text-gray-200 leading-relaxed">
                    I don't have it all figured out, but that's kind of the point. I love the process of learning,
                    building, and staying curious. Still figuring things out — and honestly, that's the most exciting
                    part.
                  </p>
                </div>

                <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-semibold">Fun Fact</span>
                  </div>
                  <p className="text-gray-200 text-sm">
                    I've written over 10,000 lines of code while listening to anime soundtracks! 🎵
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
