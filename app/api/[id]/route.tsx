import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: String } }
) {
  const data = await prisma.article.findUnique({ where: { id: +params.id } });
  return NextResponse.json(data);
}
