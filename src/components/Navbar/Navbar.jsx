import React from "react";
import cls from "./navbar.module.scss";
import Logo from "../../assets/images/Instagram Logo (1).png";
import Search from "./Search/Search";
import NavMenu from "./NavMenu/NavMenu";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import useModal from "@/hooks/useModal";

const Navbar = (props) => {
  const isAuth = false;

  const { authModal, onClose, onOpen, onOpenRegister } = useModal();

  return (
    <div className={cls.navbar}>
      <div className="container">
        <div className={cls.wrap}>
          <img src={Logo} alt="" />
          <Search />

          {isAuth ? (
            <NavMenu />
          ) : (
            <Button onClick={onOpen} variant="solid">
              Войти
            </Button>
          )}
        </div>
      </div>

      {authModal.open === true && (
        <div className={cls.modal}>
          <div className={cls.box}>
            {authModal.view === "login" && <h1>Login</h1>}
            {authModal.view === "register" && <h1>Register</h1>}

            <button onClick={onClose}>Close</button>
            <button onClick={onOpenRegister}>Регистрация</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
