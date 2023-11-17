"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import useCurrentUser from "@/app/hooks/useCurrentUser";
interface value {
  data: null;
  refreshData: () => void;
}

const DataContext = createContext<value | undefined>(undefined);

export const DataProvider = ({ children }: any) => {

  const {data,refreshData} =useCurrentUser();

  return (
    <DataContext.Provider value={{ data, refreshData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
