export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-xl border bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Create Account
        </h1>

        <form className="space-y-5">
          <input
            placeholder="Full Name"
            className="w-full rounded-lg border p-3"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border p-3"
          />

          <button className="w-full rounded-lg bg-blue-600 p-3 text-white">
            Register
          </button>

          <button
            type="button"
            className="w-full rounded-lg border p-3"
          >
            Continue with Google
          </button>
        </form>
      </div>
    </main>
  );
}