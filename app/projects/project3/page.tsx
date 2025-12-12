import ComingSoon from "@/components/ComingSoon";
import Image from "next/image";
import { FC } from "react";

const Project3: FC = () => {
  return (
    <main className="bg-white text-gray-900">
      {/* Page Header */}
      <header className="bg-blue-700 text-white py-12 text-center">
        <h1 className="text-5xl font-bold">Hydrological Modelling of Varuna</h1>
      </header>

      {/* About Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">About</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Led by professor from the University of Copenhagen, it aims to
            create a detailed fingerprint library, enhance water quality
            monitoring, and propose effective remediation strategies.
          </p>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">
            Progress Report
          </h2>
          <div className="flex justify-center">
            <Image
              src="/P_3.0.jpg" // Change this to your actual image path
              alt="Progress Report"
              width={1000} // Adjust width as needed
              height={200} // Adjust height as needed
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">
            Team
          </h2>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              {/* Team Member */}
            </h3>
            <ul className="space-y-2">
              <li className="text-lg text-gray-800 border-l-4 border-blue-500 pl-3">
                Prof. S.B. Dwivedi
              </li>
              <li className="text-lg text-gray-800 border-l-4 border-blue-500 pl-3">
                Dr. Shishir Gaur
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Project3;
