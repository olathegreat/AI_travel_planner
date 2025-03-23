import { createContext } from "react";

interface CreateTripContextType {
  tripData: any;
  setTripData: React.Dispatch<React.SetStateAction<any>>;
}

export const CreateTripContext = createContext<CreateTripContextType | null>(null);