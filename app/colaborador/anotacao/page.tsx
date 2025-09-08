

export default function Anotacoes(){
    return(
        <>
            <div className="h-full w-full space-y-1">
                <div className="w-full h-fit bg-[#ffff] rounded-md shadow-md flex flex-col p-2">
                    <label className="text-[#993399] font-semibold mb-1">Anotação</label>
                    <textarea name="" id="" placeholder="Faça suas anotações" className="bg-[#e2e2e2] w-full h-full rounded-md"></textarea>
                    <button className="bg-[#993399] px-3 rounded-ms py-1 rounded-md mt-2 w-[80px] ml-auto">Salvar</button>
                </div>
                <div className="h-full w-full bg-[#ffff] rounded-md shadow-md"></div>
            </div>
        </>
    );
}