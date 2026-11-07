import Image from 'next/image';

type Props = {
  /** 'oscuro': va sobre fondo oscuro, así que el sello (texto negro) lleva placa blanca. */
  fondo?: 'claro' | 'oscuro';
  className?: string;
  /** Alto del sello en px. */
  alto?: number;
};

// Proporción del arte (2000×540).
const ANCHO_POR_ALTO = 2000 / 540;

/**
 * Sello "TikTok Shop Partner". El archivo tiene nombre neutro a propósito, igual
 * que el de Meta: los bloqueadores de anuncios filtran rutas con el nombre de la marca.
 */
export default function TikTokPartnerBadge({ fondo = 'claro', className = '', alto = 36 }: Props) {
  const sello = (
    <Image
      src="/assets/sellos/sello-socio-tt.png"
      alt="TikTok Shop Partner"
      // El optimizador de Next se queda colgado al convertir este PNG a WebP.
      unoptimized
      width={Math.round(alto * ANCHO_POR_ALTO)}
      height={alto}
      style={{ height: alto, width: 'auto' }}
    />
  );

  if (fondo === 'oscuro') {
    return (
      <span className={`inline-flex items-center rounded-xl bg-white px-3 py-1.5 shadow-lg shadow-black/20 ${className}`}>
        {sello}
      </span>
    );
  }
  return <span className={`inline-flex items-center ${className}`}>{sello}</span>;
}
