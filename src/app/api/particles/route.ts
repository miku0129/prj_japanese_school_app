import prisma from "../../../../prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await prisma.particlesQuestion.findMany({
    include: {
      additionalQuestion: true,
      options: {
        include: {
          option: true,
        },
      },
    },
  });

  return NextResponse.json(res);
}
