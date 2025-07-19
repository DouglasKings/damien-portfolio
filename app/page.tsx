"use client"

import { useState, useEffect } from "react" // Import useState and useEffect for client-side logic
// Import necessary UI components from shadcn/ui
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
 * This component renders a single-page portfolio website for Damien Papers.
 * It showcases his personal introduction, work placement experience,
 * personal interests, academic achievements, and contact information.
 * The design is clean, professional, and responsive, utilizing Next.js,
 * TypeScript, Tailwind CSS, and shadcn/ui components.
 */
export default function Portfolio() {
  // Define local paths for the PDF documents located in the public/documents directory.
  // These paths are relative to the public directory and will be accessible at runtime.
  // The '#toolbar=0' parameter is an attempt to hide the PDF viewer's toolbar (including download/print buttons).
  // Note: Effectiveness varies across browsers and their native PDF viewer implementations due to security restrictions.
  // For guaranteed control over PDF viewer UI, a dedicated PDF rendering library is required.
  const officialLetterPdfUrl = "/documents/1.pdf#toolbar=0" // Corresponds to public/documents/1.pdf
  const workPlacementReportPdfUrl = "/documents/2.pdf#toolbar=0" // Corresponds to public/documents/2.pdf

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* ========================================
        NAVIGATION SECTION
        A sticky navigation bar at the top of the page for easy access
        to different sections. It uses a backdrop-blur effect for a modern look.
    ======================================== */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Brand/Logo: Displays Damien's name as the site's brand */}
            <div className="text-2xl font-bold text-slate-800 tracking-tight">Damien Papers</div>
            {/* Desktop Navigation Links: Hidden on small screens, visible on medium and larger.
              Links are made bold as requested. */}
            <div className="hidden md:flex space-x-8">
              {[
                { href: "#home", label: "Home" },
                { href: "#work-placement", label: "Work Placement" },
                { href: "#interests", label: "Interests" },
                { href: "#achievements", label: "Achievements" }, // "Resume" changed to "Achievements"
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-bold" // Added font-bold
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
        The main introductory section of the portfolio, featuring Damien's
        profile image, name, a brief summary, and key achievement badges.
    ======================================== */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Profile Image: Uses the provided '1.jpg' image from public/images.
              The 'object-cover' class ensures the image fills its circular container
              while maintaining its aspect ratio and cropping if necessary. */}
            <div className="mb-8">
              <Image
                src="/images/5.jpg" // Updated image source to public/images/5.jpg
                alt="Damien Papers - Professional Portrait"
                width={200}
                height={200}
                className="mx-auto rounded-full border-4 border-white shadow-xl ring-4 ring-blue-100 object-cover" // Added object-cover
                priority // Prioritize loading for LCP
              />
            </div>
            {/* Main Heading: Damien's full name */}
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 tracking-tight">Damien Papers</h1>
            {/* Professional Summary: A concise description of Damien's background and aspirations */}
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Motivated Year 11 student pursuing Law studies after graduating high school in Uganda, demonstrating
              strong academic and athletic potential. Proficient in data analysis, creative writing, and innovative
              problem-solving, with a solid foundation in debating, sports, and ICT. Passionate about gaming, travel,
              and legal studies.
            </p>
            {/* Achievement Badges: Displays key highlights using shadcn/ui Badge component */}
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
            {/* Removed "Download CV" button as per "view only" requirement */}
          </div>
        </div>
      </section>
      {/* ========================================
        WORK PLACEMENT SECTION
        Detailed showcase of Damien's professional experience at MBS Advocates,
        including placement details, key achievements, a photo gallery,
        and embedded official documents for viewing.
    ======================================== */}
      <section id="work-placement" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Work Placement Experience</h2>
            <p className="text-xl text-slate-600">Professional experience at MBS Advocates, Kampala</p>
          </div>
          {/* Placement Overview Grid: Two-column layout for details and achievements */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Placement Details Card */}
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
            {/* Key Achievements Card */}
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
          {/* Photo Gallery: Displays images from Damien's work placement.
            Uses provided image files from public/images.
            The 'object-cover w-full h-full' classes ensure images fill their
            'aspect-square' containers while maintaining aspect ratio. */}
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
                  {
                    title: "Office Environment",
                    alt: "Damien in office environment",
                    src: "/images/1.jpg", // Corrected image source to public/images/1.jpg
                  },
                  {
                    title: "Court Visit",
                    alt: "Damien at court visit",
                    src: "/images/3.jpg", // Corrected image source to public/images/3.jpg
                  },
                  {
                    title: "Team Collaboration",
                    alt: "Damien collaborating with team",
                    src: "/images/2.jpg", // Corrected image source to public/images/2.jpg
                  },
                  {
                    title: "Office Environment",
                    alt: "Damien&apos;s Office Environment", // Fixed unescaped apostrophe
                    src: "/images/4.jpg", // Corrected image source to public/images/4.jpg
                  },
                ].map((item, index) => (
                  <div key={index} className="aspect-square bg-slate-100 rounded-lg relative overflow-hidden group">
                    <Image
                      src={item.src || "/placeholder.svg"} // Using provided image files
                      alt={item.alt}
                      width={200}
                      height={200}
                      className="rounded-lg object-cover w-full h-full transition-transform group-hover:scale-105" // Ensures image fills container
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-lg flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-sm font-medium">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          {/* Official Recommendation Letter: Embeds the PDF for viewing.
            Uses the local path from public/documents/1.pdf.
            The EmbeddedPdfCard component is used here to encapsulate the PDF viewer logic. */}
          <EmbeddedPdfCard
            title="Official Recommendation Letter"
            description="Click to view the full letter from MBS Advocates"
            src={officialLetterPdfUrl}
          />
          {/* Work Placement Report: Embeds the PDF for viewing.
            Uses the local path from public/documents/2.pdf.
            The EmbeddedPdfCard component is used here to encapsulate the PDF viewer logic. */}
          <EmbeddedPdfCard
            title="Work Placement Report"
            description="Click to view the detailed report of Damien&apos;s experience" // Fixed unescaped apostrophe
            src={workPlacementReportPdfUrl}
          />
        </div>
      </section>
      {/* ========================================
        PERSONAL INTERESTS SECTION
        Showcase of Damien's personal interests, including gaming and travel.
    ======================================== */}
      <section id="interests" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Personal Interests</h2>
            <p className="text-xl text-slate-600">Beyond academics - gaming, travel, and exploration</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Gaming Excellence Card */}
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
            {/* Travel & Culture Card */}
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
        Showcases Damien's academic and professional accomplishments,
        including education details, hard skills with progress bars,
        and awards/recognition.
    ======================================== */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Achievements</h2>
            <p className="text-xl text-slate-600">Academic achievements and professional competencies</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Education Card */}
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
            {/* Hard Skills Card with progress bars */}
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
                        {/* This inline style is a known warning from Edge Tools, but is kept for simplicity
                            in this context for dynamic width. For complex scenarios, consider a dedicated
                            ProgressBar component or CSS variables. */}
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
            {/* Awards & Recognition Card */}
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
        Provides contact information and methods for reaching Damien.
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
                content: "+256 776 113 243",
                href: "tel:+256776113243",
              },
              {
                icon: MapPin,
                title: "Location",
                content: "Kampala, Uganda",
                href: null, // No direct link for location
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-8">
                  <contact.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-700 mb-2">{contact.title}</h3>
                  {/* Conditionally render Link if href is provided */}
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
        Displays copyright information and a credit to the developer.
        Includes a placeholder for the developer's portfolio link.
    ======================================== */}
      <footer className="bg-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Copyright Information */}
            <div className="text-center md:text-left">
              <p className="text-slate-400 mb-2">
                © {new Date().getFullYear()} Damien Papers. Built with passion for excellence.
              </p>
              <p className="text-slate-500 text-sm">
                All rights reserved. This portfolio showcases academic and professional achievements.
              </p>
            </div>
            {/* Developer Credit: Placeholder for your portfolio */}
            <div className="text-center md:text-right">
              <div className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <Code className="w-4 h-4" />
                <span className="text-sm">Developed by</span>
                <Link
                  href="https://your-portfolio-link-here.com" // <<< REPLACE THIS WITH YOUR PORTFOLIO LINK
                  className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Douglas Kings Kato {/* Developer */}
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

/**
 * Helper component for embedding PDF documents within a Card.
 * This component abstracts the common structure for displaying PDF iframes.
 * It handles fallback content for browsers that do not support iframes or fail to load the PDF,
 * preventing hydration errors by conditionally rendering content on the client side.
 *
 * @param title - The title of the PDF document.
 * @param description - A brief description of the PDF content.
 * @param src - The URL or path to the PDF file.
 */
function EmbeddedPdfCard({ title, description, src }: { title: string; description: string; src: string }) {
  // State to control whether to show the fallback content (if iframe is not supported or fails to load)
  const [showFallback, setShowFallback] = useState(false)

  // Use useEffect to check for iframe support on the client side after initial render.
  // This prevents hydration mismatches by ensuring fallback is only rendered client-side.
  useEffect(() => {
    // Check if the browser supports iframes. If not, show fallback.
    // This check is client-side only, so it won't affect server rendering.
    if (typeof window !== "undefined" && !window.HTMLIFrameElement) {
      setShowFallback(true)
    }
  }, [])

  return (
    <Card className="border-0 shadow-lg bg-white mb-8">
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="w-5 h-5 mr-2 text-blue-600" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="h-[600px] w-full">
        {showFallback ? (
          // Render fallback content if iframe is not supported or failed to load
          <div className="flex items-center justify-center h-full">
            <p className="text-slate-600 text-center p-4">
              Your browser doesn&apos;t support iframes. You can view the{" "}
              <Link href={src} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                {title} here
              </Link>
              .
            </p>
          </div>
        ) : (
          // Render the iframe. The onError event will trigger fallback if the PDF fails to load.
          // The iframe is self-closing in JSX to prevent React from trying to hydrate children
          // that the browser might discard.
          <iframe
            src={src}
            title={title}
            className="w-full h-full border-none rounded-lg shadow-inner"
            aria-label={`${title} PDF Viewer`}
            onError={() => setShowFallback(true)} // Show fallback if iframe content fails to load
          />
        )}
      </CardContent>
    </Card>
  )
}
