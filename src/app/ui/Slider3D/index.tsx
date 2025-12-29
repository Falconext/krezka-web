import React from 'react';

import casamiento from '@/app/public/assets/proyecto1.webp'
import embarazo from '@/app/public/assets/proyecto1.webp'
import cumple from '@/app/public/assets/proyecto1.webp'
import graduacion from '@/app/public/assets/proyecto1.webp'
import perrito from '@/app/public/assets/proyecto1.webp'
import bautizo from '@/app/public/assets/proyecto1.webp'
import quinceanos from '@/app/public/assets/proyecto1.webp'
import compromiso from '@/app/public/assets/proyecto1.webp'
import aniversario from '@/app/public/assets/proyecto1.webp'
import comunidad from '@/app/public/assets/proyecto1.webp'
import festivo from '@/app/public/assets/proyecto1.webp'
import despedidaSoltera from '@/app/public/assets/proyecto1.webp'

import Image from 'next/image';

const ImageCarousel3D = () => {
    return (
        <>
            <style>{`
     
        .framer-rBUfK .framer-ux3tlg-container {
          flex: none;
          height: 600px;
          position: relative;
          width: 100%;
        }
        .framer-SrCqw.framer-n7oh7a {
          align-content: center;
          align-items: center;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 10px;
          height: 500px;
          justify-content: center;
          padding: 0;
          position: relative;
          width: 1200px;
        }
        .framer-SrCqw .framer-18sfqik {
          align-content: center;
          align-items: center;
          display: flex;
          flex: 1 0 0px;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 10px;
          height: min-content;
          justify-content: center;
          overflow: visible;
          padding: 0;
          position: relative;
          transform-style: preserve-3d;
          width: 1px;
          animation: rotate-carousel 60s linear infinite; 
        }
        .framer-SrCqw .framer-1j38ets {
          align-content: center;
          align-items: center;
          display: flex;
          flex: 1 0 0px;
          flex-direction: column;
          flex-wrap: nowrap;
          gap: 10px;
          height: min-content;
          justify-content: center;
          overflow: visible;
          padding: 0;
          position: relative;
          transform-style: preserve-3d;
          width: 1px;
        }
        .framer-SrCqw .framer-jqyyw2 {
          align-content: center;
          align-items: center;
          display: flex;
          flex: none;
          flex-direction: row;
          flex-wrap: nowrap;
          height: 400px;
          justify-content: space-between;
          overflow: visible;
          padding: 0;
          position: relative;
          transform-style: preserve-3d;
          width: 1400px;
        }
        .framer-SrCqw .framer-61s6s8,
        .framer-SrCqw .framer-136ky85,
        .framer-SrCqw .framer-1c2486d,
        .framer-SrCqw .framer-1uqc4oy,
        .framer-SrCqw .framer-1hof8fa,
        .framer-SrCqw .framer-1uavnh5,
        .framer-SrCqw .framer-ozhdks,
        .framer-SrCqw .framer-gon2kz,
        .framer-SrCqw .framer-nn8b03,
        .framer-SrCqw .framer-141787o,
        .framer-SrCqw .framer-20ak6t,
        .framer-SrCqw .framer-198rc70 {
          backface-visibility: hidden;
          flex: none;
          height: 400px;
          overflow: hidden;
          position: relative;
          width: 280px;
          will-change: var(--framer-will-change-override, transform);
        }
        .framer-SrCqw .framer-ybx3e6,
        .framer-SrCqw .framer-bfxn5x,
        .framer-SrCqw .framer-80t3x0,
        .framer-SrCqw .framer-ce9hg6,
        .framer-SrCqw .framer-f1eujk {
          align-content: center;
          align-items: center;
          display: flex;
          flex: none;
          flex-direction: row;
          flex-wrap: nowrap;
          height: 400px;
          justify-content: space-between;
          left: calc(50.00000000000002% - 1400px / 2);
          overflow: visible;
          padding: 0;
          position: absolute;
          top: calc(50.00000000000002% - 400px / 2);
          transform-style: preserve-3d;
          width: 1400px;
          z-index: 1;
        }
        .mask-container {
            /* Safari iOS necesita prefijo para mask-image */
            -webkit-mask-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 19.7213%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);
            mask-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 19.7213%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);
            opacity: 1;
            padding: 120px;
            overflow: hidden
        }
        .framer-SrCqw img {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
             @keyframes rotate-carousel {
          from {
            transform: perspective(600px) rotateY(0deg);
          }
          to {
            transform: perspective(600px) rotateY(360deg);
          }
        }
      `}</style>

            <div className='mask-container'>
                <div className="framer-ux3tlg-container" style={{ opacity: 1 }}>
                    <div
                        className="framer-SrCqw framer-n7oh7a framer-v-n7oh7a"
                        data-framer-name="Variant 1"
                        style={{ height: '100%', width: '100%', opacity: 1 }}
                    >
                        <div
                            className="framer-18sfqik"
                            data-framer-name="Slider"
                            style={{ opacity: 1, transform: 'perspective(600px) rotateY(183.21deg)', willChange: 'transform' }}
                        >
                            <div className="framer-1j38ets" data-framer-name="Circle" style={{ opacity: 1 }}>

                                {/* Image 01 */}
                                <div className="framer-jqyyw2" data-framer-name="Image 01" style={{ transform: 'rotateY(90deg)', opacity: 1 }}>
                                    <div className="framer-61s6s8" data-framer-name="Image 07" style={{ borderRadius: '20px', transform: 'rotateY(90deg)', opacity: 1 }}>
                                        <div data-framer-background-image-wrapper="true" style={{ position: 'absolute', borderRadius: 'inherit', inset: '0px' }}>
                                            <Image
                                                decoding="async"
                                                loading='eager'
                                                width="1601"
                                                height="2400"
                                                sizes="280px"
                                                src={casamiento}
                                                alt=""
                                                style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center center', objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="framer-136ky85" data-framer-name="Image 01" style={{ borderRadius: '20px', transform: 'rotateY(-90deg)', opacity: 1 }}>
                                        <div data-framer-background-image-wrapper="true" style={{ position: 'absolute', borderRadius: 'inherit', inset: '0px' }}>
                                            <Image
                                                decoding="async"
                                                loading='eager'
                                                width="1601"
                                                height="2400"
                                                sizes="280px"
                                                src={embarazo}
                                                alt=""
                                                style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center center', objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Image 02 */}
                                <div className="framer-ybx3e6" data-framer-name="Image 02" style={{ transform: 'rotateY(120deg)', opacity: 1 }}>
                                    <div className="framer-1c2486d" data-framer-name="Image 06" style={{ borderRadius: '20px', transform: 'rotateY(90deg)', opacity: 1 }}>
                                        <div data-framer-background-image-wrapper="true" style={{ position: 'absolute', borderRadius: 'inherit', inset: '0px' }}>
                                            <Image
                                                decoding="async"
                                                loading='eager'
                                                width="1601"
                                                height="2400"
                                                sizes="280px"
                                                src={cumple}
                                                alt=""
                                                style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center center', objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="framer-1uqc4oy" data-framer-name="Image 12" style={{ borderRadius: '20px', transform: 'rotateY(-90deg)', opacity: 1 }}>
                                        <div data-framer-background-image-wrapper="true" style={{ position: 'absolute', borderRadius: 'inherit', inset: '0px' }}>
                                            <Image
                                                decoding="async"
                                                loading='eager'
                                                width="1601"
                                                height="2400"
                                                sizes="280px"
                                                src={graduacion}
                                                alt=""
                                                style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center center', objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Image 03 */}
                                <div className="framer-bfxn5x" data-framer-name="Image 03" style={{ transform: 'rotateY(150deg)', opacity: 1 }}>
                                    <div className="framer-1hof8fa" data-framer-name="Image 05" style={{ borderRadius: '20px', transform: 'rotateY(90deg)', opacity: 1 }}>
                                        <div data-framer-background-image-wrapper="true" style={{ position: 'absolute', borderRadius: 'inherit', inset: '0px' }}>
                                            <Image
                                                decoding="async"
                                                loading='eager'
                                                width="1601"
                                                height="2400"
                                                sizes="280px"
                                                src={perrito}
                                                alt=""
                                                style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center center', objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="framer-1uavnh5" data-framer-name="Image 11" style={{ borderRadius: '20px', transform: 'rotateY(-90deg)', opacity: 1 }}>
                                        <div data-framer-background-image-wrapper="true" style={{ position: 'absolute', borderRadius: 'inherit', inset: '0px' }}>
                                            <Image
                                                decoding="async"
                                                loading='eager'
                                                width="1601"
                                                height="2400"
                                                sizes="280px"
                                                src={bautizo}
                                                alt=""
                                                style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center center', objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Image 04 */}
                                <div className="framer-80t3x0" data-framer-name="Image 04" style={{ transform: 'rotateY(180deg)', opacity: 1 }}>
                                    <div className="framer-ozhdks" data-framer-name="Image 04" style={{ borderRadius: '20px', transform: 'rotateY(90deg)', opacity: 1 }}>
                                        <div data-framer-background-image-wrapper="true" style={{ position: 'absolute', borderRadius: 'inherit', inset: '0px' }}>
                                            <Image
                                                decoding="async"
                                                loading='eager'
                                                width="1601"
                                                height="2400"
                                                sizes="280px"
                                                src={festivo}
                                                alt=""
                                                style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center center', objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="framer-gon2kz" data-framer-name="Image 10" style={{ borderRadius: '20px', transform: 'rotateY(-90deg)', opacity: 1 }}>
                                        <div data-framer-background-image-wrapper="true" style={{ position: 'absolute', borderRadius: 'inherit', inset: '0px' }}>
                                            <Image
                                                decoding="async"
                                                loading='eager'
                                                width="1601"
                                                height="2400"
                                                sizes="280px"
                                                src={compromiso}
                                                alt=""
                                                style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center center', objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Image 05 */}
                                <div className="framer-ce9hg6" data-framer-name="Image 05" style={{ transform: 'rotateY(60deg)', opacity: 1 }}>
                                    <div className="framer-nn8b03" data-framer-name="Image 08" style={{ borderRadius: '20px', transform: 'rotateY(90deg)', opacity: 1 }}>
                                        <div data-framer-background-image-wrapper="true" style={{ position: 'absolute', borderRadius: 'inherit', inset: '0px' }}>
                                            <Image
                                                decoding="async"
                                                loading='eager'
                                                width="1601"
                                                height="2400"
                                                sizes="280px"
                                                src={quinceanos}
                                                alt=""
                                                style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center center', objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="framer-141787o" data-framer-name="Image 02" style={{ borderRadius: '20px', transform: 'rotateY(-90deg)', opacity: 1 }}>
                                        <div data-framer-background-image-wrapper="true" style={{ position: 'absolute', borderRadius: 'inherit', inset: '0px' }}>
                                            <Image
                                                decoding="async"
                                                loading='eager'
                                                width="1601"
                                                height="2400"
                                                sizes="280px"
                                                src={aniversario}
                                                alt=""
                                                style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center center', objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Image 06 */}
                                <div className="framer-f1eujk" data-framer-name="Image 06" style={{ transform: 'rotateY(30deg)', opacity: 1 }}>
                                    <div className="framer-20ak6t" data-framer-name="Image 09" style={{ borderRadius: '20px', transform: 'rotateY(90deg)', opacity: 1 }}>
                                        <div data-framer-background-image-wrapper="true" style={{ position: 'absolute', borderRadius: 'inherit', inset: '0px' }}>
                                            <Image
                                                decoding="async"
                                                loading='eager'
                                                width="1601"
                                                height="2400"
                                                sizes="280px"
                                                src={comunidad}
                                                alt=""
                                                style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center center', objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="framer-198rc70" data-framer-name="Image 03" style={{ borderRadius: '20px', transform: 'rotateY(-90deg)', opacity: 1 }}>
                                        <div data-framer-background-image-wrapper="true" style={{ position: 'absolute', borderRadius: 'inherit', inset: '0px' }}>
                                            <Image
                                                decoding="async"
                                                loading='eager'
                                                width="1601"
                                                height="2400"
                                                sizes="280px"
                                                src={despedidaSoltera}
                                                alt=""
                                                style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center center', objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ImageCarousel3D;