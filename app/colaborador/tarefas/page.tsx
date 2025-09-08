'use client'

import { Select, SelectItem } from "@heroui/react";


export default function Tarefas(){
    return(
        <>
            <div className="h-full w-full flex flex-col space-y-1">
                <div className="w-full h-fit bg-[#ffff] flex items-center p-2 rounded-md shadow-md">                
                    <div className="w-full p-1 flex flex-col">
                        <label className="text-[#993399] font-semibold">Tarefas</label>
                        <input type="text" placeholder="Pesquise pelo titulo da tarefa" className="outline-[#993399]"/>
                    </div>
                    <div className="w-full">
                        <select className="bg-[#993399] w-full p-1 rounded-md">
                            <option value="">concluido</option>
                        </select>
                    </div>
                </div>
                <div className="h-full w-full bg-[#ffff] rounded-md shadow-md"></div>
            </div> 
        </>
    );
}