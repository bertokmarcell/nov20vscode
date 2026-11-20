import { createContext, type ReactNode } from "react";
import type { KARAKTERTYPE } from "../karakter_type/karakter_type";

interface KarakterContextType{
    karakterlist:KARAKTERTYPE[];
    load:boolean,
    hiba:string|null;
}
//load hogy loaded vagy sem, hiba van e vagy sem.
const KarakterContext=createContext<KARAKTERTYPE | undefined>(undefined);
export function KarakterProvide({children}:{children:ReactNode}){
    const []
}