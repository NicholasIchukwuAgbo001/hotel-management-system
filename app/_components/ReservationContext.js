"use client";

import { createContext, useContext, useState } from "react";

// Initial state: no date selected
const initialState = { from: undefined, to: undefined };

// Create context
const ReservationContext = createContext();

// Provider component
function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);

  // Reset selected dates
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

// Hook to use the context
function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("useReservation must be used within a ReservationProvider");
  return context;
}

export { ReservationProvider, useReservation };
