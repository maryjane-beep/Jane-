import {
  Mountain,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Globe,
  Cpu,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import pix from "@/app/mary-john.jpg";

export default function Component() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              src={pix}
              width={400}
              height={400}
              alt="User profile picture"
              className="mx-auto aspect-square rounded-full object-cover border-4 border-white dark:border-gray-800"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Nwogu Maryjane Amarachi
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Computer science
                </p>
              </div>
              <div className="space-y-2 text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <strong>Level:</strong> 300 Level
                </div>
                <div className="flex items-center">
                  <strong>State</strong> Abia
                </div>
              </div>
              {/* <div className="space-y-2 text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  jane.doe@example.com
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  San Francisco, CA
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Code, label: "Web Development" },
              { icon: Database, label: "Database Management" },
              { icon: Globe, label: "API Integration" },
              { icon: Cpu, label: "Machine Learning" },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 p-4 bg-gray-100 rounded-lg dark:bg-gray-800"
              >
                <skill.icon className="h-12 w-12 text-primary" />
                <span className="text-sm font-medium text-center">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
