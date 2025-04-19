import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";

const AboutMe = lazy(() => import('../components/AboutMe.jsx'));
const ContactForm = lazy(() => import('../components/ContactForm.jsx'));

const Home = () => {
  const el = useRef(null);
  const nextSectionRef = useRef(null);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  
    window.scrollTo(0, 0);
  }, []);
  

  useEffect(() => {
    let hasScrolled = false;
    let timer = null;
  
    const handleScroll = () => {
      hasScrolled = true;
      setShowArrow(false); // Hide arrow if it was already shown
      if (timer) clearTimeout(timer); // Cancel timer if it's still running
    };
  
    window.addEventListener("scroll", handleScroll);
  
    timer = setTimeout(() => {
      if (!hasScrolled) {
        setShowArrow(true);
      }
    }, 1250);
  
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "elevate your brand!",
        "grow your business!",
        "expand your reach!",
      ],
      startDelay: 0,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 400,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="text-white bg-black">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-black text-center">
        {/* Background */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            clipPath: "ellipse(50% 95% at 50% 40%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 71%)",
            maskImage:
              "radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 71%)",
          }}
        >
         <img
            src="/backgroundImg.webp"
            srcSet="/backgroundImg_mobile.webp 768w, /backgroundImg.webp 1920w"
            sizes="(max-width: 768px) 100vw, 1920px"
            alt="Hero Background"
            width="1920"
            height="1080"
            fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover object-[60%_70%]"
          />
        </div>

        {/* Centered Text Content */}
        <div className="relative z-10 h-full flex flex-col items-center px-4 sm:px-6 max-w-2xl mx-auto pt-20">
          <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Take your next step with me.
          </p>

          <div className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 leading-snug">
            <h1>High-end custom websites that</h1>
            <span ref={el}></span>
          </div>

          <Link
            to="/portfolio"
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg bg-white text-black font-bold rounded-xl hover:bg-gray-400 transition"
          >
            View Portfolio
          </Link>
        </div>

        {/* Scroll Arrow */}
        {showArrow && (
          <div
            onClick={() => {
              scrollToNextSection();
              setShowArrow(false);
            }}
            className="fixed bottom-12 inset-x-0 mx-auto w-fit text-white cursor-pointer z-50 transition-opacity duration-700 opacity-100"
          >
            <div className="relative flex justify-center items-center">
              {/* Radiating Ping Circle */}
              <span className="absolute inline-flex h-20 w-20 rounded-full bg-white opacity-20 animate-ping"></span>

              {/* Arrow */}
              <span className="text-6xl relative z-10">↓</span>
            </div>
          </div>
        )}
      </section>

      {/* Text Body Section */}
      <section
        ref={nextSectionRef}
        className="py-16 sm:py-20 px-4 sm:px-6"
      >
        {/* Intro Message */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg sm:text-xl text-gray-300">
            You only get <span className="font-semibold text-white">0.05 seconds</span> to make a first impression — make it count.
            I design high-end websites that reflect your brand, perform beautifully, and convert visitors into customers.
          </p>
        </div>

        {/* Service Highlights */}
        <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3 text-left text-white">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-1">
              Custom Design
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              A responsive eCommerce website isn’t just about looking good — it’s about clearly showing what you offer and why it matters. I design every site from the ground up to reflect your brand, connect with your audience, and convert visitors into customers.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-1">
              SEO Optimization
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              A fast, SEO-optimized website does more than rank — it converts. I build lean, custom sites without bloated themes or unnecessary plugins, so your pages load fast and rank even faster. Why does that matter? Because <span className="text-white font-medium">40% of users will leave a site that takes more than 3 seconds to load</span>, and <span className="text-white font-medium">90% of shoppers trust brands that deliver a great experience</span>. Your site deserves both.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-1">
              Reliable Support
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Launching your site is just the start. I provide ongoing maintenance and support to ensure your site runs smoothly long after it goes live — so you never have to stress about updates, downtime, or errors. <span className="text-white font-medium">48% of users judge a business’s credibility by its website design</span>, and <span className="text-white font-medium">94% of first impressions are tied to your site’s visuals and usability</span>. With me, your first impression stays a lasting one.
            </p>
          </div>
        </div>
      </section>
      <Suspense fallback={null}>
        <AboutMe />
      </Suspense>

      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
    </main>
  );
};

export default Home;
