import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await prisma.question.findMany({
    include: {
      additionalQuestion: true,
      choices: {
        include: {
          choice: true,
        },
      },
    },
  });

  return NextResponse.json(res);
}
