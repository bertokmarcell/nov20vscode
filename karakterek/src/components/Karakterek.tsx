import { useKarakterek } from "../KarakterContext/KarakterContext";
import Karakter from "./Karakter";

export default function Karakterek() {
  const { karakterlist,} = useKarakterek();
  return (
    <div>
      <h2>Karakterek ({karakterlist.length})</h2>
      {karakterlist.map((karakter) => (
        <Karakter key={karakter.id} karakter={karakter} />
      ))}
    </div>
  );
}