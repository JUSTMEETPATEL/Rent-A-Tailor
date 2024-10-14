"use client";
import { useState } from "react";
import Link from "next/link";
import { Star, Filter, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";

const tailors = [
  {
    id: "1",
    name: "Priya Maheshwari",
    rating: 4.8,
    reviews: 95,
    specialization: "Suits",
    location: "Ramapuram",
    gender: "Female",
    price: 800,
    url: "/male1.jpeg",
  },
  {
    id: "2",
    name: "Riya Sinha",
    rating: 4.7,
    reviews: 87,
    specialization: "Dresses",
    location: "CMBT",
    gender: "Female",
    price: 750,
    url: "/female.jpeg",
  },
  {
    id: "3",
    name: "Raju Shah",
    rating: 4.7,
    reviews: 87,
    specialization: "Suits",
    location: "CMBT",
    gender: "Male",
    price: 750,
    url: "/raju.avif",
  },
  {
    id: "4",
    name: "Aakash Biju",
    rating: 4.7,
    reviews: 87,
    specialization: "Formal Wear",
    location: "CMBT",
    gender: "Male",
    price: 750,
    url: "/aakash.webp",
  },
  {
    id: "5",
    name: "Fatima Sheik",
    rating: 4.9,
    reviews: 110,
    specialization: "Alterations",
    location: "Ashok Nagar",
    gender: "Female",
    price: 700,
    url: "/male2.jpeg",
  },
  {
    id: "6",
    name: "Angela Christopher",
    rating: 4.9,
    reviews: 110,
    specialization: "Formal Wear",
    location: "Ashok Nagar",
    gender: "Female",
    price: 700,
    url: "/female1.jpeg",
  },
];

export default function TailorsPage() {
  const [filters, setFilters] = useState({
    minRating: 0,
    gender: "",
    specialization: "",
    minPrice: 0,
    maxPrice: 1000,
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredTailors = tailors.filter(
    (tailor) =>
      tailor.rating >= filters.minRating &&
      (filters.gender === "" || tailor.gender === filters.gender) &&
      (filters.specialization === "" ||
        tailor.specialization === filters.specialization) &&
      tailor.price >= filters.minPrice &&
      tailor.price <= filters.maxPrice
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          <a href="/">Browse Tailors</a>
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Filter className="mr-2" /> Filters
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="minRating" className="block mb-2">
                    Minimum Rating
                  </label>
                  <input
                    type="range"
                    id="minRating"
                    name="minRating"
                    min="0"
                    max="5"
                    step="0.1"
                    value={filters.minRating}
                    onChange={handleFilterChange}
                    className="w-full"
                  />
                  <span>{Number(filters.minRating).toFixed(1)} stars</span>
                </div>
                <div>
                  <label htmlFor="gender" className="block mb-2">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={filters.gender}
                    onChange={handleFilterChange}
                    className="w-full bg-gray-700 p-2 rounded"
                  >
                    <option value="">Any</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="specialization" className="block mb-2">
                    Specialization
                  </label>
                  <select
                    id="specialization"
                    name="specialization"
                    value={filters.specialization}
                    onChange={handleFilterChange}
                    className="w-full bg-gray-700 p-2 rounded"
                  >
                    <option value="">Any</option>
                    <option value="Suits">Suits</option>
                    <option value="Dresses">Dresses</option>
                    <option value="Alterations">Alterations</option>
                    <option value="Formal Wear">Formal Wear</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2">Price Range</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      name="minPrice"
                      value={filters.minPrice}
                      onChange={handleFilterChange}
                      className="w-1/2 bg-gray-700 p-2 rounded"
                      placeholder="Min"
                    />
                    <input
                      type="number"
                      name="maxPrice"
                      value={filters.maxPrice}
                      onChange={handleFilterChange}
                      className="w-1/2 bg-gray-700 p-2 rounded"
                      placeholder="Max"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTailors.map((tailor) => (
                <Link href={`/tailors/${tailor.id}`} key={tailor.id}>
                  <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
                    <Image
                      src={tailor.url}
                      height="150"
                      width="150"
                      alt={tailor.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">{tailor.name}</h3>
                    <div className="flex items-center mb-2">
                      <Star className="text-yellow-400 mr-1" />
                      <span>
                        {tailor.rating} ({tailor.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Briefcase className="mr-1" />
                      <span>{tailor.specialization}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <MapPin className="mr-1" />
                      <span>{tailor.location}</span>
                    </div>
                    <div className="text-purple-400 font-bold">
                      ₹{tailor.price}/hour
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
