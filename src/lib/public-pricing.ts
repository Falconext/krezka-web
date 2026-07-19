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
  target: string;
  strategy: string;
  highlights: string[];
  modules: string[];
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
    utility: "Formalización, caja y SUNAT sin complicarte",
    store: "Sin tienda virtual",
    tagline: "Para emprendedores que necesitan vender, emitir SUNAT y controlar su caja desde el primer día.",
    target: "Bodegas, pequeños bazares, profesionales independientes y negocios que recién se formalizan.",
    strategy: "Empieza con emisión ilimitada y control básico. Cuando necesites tienda online, variantes o automatización, subes a Negocio.",
    highlights: [
      "Facturación electrónica ilimitada: boletas, facturas, notas de venta y guías",
      "Certificado Digital PSE incluido",
      "POS básico con apertura/cierre de caja y calculadora de vuelto",
      "Catálogo simple de productos y servicios",
      "Inventario básico con Kardex de entradas y salidas",
      "CRM básico de clientes y proveedores",
      "Reporte diario de ventas en Excel/PDF",
      "Sin tienda virtual",
    ],
    modules: [
      "Facturación SUNAT",
      "Punto de Venta",
      "Caja diaria",
      "Catálogo simple",
      "Kardex básico",
      "Clientes y proveedores",
      "Reportes diarios",
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
    utility: "Ecommerce, variantes y ventas omnicanal",
    store: "Incluye tienda virtual",
    tagline: "El plan más elegido para vender por redes, controlar inventario y abrir tu tienda virtual estilo Shopify.",
    target: "Tiendas de ropa, ferreterías, minimarkets y negocios que ya venden por WhatsApp o redes sociales.",
    strategy: "El gancho es la tienda virtual con variantes, combos, mayoristas y comunicación automática por WhatsApp/email.",
    highlights: [
      "Todo lo del plan Emprendedor",
      "Tienda Virtual Ecommerce con catálogo, banners y galería",
      "Variantes padre-hijo para tallas, colores, precios y stock independiente",
      "Gestión de combos y precios mayoristas",
      "Compras, gastos y lotes básicos",
      "Envío automático de comprobantes por WhatsApp y Email",
      "Cotizaciones y proformas",
      "Pasarela de pagos Culqi para cobrar con tarjeta",
    ],
    modules: [
      "Tienda virtual",
      "Variantes talla/color",
      "Combos",
      "Mayoristas",
      "Compras y gastos",
      "Lotes básicos",
      "WhatsApp/Email",
      "Culqi",
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
    utility: "Multi-sede, logística, finanzas y fuerza de ventas",
    store: "Incluye tienda virtual",
    tagline: "Para empresas que necesitan control absoluto: multi-sucursal, rentabilidad exacta, logística y operaciones B2B.",
    target: "Cadenas de tiendas, farmacias, distribuidoras B2B, supermercados y empresas con varias sucursales.",
    strategy: "El valor premium está en el control: FEFO/FIFO, distribuidores, reseñas, SIRE, delivery/GPS, escritorio y app móvil.",
    highlights: [
      "Todo lo del plan Negocio",
      "Usuarios y sedes ilimitadas",
      "Kardex avanzado FEFO/FIFO con vencimientos y traslados entre sucursales",
      "Módulo de distribuidores, afiliados y cálculo de comisiones",
      "Reviews y reseñas web con moderación",
      "Contabilidad, SIRE y dashboard financiero con rentabilidad exacta",
      "Delivery/GPS para la tienda virtual",
      "Sistema de escritorio + App móvil",
      "Asesor personal dedicado",
    ],
    modules: [
      "Multi-sede",
      "FEFO/FIFO",
      "Distribuidores",
      "Comisiones",
      "Reviews",
      "SIRE",
      "Delivery/GPS",
      "Desktop + Mobile",
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

export const getPlatform = (): "krezka" => "krezka";

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
  params?: { producto?: string; plataforma?: "krezka" }
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
