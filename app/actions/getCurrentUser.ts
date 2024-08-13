import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOption";
import prisma from "@/app/libs/prismadb";

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }
    const currrentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currrentUser) {
      return null;
    }
    return {
      ...currrentUser,
      createdAt: currrentUser.createdAt.toISOString(),
      updatedAt: currrentUser.updatedAt.toISOString(),
      emailVerified: currrentUser.emailVerified?.toISOString() || null,
    };
  } catch (error: any) {
    return null;
  }
}
