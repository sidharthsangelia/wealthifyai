// app/dashboard/page.jsx
import {CreateAccountDrawer} from "@/components/CreateAccountDrawer";
import { Card, CardContent } from "@/components/ui/card";
import { checkUser } from "@/lib/checkUser";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Plus } from "lucide-react";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <main className="space-y-8">
      {/* Accounts Grid */}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CreateAccountDrawer>
          <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
            <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
              <Plus className="h-10 w-10 mb-2" />
              <p className="text-sm font-medium">Add New Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>
      </div>
    </main>
  );
}
