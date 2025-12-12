import Image from "next/image";

export default function DSS() {
  const members = [
    {
      role: "Principal Investigator",
      people: [
        "Prof Anurag Ohri, Professor, Department of Civil Engineering",
        "Dr. Pramod Soni, Assistant Professor, Department of Civil Engineering",
      ],
    },
    {
      role: "Co-Principal Investigator",
      people: [
        "Prof P. K. Mishra, Department of Chemical Engineering, IIT(BHU)",
        "Dr. Tanima Dutta, Associate Professor, Department of Computer Sc. and Engg., IIT(BHU)",
        "Dr. Shyam Kamal, Associate Professor, Dept of Electrical Engineering, IIT(BHU)",
        "Dr. Medha Jha, Associate Professor, Department of Civil Engineering, IIT(BHU)",
        "Dr. Om Damani, Professor, Department of Computer Science, IIT Bombay",
        "Dr. Pooja Prasad, Assistant Professor, School of Public Policy, IIT Delhi",
        "Dr. Nikhil Bugalia, Assistant Professor, Department of Civil Engineering, IIT Madras",
        "Dr. Ram Avtar, Associate Professor, Faculty of Environmental Earth Science, Hokkaido University, Japan",
      ],
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* Page Header */}
      <header className="bg-blue-700 text-white py-12 text-center">
        <h1 className="text-5xl font-bold">Decision Support System</h1>
      </header>

      {/* About Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">
            About DSS
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            For water management, we analyze basin water dynamics through
            hydrological models, scenario generation, forecasting, and data
            analytics. Our goal is to integrate groundwater and hydrological
            models to create a comprehensive river management plan.
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
              src="/P_1.0.jpg"
              alt="Progress Report"
              width={1000}
              height={400}
              className="rounded-lg shadow-lg object-contain"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-900 text-center mb-8">
            Team DSS
          </h2>
          {members.map((group, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                {group.role}
              </h3>
              <ul className="space-y-2">
                {group.people.map((person, i) => (
                  <li
                    key={i}
                    className="text-lg text-gray-800 border-l-4 border-blue-500 pl-4"
                  >
                    {person}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
