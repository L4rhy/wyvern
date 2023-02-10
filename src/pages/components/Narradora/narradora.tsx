import { supabase } from "@/pages/api/supabase";
import { Caixa, Titulo, Texto, BotaoEscolha, BotaoOpcao, BotaoIcon, Icon, Input
 } from "@/styles/components/narradora/styleNarradora";
import { useEffect, useState } from "react";
import { personagem } from "types/supabase";
import { Matar, DarDano, DarCura, DarMana, TirarMana, DarArmadura, TirarArmadura } from "@/pages/api/regras";
import { useSelector } from "react-redux";
import { RootState } from "../../../stack/";

export default function Narradora(){
    const stock = useSelector((state: RootState) => state.stock);
    const [npcs, setNpcs] = useState<any>([])
    const [pcs, setPcs] = useState<any>([])
    const [alvo, setAlvo] = useState<any>([])
    const [dano, setDano] = useState(0)
    const [cura, setCura] = useState(0)
    const [manaP, setManaP] = useState(0)
    const [armaduraP, setArmaduraP] = useState(0)
    const [manaN, setManaN] = useState(0)
    const [armaduraN, setArmaduraN] = useState(0)
    useEffect(()=>{
        const getNpcs = async () =>{
            const {data: npcs} = await supabase
            .from("Personagens")
            .select("*")
            .eq("tipo", "NPC")

            setNpcs(npcs)
        }
        const getPcs = async () =>{
            const {data: pcs} = await supabase
            .from("Personagens")
            .select("*")
            .eq("tipo", "PC")
            .eq("aliado", true)

            setPcs(pcs)
        }
        getNpcs()
        getPcs()
    },[])
    const CriaOpcao = (value:personagem) =>{
        return(
            <BotaoOpcao onSelect={()=>Escolhe(value)}>{value.nome}</BotaoOpcao>
        )
    }
    const Escolhe = (alvo:personagem) =>{
        setAlvo(alvo)
        alert("alvo escolhido: "+alvo)
    }
    const Dano = (e:any) =>{
        setDano(e)
    }
    const Cura = (e:any) =>{
        setCura(e)
    }
    const ManaP = (e:any) =>{
        setManaP(e)
    }
    const ManaN = (e:any) =>{
        setManaN(e)
    }
    const ArmaduraP = (e:any) =>{
        setArmaduraP(e)
    }
    const ArmaduraN = (e:any) =>{
        setArmaduraN(e)
    }
    return(
        <Caixa>
            <Titulo>Opções de Narradora</Titulo>
            <Texto>
                Matar
                <BotaoEscolha>
                    <BotaoOpcao>--ESCOLHA--</BotaoOpcao>
                    {pcs?.map(CriaOpcao)}
                    {npcs?.map(CriaOpcao)}
                </BotaoEscolha>
                <BotaoIcon
                onClick={()=>Matar(stock, alvo)}
                >
                    <Icon/>
                </BotaoIcon>
            </Texto>
            <Texto>
                Dano
                <BotaoEscolha>
                    <BotaoOpcao>--ESCOLHA--</BotaoOpcao>
                    {pcs?.map(CriaOpcao)}
                    {npcs?.map(CriaOpcao)}
                </BotaoEscolha>
                <Input
                    value={dano}
                    onChange={(e)=>Dano(e)}
                    placeholder="0"
                />
                <BotaoIcon
                onClick={()=>DarDano(stock, alvo, dano)}
                >
                    <Icon/>
                </BotaoIcon>
            </Texto>
            <Texto>
                Cura
                <BotaoEscolha>
                    <BotaoOpcao>--ESCOLHA--</BotaoOpcao>
                    {pcs?.map(CriaOpcao)}
                    {npcs?.map(CriaOpcao)}
                </BotaoEscolha>
                <Input
                    value={cura}
                    onChange={(e)=>Cura(e)}
                    placeholder="0"
                />
                <BotaoIcon
                onClick={()=>DarCura(stock, alvo, cura)}
                >
                    <Icon/>
                </BotaoIcon>
            </Texto>
            <Texto>
                Dar Mana
                <BotaoEscolha>
                    <BotaoOpcao>--ESCOLHA--</BotaoOpcao>
                    {pcs?.map(CriaOpcao)}
                    {npcs?.map(CriaOpcao)}
                </BotaoEscolha>
                <Input
                    value={manaP}
                    onChange={(e)=>ManaP(e)}
                    placeholder="0"
                />
                <BotaoIcon
                onClick={()=>DarMana(stock, alvo, manaP)}
                >
                    <Icon/>
                </BotaoIcon>
            </Texto>
            <Texto>
                Tirar Mana
                <BotaoEscolha>
                    <BotaoOpcao>--ESCOLHA--</BotaoOpcao>
                    {pcs?.map(CriaOpcao)}
                    {npcs?.map(CriaOpcao)}
                </BotaoEscolha>
                <Input
                    value={manaN}
                    onChange={(e)=>ManaN(e)}
                    placeholder="0"
                />
                <BotaoIcon
                onClick={()=>TirarMana(stock, alvo, manaN)}
                >
                    <Icon/>
                </BotaoIcon>
            </Texto>
            <Texto>
                Dar Armadura
                <BotaoEscolha>
                    <BotaoOpcao>--ESCOLHA--</BotaoOpcao>
                    {pcs?.map(CriaOpcao)}
                    {npcs?.map(CriaOpcao)}
                </BotaoEscolha>
                <Input
                    value={armaduraP}
                    onChange={(e)=>ArmaduraP(e)}
                    placeholder="0"
                />
                <BotaoIcon
                onClick={()=>DarArmadura(stock, alvo, armaduraP)}
                >
                    <Icon/>
                </BotaoIcon>
            </Texto>
            <Texto>
                Tirar Armadura
                <BotaoEscolha>
                    <BotaoOpcao>--ESCOLHA--</BotaoOpcao>
                    {pcs?.map(CriaOpcao)}
                    {npcs?.map(CriaOpcao)}
                </BotaoEscolha>
                <Input
                    value={armaduraN}
                    onChange={(e)=>ArmaduraN(e)}
                    placeholder="0"
                />
                <BotaoIcon
                onClick={()=>TirarArmadura(stock, alvo, armaduraN)}
                >
                    <Icon/>
                </BotaoIcon>
            </Texto>
        </Caixa>
    )
}