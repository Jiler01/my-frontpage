import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const hash = "$2b$10$tOc.wICI8eXL0NM7/JkH2eVHmz/XrWB2IxOppemcMH8unFfZCJJcO";

export async function GET(request: Request) {
  const data = await prisma.article.findMany();
  return NextResponse.json(data);
}

export async function POST(request: any) {
  const body = await request.json();
  const valid = await bcrypt.compare(body.password, hash);
  console.log("LOG:", valid);
  if (valid) {
    delete body.password;
    const data = await prisma.article.create({ data: body });
    return NextResponse.json({ status: 201 });
  }
  return NextResponse.json({ status: 401 });
}
