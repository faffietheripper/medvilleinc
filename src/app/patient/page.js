import { auth, currentUser } from "@clerk/nextjs";

export default async function Patient() {
  // Get the userId from auth() -- if null, the user is not logged in
  const { userId, sessionId } = auth();

  if (userId) {
    // Query DB for user specific information or display assets only to logged in users
  }

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser();
  // Use `user` to render user details or create UI elements

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Patient Page
        <div>
          Hello, {userId} your current active session is {sessionId}
        </div>
      </h1>
    </main>
  );
}
