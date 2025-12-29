import { Icon } from "@iconify/react/dist/iconify.js";

const WeTools = () => {
    // Forced Dark / Glassmorphism Mode
    return (
        <section
            className="bg-transparent py-16 md:py-24"
        >
            <div className="mx-auto max-w-screen-xl px-4 md:px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                <div className="md:col-span-5 space-y-6">
                    <p className="uppercase text-[#B76AE0] text-[14px] md:text-[16px] tracking-[0.25em]">
                        SUPERPODERES
                    </p>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white"
                    >
                        Nuestras herramientas
                        <br /> para la excelencia.
                    </h2>
                    <p
                        className="text-sm md:text-base max-w-md text-gray-400"
                    >
                        Estas son las tecnologías que usamos día a día para diseñar, construir y mantener sistemas
                        modernos, rápidos y confiables para tu negocio.
                    </p>
                </div>

                <div className="md:col-span-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                        {[
                            { name: "Figma", desc: "UI/UX y prototipado rápido.", icon: "devicon:figma", color: "#fb923c" },
                            { name: "VS Code", desc: "Código limpio y escalable.", icon: "logos:visual-studio-code", color: null },
                            { name: "PostgreSQL", desc: "Base de datos robusta.", icon: "devicon:postgresql", color: "#38bdf8" },
                            { name: "React", desc: "Interfaces rápidas.", icon: "skill-icons:react-dark", color: null },
                            { name: "Notion", desc: "Planificación y docs.", icon: "devicon:notion", color: "#e5e5e5" },
                            { name: "Insomnia", desc: "Pruebas de APIs.", icon: "devicon:insomnia", color: "#6366f1" },
                            { name: "Canva", desc: "Piezas gráficas.", icon: "devicon:canva", color: "#f97316" },
                            { name: "ChatGPT", desc: "Acelera ideas.", icon: "hugeicons:chat-gpt", color: "#22c55e" }
                        ].map((tool, idx) => (
                            <div
                                key={idx}
                                className="rounded-3xl border px-4 py-5 flex flex-col gap-3 bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
                            >
                                <div className="inline-flex items-center gap-3">
                                    <div className="rounded-2xl bg-black/40 p-2 border border-white/5">
                                        <Icon icon={tool.icon} width={22} height={22} color={tool.color || undefined} />
                                    </div>
                                </div>
                                <div className="mt-1 space-y-1">
                                    <p className="text-sm font-semibold text-white">{tool.name}</p>
                                    <p className="text-xs text-gray-500">{tool.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default WeTools;