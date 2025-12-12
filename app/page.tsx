const phoneNumber = "407-555-0147";
const email = "hello@busybeestrees.com";
const heroCta = `tel:${phoneNumber}`;
const emailCta = `mailto:${email}`;
const coverageAreas = [
  "Orlando",
  "Winter Park",
  "Kissimmee",
  "Altamonte",
  "Lake Nona",
  "Sanford",
];

const services = [
  {
    title: "Tree Removal",
    desc: "Safe removal with cranes and a pro crew.",
    icon: "🌳",
  },
  {
    title: "Tree Trimming & Pruning",
    desc: "Aesthetic and preventive pruning for healthy trees.",
    icon: "✂️",
  },
  {
    title: "Stump Grinding",
    desc: "Stump grinding and grade leveling.",
    icon: "🪓",
  },
  {
    title: "Storm/Emergency",
    desc: "24/7 response for storm hazards.",
    icon: "⚡",
  },
  {
    title: "Land Clearing",
    desc: "Lot clearing and site prep.",
    icon: "🧹",
  },
  {
    title: "Commercial & Residential",
    desc: "Plans for homes, businesses, and communities.",
    icon: "🏢",
  },
];

const benefits = [
  "Licensed & Insured",
  "24/7 Emergency Service",
  "Affordable Pricing",
  "Professional Equipment",
  "Fast Response",
  "100% Customer Satisfaction",
];

const testimonials = [
  {
    name: "María G.",
    rating: 5,
    text: "Arrived within 90 minutes after the storm and left everything clean.",
  },
  {
    name: "Carlos R.",
    rating: 5,
    text: "Fair price and flawless work trimming four large oaks.",
  },
  {
    name: "Ana P.",
    rating: 5,
    text: "Very professional crew with insurance and permits in place. Recommended.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0d1f12] via-[#0a0a0a] to-[#0b0f18] opacity-90" />
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#f7d04633] via-transparent to-[#18a97933]" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-5 pb-16 pt-8 sm:px-6 md:pt-10">
          <nav className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/70 px-5 py-3 shadow-lg backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#f7d046] to-[#18a979] text-lg font-semibold text-black shadow-lg">
                BB
              </span>
              <div className="leading-tight">
                <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                  Busy Bees
                </p>
                <p className="text-lg font-semibold text-white">
                  Tree Service
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm font-medium text-white/80">
              <a
                href="#servicios"
                className="hidden rounded-full border border-white/15 px-4 py-2 transition hover:border-[#f7d046] hover:text-white sm:inline"
              >
                Services
              </a>
              <a
                href="#galeria"
                className="hidden rounded-full border border-white/15 px-4 py-2 transition hover:border-[#18a979] hover:text-white sm:inline"
              >
                Gallery
              </a>
              <a
                href={heroCta}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#f7d046] px-4 py-2 text-black transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-15px_rgba(247,208,70,0.8)] sm:w-auto"
              >
                <span className="hidden sm:inline">Call Now</span>
                <span className="font-semibold">{phoneNumber}</span>
              </a>
            </div>
          </nav>

          <section className="grid items-center gap-10 rounded-3xl border border-white/10 bg-black/70 px-6 py-12 shadow-2xl backdrop-blur md:grid-cols-[1.1fr,0.9fr] md:px-10 md:py-14">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#18a979]/30 bg-[#18a979]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#c8ffd5]">
                Expert Tree Removal & Trimming Services
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Fast, Safe and Affordable Tree Services in Orlando Metro.
              </h1>
              <p className="text-lg text-white/80">
                Licensed, insured, and ready 24/7. Hazardous tree removal,
                professional trimming, stump grinding, and full cleanup.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f7d046] px-5 py-3 text-base font-semibold text-black shadow-lg transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_-18px_rgba(247,208,70,0.9)] sm:w-auto"
                >
                  Request a Free Estimate
                  <span aria-hidden>→</span>
                </a>
                <a
                  href={heroCta}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-base font-semibold text-white transition hover:border-[#18a979] hover:text-[#d3ffe3] sm:w-auto"
                >
                  Call Now
                  <span className="font-semibold">{phoneNumber}</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-white/75">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Licensed & Insured
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Response {"<"} 2h
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  24/7 Emergencies
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -left-8 -top-6 rounded-3xl bg-gradient-to-br from-[#f7d046]/25 via-transparent to-[#18a979]/25 blur-2xl" />
              <div className="relative space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 p-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-white/60">
                      Phone
                    </p>
                    <p className="text-xl font-semibold text-white">
                      {phoneNumber}
                    </p>
                  </div>
                  <a
                    href={heroCta}
                    className="rounded-full bg-[#f7d046] px-4 py-2 text-sm font-semibold text-black transition hover:-translate-y-0.5"
                  >
                    Call
                  </a>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 p-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-white/60">
                      Email
                    </p>
                    <p className="text-lg font-semibold text-white">{email}</p>
                  </div>
                  <a
                    href={emailCta}
                    className="rounded-full border border-[#18a979] bg-[#18a979]/10 px-4 py-2 text-sm font-semibold text-[#c8ffd5] transition hover:-translate-y-0.5"
                  >
                    Email us
                  </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#f7d046]/10 to-[#18a979]/10 p-4 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70">
                    Coverage
                  </p>
                  <p className="text-lg">
                    Serving Orlando and surrounding areas. Under 2-hour arrival
                    for emergencies.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </header>

      <section
        id="servicios"
        className="mx-auto max-w-6xl px-6 py-14 md:py-16"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#f7d046]">
              Services
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Everything your trees need to stay safe and healthy.
            </h2>
          </div>
          <a
            href="#contacto"
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#18a979] hover:text-[#d3ffe3]"
          >
            Request estimate
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg transition hover:-translate-y-1 hover:border-[#18a979]/50"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f7d046] text-lg font-semibold text-black">
                  {service.icon}
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>
              </div>
              <p className="mt-3 text-white/70">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0f1a12]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#f7d046]">
                Why Choose Us
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Safety, speed, and fair pricing.
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm text-white/80 md:grid-cols-3">
              {benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="galeria"
        className="mx-auto max-w-6xl px-6 py-14 md:py-16"
      >
        <div className="flex flex-col gap-3">
          <p className="text-sm uppercase tracking-[0.2em] text-[#f7d046]">
            Gallery / Before & After
          </p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Recent work
          </h2>
          <p className="text-white/70">
            Real photos of removals, pruning, and storm cleanups.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "https://images.unsplash.com/photo-1510960236809-3e2af7c3455f?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1510960236809-3e2af7c3455f?auto=format&fit=crop&w=900&q=80",
          ].map((url, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg"
            >
              <div
                className="aspect-[4/3] w-full bg-cover bg-center transition duration-500 group-hover:scale-105 sm:h-48 sm:aspect-auto"
                style={{ backgroundImage: `url(${url})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
                Before / After
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0f1a12]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.2em] text-[#f7d046]">
              Testimonials
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Happy clients, safer trees.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-white">{t.name}</p>
                  <span className="text-[#f7d046]">
                    {"★".repeat(t.rating)}
                  </span>
                </div>
                <p className="mt-3 text-white/75">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#f7d046]">
              Service Areas
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              We get to your area fast.
            </h2>
            <p className="mt-3 text-white/70">
              Covering the full metro corridor with ready crews.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {coverageAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-lg">
            <iframe
              title="Service map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447191.16679130524!2d-81.72522345!3d28.48108515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d89f6b9be3%3A0x41e7359e33fefdfe!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1697060000000!5m2!1sen!2sus"
              width="100%"
              height="320"
              allowFullScreen
              loading="lazy"
              className="border-0 h-[260px] w-full sm:h-[320px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f7d046] to-[#18a979]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-4 text-black">
              <p className="text-sm uppercase tracking-[0.25em] font-semibold">
                Need a Tree Removed Fast and Safely?
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Schedule your visit and get a free estimate today.
              </h2>
              <p className="text-lg text-black/80">
                Under 15-minute response. 24/7 emergency crews available.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
                >
                  Get My Free Estimate
                  <span aria-hidden>→</span>
                </a>
                <a
                  href={heroCta}
                  className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-black/10 px-5 py-3 text-base font-semibold text-black transition hover:-translate-y-0.5"
                >
                  Call Now
                  <span className="font-semibold">{phoneNumber}</span>
                </a>
              </div>
            </div>

            <div
              id="contacto"
              className="rounded-3xl border border-black/10 bg-white/90 p-5 shadow-xl backdrop-blur sm:p-6"
            >
              <h3 className="text-xl font-semibold text-black">
                Contact Form
              </h3>
              <p className="mt-1 text-sm text-black/70">
                Tell us about the tree or emergency. We respond fast.
              </p>
              <form className="mt-4 space-y-3">
                <div>
                  <label className="text-sm font-semibold text-black">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-black focus:border-[#18a979] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-black">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Your number"
                    className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-black focus:border-[#18a979] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-black">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Street, city"
                    className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-black focus:border-[#18a979] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-black">
                    Upload photos (optional)
                  </label>
                  <input
                    type="file"
                    multiple
                    className="mt-1 w-full rounded-xl border border-dashed border-black/20 bg-white px-3 py-2 text-sm text-black"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-black">
                    Problem description
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tree height, location, urgency..."
                    className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-black focus:border-[#18a979] focus:outline-none"
                  />
                </div>
                <button
                  type="button"
                  className="w-full rounded-xl bg-black px-4 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Send Estimate Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a0a0a] border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#f7d046] to-[#18a979] text-lg font-semibold text-black shadow-lg">
              BB
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                Busy Bees Tree Service
              </p>
              <p className="text-white/70">Tree care professionals.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <a href={heroCta} className="hover:text-white">
              Tel: {phoneNumber}
            </a>
            <a href={emailCta} className="hover:text-white">
              Email: {email}
            </a>
            <span>Hours: 24/7 emergencies</span>
            <span>Active licenses & insurance</span>
          </div>
          <div className="flex gap-3 text-sm text-white/70">
            <a href="#" className="hover:text-white">
              Facebook
            </a>
            <a href="#" className="hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
