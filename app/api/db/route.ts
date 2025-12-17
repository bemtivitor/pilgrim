import { NextResponse } from "next/server";
import db from "@/public/database.json";

export async function GET() {
  return NextResponse.json(db);
}
