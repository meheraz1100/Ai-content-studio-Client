export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-xl border bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Welcome Back
        </h1>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border p-3"
            />
          </div>

          <button className="w-full rounded-lg bg-blue-600 p-3 text-white">
            Login
          </button>

          <button
            type="button"
            className="w-full rounded-lg border p-3"
          >
            Continue with Google
          </button>

          <button
            type="button"
            className="w-full rounded-lg bg-gray-800 p-3 text-white"
          >
            Demo Login
          </button>
        </form>
      </div>
    </main>
  );
}