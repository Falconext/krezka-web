"use client"

import Image from "next/image";
import proyect1 from '@/app/public/assets/project1.png'
import proyect2 from '@/app/public/assets/project2.png'
import proyect3 from '@/app/public/assets/project3.png'
import proyect4 from '@/app/public/assets/project4.png'

const Projects = () => {
    // Forced Dark / Glassmorphism Mode
    return (
        <section
            id="projects"
            className="bg-transparent py-16 md:py-24"
        >
            <div className="mx-auto max-w-screen-xl px-4 md:px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-start text-white">
                {/* Texto izquierda */}
                <div className="md:col-span-5">
                    <p className="uppercase text-[#B76AE0] text-[14px] md:text-[16px] mb-3 tracking-widest">HABLAN POR NOSOTROS</p>
                    <h3 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-900 dark:text-white mb-6 transition-colors">
                        Nuestros trabajos
                    </h3>
                    <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-400 transition-colors">
                        Porque no hay nada mejor que demostrar con hechos los proyectos que hemos realizado.
                    </p>
                </div>

                {/* Grid derecha */}
                <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        { img: proyect1, title: "Sistema MYPE - Facturación", tags: ["SaaS", "Template"] },
                        { img: proyect2, title: "Pamolsa Web", tags: ["SaaS", "Ecommerce"] },
                        { img: proyect3, title: "Injoyplan", tags: ["Informativa", "Web"] },
                        { img: proyect4, title: "Suizasoft - Sistema Clínico", tags: ["SaaS", "Template"] }
                    ].map((proj, idx) => (
                        <div key={idx} className="rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md group hover:border-gray-300 dark:hover:border-white/20 transition-all shadow-sm dark:shadow-none">
                            <div className="h-56 overflow-hidden">
                                <Image
                                    src={proj.img}
                                    alt={proj.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-5">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {proj.tags.map(tag => (
                                        <span key={tag} className="bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-200 dark:border-white/5 backdrop-blur-sm transition-colors">{tag}</span>
                                    ))}
                                </div>
                                <h5 className="text-base md:text-lg font-medium text-gray-900 dark:text-white transition-colors">{proj.title}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;