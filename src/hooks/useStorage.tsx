import { ProductProps } from "@/utils";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [
  ProductProps[],
  Dispatch<SetStateAction<ProductProps[]>>
];

export function useStorage<T>(key: '@shopping-mori' | '@track-code', initialState: T): Response<T> {
  const [state, setState] = useState<any>(() => {
    if (typeof window === "undefined") return;

    const storageValue = localStorage.getItem(key);

    if (storageValue && initialState === null) {
      return JSON.parse(storageValue);
    };

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state])

  return [state, setState];
}