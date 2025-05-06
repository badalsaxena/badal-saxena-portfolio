"use client";

import { useState, useEffect } from "react";

export const GetInTouch = () => {
  console.log("Rendering GetInTouch component");
  
  // Add debug effect
  useEffect(() => {
    console.log("GetInTouch component mounted");
    debugger; // This will pause execution in browser dev tools
  }, []);
  
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(`Field ${e.target.name} changed to: ${e.target.value}`);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with values:", form);
    setSubmitted(true);
    // Here you can add integration with EmailJS, Formspree, etc.
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] w-full bg-transparent py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
        Get <span className="text-blue-400">in Touch</span>
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-black/60 rounded-2xl shadow-2xl p-8 flex flex-col gap-6 border border-purple-500/30 backdrop-blur-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-[#18122B] text-white border border-purple-500/30 focus:border-cyan-400 outline-none transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-[#18122B] text-white border border-purple-500/30 focus:border-cyan-400 outline-none transition"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-[#18122B] text-white border border-purple-500/30 focus:border-cyan-400 outline-none transition resize-none"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Send Message
        </button>
        {submitted && (
          <div className="text-green-400 text-center mt-2">Thank you for reaching out! 🚀</div>
        )}
      </form>
    </section>
  );
}; 