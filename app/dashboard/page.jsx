// app/dashboard/page.jsx
import { checkUser } from "@/lib/checkUser";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
 

export default async function Dashboard() {
  const {userId} = await auth();
  
  if (!userId) {
    redirect("/sign-in");
  }

  // Check/create user in database
  const dbUser = await checkUser();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Welcome back, {dbUser?.name || user.firstName}!</h2>
        <p className="text-gray-600">This is your dashboard.</p>
      </div>
    </div>
  );
}