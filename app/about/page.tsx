export default function AboutPage() {
  const team = [
    {
      name: "John Anderson",
      role: "Founder & CEO",
      image: "https://i.pravatar.cc/300?img=11",
    },
    {
      name: "Sarah Wilson",
      role: "AI Engineer",
      image: "https://i.pravatar.cc/300?img=32",
    },
    {
      name: "David Lee",
      role: "Product Designer",
      image: "https://i.pravatar.cc/300?img=15",
    },
  ];

  return (
    <main>

      {/* Hero */}
      <section className="bg-linear-to-r from-blue-600 to-indigo-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About AI Content Studio
          </h1>

          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Create high-quality blogs, emails, social media captions,
            product descriptions and more using the power of AI.
          </p>
        </div>
      </section>

      {/* Mission */}

      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-5">
          Our Mission
        </h2>

        <p className="text-gray-600 leading-8">
          Our mission is to empower creators, businesses, marketers,
          and students with cutting-edge AI tools that simplify
          content creation while maintaining quality, creativity,
          and productivity.
        </p>
      </section>

      {/* Why Choose Us */}

      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                ⚡ Fast Generation
              </h3>

              <p className="text-gray-600">
                Generate quality content within seconds.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                🎯 Accurate Results
              </h3>

              <p className="text-gray-600">
                AI optimized for professional-quality writing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                🔒 Secure Platform
              </h3>

              <p className="text-gray-600">
                Your data stays safe and protected.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Team */}

      <section className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Meet Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {team.map((member) => (

            <div
              key={member.name}
              className="bg-white rounded-xl shadow overflow-hidden text-center"
            >

              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h3 className="font-bold text-xl">
                  {member.name}
                </h3>

                <p className="text-gray-500">
                  {member.role}
                </p>
              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}