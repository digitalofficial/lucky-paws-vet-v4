import Logo from "@/components/Logo";
import HoloCard from "@/components/HoloCard";
import WordReveal from "@/components/WordReveal";
import BookingForm from "@/components/BookingForm";
import ScrollObserver from "@/components/ScrollObserver";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const services = [
  {
    icon: "\u{1FA7A}",
    title: "Wellness Exams",
    desc: "Comprehensive nose-to-tail checkups that catch problems early and keep your companion thriving year after year.",
  },
  {
    icon: "\u{1F489}",
    title: "Vaccinations",
    desc: "Core and lifestyle vaccinations tailored to your pet\u2019s age, breed, and environment \u2014 administered with a gentle touch.",
  },
  {
    icon: "\u{1F9B7}",
    title: "Dental Care",
    desc: "Professional cleanings, digital dental radiographs, and extractions to keep teeth healthy and breath fresh.",
  },
  {
    icon: "\u{1FA78}",
    title: "Surgery",
    desc: "From routine spays and neuters to advanced soft-tissue procedures, performed in our state-of-the-art surgical suite.",
  },
  {
    icon: "\u{1F6A8}",
    title: "Emergency Care",
    desc: "24/7 emergency services staffed by experienced veterinarians ready to act when every second counts.",
  },
  {
    icon: "\u2728",
    title: "Grooming & Boarding",
    desc: "Spa-quality grooming and climate-controlled boarding suites so your pet feels pampered while you\u2019re away.",
  },
];

const stats = [
  { value: "10,000+", label: "Pets Treated" },
  { value: "12", label: "Years Serving Tucson" },
  { value: "4.9", label: "Google Star Rating" },
  { value: "6", label: "Veterinarians" },
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <ScrollObserver />

      {/* ==================== NAV ==================== */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <Logo size={32} />
        <ul className="nav__links">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#booking">Book Now</a></li>
        </ul>
      </nav>

      {/* ==================== SEAMLESS FLOW WRAP ==================== */}
      <div className="flow-wrap">

        {/* ---------- HERO ---------- */}
        <section className="hero-section" aria-label="Hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1600&h=900&fit=crop"
            alt="Two dogs running happily together"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0B14]/55 via-[#0F0B14]/35 to-[#0F0B14]/70" />

          <div className="hero-orb" />
          <div className="hero-content relative z-10">
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                fontWeight: 800,
                marginBottom: 20,
                lineHeight: 1.1,
                textShadow: '0 2px 12px rgba(0,0,0,0.5)',
              }}
            >
              Healthy pets.
              <br />
              <span style={{ color: "var(--primary)" }}>Happy families.</span>
            </h1>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "1.15rem",
                maxWidth: 500,
                margin: "0 auto 36px",
              }}
            >
              Compassionate veterinary care in the heart of Tucson, AZ &mdash; where every patient gets the lucky treatment.
            </p>
            <a href="#booking" className="cta-btn">
              Book an Appointment
            </a>
          </div>
        </section>

        {/* ---------- SERVICES ---------- */}
        <section id="services" className="section-padding" aria-label="Services">
          <h2
            className="text-reveal"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              textAlign: "center",
              marginBottom: 60,
            }}
          >
            Everything your pet needs,{" "}
            <span style={{ color: "var(--primary)" }}>under one roof.</span>
          </h2>

          <div className="services-flow">
            {services.map((s, i) => (
              <div key={i} className="service-row text-reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                <HoloCard>
                  <div className="service-card-content">
                    <div className="glass-icon">{s.icon}</div>
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                </HoloCard>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- STATS ---------- */}
        <section className="section-padding" aria-label="Statistics">
          <div className="grid-4">
            {stats.map((s, i) => (
              <div key={i} className="scale-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="conic-border">
                  <div className="conic-border__inner stat-card">
                    <div className="stat-card__value">{s.value}</div>
                    <div className="stat-card__label">{s.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- ABOUT (word-by-word reveal) ---------- */}
        <section id="about" className="section-padding" aria-label="About" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <WordReveal
            text="Compassionate care for every paw, wing, and fin."
            className=""
          />
          <p
            className="parallax-slow"
            style={{
              color: "var(--muted)",
              textAlign: "center",
              maxWidth: 620,
              margin: "32px auto 0",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            Founded in 2014, Lucky Paws Veterinary has grown from a small neighborhood clinic into Tucson&rsquo;s most trusted animal care center.
            Our six board-certified veterinarians, licensed technicians, and devoted support staff treat every pet like family &mdash;
            because to us, they are.
          </p>
        </section>

        {/* ---------- TESTIMONIAL ---------- */}
        <section id="testimonials" className="section-padding" aria-label="Testimonial" style={{ paddingTop: 40 }}>
          <div className="testimonial-block clip-reveal">
            <blockquote>
              When our golden retriever, Sunny, swallowed a toy late on a Saturday night, the Lucky Paws emergency team saved her life.
              They kept us informed every step of the way and treated Sunny with the same love we give her at home.
              We will never go anywhere else.
            </blockquote>
            <cite>
              &mdash; <strong>Maria &amp; Carlos R.</strong>, Tucson, AZ
            </cite>
          </div>
        </section>

        {/* ---------- BOOKING FORM ---------- */}
        <section id="booking" className="section-padding" aria-label="Book an appointment">
          <h2
            className="text-reveal"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 800,
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            Book Your Visit
          </h2>
          <p
            className="text-reveal"
            style={{
              textAlign: "center",
              color: "var(--muted)",
              marginBottom: 48,
              maxWidth: 480,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Fill out the form below and our team will confirm your appointment within 24 hours.
          </p>
          <BookingForm />
        </section>

        {/* ---------- FOOTER ---------- */}
        <footer className="footer" role="contentinfo">
          <div style={{ marginBottom: 28, display: "flex", justifyContent: "center" }}>
            <Logo size={36} />
          </div>
          <div className="footer__grid">
            <div>
              <h4>Contact</h4>
              <a href="tel:+15205551234">(520) 555-1234</a>
              <a href="mailto:hello@luckypawsvet.com">hello@luckypawsvet.com</a>
              <p>4820 E Sunrise Dr, Tucson, AZ 85718</p>
            </div>
            <div>
              <h4>Hours</h4>
              <p>Mon &ndash; Fri: 8:00 AM &ndash; 6:00 PM</p>
              <p>Saturday: 9:00 AM &ndash; 3:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            <div>
              <h4>Emergency</h4>
              <p style={{ color: "var(--secondary)", fontWeight: 600 }}>
                24/7 Emergency Line
              </p>
              <a href="tel:+15205551234">(520) 555-1234</a>
              <p>Always here when you need us.</p>
            </div>
          </div>
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Lucky Paws Veterinary. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
