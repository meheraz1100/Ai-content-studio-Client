export default function DashboardPage() {
  const cards = [
    { title: "Users", value: "1,250" },
    { title: "Templates", value: "50" },
    { title: "AI Generations", value: "12,450" },
    { title: "Revenue", value: "$2,450" },
  ];

  return (
    <main className="p-8">
      <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >
            <h3 className="text-gray-500">{card.title}</h3>
            <p className="mt-2 text-3xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border bg-white p-6">
        <h2 className="mb-4 text-xl font-semibold">
          Recent AI Generations
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left">Template</th>
              <th className="py-2 text-left">User</th>
              <th className="py-2 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="py-3">Blog Generator</td>
              <td>John</td>
              <td>Today</td>
            </tr>

            <tr>
              <td className="py-3">Caption Generator</td>
              <td>Sarah</td>
              <td>Yesterday</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}