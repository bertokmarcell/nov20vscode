import type { KARAKTERTYPE } from "../karakter_type/karakter_type";

export default function ({karakter} : {karakter : KARAKTERTYPE}){
    return (
        <div>
            {karakter.name} — {karakter.lane} ({karakter.type}) —{" "}
            {karakter.respawning ? "Respawnol" : "Nem respawnol, a kis huncut"}
        </div>
    );
}