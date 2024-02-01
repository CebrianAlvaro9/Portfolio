import { useState } from "react";

export const useOpenModal = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {};

  return [openModal, handleModal];
};
