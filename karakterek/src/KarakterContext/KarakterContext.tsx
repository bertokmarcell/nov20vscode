import { createContext, use, useEffect, useState, type ReactNode } from "react";
import type { KARAKTERTYPE } from "../karakter_type/karakter_type";
import { GetKarakters } from "../service/service";

interface KarakterContextType{
    karakterlist:KARAKTERTYPE[];
    load:boolean,
    hiba:string|null;
}
//load hogy loaded vagy sem, hiba van e vagy sem.
const KarakterContext=createContext<KARAKTERTYPE | undefined>(undefined);
export function KarakterProvide({children}:{children:ReactNode}){
    const [karakterlist,setkarakerlist] = useState<KARAKTERTYPE[]>([]);
    const [load,setload] = useState<boolean>(true);
    const [hiba,sethiba] = useState<string|null>(null);
    useEffect(()=>{
        GetKarakters().then(data=>{setkarakerlist(data); sethiba(null)})
        .catch(()=>{sethiba('nincs elérhetőség')})
        .finally(()=>setload(false))
    })
}