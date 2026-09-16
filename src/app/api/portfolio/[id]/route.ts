import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const item = await prisma.portfolio.findUnique({
      where: { id: params.id },
    });
    if (!item) return NextResponse.json({ error: "Portfolio item not found" }, { status: 404 });
    return NextResponse.json(item);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch portfolio item" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { title, category, description, image, link } = body;

    const item = await prisma.portfolio.update({
      where: { id: params.id },
      data: { title, category, description, image, link },
    });
    return NextResponse.json(item);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update portfolio item" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await prisma.portfolio.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ message: "Portfolio item deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete portfolio item" }, { status: 500 });
  }
}
