import { useCallback, useRef, useState } from "react";
import { useUpdateEffect } from "../../../hooks";

/**
 * @param {number} slidesLength - Slides` array length
 * @param {number} [slideSwitchingDelay]
 * */
export const useSlideOrder = ({ slidesLength, slideSwitchingDelay }) => {
  const [activeSlideIndex, _setActiveSlideIndex] = useState(0);
  const timerId = useRef(null);

  const setActiveSlideIndex = useCallback(
    (index) => {
      _setActiveSlideIndex(Math.min(Math.max(index, 0), slidesLength - 1));
    },
    [slidesLength],
  );

  const clearTimer = () => {
    if (timerId !== null) clearTimeout(timerId.current);
  };

  const runSlideAutoSwitch = () => {
    clearTimer();

    timerId.current = setTimeout(() => {
      _setActiveSlideIndex((currentSlideIndex) =>
        currentSlideIndex === slidesLength - 1 ? 0 : currentSlideIndex + 1,
      );
      runSlideAutoSwitch();
    }, slideSwitchingDelay);
  };

  useUpdateEffect(() => {
    if (slideSwitchingDelay !== undefined) {
      runSlideAutoSwitch();
    } else {
      /// Removing any effects when delay is undefined
      clearTimer();
    }

    return () => {
      clearTimer();
    };
  }, [slideSwitchingDelay]);

  return {
    activeSlideIndex,
    setActiveSlideIndex,
  };
};
