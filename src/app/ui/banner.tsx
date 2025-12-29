"use client"
import Image from "next/image";
import mainproject from '@/app/public/assets/mainproject.png'
import Link from "next/link";
import { Monitor, SquareStack } from 'lucide-react'

const Banner = () => {

    // Removed theme logic. Forced Dark/Transparent.

    return (
        <div className="" id="home">
            <div
                className="w-full transition-all duration-1000 bg-transparent" // Transparent to show global background
            >
                {/* <div className="opacity-[0] banner relative"></div> */}
                <div
                    className="flex top-0 justify-center items-center xl:pt-[210px] md:pt-[120px] max-w-screen-lg mx-auto text-center">
                    <div className='relative text-center' style={{ transform: `scale(${1})` }} >
                        <div className="pt-[180px] md:pt-0 px-[40px] md:px-0">
                            <p className="bg-white/10 backdrop-blur-md border border-white/10 w-fit rounded-xl mx-auto p-2 px-4 mb-3 justify-center text-center text-white/90">Potencia tu empresa con Facturación Electrónica SUNAT</p>
                        </div>
                        <h1 className="px-5 xl:text-[70px] mt-[0px] md:mt-[0px] mb-5 text-[24px] max-w-screen-xl mx-auto md:text-[54px] md:w-[800px] font-[500] leading-[28px] md:leading-[70px] text-white">
                            Sistema de Facturación y Gestión para tu Negocio
                        </h1>
                        <p className="md:w-[600px] mb-5 max-w-screen-xl px-10 md:px-0 md:text-[18px] mt-6 mx-auto text-[14px] text-gray-300">Emite comprobantes electrónicos ilimitados, controla tu inventario y gestiona tus ventas con el mejor sistema POS del mercado. ¡Prueba Falconext hoy!</p>
                        <div className="flex justify-center gap-4 md:mb-0">
                            <Link target="_blank" href={"https://master.d236b4to2xgsah.amplifyapp.com/"} className='w-fit flex relative md:mt-5 rounded-full px-3 md:px-6 py-3 text-[#fff] bg-[#1c1c1c] hover:bg-[#2c2c2c] border border-white/10 transition-colors'><Monitor className="mr-3" color="#fff" />{`Mirar demo`}</Link>
                            <Link target="_blank" href={"https://master.d236b4to2xgsah.amplifyapp.com/"} className='w-fit flex relative md:mt-5 bg-[#5A0EBB] hover:bg-[#6820C7] text-[#fff] rounded-full px-3 md:px-6 py-3 shadow-[0_0_20px_rgba(90,14,187,0.4)] transition-all'><SquareStack className="mr-3" />Nuestros sistemas</Link>
                        </div>
                    </div>

                </div>
                <div className='block relative mt-10'>
                    <div className="mt-0 md:px-0 px-2.5 overflow-hidden md:overflow-visible text-center mx-auto flex justify-center">
                        <Image src={mainproject} width={500} height={454} className="md:w-8/12 w-fit border-[#1f2937]/50 relative rounded-3xl border px-6 pt-6 pb-6 object-cover h-full bg-white/5 backdrop-blur-sm" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;