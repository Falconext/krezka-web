export type PublicPlanApi = {
  id: number;
  nombre: string;
  plataforma?: string;
  producto?: string;
  descripcion: string | null;
  costo: number | string;
  duracionDias: number;
  maxComprobantes: number | null;
  limiteUsuarios: number | null;
  maxSedes: number | null;
  tieneTienda: boolean;
  tieneBanners: boolean;
  tieneGaleria: boolean;
  tieneCulqi: boolean;
  tieneDeliveryGPS: boolean;
  tieneTicketera: boolean;
  tieneGestionLotes: boolean;
};

type PublicPlanResponse = {
  code: number;
  message: string;
  data: PublicPlanApi[];
};

export type PricingBasePlan = {
  id: "plan-emprendedor" | "plan-negocio" | "plan-corporativo";
  name: "Emprendedor" | "Negocio" | "Corporativo";
  monthly: number;
  annual: number;
  regularMonthly: number;
  docs: string;
  description: string;
  badge: string;
  popular: boolean;
  utility: string;
  store: "Sin tienda virtual" | "Add-on opcional" | "Incluye tienda virtual";
  tagline: string;
  highlights: string[];
  usersLabel: string;
  sedesLabel: string;
};

export const PRICING_BASE_PLANS: PricingBasePlan[] = [
  {
    id: "plan-emprendedor",
    name: "Emprendedor",
    docs: "Comprobantes ILIMITADOS",
    monthly: 39.9,
    annual: 399.0,
    regularMonthly: 49.9,
    description: "Ideal para negocios que recién inician.",
    badge: "Entrada",
    popular: false,
    utility: "Plan base para formalización total",
    store: "Sin tienda virtual",
    tagline: "Ideal para negocios que recién inician su operación formal.",
    highlights: [
      "Boletas y Facturas ilimitadas",
      "Notas de venta ilimitadas",
      "Notas de credito",
      "Guías de remisión",
      "Certificado Digital PSE Incluido",
      "2 Usuarios / 1 Sede",
      "Kardex de Inventario",
      "Clientes y proveedores",
      "Caja y Cobros",
      "Cotizaciones",
      "Contabilidad",
      "Reportes de ventas",
    ],
    usersLabel: "2 usuarios",
    sedesLabel: "1 sede",
  },
  {
    id: "plan-negocio",
    name: "Negocio",
    docs: "Comprobantes ILIMITADOS",
    monthly: 69.9,
    annual: 699.0,
    regularMonthly: 89.9,
    description: "Para negocios en crecimiento.",
    badge: "Recomendado",
    popular: true,
    utility: "Control avanzado de stock y ventas",
    store: "Incluye tienda virtual",
    tagline: "Para negocios en crecimiento con mayor volumen diario.",
    highlights: [
      "Todo lo del plan Emprendedor",
      "Reporte Kardex e inventario",
      "Tienda Virtual + Banners y Galería",
      "5 Usuarios / 2 Sedes",
      "Gastos y compras",
      "Plantilla de catalogos",
      "Gestion de lotes",
      "Combos y precios por mayorista",
      "Envio a email a tus clientes",
      "Envio a WhatsApp a tus clientes",
    ],
    usersLabel: "5 usuarios",
    sedesLabel: "2 sedes",
  },
  {
    id: "plan-corporativo",
    name: "Corporativo",
    docs: "Comprobantes ILIMITADOS",
    monthly: 99.9,
    annual: 999.0,
    regularMonthly: 129.9,
    description: "Control total para empresas establecidas.",
    badge: "Premium",
    popular: false,
    utility: "Control total para empresas establecidas",
    store: "Incluye tienda virtual",
    tagline: "Pensado para empresas con varias sedes y mayor volumen operativo.",
    highlights: [
      "Todo lo del plan Negocio",
      "Usuarios y sedes ilimitados",
      "Localización de productos",
      "Ventas y reservas",
      "Kardex con lotes FEFO",
      "Sistema de escritorio",
      "Asesor Personal Dedicado",
      "SIRE",
      "Dashboard Financiero"
    ],
    usersLabel: "15 usuarios",
    sedesLabel: "Ilimitadas",
  },
];

const API_URL = (
  process.env.API_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:4001/api"
).replace(/\/$/, "");
const PRODUCTO = "facturacion";

const normalizeName = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

export const getPlatform = (): "falconext" | "krezka" =>
  (process.env.NEXT_PUBLIC_BRAND ?? "falconext").toLowerCase() === "krezka"
    ? "krezka"
    : "falconext";

const mapPlanId = (name: string): PricingBasePlan["id"] | null => {
  const n = normalizeName(name);
  if (n.includes("emprendedor")) return "plan-emprendedor";
  if (n.includes("negocio")) return "plan-negocio";
  if (n.includes("corporativo")) return "plan-corporativo";
  return null;
};

const formatDocs = (maxComprobantes: number | null): string =>
  maxComprobantes == null || maxComprobantes <= 0
    ? "Comprobantes ILIMITADOS"
    : `${maxComprobantes} comprobantes`;

const formatUsers = (limiteUsuarios: number | null): string =>
  limiteUsuarios == null ? "Ilimitados" : `${limiteUsuarios} ${limiteUsuarios === 1 ? "usuario" : "usuarios"}`;

const formatSedes = (maxSedes: number | null): string =>
  maxSedes == null ? "Ilimitadas" : `${maxSedes} ${maxSedes === 1 ? "sede" : "sedes"}`;

export const mergePricingPlans = (
  basePlans: PricingBasePlan[],
  remotePlans: PublicPlanApi[]
): PricingBasePlan[] => {
  if (remotePlans.length === 0) return basePlans;

  const mapped = new Map<PricingBasePlan["id"], PublicPlanApi>();
  for (const remote of remotePlans) {
    const id = mapPlanId(remote.nombre);
    if (id) mapped.set(id, remote);
  }

  return basePlans.map((base) => {
    const remote = mapped.get(base.id);
    if (!remote) return base;

    const monthlyRaw = typeof remote.costo === "string" ? Number(remote.costo) : remote.costo;
    const monthly = Number.isFinite(monthlyRaw) ? monthlyRaw : base.monthly;
    const annual = monthly * 10;
    const regularMonthly = monthly * 1.25;

    return {
      ...base,
      monthly,
      annual,
      regularMonthly,
      docs: formatDocs(remote.maxComprobantes),
      description: remote.descripcion ?? base.description,
      usersLabel: formatUsers(remote.limiteUsuarios),
      sedesLabel: formatSedes(remote.maxSedes),
      store: remote.tieneTienda ? "Incluye tienda virtual" : base.store,
    };
  });
};

const normalizePlan = (plan: PublicPlanApi): PublicPlanApi => ({
  ...plan,
  costo: typeof plan.costo === "string" ? Number(plan.costo) : plan.costo,
});

const extractPlans = (payload: unknown): PublicPlanApi[] => {
  if (Array.isArray(payload)) {
    return payload.map((item) => normalizePlan(item as PublicPlanApi));
  }

  if (
    typeof payload === "object" &&
    payload !== null &&
    "code" in payload &&
    "data" in payload
  ) {
    const typed = payload as PublicPlanResponse;
    if (typed.code === 1 && Array.isArray(typed.data)) return typed.data.map(normalizePlan);
  }
  return [];
};

export async function fetchPublicPlansServer(
  params?: { producto?: string; plataforma?: "falconext" | "krezka" }
): Promise<PublicPlanApi[]> {
  try {
    const producto = params?.producto ?? PRODUCTO;
    const plataforma = params?.plataforma ?? getPlatform();
    const publicUrl = `${API_URL}/plan/public?producto=${producto}&plataforma=${plataforma}`;
    const publicResponse = await fetch(publicUrl, { cache: "no-store" });
    if (publicResponse.ok) {
      const publicPayload = await publicResponse.json();
      const publicPlans = extractPlans(publicPayload);
      if (publicPlans.length > 0) return publicPlans;
    }

    const planUrl = `${API_URL}/plan`;
    const planResponse = await fetch(planUrl, { cache: "no-store" });
    if (!planResponse.ok) return [];
    const planPayload = await planResponse.json();
    const allPlans = extractPlans(planPayload);
    return allPlans.filter(
      (plan) =>
        normalizeName(plan.producto ?? "") === normalizeName(producto) &&
        normalizeName(plan.plataforma ?? "") === normalizeName(plataforma)
    );
  } catch {
    return [];
  }
}

export async function fetchPublicPlansClient(): Promise<PublicPlanApi[]> {
  try {
    const plataforma = getPlatform();
    const url = `/api/plan/public?producto=${PRODUCTO}&plataforma=${plataforma}`;
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) return [];
    const payload: PublicPlanResponse = await response.json();
    return payload.code === 1 && Array.isArray(payload.data) ? payload.data : [];
  } catch {
    return [];
  }
}
