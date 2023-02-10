import { supabase } from "@/pages/api/supabase";
import { CaixaMapas, CaixaMapa, BotaoMapa, ContainerMapa, Caixa, Titulo, Mapinha } from "@/styles/components/narradora/styleMapa";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../stack/";
import { mapa } from "types/supabase";

export default function Mapas(){
    const stock = useSelector((state: RootState) => state.stock);
    const [campanha, setCampanha] = useState<any>([])
    useEffect(()=>{
        const getCampanha = async () =>{
            const {data: campanhas} = await supabase
            .from("campanhas")
            .select("*")
            .eq("nomeCampanha", stock.campanhaUsuario)

            setCampanha(campanhas)
        }
        getCampanha()
    },[stock])
    const CriaMapas = (value:mapa) =>{
        return(
        <CaixaMapa>
            {value.nome}
            <BotaoMapa onClick={()=>TrocaMapa(value.url)}>
                <ContainerMapa>
                    <Mapinha defaultValue={value.url}/>
                </ContainerMapa>
            </BotaoMapa>
        </CaixaMapa>
        )
    }
    const TrocaMapa = async (url:string) => {
        const { error } = await supabase
        .from("campanhas")
        .update({ mapaAtual: url })
        .eq("nomeCampanha", stock.campanhaUsuario)
        .select();
      
        if (error) {
            console.log("nao deu");
            console.log(error);
        }
    }
    return(
        <Caixa> 
            <Titulo>Mapas da sessão</Titulo>
            <CaixaMapas>
                {campanha[0]?.mapas.map(CriaMapas)}
            </CaixaMapas>
        </Caixa>
    )
}