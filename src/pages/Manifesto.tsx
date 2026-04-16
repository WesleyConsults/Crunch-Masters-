import { motion } from "motion/react";
import { BookOpen, Users, Coffee } from "lucide-react";

export default function Manifesto() {
  return (
    <div className="flex flex-col bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-900 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000"
            alt="KNUST Campus Community"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
              CrunchMasters Founder's Manifesto
            </h1>
            <p className="text-xl md:text-2xl text-brand-100 font-medium">
              More Than a Meal – Building Community, One Plate at a Time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manifesto Content */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-stone-200/50 border border-stone-100 relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
            <BookOpen className="w-8 h-8" />
          </div>

          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-stone prose-lg max-w-none prose-headings:text-brand-900 prose-a:text-brand-600 mt-6"
          >
            <p className="lead font-medium text-xl text-stone-700 italic border-l-4 border-brand-500 pl-6 mb-8">
              To the incredible students, faculty, and vibrant community of KNUST,
            </p>
            
            <p>
              We are CrunchMasters, and we are absolutely thrilled to open our doors to you, right here on campus! You might know us as the new spot for delicious fries, comforting fried yam, hearty braised rice, and energizing breakfasts. But we want you to know us for something deeper.
            </p>

            <p>
              Just a few years ago, we were sitting in those very lecture halls, navigating the same challenges and celebrating the same small victories that you are experiencing right now. We walked these paths as students, and later, had the privilege of serving as Teaching Assistants, gaining a unique perspective on the hustle, the dreams, and the camaraderie that define life at KNUST.
            </p>

            <div className="flex justify-center my-10">
              <div className="w-16 h-1 bg-brand-200 rounded-full"></div>
            </div>

            <p>
              Our journey from students to TAs, and now to founders of CrunchMasters, is rooted in a shared passion that extends beyond food: a passion for people and community. With backgrounds in Social Work and Sociology, Data Analytics to Public Health, we believe that true sustenance comes not just from what’s on your plate, but from the connections you make, the conversations you share, and the sense of belonging you feel.
            </p>

            <div className="bg-brand-50 rounded-2xl p-6 my-8 border border-brand-100 flex items-start gap-4">
              <div className="bg-white p-3 rounded-full text-brand-500 shrink-0 shadow-sm">
                <Coffee className="w-6 h-6" />
              </div>
              <p className="m-0 text-brand-900 font-medium">
                That's why CrunchMasters isn't just a place to eat; it's designed to be your 'Third Space.' It’s where you can decompress after a tough lecture, brainstorm with classmates, catch up with friends, or simply find a moment of peace and good company. We want to foster a space where everyone feels seen, supported, and energized – not just by our food, but by the vibrant community we build together.
              </p>
            </div>

            <p>
              Every meal we serve, every student we meet, is an opportunity to strengthen the fabric of our KNUST family. We know the late-night study sessions, the exam pressures, and the joy of shared success. We've been there. And now, we're here to fuel your journey, celebrate your achievements, and perhaps, even inspire the next generation of KNUST entrepreneurs.
            </p>

            <p className="font-bold text-stone-800 text-xl my-8 text-center">
              Come in, grab a meal, and become part of our story. Let's build something truly special, together.
            </p>

            <div className="mt-12 pt-8 border-t border-stone-100 flex items-center justify-between">
              <div>
                <p className="font-medium text-stone-500 mb-1">Warmly,</p>
                <p className="font-bold text-brand-600 text-xl m-0">The Founders of CrunchMasters</p>
              </div>
              <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-400">
                <Users className="w-6 h-6" />
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  );
}
