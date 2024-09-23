import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Star,
  Calendar,
  MapPin,
  Briefcase,
  Clock,
  IndianRupee,
} from "lucide-react";
import Image from "next/image";

const tailors = [
  {
    id: "1",
    name: "Priya Maheshwari",
    age: 35,
    gender: "Female",
    experience: 12,
    specialties: ["Suits", "Formal Wear", "Alterations"],
    url: "/male1.jpeg",
    rating: 4.8,
    reviews: [
      {
        id: 1,
        user: "Alice",
        rating: 5,
        comment: "Excellent work on my wedding dress!",
      },
      {
        id: 2,
        user: "Bob",
        rating: 4,
        comment: "Great alterations, but took a bit longer than expected.",
      },
      {
        id: 3,
        user: "Charlie",
        rating: 5,
        comment: "Perfect fit on my new suit. Highly recommended!",
      },
    ],
    location: "Ramapuram",
    price: 800,
  },
  {
    id: "2",
    name: "Raju Shah",
    age: 28,
    gender: "Male",
    experience: 7,
    specialties: ["Dresses", "Skirts", "Suits"],
    url: "/raju.avif",
    rating: 4.7,
    reviews: [
      {
        id: 1,
        user: "David",
        rating: 5,
        comment: "They did an amazing job on my wife's dress!",
      },
      {
        id: 2,
        user: "Eve",
        rating: 4,
        comment: "Good work, but a bit pricey.",
      },
    ],
    location: "CMBT",
    price: 750,
  },
  {
    id: "3",
    name: "Aakash Biju",
    age: 28,
    gender: "Male",
    experience: 7,
    specialties: ["Dresses", "Skirts", "Formal Wear"],
    url: "/aakash.webp",
    rating: 4.7,
    reviews: [
      {
        id: 1,
        user: "David",
        rating: 5,
        comment: "They did an amazing job on my wife's dress!",
      },
      {
        id: 2,
        user: "Eve",
        rating: 4,
        comment: "Good work, but a bit pricey.",
      },
    ],
    location: "CMBT",
    price: 750,
  },
  {
    id: "4",
    name: "Riya Sinha",
    age: 28,
    gender: "Female",
    experience: 7,
    specialties: ["Dresses", "Skirts", "Blouses"],
    url: "/female.jpeg",
    rating: 4.7,
    reviews: [
      {
        id: 1,
        user: "David",
        rating: 5,
        comment: "They did an amazing job on my wife's dress!",
      },
      {
        id: 2,
        user: "Eve",
        rating: 4,
        comment: "Good work, but a bit pricey.",
      },
    ],
    location: "CMBT",
    price: 750,
  },
  {
    id: "5",
    name: "Fatima Sheik",
    age: 28,
    gender: "Female",
    experience: 7,
    specialties: ["Alterations"],
    url: "/male2.jpeg",
    rating: 4.7,
    reviews: [
      {
        id: 1,
        user: "David",
        rating: 5,
        comment: "They did an amazing job on my wife's dress!",
      },
      {
        id: 2,
        user: "Eve",
        rating: 4,
        comment: "Good work, but a bit pricey.",
      },
    ],
    location: "Ashok Nagar",
    price: 750,
  },
  {
    id: "6",
    name: "Angela Cristopher",
    age: 35,
    gender: "Female",
    experience: 12,
    specialties: ["Suits", "Formal Wear", "Alterations"],
    url: "/female1.jpeg",
    rating: 4.8,
    reviews: [
      {
        id: 1,
        user: "Alice",
        rating: 5,
        comment: "Excellent work on my wedding dress!",
      },
      {
        id: 2,
        user: "Bob",
        rating: 4,
        comment: "Great alterations, but took a bit longer than expected.",
      },
      {
        id: 3,
        user: "Charlie",
        rating: 5,
        comment: "Perfect fit on my new suit. Highly recommended!",
      },
    ],
    location: "Ramapuram",
    price: 800,
  },
];

async function getTailor(id) {
  // In a real app, this would be an API call or database query
  return tailors.find((tailor) => tailor.id === id);
}

export default async function TailorDetail({ params }) {
  const tailor = await getTailor(params.id);

  if (!tailor) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/tailors"
          className="text-purple-400 hover:text-purple-300 mb-4 inline-block"
        >
          &larr; Back to Tailors
        </Link>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row">
            <Image
              src={tailor.url}
              height="300"
              width="300"
              alt={tailor.name}
              className="w-full md:w-1/3 h-64 md:h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
            />
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold mb-2">{tailor.name}</h1>
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400 mr-1" />
                <span>
                  {tailor.rating} ({tailor.reviews.length} reviews)
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <Calendar className="mr-2" />
                  <span>Age: {tailor.age}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="mr-2" />
                  <span>Experience: {tailor.experience} years</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2" />
                  <span>{tailor.location}</span>
                </div>
                <div className="flex items-center">
                  <IndianRupee className="mr-2" />
                  <span>₹{tailor.price}/hour</span>
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">Specialties</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {tailor.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="bg-purple-600 px-3 py-1 rounded-full text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-bold mb-2">Book an Appointment</h2>
              <BookingForm tailorId={tailor.id} />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          <div className="space-y-4">
            {tailor.reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-700 pb-4">
                <div className="flex items-center mb-2">
                  <span className="font-bold mr-2">{review.user}</span>
                  <div className="flex items-center">
                    <Star className="text-yellow-400 mr-1" />
                    <span>{review.rating}</span>
                  </div>
                </div>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BookingForm({ tailorId }) {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="date" className="block mb-2">
          Select Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="w-full bg-gray-700 p-2 rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="time" className="block mb-2">
          Select Time
        </label>
        <input
          type="time"
          id="time"
          name="time"
          className="w-full bg-gray-700 p-2 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full"
      >
        Book Appointment
      </button>
    </form>
  );
}
