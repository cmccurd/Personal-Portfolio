import React from "react";
import author from "../assets/DSC00145.JPG";
import gitImg from "../assets/github-white-black-git.png";
import linkedin from "../assets/linkedin-logo-white.png";

const AboutMe = () => {
  return (
    <section id="about" className="bg-black text-white px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Who am I?
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start md:items-center">
        {/* Profile + Social Icons in One Centered Block */}
        <div className="w-full md:w-1/3 flex flex-col items-center gap-6 text-center">
          <img
            loading="lazy"
            src={author}
            alt="Cameron McCurdy"
            className="rounded-xl w-64 h-64 object-cover shadow-2xl"
          />
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/cmccurd"
              aria-label="Cameron McCurdy's GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img loading="lazy" src={gitImg} alt="GitHub" className="h-20 object-contain" />
            </a>
            <a
              href="https://www.linkedin.com/in/cmccurd"
              aria-label="Cameron McCurdy's Linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img loading="lazy" src={linkedin} alt="LinkedIn" className="h-12 object-contain mt-[12px]" />
            </a>
          </div>
        </div>
        {/* Text Content */}
        <div className="w-full md:w-2/3 text-gray-300 space-y-6 text-base sm:text-lg leading-relaxed">
          <p>
            I bring a full-stack development skill set with a focus on building
            modern, high-performing websites and scalable web applications.
            On the front end, I’ve built responsive, component-based UIs using
            <strong> React</strong>, <strong>Tailwind CSS</strong>, and{" "}
            <strong>Bootstrap</strong>, with a strong emphasis on accessibility
            and performance.
          </p>

          <p>
            On the backend, I’ve developed RESTful APIs with{" "}
            <strong>Node.js</strong> and <strong>Express</strong>, worked with{" "}
            <strong>PostgreSQL</strong>, <strong>MySQL</strong>, and{" "}
            <strong>MongoDB</strong>, and securely integrated third-party services.
          </p>

          <p>
            I’ve deployed production systems using <strong>AWS</strong> (EC2, S3, Route 53),
            containerized apps with <strong>Docker</strong>, and built out
            CI/CD pipelines with <strong>GitHub Actions</strong> and <strong>Jenkins</strong>.
            I maintain automated test suites using <strong>Cucumber</strong> and{" "}
            <strong>Selenium</strong>, and use <strong>Artillery</strong> to simulate API load
            and identify performance bottlenecks.
          </p>

          <p>
            My work consistently achieves <strong>Lighthouse scores of 95+</strong>,
            <strong> load times under 1s</strong>, and <strong>SEO boosts up to 60%</strong>. I’ve
            contributed to Kubernetes-managed regression testing, led internal
            knowledge shares, and mentored others on test strategies and debugging.
          </p>

          <p>
            If you're looking for a developer who delivers across the stack and
            raises the bar on quality, performance, and collaboration — let’s connect.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
