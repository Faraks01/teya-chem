import { useLayoutEffect, useRef } from "react";
import { navigateToAnchor } from "@/utils";
import { PATHS } from "@/constants";

/**
 * @param {string} sectionId - Section ID
 */
export const useQRCodeTransition = (sectionId) => {
  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (!firstUpdate.current) {
      return;
    }

    if (window.location.pathname === PATHS["QR_TRANSITION"]) {
      firstUpdate.current = false;
      navigateToAnchor(sectionId, "instant");
    }
  }, [sectionId]);
};
