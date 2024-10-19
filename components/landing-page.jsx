"use client";

import Link from "next/link";
import { Star, Search, Award } from "lucide-react";
import Image from "next/image";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-400">
            Rent Me a Taylor
          </Link>
          <div>
            <Link
              href="/tailors"
              className="text-purple-400 hover:text-purple-300 pr-5"
            >
              Browse Taylor
            </Link>
            <Link
              href="/aboutus"
              className="text-purple-400 hover:text-purple-300 pr-5"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-purple-400 hover:text-purple-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find the Perfect Tailor for You
          </h1>
          <p className="text-xl mb-8">
            Expert tailoring services at your fingertips
          </p>
          <Link
            href="/tailors"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center"
          >
            <Search className="mr-2" />
            Explore Taylors
          </Link>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Taylor of the Month
          </h2>
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row items-center">
            <Image
              src="/male1.jpeg"
              height="150"
              width="150"
              alt="Tailor of the Month"
              className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">Priya Maheshwari</h3>
              <p className="mb-2">Specializing in wedding dresses and suits</p>
              <div className="flex items-center">
                <Star className="text-yellow-400 mr-1" />
                <span>4.9 (120 reviews)</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Top Rated Taylors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id:1,
                name: "Aakash Biju",
                img: "/aakash.webp",
              },
              {
                id:2,
                name: "Raju Shah",
                img: "/raju.avif",
              },
              {
                id:3,
                name: "Riya Sinha",
                img: "/female1.jpeg",
              }
            ].map((i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-lg p-4 flex items-center"
              >
                <img
                  src={`${i.img}?height=80&width=80&text=Tailor ${i.name}`}
                  alt={`Top Taylor ${i.name}`}
                  className="w-20 h-20 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold mb-1">{i.name}</h3>
                  <div className="flex items-center">
                    <Star className="text-yellow-400 mr-1" />
                    <span>
                      4.{9 - i.id} ({100 - i.id * 10} reviews)
                    </span>
                  </div>
                </div>
                <Award className="ml-auto text-purple-400" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
