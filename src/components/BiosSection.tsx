import { useState } from "react";

interface Student {
  id: string;
  name: string;
  university: string;
  major: string;
  bio: string;
  location: string;
  graduationYear: string;
  employmentType: string;
  workPreference: string;
  skills: string[];
}

// Sample data matching the image
const sampleStudents: Student[] = [
  {
    id: "1",
    name: "Alex Rivera",
    university: "Carnegie Mellon",
    major: "Computer Science",
    bio: "Mobile developer with experience in both iOS and Android. Built apps with 100k+ downloads. Passionate about creating delightful user experiences and...",
    location: "Pittsburgh, PA",
    graduationYear: "2025",
    employmentType: "Part-time (20 hrs/week)",
    workPreference: "Remote",
    skills: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "UI/UX"],
  },
  {
    id: "2",
    name: "Emma Thompson",
    university: "Georgia Tech",
    major: "CS & Mathematics",
    bio: "Security researcher and competitive programmer. Won several hackathons and CTF competitions. Interested in cryptography, blockchain, and building secure...",
    location: "Atlanta, GA",
    graduationYear: "2026",
    employmentType: "Internship",
    workPreference: "In-Person",
    skills: ["Java", "Solidity", "Assembly", "Linux", "Cryptography", "Algorithms"],
  },
  {
    id: "3",
    name: "Jordan Lee",
    university: "Cornell",
    major: "Computer Science",
    bio: "Backend engineer specializing in microservices architecture. Love working on performance optimization and building resilient systems. Former intern at Stripe and...",
    location: "Ithaca, NY",
    graduationYear: "2025",
    employmentType: "Full Time",
    workPreference: "Remote",
    skills: ["Go", "Kubernetes", "PostgreSQL", "Redis", "gRPC", "Docker"],
  },
  {
    id: "4",
    name: "Marcus Johnson",
    university: "Berkeley",
    major: "CS & AI",
    bio: "ML engineer with a focus on computer vision and NLP. Published research on transformer architectures. Interned at Google Brain and OpenAI. Looking to apply AI to solve real-...",
    location: "San Francisco, CA",
    graduationYear: "2025",
    employmentType: "Full Time",
    workPreference: "In-Person",
    skills: ["Python", "TensorFlow", "PyTorch", "C++", "CUDA", "Docker"],
  },
];

export default function BiosSection() {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  return (
    <div className="w-full mt-6 font-inter">
      {/* Filters and Sort Row */}
      <div className="flex items-center justify-end gap-4 mb-4">
        <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          Filters
        </button>
        <div className="relative">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 appearance-none pr-8"
          >
            <option value="asc">Alphabetical</option>
            <option value="desc">Alphabetical (Z-A)</option>
          </select>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Profile Count */}
      <p className="text-sm text-gray-600 mb-6">72 profiles</p>

      {/* Student Profile Cards */}
      <div className="space-y-6">
        {sampleStudents.map((student) => (
          <div
            key={student.id}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex gap-4">
              {/* Profile Picture */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-2xl font-semibold text-gray-500">
                    {student.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {student.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {student.university}, {student.major}
                    </p>
                  </div>
                  {/* Action Icons */}
                  <div className="flex items-center gap-3">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-gray-700 mb-4">{student.bio}</p>

                {/* Info Icons Row */}
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{student.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Graduating {student.graduationYear}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{student.employmentType}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2.5 2.5 0 002.5 2.5h1A2.5 2.5 0 0011 11h2a2.5 2.5 0 002.5 2.5h1a2.5 2.5 0 002.5-2.5h1.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{student.workPreference}</span>
                  </div>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {student.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-brand-blue text-white text-xs rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

