import React, { useState } from 'react'
import Spline from '@splinetool/react-spline'

function App() {
  const [email, setEmail] = useState('')
  const [form, setForm] = useState({ name: '', email: '', date: '', vision: '' })
  const [listSuccess, setListSuccess] = useState('')
  const [consultSuccess, setConsultSuccess] = useState('')

  const handleListSubmit = (e) => {
    e.preventDefault()
    setListSuccess('Thank you. You are on the Private List.')
    setEmail('')
    setTimeout(() => setListSuccess(''), 4000)
  }

  const handleConsultSubmit = (e) => {
    e.preventDefault()
    setConsultSuccess('Your request has been received. We will be in touch shortly.')
    setForm({ name: '', email: '', date: '', vision: '' })
    setTimeout(() => setConsultSuccess(''), 5000)
  }

  const gallery = Array.from({ length: 15 }).map((_, i) => ({
    id: i + 1,
    src: `https://placehold.co/${i % 2 === 0 ? '600x800' : '800x600'}/F4E9CD/042A2B?text=Design+${i + 1}`,
    status: i % 3 === 0 ? 'Commissioned' : 'Sold',
  }))

  return (
    <div className="min-h-screen bg-[#F4E9CD] text-[#042A2B]">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm/0">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <a href="#top" className="font-display text-2xl tracking-wide">Atara Varisha</a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#philosophy" className="hover:opacity-80">Philosophy</a>
            <a href="#portfolio" className="hover:opacity-80">Designs</a>
            <a href="#process" className="hover:opacity-80">Process</a>
            <a href="#list" className="hover:opacity-80">Private List</a>
          </nav>
          <a href="#consultation" className="inline-block border border-[#CDA34F] bg-[#CDA34F] text-[#042A2B] px-4 py-2 text-sm tracking-wide uppercase hover:shadow-md transition-shadow">Book Consultation</a>
        </div>
      </header>

      {/* Hero with Spline */}
      <section id="top" className="relative h-[95vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        {/* Gradient and content overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#F4E9CD] via-[#F4E9CD]/40 to-transparent"></div>
        <div className="relative z-10 h-full flex items-end">
          <div className="mx-auto max-w-7xl w-full px-6 pb-16 md:pb-24">
            <div className="md:max-w-xl">
              <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">Atara Varisha</h1>
              <p className="mt-4 text-lg md:text-xl italic">Bespoke creations for the one-of-a-kind.</p>
              <div className="mt-8 pointer-events-auto">
                <a href="#consultation" className="inline-block bg-[#CDA34F] text-[#042A2B] px-6 py-3 text-sm md:text-base tracking-wider uppercase border border-[#CDA34F] hover:bg-transparent hover:text-[#042A2B] transition-colors">Book Your Consultation</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Meet the Designer */}
      <section id="philosophy" className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-12 gap-8 items-stretch">
            {/* Image panel */}
            <div className="md:col-span-5 relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://placehold.co/800x1100/042A2B/ffffff?text=Designer+Portrait"
                  alt="Designer portrait"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#5EB1BF] text-[#042A2B] px-4 py-2 text-xs tracking-wider uppercase">Digital Atelier</div>
            </div>
            {/* Text panel */}
            <div className="md:col-span-7 flex">
              <div className="relative bg-white/60 backdrop-blur-sm p-8 md:p-12 self-end -mt-10 md:mt-0 shadow-[12px_12px_0_0_#CDA34F]">
                <h2 className="font-display text-3xl md:text-5xl leading-tight">The Art of the Bespoke</h2>
                <p className="mt-4 text-sm md:text-base leading-relaxed">Every silhouette is a conversation — between fabric, form, and the life you lead. I create one-of-one pieces that carry your story in their seams. From first sketch to final fitting, our process is intimate, meticulous, and entirely yours.</p>
                <p className="mt-4 text-sm md:text-base leading-relaxed">This is not a shop. It is a sanctuary for singular expression, crafted in Kolkata and made for the world.</p>
                <div className="mt-6">
                  <a href="#portfolio" className="inline-block underline underline-offset-4 decoration-[#CDA34F] hover:opacity-80">Explore the designs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Gallery */}
      <section id="portfolio" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-8">
            <h3 className="font-display text-3xl md:text-5xl">Designs</h3>
            <span className="text-xs tracking-widest uppercase text-[#5EB1BF]">Lookbook — Not for Sale</span>
          </div>
          {/* Masonry via CSS columns */}
          <div className="[column-count:1] sm:[column-count:2] lg:[column-count:3] [column-gap:1.25rem]">
            {gallery.map((item) => (
              <figure key={item.id} className="mb-5 break-inside-avoid relative group">
                <img src={item.src} alt={`Design ${item.id}`} className="w-full h-auto object-cover" />
                {/* Overlay ribbon */}
                <figcaption className="absolute top-3 left-3 bg-[#042A2B]/85 text-[#F4E9CD] text-xs tracking-wider px-3 py-1 uppercase">{item.status}</figcaption>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#042A2B]/0 group-hover:bg-[#042A2B]/20 transition-colors"></div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* The Bespoke Process */}
      <section id="process" className="py-16 md:py-24 bg-[#042A2B] text-[#F4E9CD]">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="font-display text-3xl md:text-5xl mb-10">The Bespoke Process</h3>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="relative border border-[#CDA34F] p-6 md:p-8 bg-[#042A2B]">
              <div className="absolute -top-3 -left-3 bg-[#CDA34F] text-[#042A2B] px-3 py-1 text-xs uppercase tracking-wider">Step 1</div>
              <h4 className="font-display text-2xl">The Consultation</h4>
              <p className="mt-3 text-sm leading-relaxed">A private, one-on-one conversation to understand your story, movement, and intention. We define the piece that only you could wear.</p>
            </div>
            <div className="relative border border-[#CDA34F] p-6 md:p-8 bg-[#042A2B]">
              <div className="absolute -top-3 -left-3 bg-[#CDA34F] text-[#042A2B] px-3 py-1 text-xs uppercase tracking-wider">Step 2</div>
              <h4 className="font-display text-2xl">The Design</h4>
              <p className="mt-3 text-sm leading-relaxed">Sketches, draping, and fabric curation. You preview textures and tones as your vision becomes tangible.</p>
            </div>
            <div className="relative border border-[#CDA34F] p-6 md:p-8 bg-[#042A2B]">
              <div className="absolute -top-3 -left-3 bg-[#CDA34F] text-[#042A2B] px-3 py-1 text-xs uppercase tracking-wider">Step 3</div>
              <h4 className="font-display text-2xl">The Creation</h4>
              <p className="mt-3 text-sm leading-relaxed">Pattern cutting, fittings, and finishing — your one-of-one piece is brought to life with uncompromising craftsmanship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Private List CTA */}
      <section id="list" className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-[#042A2B]/5"/>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <h3 className="font-display text-3xl md:text-5xl">Join the Private List</h3>
              <p className="mt-3 text-sm md:text-base max-w-2xl">Gain 'first look' access to new 1-of-1 pieces before they are ever shown on Instagram. Members receive priority access for consultations.</p>
              <form onSubmit={handleListSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 bg-white/80 border border-[#042A2B]/30 px-4 py-3 outline-none focus:ring-2 focus:ring-[#5EB1BF]"
                />
                <button type="submit" className="bg-[#042A2B] text-[#F4E9CD] px-6 py-3 border border-[#042A2B] hover:bg-transparent hover:text-[#042A2B] transition-colors">Submit</button>
              </form>
              {listSuccess && <p className="mt-3 text-sm text-[#042A2B]/80">{listSuccess}</p>}
            </div>
            <div className="md:col-span-5">
              <div className="relative h-56 md:h-72 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1702635396989-820636094313?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGYWJyaWMlMjBkZXRhaWx8ZW58MHwwfHx8MTc2MzExNTk0NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Fabric detail" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 ring-1 ring-inset ring-[#CDA34F]/60"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA: Book Consultation */}
      <section id="consultation" className="py-16 md:py-24 bg-[#042A2B] text-[#F4E9CD]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="md:flex md:items-start md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="font-display text-3xl md:text-5xl">Book Your Consultation</h3>
              <p className="mt-3 text-sm md:text-base">For clients seeking a singular piece, crafted with uncompromising attention. Please share a few details and you will receive a personal response.</p>
            </div>
            <form onSubmit={handleConsultSubmit} className="md:w-1/2 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-transparent border border-[#CDA34F] px-4 py-3 placeholder-[#F4E9CD]/70 focus:outline-none focus:ring-2 focus:ring-[#5EB1BF]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-transparent border border-[#CDA34F] px-4 py-3 placeholder-[#F4E9CD]/70 focus:outline-none focus:ring-2 focus:ring-[#5EB1BF]"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  placeholder="Desired Date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="bg-transparent border border-[#CDA34F] px-4 py-3 placeholder-[#F4E9CD]/70 focus:outline-none focus:ring-2 focus:ring-[#5EB1BF]"
                />
                <div />
              </div>
              <textarea
                rows="4"
                placeholder="Tell me about your vision..."
                required
                value={form.vision}
                onChange={(e) => setForm({ ...form, vision: e.target.value })}
                className="w-full bg-transparent border border-[#CDA34F] px-4 py-3 placeholder-[#F4E9CD]/70 focus:outline-none focus:ring-2 focus:ring-[#5EB1BF]"
              />
              <button type="submit" className="w-full bg-[#CDA34F] text-[#042A2B] px-6 py-3 border border-[#CDA34F] tracking-wider uppercase hover:bg-transparent hover:text-[#F4E9CD] transition-colors">Book Consultation</button>
              {consultSuccess && <p className="text-sm text-[#5EB1BF]">{consultSuccess}</p>}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">© {new Date().getFullYear()} Atara Varisha — Kolkata</p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#top" className="underline underline-offset-4 decoration-[#CDA34F]">Back to top</a>
            <span className="text-[#5EB1BF]">Digital Atelier</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
