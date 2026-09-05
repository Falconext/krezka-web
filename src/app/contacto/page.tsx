'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// La página de contacto ahora vive como sección del landing (#contacto).
export default function ContactoPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/#contacto');
  }, [router]);
  return null;
}
