import { useState } from 'react';

export function useImageModal(initialIndex: number | null = null) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    initialIndex
  );

  const openImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
  };

  return {
    selectedImageIndex,
    openImage,
    closeImage,
    setSelectedImageIndex,
  };
}
