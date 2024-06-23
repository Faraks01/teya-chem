import { useLayoutEffect, useRef } from "react";
import { navigateToAnchor } from "@/utils";

/**
 * @param {string} sectionId - Section ID
 */
export const useQRCodeTransition = (sectionId) => {
  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (!firstUpdate.current) {
      return;
    }

    firstUpdate.current = false;
    navigateToAnchor(sectionId, "instant");
  }, []);
};
