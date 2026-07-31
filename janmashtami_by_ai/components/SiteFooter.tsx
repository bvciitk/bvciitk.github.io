"use client";

import React from "react";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-[#d4a857]/30 bg-transparent py-8 px-5 backdrop-blur-md text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-start">
          {/* Brand & Description Column */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#d4a857] shadow-[0_0_15px_rgba(212,168,87,0.5)]">
                <Image src="/Janmashtami/images/logo.png" alt="BVC Logo" fill className="object-contain p-0.5" />
              </div>
              <h3 className="text-base font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#ffe8ad] to-[#d4a857]">
                Bhaktivedanta Club (BVC) IIT Kanpur
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-white/70">
              Promoting holistic living amongst the student community through cleanliness habits,
              nutritious diets, regular mantra meditation sessions, seminars on Bhagavad Gita, and selfless service.
            </p>
            <div className="mt-1">
              <a
                href="../"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#f0d68a] hover:text-white transition-colors underline"
              >
                ← Back to Main BVC Website
              </a>
            </div>
            {/* Contact details */}
            <div className="mt-2 space-y-1.5 text-xs text-white/80">
              <p className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:bhaktivedanta.club.iitk12@gmail.com" className="hover:text-[#f0d68a] transition-colors">
                  bhaktivedanta.club.iitk12@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+916394185667" className="hover:text-[#f0d68a] transition-colors">
                  +91 63941-85667
                </a>
              </p>
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span>House no. 664, Lane 36, Kalyanpur, Kanpur, Uttar Pradesh 208016</span>
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 flex flex-col gap-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f0d68a]">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#" className="hover:text-[#f0d68a] transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f0d68a] transition-colors">Grand Events</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f0d68a] transition-colors">Gratitude & Mentors</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f0d68a] transition-colors">Schedule Timeline</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f0d68a] transition-colors">Order T-Shirt & Volunteer</a>
              </li>
            </ul>
          </div>

          {/* Google Maps Column */}
          <div className="md:col-span-4 flex flex-col gap-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f0d68a]">Location Map</h4>
            <div className="h-40 w-full overflow-hidden rounded-xl border border-[#d4a857]/30 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.0944772031826!2d80.23666497409646!3d26.517085776982977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c37b096d4ff0f%3A0xd6e26ef002612917!2sBhaktivedanta%20Club%20IIT%20Kanpur!5e0!3m2!1sen!2sin!4v1691485300052!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-white/10 pt-4 text-center text-xs text-white/50">
          © BVCIITK. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
