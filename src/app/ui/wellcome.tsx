const Wellcome = () => {
    return (
        <div className="mx-auto max-w-screen-xl grid grid-cols-2 text-[#F6F9FE] mt-16 md:mt-32 gap-10">
            <div className="after:border-r after:absolute relative h-full md:col-span-1 col-span-2">
                <h3 className="text-[#F6F9FE] md:text-[30px] text-[24px] text-center  mb-10">FALCONEXT tiene lo necesario para tí , Sistema MYPE aprobado por la SUNAT, sistemas a medida, paginas webs modernas y rápidas , nuestra experiencia conecta , inspira y convierte</h3>
                <div className="text-center border border-dashed w-fit h-fit p-3 rounded mx-auto">
                    <span className="block text-[#707386]">Cofundador</span>
                    <strong>Diego Ortega</strong>
                </div>
            </div>
            <div className="flex justify-center relative col-span-2 md:col-span-1">
                <div className="absolute hidden  md:block bg-[#fff] opacity-[0.4] h-full w-[0.1px] left-20"></div>
                <div className="text-center">
                    <div className="">
                        <label className="text-[50px]" htmlFor="">15 +</label>
                        <p className="text-[#707386]">Proyectos completados</p>
                    </div>
                    <div className="mt-10">
                        <label className="text-[50px]" htmlFor="">15 +</label>
                        <p className="text-[#707386]">Clientes contentos</p>
                    </div>
                    <div className="mt-10">
                        <label className="text-[50px]" htmlFor="">10 +</label>
                        <p className="text-[#707386]">Recomendaciones</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wellcome