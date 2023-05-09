import React, { useState } from "react";

const useModal = () => {
  const [authModal, setAuthModal] = useState({
    open: false,
    view: "login",
  });

  const onOpen = () => {
    setAuthModal({ ...authModal, open: true });
  };

  const onClose = () => {
    setAuthModal({ ...authModal, open: false });
  };

  const onOpenRegister = () => {
    setAuthModal({ ...authModal, open: true, view: "register" });
  };

  return {
    onClose,
    onOpen,
    onOpenRegister,
    authModal,
  };
};

export default useModal;
