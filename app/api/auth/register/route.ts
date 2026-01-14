import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const { email, password } = (await req.json()) as {
    email: string | null;
    password: string | null;
  };

  if (!email || !password)
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const exists = await prisma.user.findUnique({ where: { email } });

  if (exists)
    return NextResponse.json({ error: "User already exists" }, { status: 409 });

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return NextResponse.json({ ok: true });
}
