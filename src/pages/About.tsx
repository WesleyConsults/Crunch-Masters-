import { Heart, ShieldCheck, Users } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-stone-900 text-white py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">More Than Just Food.</h1>
        <p className="text-xl text-stone-400 max-w-2xl mx-auto">
          We started CrunchMasters with a simple idea: students deserve better food, served faster, without breaking the bank.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Our Mission</h2>
            <p className="text-lg text-stone-600 mb-4 leading-relaxed">
              Campus life is stressful enough. Figuring out what to eat shouldn't be. CrunchMasters was born out of the frustration of long queues and inconsistent food quality at the canteens.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              We set out to create a menu that hits the spot every single time. Our Braised Rice isn't just rice; it's a carefully crafted recipe designed to give you that home-cooked comfort when you need it most.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000" 
                alt="Kitchen prep" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-brand-500 text-white p-8 rounded-3xl hidden md:block">
              <p className="text-4xl font-bold mb-1">10k+</p>
              <p className="text-brand-100 font-medium">Bowls Served</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-100 text-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Made with Love</h3>
            <p className="text-stone-600">Every bowl is prepped fresh daily. We don't cut corners on flavor.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-100 text-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Quality Standards</h3>
            <p className="text-stone-600">Sourced from local markets, prepared in a spotless kitchen. Hygiene is our priority.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-100 text-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">For the Students</h3>
            <p className="text-stone-600">Priced right for the student budget, portioned right for the student appetite.</p>
          </div>
        </div>

        {/* The Team */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Meet The Team</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            The passionate people behind your favorite campus meals.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Chef Kwame", role: "Head Chef", image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=400" },
            { name: "Ama Serwaa", role: "Operations Manager", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
            { name: "Kojo Mensah", role: "Customer Experience", image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=400" },
            { name: "Abena Osei", role: "Logistics", image: "https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?auto=format&fit=crop&q=80&w=400" },
          ].map((member, i) => (
            <div key={i} className="text-center group">
              <div className="aspect-square rounded-full overflow-hidden mb-4 border-4 border-stone-100 group-hover:border-brand-200 transition-colors">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-lg font-bold text-stone-900">{member.name}</h3>
              <p className="text-brand-500 font-medium text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
