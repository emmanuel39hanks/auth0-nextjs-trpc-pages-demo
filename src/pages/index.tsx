import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user, isLoading } = useUser();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : user ? (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <Link href="/api/auth/logout">
              <button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                Logout
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
          <Link href="/api/auth/login">
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
              Login
            </button>
          </Link>
        </div>
      )}
    </main>
  );
}
