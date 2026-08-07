import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";
import { FaRegCalendarAlt } from "react-icons/fa";
import Modal from "../Modal";
import SaveGoalsForm from "../User/SaveGoalsForm";
import { saveGoals } from "../../utils/saveGoals";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Navbar = ({ activeMenu  }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [openGoalsModal, setOpenGoalsModal] = useState(false);
  const { updateUser } = useContext(UserContext);
  
  return (
    <>
    <div className="flex gap-5 bg-white/70 border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-5 sticky top-0 z-30">
      <button
        className="block lg:hidden text-black"
        onClick={() => {
          setOpenSideMenu(!openSideMenu);
        }}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>

      <h2 className="text-lg font-medium text-black"><img src="/logo.png" alt="Logo" className="h-8 w-auto inline" /> Nivesh</h2>

      {openSideMenu && (
        <div className="fixed top-[61px] -ml-4 bg-white">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}

      <button
        className={`card-btn ml-auto`}
        onClick={() => setOpenGoalsModal(true)}
      >
        <FaRegCalendarAlt className="text-base" /> Goals
      </button>
            
    </div>
    <Modal
            isOpen={openGoalsModal}
            onClose={() => setOpenGoalsModal(false)}
            title="Set Goals"
          >
            <SaveGoalsForm
              onSaveGoals={(goals) => {
                saveGoals(goals, updateUser);
                setOpenGoalsModal(false);
              }}
            />
          </Modal>

        </>

  );
};

export default Navbar;
