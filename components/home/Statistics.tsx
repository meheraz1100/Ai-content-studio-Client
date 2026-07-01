const stats = [
  {
    number: "10K+",
    title: "Active Users",
  },
  {
    number: "500K+",
    title: "Content Generated",
  },
  {
    number: "50+",
    title: "AI Templates",
  },
  {
    number: "99%",
    title: "Customer Satisfaction",
  },
];

export default function Statistics() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-xl border bg-white p-8 text-center shadow-sm"
          >
            <h2 className="text-4xl font-bold text-blue-600">
              {stat.number}
            </h2>

            <p className="mt-3 text-gray-600">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}