import { NextResponse } from "next/server";
import { fetchPublicPlansServer } from "@/lib/public-pricing";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const producto = searchParams.get("producto") ?? "facturacion";
  const plataforma = searchParams.get("plataforma") ?? "falconext";

  const plans = await fetchPublicPlansServer({
    producto,
    plataforma: plataforma === "krezka" ? "krezka" : "falconext",
  });

  return NextResponse.json({
    code: 1,
    message: "ok",
    data: plans,
  });
}
