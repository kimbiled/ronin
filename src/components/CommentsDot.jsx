import React, { useCallback, useEffect, useState } from 'react'

export const useDotButton = (emblaApi) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
  
    const onDotButtonClick = useCallback(
      (index) => {
        if (!emblaApi) return;
        emblaApi.scrollTo(index);
      },
      [emblaApi]
    );
  
    const onInit = useCallback((emblaApi) => {
      setScrollSnaps(emblaApi.scrollSnapList());
    }, []);
  
    const onSelect = useCallback((emblaApi) => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);
  
    useEffect(() => {
      if (!emblaApi) return;
  
      onInit(emblaApi);
      onSelect(emblaApi);
      emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);
  
    return {
      selectedIndex,
      scrollSnaps,
      onDotButtonClick,
    };
  };

export const CommentsDot = ({ isSelected, ...restProps }) => {
    return (
      <button
        type="button"
        {...restProps}
        className={`embla__dot ${isSelected ? "embla__dot--selected" : ""}`}
      />
    );
  };
