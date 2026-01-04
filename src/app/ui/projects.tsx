"use client"

import Image from "next/image";

// Importing assets
import casamiento from '@/app/public/assets/proyecto1.webp'
import embarazo from '@/app/public/assets/proyecto2.webp'
import cumple from '@/app/public/assets/proyecto3.webp'
import graduacion from '@/app/public/assets/proyecto4.webp'
import perrito from '@/app/public/assets/proyecto5.webp'
import bautizo from '@/app/public/assets/proyecto6.webp'
import quinceanos from '@/app/public/assets/proyecto7.webp'

const projectsData = [
    {
        id: 1,
        title: "Bodas y Eventos",
        category: "Celebración",
        image: casamiento,
        size: "large" // spans 2 cols
    },
    {
        id: 2,
        title: "Maternidad",
        category: "Sesión Fotográfica",
        image: embarazo,
        size: "small"
    },
    {
        id: 3,
        title: "Cumpleaños",
        category: "Eventos",
        image: cumple,
        size: "small"
    },
    {
        id: 4,
        title: "Graduaciones",
        category: "Académico",
        image: graduacion,
        size: "tall" // spans 2 rows
    },
    {
        id: 5,
        title: "Mascotas",
        category: "Estudio",
        image: perrito,
        size: "small"
    },
    {
        id: 6,
        title: "Bautizos",
        category: "Religioso",
        image: bautizo,
        size: "small"
    },
    {
        id: 7,
        title: "Quinceaños",
        category: "Fiesta",
        image: quinceanos,
        size: "large"
    }
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="bg-transparent py-16 md:py-24 relative z-10"
        >
            <div className="mx-auto max-w-screen-xl px-4 md:px-6">
                {/* Texto header */}
                <div className="mb-12 text-center md:text-left">
                    <p className="uppercase text-[#B76AE0] text-[14px] md:text-[16px] mb-3 tracking-widest font-bold">HABLAN POR NOSOTROS</p>
                    <h3 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-900 dark:text-white mb-6 transition-colors">
                        Nuestros trabajos
                    </h3>
                    <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-400 transition-colors max-w-2xl">
                        Porque no hay nada mejor que demostrar con hechos los proyectos que hemos realizado. Calidad, detalle y pasión en cada entrega.
                    </p>
                </div>

                {/* Bento Grid Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className={`relative group rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-white/10
                                ${project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                                ${project.size === 'tall' ? 'md:row-span-2' : ''}
                                ${project.size === 'small' ? 'md:col-span-1 md:row-span-1' : ''}
                            `}
                        >
                            <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/0 transition-colors duration-500 z-10" />

                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            />

                            {/* Overlay Info */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-[#B76AE0] text-xs font-bold uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {project.category}
                                </p>
                                <h4 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {project.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;