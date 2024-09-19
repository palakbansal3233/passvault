import { useEffect, useRef, useState } from "react";
import Icon from "../assets/eye.svg";
import EyeCross from "../assets/eyecross.jpg";

const Manager = () => {
  const [form, setForm] = useState({ site: "", userName: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  const ref = useRef();

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    try {
      passwords = JSON.parse(passwords) || [];
      if (!Array.isArray(passwords)) {
        passwords = [];
      }
    } catch (error) {
      passwords = [];
      throw error;
    }
    setPasswordArray(passwords);
  }, []);

  const showPassword = () => {
    if (ref.current.src.includes(EyeCross)) {
      ref.current.src = Icon;
    } else {
      ref.current.src = EyeCross;
    }
  };

  const savePassword = () => {
    const updatedPasswordArray = [...passwordArray, form];
    setPasswordArray(updatedPasswordArray);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswordArray));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className="mycontainer px-10 py-10">
        <h1 className="text-4xl text-black text-center">Password Vault</h1>
        <p className="text-center">Your very own password manager</p>
        <div className="text-white flex flex-col p-4 gap-8">
          <input
            className="rounded-full border border-purple-900 w-full text-black px-4 py-1"
            type="text"
            name="site"
            placeholder="Enter Website URL"
            value={form.site}
            onChange={handleChange}
          />
          <div className="flex w-full justify-between gap-4">
            <input
              className="rounded-full border border-purple-900 w-full text-black px-4 py-1"
              type="text"
              name="userName"
              placeholder="Enter Username"
              value={form.userName}
              onChange={handleChange}
            />
            <div className="relative">
              <input
                className="rounded-full border border-purple-900 w-full text-black px-4 py-1"
                type="text"
                name="password"
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
              />
              <span className="absolute right-0 top-1" onClick={showPassword}>
                <img
                  ref={ref}
                  src={Icon}
                  alt="eye"
                  width="25px"
                  className="p-1 cursor-pointer"
                />
              </span>
            </div>
          </div>
          <button
            className="flex justify-center items-center text-purple-800 rounded-full bg-purple-200 w-fit px-4 py-2 hover:bg-purple-100"
            onClick={savePassword}
          >
            <lord-icon
              src="https://cdn.lordicon.com/ftndcppj.json"
              trigger="hover"
              colors="primary:#e5d1fa,secondary:#8930e8"
            ></lord-icon>
            Add Password{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
