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
  /** Funciones encendidas del plan en Sistema → Planes (tabla PlanFeature). */
  features?: Record<string, boolean>;
};

type PublicPlanResponse = {
  code: number;
  message: string;
  data: PublicPlanApi[];
};

export type PricingBasePlan = {
  id: "plan-emprendedor" | "plan-negocio" | "plan-corporativo" | "plan-empresarial" | "plan-empresarial-plus";
  name: "Emprendedor" | "Negocio" | "Corporativo" | "Empresarial" | "Empresarial Plus";
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
  /** Funciones del plan según la base; sin API, la comparación usa sus valores locales. */
  features?: Record<string, boolean>;
};

export const PRICING_BASE_PLANS: PricingBasePlan[] = [
  {
    id: "plan-emprendedor",
    name: "Emprendedor",
    // Tope fijo del plan: no se toma de la API (que devuelve null = ilimitado).
    docs: "300 comprobantes SUNAT al mes",
    monthly: 39.9,
    // Anual = 11 meses (1 mes gratis). La promo de 2 meses la da ventas al cerrar.
    annual: 438.9,
    regularMonthly: 49.88,
    description: "Ideal para negocios que recién inician.",
    badge: "Entrada",
    popular: false,
    utility: "Formalización, caja y SUNAT sin complicarte",
    store: "Sin tienda virtual",
    tagline: "Para emprendedores que necesitan vender, emitir SUNAT y controlar su caja desde el primer día.",
    target: "Bodegas, pequeños bazares, profesionales independientes y negocios que recién se formalizan.",
    strategy: "Empieza con 300 comprobantes SUNAT al mes, notas de venta ilimitadas y control básico. Cuando necesites tienda online, variantes o automatización, subes a Negocio.",
    highlights: [
      "300 comprobantes SUNAT al mes (boletas, facturas y guías) y notas de venta ilimitadas",
      "POS básico con apertura/cierre de caja y calculadora de vuelto",
      "Catálogo simple de productos y servicios",
      "Inventario básico con Kardex de entradas y salidas",
      "CRM básico de clientes y proveedores",
      "Reporte diario de ventas en Excel/PDF",
      "Reporte para tu contador mensual",
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
    annual: 768.9,
    regularMonthly: 87.38,
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
      "Más de 50 diseños de tienda virtual para escoger",
      "Variantes padre-hijo para tallas, colores, precios y stock independiente",
      "Gestión de combos y precios mayoristas",
      "Compras, gastos y lotes básicos",
      "Envío automático de comprobantes por WhatsApp y Email",
      "Cotizaciones y proformas",
      "SIRE: tus compras de SUNAT sin digitarlas, listas para tu contador",
      "Integración con Shalom y Olva: registras tus envíos manualmente",
    ],
    modules: [
      "Tienda virtual: +50 diseños",
      "Variantes talla/color",
      "Combos",
      "Mayoristas",
      "Compras y gastos",
      "Shalom y Olva manual",
      "Lotes básicos",
      "WhatsApp/Email",
      "SIRE",
    ],
    usersLabel: "4 usuarios",
    sedesLabel: "2 sedes",
  },
  {
    id: "plan-corporativo",
    name: "Corporativo",
    docs: "Comprobantes ILIMITADOS",
    monthly: 99.9,
    annual: 1098.9,
    regularMonthly: 124.88,
    description: "Control total para empresas establecidas.",
    badge: "Premium",
    popular: false,
    utility: "Multi-sede, logística, finanzas y fuerza de ventas",
    store: "Incluye tienda virtual",
    tagline: "Para empresas que necesitan control absoluto: multi-sucursal, rentabilidad exacta, logística y operaciones B2B.",
    target: "Cadenas de tiendas, farmacias, distribuidoras B2B, supermercados y empresas con varias sucursales.",
    strategy: "El valor premium está en el control: FEFO/FIFO, reseñas y finanzas.",
    highlights: [
      "Todo lo del plan Negocio",
      "Sube tus compras con foto (IA)",
      "7 usuarios y hasta 3 sedes",
      "Kardex avanzado FEFO/FIFO con vencimientos y traslados entre sucursales",
      "Reviews y reseñas web con moderación",
      "Shalom y Olva 100% automático: creas tus guías desde el sistema, sin registrar nada a mano y sin entrar a la web de Shalom ni de Olva",
      "Contabilidad y dashboard financiero con rentabilidad exacta",
      "Asesor personal dedicado",
    ],
    modules: [
      "Multi-sede",
      "FEFO/FIFO",
      "Reviews",
      "Shalom y Olva automático",
    ],
    usersLabel: "7 usuarios",
    sedesLabel: "3 sedes",
  },
];

// Planes superiores: se muestran en la sección de precios del home y en la
// comparación de módulos. Los brochures y /sistemas siguen con los 3 base.
export const PRICING_PLANES_EMPRESARIALES: PricingBasePlan[] = [
  {
    id: "plan-empresarial",
    name: "Empresarial",
    docs: "Comprobantes ILIMITADOS",
    monthly: 129.9,
    annual: 1428.9,
    regularMonthly: 162.38,
    description: "Para empresas que venden fuerte en su tienda virtual.",
    badge: "Empresarial",
    popular: false,
    utility: "Tu tienda vende sola y recupera ventas",
    store: "Incluye tienda virtual",
    tagline: "Todo Corporativo más una tienda que vende sola: promociones, cupones y carritos abandonados recuperados.",
    target: "Empresas que quieren vender más en su tienda virtual y recuperar las ventas que se les iban.",
    strategy: "Con un solo carrito recuperado al mes, la diferencia con Corporativo se paga sola.",
    highlights: [
      "Todo lo de Corporativo",
      "Promociones automáticas (2x1, lleva 3 paga 2) y cupones avanzados",
      "Recupera carritos abandonados por WhatsApp o correo",
      "Cuenta del cliente y popup que capta contactos",
      "Portada a tu medida, preventa y analítica de conversión",
      "10 usuarios y hasta 5 sedes",
    ],
    modules: ["Promociones", "Carritos", "Cupones", "Analítica", "Multi-sede"],
    usersLabel: "10 usuarios",
    sedesLabel: "5 sedes",
  },
  {
    id: "plan-empresarial-plus",
    name: "Empresarial Plus",
    docs: "Comprobantes ILIMITADOS",
    monthly: 179.9,
    annual: 1978.9,
    regularMonthly: 224.88,
    description: "Todo incluido para captar, fidelizar y vender más.",
    badge: "Todo incluido",
    popular: false,
    utility: "Captar, fidelizar y vender más",
    store: "Incluye tienda virtual",
    tagline: "Todo Empresarial más fidelización y venta a empresas: precios B2B, puntos y gift cards.",
    target: "Empresas que venden a mayoristas o contratistas y quieren clientes que vuelvan.",
    strategy: "El plan completo: fidelización, B2B, pago con tarjeta y producción.",
    highlights: [
      "Todo lo de Empresarial",
      "Precios B2B por cliente mayorista o contratista",
      "Puntos de fidelidad, gift cards y compras recurrentes",
      "Devoluciones y cambios, idiomas y monedas, productos digitales",
      "Pago con tarjeta en tu tienda y módulo de producción",
      "Usuarios y sedes ilimitados",
    ],
    modules: ["B2B", "Fidelización", "Gift cards", "Producción", "Multi-sede"],
    usersLabel: "Ilimitados",
    sedesLabel: "Ilimitadas",
  },
];

/** Los 5 planes en orden de precio. */
export const PRICING_TODOS_LOS_PLANES: PricingBasePlan[] = [
  ...PRICING_BASE_PLANS,
  ...PRICING_PLANES_EMPRESARIALES,
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
  // Los planes "… ANUAL" son el mismo plan cobrado al año: se lee el mensual.
  if (n.includes("anual")) return null;
  if (n.includes("emprendedor")) return "plan-emprendedor";
  if (n.includes("negocio")) return "plan-negocio";
  if (n.includes("corporativo")) return "plan-corporativo";
  if (n.includes("empresarial plus")) return "plan-empresarial-plus";
  if (n.includes("empresarial")) return "plan-empresarial";
  return null;
};

const formatDocs = (maxComprobantes: number | null): string =>
  maxComprobantes == null || maxComprobantes <= 0
    ? "Comprobantes ILIMITADOS"
    : `${maxComprobantes} comprobantes`;

const formatUsers = (limiteUsuarios: number | null): string =>
  limiteUsuarios == null || limiteUsuarios <= 0 ? "Ilimitados" : `${limiteUsuarios} ${limiteUsuarios === 1 ? "usuario" : "usuarios"}`;

const formatSedes = (maxSedes: number | null): string =>
  maxSedes == null || maxSedes <= 0 ? "Ilimitadas" : `${maxSedes} ${maxSedes === 1 ? "sede" : "sedes"}`;

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

    // Nota: no derivamos el precio del `costo` remoto porque el backend lo
    // devuelve de forma inconsistente (unos planes traen el valor mensual y
    // otros el anual), lo que producía precios como "S/ 399.00 /mes" y un
    // anual mal calculado (× 10). Los precios curados en PRICING_BASE_PLANS
    // son la fuente de verdad; el merge solo actualiza metadatos del plan.
    return {
      ...base,
      // Emprendedor tiene tope local de 300; la API aún lo reporta como ilimitado.
      docs: base.id === "plan-emprendedor" ? base.docs : formatDocs(remote.maxComprobantes),
      description: remote.descripcion ?? base.description,
      usersLabel: formatUsers(remote.limiteUsuarios),
      sedesLabel: formatSedes(remote.maxSedes),
      store: remote.tieneTienda ? "Incluye tienda virtual" : base.store,
      features: remote.features,
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

// Aviso de alza: los planes publicados valen hasta fin de 2026. Un solo texto para la web y los brochures.
export const AVISO_ALZA_PRECIOS = {
  titulo: "Los precios suben el 1 de enero de 2027",
  texto: "Los precios publicados valen hasta el 31 de diciembre de 2026. Contrata antes y aprovecha la tarifa actual.",
  // Medianoche de Lima (UTC-5): desde aquí ya rige el precio nuevo.
  desde: "2027-01-01T00:00:00-05:00",
};

// IA de Ventas como complemento para quien ya tiene un plan Krezka (precios sin IGV).
export const IA_VENTAS_ADDON_TEXTO =
  "La IA de Ventas es un complemento: no viene dentro de ningún plan, se suma a cualquiera y se ajusta a tus leads. Subes o bajas de escala cuando quieras.";

// Periodos de pago de los planes del sistema. Para cambiar un descuento, edítalo aquí.
// `descuento` se aplica sobre el precio mensual × meses; el anual usa el `annual`
// curado de cada plan (11 meses ≈ 8 % menos).
export type PeriodoClave = "mensual" | "trimestral" | "semestral" | "anual";

export const PERIODOS: Record<
  PeriodoClave,
  { etiqueta: string; meses: number; descuento: number | "anual-del-plan"; cada: string }
> = {
  mensual: { etiqueta: "Mensual", meses: 1, descuento: 0, cada: "cada mes" },
  trimestral: { etiqueta: "Trimestral", meses: 3, descuento: 0.05, cada: "cada 3 meses" },
  semestral: { etiqueta: "Semestral", meses: 6, descuento: 0.07, cada: "cada 6 meses" },
  anual: { etiqueta: "Anual", meses: 12, descuento: "anual-del-plan", cada: "al año" },
};

export const PERIODO_CLAVES = Object.keys(PERIODOS) as PeriodoClave[];

// toPrecision(12) quita el error binario (36.575 * 100 = 3657.4999…) antes de redondear.
const redondear2 = (n: number): number => Math.round(Number((n * 100).toPrecision(12))) / 100;

/** Lo que se paga por el periodo completo (sin IGV), redondeado a 2 decimales. */
export const totalPeriodo = (plan: PricingBasePlan, clave: PeriodoClave): number => {
  const { meses, descuento } = PERIODOS[clave];
  if (descuento === "anual-del-plan") return plan.annual;
  return redondear2(plan.monthly * meses * (1 - descuento));
};

/** Equivalente mensual del periodo (sin IGV). */
export const mensualPeriodo = (plan: PricingBasePlan, clave: PeriodoClave): number =>
  redondear2(totalPeriodo(plan, clave) / PERIODOS[clave].meses);

/** Descuento del periodo frente a pagar mes a mes, en % entero (para el badge del tab). */
export const descuentoPeriodoPct = (plan: PricingBasePlan, clave: PeriodoClave): number =>
  Math.round((1 - totalPeriodo(plan, clave) / (plan.monthly * PERIODOS[clave].meses)) * 100);
