import Link from 'next/link'
import { Star, Filter, MapPin, Briefcase } from 'lucide-react'

const tailors = [
  { id: '1', name: 'John Smith', rating: 4.8, reviews: 95, specialization: 'Suits', location: 'New York', gender: 'Male', price: 80 },
  { id: '2', name: 'Emma Johnson', rating: 4.7, reviews: 87, specialization: 'Dresses', location: 'Los Angeles', gender: 'Female', price: 75 },
  { id: '3', name: 'Michael Brown', rating: 4.9, reviews: 110, specialization: 'Alterations', location: 'Chicago', gender: 'Male', price: 70 },
]

export default function TailorsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Browse Tailors</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Filter className="mr-2" /> Filters
              </h2>
              {/* Add filter controls here */}
            </div>
          </div>
          
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tailors.map((tailor) => (
                <Link href={`/tailors/${tailor.id}`} key={tailor.id}>
                  <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
                    <img
                      src={`/placeholder.svg?height=150&width=150&text=${tailor.name}`}
                      alt={tailor.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">{tailor.name}</h3>
                    <div className="flex items-center mb-2">
                      <Star className="text-yellow-400 mr-1" />
                      <span>{tailor.rating} ({tailor.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Briefcase className="mr-1" />
                      <span>{tailor.specialization}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <MapPin className="mr-1" />
                      <span>{tailor.location}</span>
                    </div>
                    <div className="text-purple-400 font-bold">${tailor.price}/hour</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}