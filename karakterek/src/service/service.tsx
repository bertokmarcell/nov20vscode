import type { KARAKTERTYPE } from "../karakter_type/karakter_type"

const URL = "http://127.0.0.1:8000/api/characters"
export function GetKarakters(){
return fetch(URL).then((response)=>{if(!response.ok){throw new Error("does not worky")}return response.json()as Promise<KARAKTERTYPE[]>})}



