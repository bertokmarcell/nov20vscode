import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { KARAKTERTYPE } from "../karakter_type/karakter_type";
import { GetKarakters } from "../service/service";

interface KarakterContextType {
  karakterlist: KARAKTERTYPE[];
  load: boolean;
  hiba: string | null;
}

const KarakterContext = createContext<KarakterContextType | undefined>(undefined);

export function KarakterProvide({ children }: { children: ReactNode }) {
  const [karakterlist, setkarakterlist] = useState<KARAKTERTYPE[]>([]);
  const [load, setload] = useState<boolean>(true);
  const [hiba, sethiba] = useState<string | null>(null);

  useEffect(() => {
    GetKarakters()
      .then((data) => {
        setkarakterlist(data);
        sethiba(null);
      })
      .catch(() => {
        sethiba("Nincs elérhetőség");
      })
      .finally(() => {
        setload(false);
      });
  }, []);

  return (
    <KarakterContext.Provider value={{ karakterlist, load, hiba }}>
      {children}
    </KarakterContext.Provider>
  );
}

export function useKarakterek() {
  const ctx = useContext(KarakterContext);
  if (!ctx) {
    throw new Error("useKarakterek csak KarakterProvide-on belül használható");
  }
  return ctx;
}