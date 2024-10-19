import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#1F2937] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#9333EA]">About Us</h1>
          <Button
            asChild
            className="bg-[#9333EA] hover:bg-[#A855F7] text-white"
          >
            <a href="/">Home</a>
          </Button>
        </header>

        <Card className="bg-[#374151] shadow-lg border border-[#4B5563] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-[#A855F7]">
              Our Story
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              Founded in 2024, Rent Me a Tailor emerged from a simple idea: to
              make professional tailoring services accessible to everyone. We
              believe that perfectly fitted clothing shouldn&apos;t be a luxury,
              but a standard. Our platform connects skilled tailors with
              clients, bringing the art of tailoring into the digital age.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#374151] shadow-lg border border-[#4B5563] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-[#A855F7]">
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              At Rent Me a Tailor, our mission is to revolutionize the way
              people think about and access tailoring services. We strive to:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
              <li>Provide easy access to skilled tailors</li>
              <li>Promote the art and craft of tailoring</li>
              <li>
                Ensure everyone can enjoy the comfort and confidence of
                well-fitted clothing
              </li>
              <li>Support local tailors and the tailoring community</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-semibold text-center text-[#A855F7] mb-6">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Amrita Sinha",
              role: "CEO",
              image: "/Amrita.jpeg?height=100&width=100",
              linkedin: "#",
            },
            {
              name: "Meet Patel",
              role: "CTO",
              image: "/Meet.jpeg?height=100&width=100",
              linkedin: "https://www.linkedin.com/in/meetpatel011",
            },
            {
              name: "Pushkal Singh",
              role: "CFO & COO",
              image: "/Pushkal.jpeg?height=100&width=100",
              linkedin: "https://www.linkedin.com/in/pushkalx30/",
            },
            {
              name: "Aahan Nigam",
              role: "CMO",
              image: "/Aahan.jpeg?height=100&width=100",
              linkedin: "https://www.linkedin.com/in/aahan-nigam-68a179277",
            },
          ].map((member) => (
            <Card
              key={member.name}
              className="bg-[#374151] shadow-lg border border-[#4B5563]"
            >
              <Link href = {member.linkedin} target="_blank">
                <CardContent className="flex flex-col items-center p-6">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-[#9333EA]">
                    {member.name}
                  </h3>
                  <p className="text-[#A855F7]">{member.role}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        <Card className="bg-[#374151] shadow-lg border border-[#4B5563] mt-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-[#A855F7]">
              Join Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              We&apos;re always looking for talented individuals to join our
              team. If you&apos;re passionate about fashion, technology, or
              customer service, we&apos;d love to hear from you. Contact us from
              our{" "}
              <Link className="text-purple-700" href="/contact">
                Contact Page
              </Link>{" "}
              or mail to career@rentataylor.com
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
