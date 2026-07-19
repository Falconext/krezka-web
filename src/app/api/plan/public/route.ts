import { NextResponse } from "next/server";
import { fetchPublicPlansServer } from "@/lib/public-pricing";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const producto = searchParams.get("producto") ?? "facturacion";

  const plans = await fetchPublicPlansServer({
    producto,
    plataforma: "krezka",
  });

  return NextResponse.json({
    code: 1,
    message: "ok",
    data: plans,
  });
}
