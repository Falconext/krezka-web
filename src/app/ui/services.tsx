"use client"
import { Icon } from "@iconify/react/dist/iconify.js";
import { IThemeState, useThemeStore } from "../zustand/theme";

const Services = () => {

    const { theme }: IThemeState = useThemeStore();

    return (
        <div className="md:mb-20 mb-10">
            <div id="service" className='px-5 md:pt-10 pt-0 md:px-0 block md:flex xl:max-w-screen-xl mx-auto md:max-w-screen-md xl:flex-nowrap md:flex-wrap mt-20 xl:mt-40 2xl:mt-10 justify-between items-end relative'>
                <div>
                    <span className={`relative w-fit flex mt-10 md:mt-0 mb-5 items-center border border-solid border-[#f5f5f5] rounded-full pr-4`}><div className={theme === "sun" ? "rounded-full bg-[#FF5758] p-2" : "rounded-full bg-[#222] p-2"}><Icon className='' icon="file-icons:shuriken" width="20" height="20" color={theme === "sun" ? "#fff" : "#fff"} /></div><div className={`ml-2 text-[#222]}`}>Soluciones de impacto</div></span>
                    <h2 className='font-bold w-full xl:text-[70px] text-[35px] md:w-[800px] leading-[45px] md:leading-[60px] md:text-[60px]'>Los servicios que brindamos para crear tu Página web soñada</h2>
                </div>
                <p className='mt-5  text-[21px] text-[#767676] md:text-[20px] md:mt-5 md:w-[430px] xl:w-[600px] w-full'>Descubre nuestras soluciones diseñadas para impulsar tu marca, acelerar tu crecimiento y dejar huella en el mundo digital.</p>
            </div>
            <div className='px-5 md:px-0 grid xl:grid-cols-3 xl:max-w-screen-xl mx-auto mt-14 md:mt-10 gap-5 md:max-w-screen-md md:grid-cols-1'>
            <div className='bg-[#FBF9FF] p-8 rounded-3xl'>
                    <div className={`${theme === "sun" ? "bg-[#D1D5DB]" : "bg-[#222]"} w-fit rounded-full`}>
                        <Icon icon="mdi:web" width="70" height="70" className='mb-5 p-5' color={theme === "sun" ? "#6B7280" : "#fff" } />
                    </div>
                    <h4 className='font-bold text-3xl'>Páginas Web Efectivas</h4>
                    <p className='mt-4 text-[#767676] text-lg'>Convierte más visitantes en clientes potenciales con páginas enfocadas en la acción, el marketing y la generación de leads.</p>
                </div>
                <div className='bg-[#FBF9FF] p-8 rounded-3xl'>
                    <div className={`${theme === "sun" ? "bg-[#D1D5DB]" : "bg-[#222]"} w-fit rounded-full`}>
                        <Icon icon="grommet-icons:system" width="70" height="70" className='mb-5 p-5' color={theme === "sun" ? "#6B7280" : "#fff" } />
                    </div>
                    <h4 className='font-bold text-3xl'>Desarrollo de Software</h4>
                    <p className='mt-4 text-[#767676] text-lg'>Ahorra tiempo y costos optimizando tus procesos internos con sistemas en la nube hechos a tu medida.</p>
                </div>
                <div className='bg-[#FBF9FF] p-8 rounded-3xl'>
                    <div className={`${theme === "sun" ? "bg-[#D1D5DB]" : "bg-[#222]"} w-fit rounded-full`}>
                        <Icon icon="ep:position" width="70" height="70" className='mb-5 p-5' color={theme === "sun" ? "#6B7280" : "#fff" } />
                    </div>
                    <h4 className='font-bold text-3xl'>Posicionamiento web</h4>
                    <p className='mt-4 text-[#767676] text-lg'>Las páginas web que son creadas en nuestra empresa siempre serán las primeras opciones del mercado en GOOGLE.</p>
                </div>
                <div className='bg-[#FBF9FF] p-8 rounded-3xl'>
                    <div className={`${theme === "sun" ? "bg-[#D1D5DB]" : "bg-[#222]"} w-fit rounded-full`}>
                        <Icon icon="simple-icons:hostinger" width="70" height="70" className='mb-5 p-5' color={theme === "sun" ? "#6B7280" : "#fff" } />
                    </div>
                    <h4 className='font-bold text-3xl'>Dominio y Hosting Profesional</h4>
                    <p className='mt-4 text-[#767676] text-lg'>Ofrecemon registros de dominios personalizados y servicios de hosting confiables para sitios web de alto rendimiento.</p>
                </div>
                <div className='bg-[#FBF9FF] p-8 rounded-3xl'>
                    <div className={`${theme === "sun" ? "bg-[#D1D5DB]" : "bg-[#222]"} w-fit rounded-full`}>
                        <Icon icon="fluent:person-support-28-regular" width="70" height="70" className='mb-5 p-5' color={theme === "sun" ? "#6B7280" : "#fff" } />
                    </div>
                    <h4 className='font-bold text-3xl'>Mantenimiento y Soporte Técnico</h4>
                    <p className='mt-4 text-[#767676] text-lg'>Brindamos soporte continuo para actualizar, optimizar y proteger las páginas web y sistemas de software.</p>
                </div>
                <div className='bg-[#FBF9FF] p-8 rounded-3xl'>
                    <div className={`${theme === "sun" ? "bg-[#D1D5DB]" : "bg-[#222]"} w-fit rounded-full`}>
                        <Icon icon="ri:visa-fill" width="70" height="70" className='mb-5 p-5' color={theme === "sun" ? "#6B7280" : "#fff" } />
                    </div>
                    <h4 className='font-bold text-3xl'>E-commerce y Pasarelas de Pago</h4>
                    <p className='mt-4 text-[#767676] text-lg'>Implementamos el comercio electrónico adaptados a negocios de cualquier tamaño. Incluye integración de pasarelas de pago y sistemas de inventario.</p>
                </div>
            </div>
        </div>
    )
}

export default Services;