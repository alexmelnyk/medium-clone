import { getSession } from "@/lib/auth";

export default async function PrivateLayout({ children }) {
  const session = await getSession();

  if (!session) {
    return <main>You are not authorized</main>;
  }

  return <main>{children}</main>;
}
