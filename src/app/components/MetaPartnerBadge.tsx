import Image from 'next/image';

type Props = {
  /** 'oscuro': va sobre fondo oscuro, así que el sello (texto oscuro) lleva placa blanca. */
  fondo?: 'claro' | 'oscuro';
  className?: string;
  /** Alto del sello en px. */
  alto?: number;
};

// Proporción del arte recortado (342×135).
const ANCHO_POR_ALTO = 342 / 135;

/**
 * Sello oficial "Meta Business Partner". El archivo tiene nombre neutro a
 * propósito: los bloqueadores de anuncios filtraban la ruta con "meta".
 */
export default function MetaPartnerBadge({ fondo = 'claro', className = '', alto = 36 }: Props) {
  const sello = (
    <Image
      src="/assets/sellos/sello-socio.png"
      alt="Meta Business Partner"
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
