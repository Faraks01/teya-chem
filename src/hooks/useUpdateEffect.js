/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

/**
 * @function useUpdateEffect
 * @extends {useEffect}
 */
export const useUpdateEffect = (...args) => {
  const firstUpdate = useRef(true);

  return useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    const effectReturnValue = args[0]();
    if (effectReturnValue) return effectReturnValue;
  }, args[1]);
};
