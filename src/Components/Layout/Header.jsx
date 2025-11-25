import { useState } from "react";
import Logo from "../../assets/Image/Logo.png";
import { Dropdown } from "rsuite";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white shadow-sm sticky top-0 z-50 border-b">
        <div className="flex flex-row items-center justify-between w-full h-full max-w-7xl mx-auto py-3 px-4">
          {/* Logo */}
          <div className="h-full flex items-center">
            <img src={Logo} alt="Logo" className="w-auto h-8" />
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex flex-row items-center gap-6 font-bold">
            <a className="hover:text-red-500 cursor-pointer">Home</a>
            <a className="hover:text-red-500 cursor-pointer">Prices</a>
            <a className="hover:text-red-500 cursor-pointer">About</a>
            <a className="hover:text-red-500 cursor-pointer">Contact</a>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex flex-row items-center gap-4">
            <Dropdown title="EN">
              <div className="mt-2 bg-white border rounded-md shadow-sm fixed">
                <Dropdown.Item className="px-4 py-2 border-b">DE</Dropdown.Item>
                <Dropdown.Item className="px-4 py-2">EN</Dropdown.Item>
              </div>
            </Dropdown>

            <button className="px-3 py-1.5 rounded-lg text-white font-bold bg-red-500 hover:bg-red-500/90 transition">
              1 month free trial
            </button>

            <button className="px-3">Login</button>
          </div>

          {/* MOBILE Menu Button */}
          <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
            {open ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {open && (
          <div className="md:hidden bg-white border-t shadow-sm">
            <div className="flex flex-col text-center py-4 gap-4 font-bold">
              <a href="/" className="hover:text-red-500 cursor-pointer">
                Home
              </a>
              <a className="hover:text-red-500 cursor-pointer">Prices</a>
              <a className="hover:text-red-500 cursor-pointer">About</a>
              <a className="hover:text-red-500 cursor-pointer">Contact</a>
            </div>

            <div className="flex flex-col items-center gap-3 pb-4">
              <Dropdown title="EN">
                <div className="mt-2 bg-white border rounded-md shadow-sm fixed">
                  <Dropdown.Item className="px-4 py-2 border-b">
                    DE
                  </Dropdown.Item>
                  <Dropdown.Item className="px-4 py-2">EN</Dropdown.Item>
                </div>
              </Dropdown>

              <button className="px-4 py-2 w-60 rounded-lg text-white font-bold bg-red-500 hover:bg-red-500/90 transition">
                1 month free trial
              </button>

              <button className="">Login</button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
