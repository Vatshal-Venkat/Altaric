import React, { useEffect, useMemo, useRef, useState } from "react";
import "./AboutAltaric.css";
import { motion } from "framer-motion";
import { Cpu, Layers, Users, Rocket, LineChart, Brain } from "lucide-react";

/**
 * AboutAltaric.jsx
 * Tier-3 Futuristic About page with particles, holo grid, light rays, parallax.
 */

const PARTICLE_COUNT = 42;

const random = (min, max) => Math.random() * (max - min) + min;

export default function AboutAltaric() {
  const containerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  // Pre-generate particles (positions, sizes, durations)
  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }).map(() => ({
      left: random(0, 100),
      top: random(20, 100),
      size: random(2, 6),
      blur: random(0, 8),
      delay: random(0, 8),
      dur: random(8, 18),
      hue: Math.floor(random(190, 220)),
      alpha: random(0.06, 0.26),
    }));
  }, []);

  // mouse parallax
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handle = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  // Set CSS variables for parallax
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // small translations and rotation
    const tx = (mouse.x - 0.5) * 18; // +/-9px
    const ty = (mouse.y - 0.5) * 18;
    el.style.setProperty("--parallax-x", `${tx}px`);
    el.style.setProperty("--parallax-y", `${ty}px`);
    el.style.setProperty("--parallax-rotate", `${(mouse.x - 0.5) * 2}deg`);
  }, [mouse]);

  return (
    <div className="about-page-advanced" ref={containerRef}>
      {/* particle field (absolute, behind content) */}
      <div className="particle-field" aria-hidden>
        {particles.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              filter: `blur(${p.blur}px)`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
              background: `rgba(${p.hue}, ${220}, 255, ${p.alpha})`,
            }}
          />
        ))}
      </div>

      {/* holo grid floor */}
      <div className="holo-grid" aria-hidden />

      {/* light rays */}
      <div className="light-rays" aria-hidden />

      {/* subtle noise overlay */}
      <div className="grain" aria-hidden />

      <div className="about-viewport">
        {/* top hero */}
        <section className="about-hero">
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="page-title"
          >
            The Altaric Vision
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="page-lead"
          >
            We design and deploy the next generation of intelligent enterprises —
            autonomous agents, scalable ML platforms, and human+AI workflows that
            transform how organizations operate at scale.
          </motion.p>

          <div className="hero-cta-row">
            <motion.a
              className="cta"
              href="#who"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              Explore capabilities
            </motion.a>
            <a className="ghost" href="#contact" aria-hidden>
              Contact sales
            </a>
          </div>
        </section>

        {/* Divider */}
        <div className="section-divider" />

        {/* Who we are */}
        <section id="who" className="about-section about-who">
          <h2 className="section-head">Who We Are</h2>
          <p className="section-lead">
            Altaric is an engineering-first AI partner. We combine systems engineering,
            research-level models, and product design to deliver resilient, secure,
            and measurable AI systems that run in production.
          </p>

          <div className="about-grid">
            <motion.article
              className="about-card"
              whileHover={{ translateY: -8, scale: 1.02 }}
            >
              <div className="card-top">
                <div className="card-icon"><Cpu size={44} /></div>
                <h3>Engineering Excellence</h3>
              </div>
              <p>
                Production-grade pipelines, observability, CI/CD for models, and
                long-term maintainability baked into every delivery.
              </p>
            </motion.article>

            <motion.article
              className="about-card"
              whileHover={{ translateY: -8, scale: 1.02 }}
            >
              <div className="card-top">
                <div className="card-icon"><Layers size={44} /></div>
                <h3>Modern AI Architecture</h3>
              </div>
              <p>
                Modular services, data contracts, and hybrid-cloud deployments tailored
                for enterprise reliability and scale.
              </p>
            </motion.article>

            <motion.article
              className="about-card"
              whileHover={{ translateY: -8, scale: 1.02 }}
            >
              <div className="card-top">
                <div className="card-icon"><Users size={44} /></div>
                <h3>Strategic Partnership</h3>
              </div>
              <p>
                Cross-functional collaboration to align AI outcomes with business KPIs
                — from pilot to company-wide adoption.
              </p>
            </motion.article>
          </div>
        </section>

        <div className="section-divider" />

        {/* What we do */}
        <section id="what" className="about-section about-what">
          <h2 className="section-head">What We Do</h2>
          <p className="section-lead">
            We architect, build, and run AI capabilities — autonomous agents, vision
            & perception, document intelligence, and predictive systems that ship value.
          </p>

          <div className="about-grid">
            <motion.article className="about-card" whileHover={{ translateY: -8, scale: 1.02 }}>
              <div className="card-top">
                <div className="card-icon"><Brain size={44} /></div>
                <h3>Autonomous Agents</h3>
              </div>
              <p>
                Multi-step planning agents, orchestration, and safety guards for
                mission-critical workflows.
              </p>
            </motion.article>

            <motion.article className="about-card" whileHover={{ translateY: -8, scale: 1.02 }}>
              <div className="card-top">
                <div className="card-icon"><Rocket size={44} /></div>
                <h3>AI Automation</h3>
              </div>
              <p>
                Intelligent process automation with orchestration, observability, and
                closed-loop optimizations.
              </p>
            </motion.article>

            <motion.article className="about-card" whileHover={{ translateY: -8, scale: 1.02 }}>
              <div className="card-top">
                <div className="card-icon"><LineChart size={44} /></div>
                <h3>Predictive Intelligence</h3>
              </div>
              <p>
                Time-series, forecasting, anomaly detection, and decision support models
                integrated with operational data sources.
              </p>
            </motion.article>
          </div>
        </section>

        <div className="section-divider" />

        {/* Closing / Contact */}
        <section id="contact" className="about-section about-contact">
          <h2 className="section-head">Work With Us</h2>
          <p className="section-lead">
            We partner with product and engineering leaders to accelerate AI adoption.
            Tell us about your problem and we’ll outline a practical roadmap.
          </p>

          <div className="contact-cta-row">
            <a className="cta-primary" href="/contactus">Get in touch</a>
            <a className="cta-secondary" href="/services">Explore services</a>
          </div>
        </section>

        <div style={{ height: 120 }} aria-hidden />
      </div>
    </div>
  );
}
