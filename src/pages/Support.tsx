import { motion } from "motion/react";
import { TrendingUp, Target, Users, Zap, Briefcase, Handshake, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Support() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-stone-900 border-b-8 border-brand-500">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=2000"
            alt="Business Operations"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/90 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/30 rounded-full px-4 py-1.5 mb-8"
            >
              <Briefcase className="w-4 h-4 text-brand-400" />
              <span className="text-brand-300 text-sm font-bold uppercase tracking-wider">Partnership Proposal</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-6"
            >
              Invest in the Future of <span className="text-brand-400">Campus Dining.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-stone-300 leading-relaxed font-medium mb-10 max-w-2xl"
            >
              CrunchMasters isn't just a food vendor; we're building a scalable, premium community hub that's redefining the student experience at KNUST and beyond.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#partner" className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                Partner With Us
              </a>
              <a href="#traction" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 border border-white/10">
                View Our Traction
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-stone-900 mb-6">The Campus Dining Dilemma</h2>
          <p className="text-xl text-stone-600">
            For decades, university food services have suffered from three systemic issues that hinder student performance and satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm">1</span>
                  The Problem
                </h3>
                <ul className="space-y-4 text-stone-600">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span>Extreme wait times during peak lecture transition periods.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span>Inconsistent food quality and questionable hygienic standards across disjointed vendors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span>A complete lack of comfortable, modern "Third Spaces" for students to eat and collaborate.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-brand-900 p-8 rounded-3xl border border-brand-800 shadow-xl relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-800 rounded-tl-full blur-2xl opacity-50" />
              <div className="relative z-10 text-white">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-brand-400" />
                  The CrunchMasters Solution
                </h3>
                <p className="text-brand-100 leading-relaxed mb-6">
                  We built a highly optimized, digitally-enabled fast-casual model. By streamlining a focused menu of high-demand staples (Yam, Waakye, Noodles) and integrating modern ordering tech, we drastically cut wait times while offering a premium, reliable product in a community-centric environment.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-brand-800/50 p-4 rounded-2xl border border-brand-700">
                    <div className="text-2xl font-bold text-white mb-1">50%</div>
                    <div className="text-xs text-brand-200 font-medium uppercase tracking-wider">Faster Service</div>
                  </div>
                  <div className="bg-brand-800/50 p-4 rounded-2xl border border-brand-700">
                    <div className="text-2xl font-bold text-white mb-1">Premium</div>
                    <div className="text-xs text-brand-200 font-medium uppercase tracking-wider">Quality Control</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542314831-c6a4d1466046?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Kitchen"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl border border-stone-100 hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-stone-500 font-medium">Daily Active Users</div>
                  <div className="text-2xl font-bold text-stone-900">Growing Rapidly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Win (USPs) */}
      <section id="traction" className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-stone-900 mb-6">Our Competitive Edge</h2>
            <p className="text-xl text-stone-600">
              Why CrunchMasters is perfectly positioned to dominate the university ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-stone-50 hover:bg-white hover:shadow-xl transition-all border border-stone-100 hover:border-brand-100 group">
              <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">Captive Market Access</h3>
              <p className="text-stone-600 leading-relaxed">
                Direct access to tens of thousands of KNUST students with a high frequency of recurring purchases built into their daily academic routines.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-stone-50 hover:bg-white hover:shadow-xl transition-all border border-stone-100 hover:border-brand-100 group">
              <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">Tested & Proven Ops</h3>
              <p className="text-stone-600 leading-relaxed">
                Our menu and operational flow haven't been guessed—they've been iterated upon through real student feedback and proven through successful day-to-day operations.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-stone-50 hover:bg-white hover:shadow-xl transition-all border border-stone-100 hover:border-brand-100 group">
              <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">Insider Expertise</h3>
              <p className="text-stone-600 leading-relaxed">
                Led by former students and TAs. We don't just sell to this demographic; we understand their lifestyle, study habits, and economic constraints intimately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section id="partner" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500 rounded-full blur-[100px] opacity-20 -mr-48 -mt-48" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-6">Partnership Opportunities</h2>
            <p className="text-xl text-stone-400">
              We are actively looking for visionary partners to help us scale CrunchMasters across KNUST and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative z-10 max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Handshake className="w-10 h-10 text-brand-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Investors & Equity</h3>
              <p className="text-stone-400 mb-8 leading-relaxed">
                We are preparing to scale operations, upgrade our technology stack, and potentially expand physical footprints. Let's discuss equity investments and growth capital to fuel our next stage.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-stone-300">
                  <div className="w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-brand-400" />
                  </div>
                  System Upgrades & Tech
                </li>
                <li className="flex items-center gap-3 text-stone-300">
                  <div className="w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-brand-400" />
                  </div>
                  Campus Expansion
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Briefcase className="w-10 h-10 text-brand-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Collaborators & Clients</h3>
              <p className="text-stone-400 mb-8 leading-relaxed">
                Are you an institution, department, or student organization? We provide premium catering solutions at scale, tailored to the university schedule and budget.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-stone-300">
                  <div className="w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-brand-400" />
                  </div>
                  Departmental Meal Plans
                </li>
                <li className="flex items-center gap-3 text-stone-300">
                  <div className="w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-brand-400" />
                  </div>
                  Event Catering & Supply Chain
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center relative z-10">
            <Link to="/admin" className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              Start The Conversation <ChevronRight className="w-5 h-5" />
            </Link>
            <p className="mt-4 text-stone-500 text-sm">
              Or email our executive team directly at <a href="mailto:CrunchMasters2025@gmail.com" className="text-brand-400 hover:underline">CrunchMasters2025@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
