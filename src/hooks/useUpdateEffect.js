import { useEffect, useRef } from "react";

/**
 * @function useUpdateEffect
 * @extends {useEffect}
 */
export const useUpdateEffect = (effect, deps) => {
  const firstUpdate = useRef(true);

  return useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    const effectReturnValue = effect();
    if (effectReturnValue) return effectReturnValue;
  }, deps);
};
