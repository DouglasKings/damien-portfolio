"use client"

// Import necessary UI components from shadcn/ui
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Import icons from Lucide React for consistent iconography
import {
  Mail,
  Phone,
  MapPin,
  Award,
  BookOpen,
  Briefcase,
  User,
  Download,
  Gamepad2,
  Plane,
  Camera,
  FileText,
  ExternalLink,
  Code,
} from "lucide-react"

// Import Next.js components for optimized images and links
import Image from "next/image"
import Link from "next/link"

/**
 * Main Portfolio Component for Damien Papers
 *
 * A comprehensive portfolio showcasing:
 * - Personal introduction and achievements
 * - Work placement experience at MBS Advocates
 * - Personal interests (gaming and travel)
 * - Academic achievements and skills
 * - Contact information
 * - Developer credit section
 */
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* ========================================
          NAVIGATION SECTION
          Sticky navigation with smooth scrolling
      ======================================== */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Brand/Logo */}
            <div className="text-2xl font-bold text-slate-800 tracking-tight">Damien Papers</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { href: "#home", label: "Home" },
                { href: "#work-placement", label: "Work Placement" },
                { href: "#interests", label: "Interests" },
                { href: "#achievements", label: "Achievements" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ========================================
          HERO SECTION
          Main introduction with profile and highlights
      ======================================== */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Profile Image */}
            <div className="mb-8">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Damien Papers - Professional Portrait"
                width={200}
                height={200}
                className="mx-auto rounded-full border-4 border-white shadow-xl ring-4 ring-blue-100"
                priority
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 tracking-tight">Damien Papers</h1>

            {/* Professional Summary */}
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Motivated Year 11 student pursuing Law after High school graduation, demonstrating strong academic and
              athletic potential. Proficient in data analysis, creative writing, and innovative problem-solving, with a
              solid foundation in debating, sports, and ICT. Passionate about gaming, travel, and legal studies.
            </p>

            {/* Achievement Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { icon: Award, text: "Outstanding in Literature" },
                { icon: BookOpen, text: "Cambridge IGCSE" },
                { icon: Briefcase, text: "Legal Work Experience" },
                { icon: Gamepad2, text: "Pro Gamer" },
                { icon: Plane, text: "Travel Enthusiast" },
              ].map((badge, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                  <badge.icon className="w-4 h-4 mr-2" />
                  {badge.text}
                </Badge>
              ))}
            </div>

            {/* Call-to-Action */}
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================
          WORK PLACEMENT SECTION
          Professional experience showcase
      ======================================== */}
      <section id="work-placement" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Work Placement Experience</h2>
            <p className="text-xl text-slate-600">Professional experience at MBS Advocates, Kampala</p>
          </div>

          {/* Placement Overview Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Placement Details */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                  Placement Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: "Organization", value: "MBS Advocates, Kampala" },
                  { label: "Duration", value: "June 30th - July 11th, 2025 (10 days)" },
                  { label: "Role", value: "Legal Assistant" },
                ].map((item, index) => (
                  <div key={index}>
                    <p className="font-semibold text-slate-700">{item.label}:</p>
                    <p className="text-slate-600">{item.value}</p>
                  </div>
                ))}
                <div>
                  <p className="font-semibold text-slate-700">Performance:</p>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Outstanding</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Key Achievements */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-blue-600" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Demonstrated exceptional analytical skills in complex legal research",
                  "Worked with Corporate Law team on substantive legal documents",
                  "Earned respect from senior attorneys and administrative staff",
                  "Maintained exemplary professional conduct and confidentiality",
                ].map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-slate-600">{achievement}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Photo Gallery */}
          <Card className="border-0 shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Camera className="w-5 h-5 mr-2 text-blue-600" />
                Work Placement Gallery
              </CardTitle>
              <CardDescription>Memories from my time at MBS Advocates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { title: "Office Environment", alt: "MBS Advocates Office" },
                  { title: "Court Visit", alt: "Court Visit Experience" },
                  { title: "Team Collaboration", alt: "Team Collaboration" },
                  { title: "Certificate", alt: "Completion Certificate" },
                ].map((item, index) => (
                  <div key={index} className="aspect-square bg-slate-100 rounded-lg relative overflow-hidden group">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt={item.alt}
                      width={200}
                      height={200}
                      className="rounded-lg object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-lg flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-sm font-medium">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Official Documents */}
          <Card className="border-0 shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-600" />
                Official Confirmation Letter
              </CardTitle>
              <CardDescription>Work placement completion confirmation from MBS Advocates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 rounded-lg p-6 border-2 border-dashed border-slate-300">
                <div className="text-center">
                  <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600 mb-4">Official confirmation letter from MBS Advocates</p>
                  <Button variant="outline" className="mb-2 bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Download Confirmation Letter
                  </Button>
                  <p className="text-sm text-slate-500">PDF Document - 245 KB</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Supervisor's Recommendation */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardHeader>
              <CardTitle>Supervisor's Recommendation</CardTitle>
              <CardDescription>From MBS Advocates Corporate Law Team</CardDescription>
            </CardHeader>
            <CardContent>
              <blockquote className="text-slate-700 italic text-lg leading-relaxed border-l-4 border-blue-600 pl-6">
                "Damien possesses a rare combination of intellectual acuity, professional maturity, and a genuine
                passion for the law that marks him for future success in this field. His analytical mind, mature
                character, and drive for excellence make him an ideal candidate for a rigorous law program."
              </blockquote>
              <p className="text-slate-600 mt-4 font-semibold">— Counsel George Muhangi, MBS Advocates</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ========================================
          PERSONAL INTERESTS SECTION
          Gaming and travel showcase
      ======================================== */}
      <section id="interests" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Personal Interests</h2>
            <p className="text-xl text-slate-600">Beyond academics - gaming, travel, and exploration</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Gaming Excellence */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gamepad2 className="w-5 h-5 mr-2 text-blue-600" />
                  Gaming Excellence
                </CardTitle>
                <CardDescription>Pro gamer on PC and PlayStation 5</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { platform: "PC", description: "Gaming Platform" },
                    { platform: "PS5", description: "Console Gaming" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-slate-100 rounded-lg p-4 text-center hover:bg-slate-200 transition-colors"
                    >
                      <div className="text-2xl font-bold text-blue-600">{item.platform}</div>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-slate-700 font-semibold mb-2">Gaming Achievements:</p>
                  <ul className="space-y-1 text-slate-600">
                    {[
                      "Competitive esports participant",
                      "Strategic thinking and quick decision-making",
                      "Team coordination and leadership",
                      "Problem-solving under pressure",
                    ].map((achievement, index) => (
                      <li key={index}>• {achievement}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Travel & Culture */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plane className="w-5 h-5 mr-2 text-blue-600" />
                  Travel & Culture
                </CardTitle>
                <CardDescription>Exploring the world and embracing new experiences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-4 hover:from-orange-200 hover:to-red-200 transition-colors">
                  <div className="flex items-center mb-2">
                    <div className="text-2xl mr-2">🇮🇳</div>
                    <div>
                      <p className="font-semibold text-slate-700">India</p>
                      <p className="text-sm text-slate-600">Cultural immersion and exploration</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-slate-700 font-semibold mb-2">Travel Benefits:</p>
                  <ul className="space-y-1 text-slate-600">
                    {[
                      "Cultural awareness and sensitivity",
                      "Adaptability to new environments",
                      "Global perspective on issues",
                      "Enhanced communication skills",
                    ].map((benefit, index) => (
                      <li key={index}>• {benefit}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ========================================
          ACHIEVEMENTS SECTION
          Academic and professional accomplishments
      ======================================== */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Achievements</h2>
            <p className="text-xl text-slate-600">Academic achievements and professional competencies</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Education */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-slate-700">Current Studies</p>
                    <p className="text-slate-600">Cambridge IGCSE KS3</p>
                    <p className="text-sm text-slate-500">Aga Khan International School Uganda</p>
                    <p className="text-sm text-slate-500">Year 11 (2021-2025)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700">Excellence In:</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["History", "English", "ICT", "Literature"].map((subject) => (
                        <Badge key={subject} variant="outline">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hard Skills */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-600" />
                  Hard Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { skill: "Microsoft Office Suite", level: "80%" },
                    { skill: "Writing Skills", level: "100%" },
                    { skill: "Data Analysis & ICT", level: "80%" },
                    { skill: "Debating", level: "85%" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-slate-700 text-sm">{item.skill}</span>
                      <div className="w-20 bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: item.level }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Awards & Recognition */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-blue-600" />
                  Awards & Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { award: "Outstanding in Literature", date: "March 7th, 2025" },
                    { award: "Excellent Computer Skills", date: "June 7th, 2018" },
                    { award: "Outstanding Writer", date: "May 24th, 2021" },
                    { award: "ISSA-UG Football Merit", date: "September 28th, 2023" },
                  ].map((item, index) => (
                    <div key={index} className="border-l-2 border-blue-600 pl-3">
                      <p className="font-semibold text-slate-700 text-sm">{item.award}</p>
                      <p className="text-slate-500 text-xs">{item.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ========================================
          CONTACT SECTION
          Contact information and methods
      ======================================== */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600 mb-12">Ready to connect and explore opportunities</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: "Email",
                content: "damienpapers3@gmail.com",
                href: "mailto:damienpapers3@gmail.com",
              },
              {
                icon: Phone,
                title: "Phone",
                content: "+256 779 498 683",
                href: "tel:+256779498683",
              },
              {
                icon: MapPin,
                title: "Location",
                content: "Kampala, Uganda",
                href: null,
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-8">
                  <contact.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-700 mb-2">{contact.title}</h3>
                  {contact.href ? (
                    <Link href={contact.href} className="text-blue-600 hover:underline transition-colors">
                      {contact.content}
                    </Link>
                  ) : (
                    <p className="text-slate-600">{contact.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          FOOTER SECTION
          Copyright and developer credit
      ======================================== */}
      <footer className="bg-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-slate-400 mb-2">
                © {new Date().getFullYear()} Damien Papers. Built with passion for excellence.
              </p>
              <p className="text-slate-500 text-sm">
                All rights reserved. This portfolio showcases academic and professional achievements.
              </p>
            </div>

            {/* Developer Credit - PLACEHOLDER FOR YOUR PORTFOLIO */}
            <div className="text-center md:text-right">
              <div className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <Code className="w-4 h-4" />
                <span className="text-sm">Developed by</span>
                <Link
                  href="https://your-portfolio-link-here.com"
                  className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Douglas Kings Kato
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
              <p className="text-slate-500 text-xs mt-1">Built with Next.js, TypeScript & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
