import { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // 👈 NEW

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // 👈 NEW

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const response = await fetch("https://formspree.io/f/myzeqrzb", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setIsLoading(false); // 👈 NEW

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Ready to Take the Leap?
        </h2>

        {submitted ? (
          <p className="text-center text-orange-400 text-lg" aria-live="polite">
            Message sent! I’ll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading} // 👈 NEW
              aria-label="Send contact form message"
              className={`w-full py-3 px-6 font-semibold rounded-md transition ${
                isLoading
                  ? "bg-gray-500 text-white cursor-not-allowed"
                  : "bg-white text-black hover:bg-gray-300"
              }`}
            >
              {isLoading ? "Sending..." : "Send Message"} {/* 👈 NEW */}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
