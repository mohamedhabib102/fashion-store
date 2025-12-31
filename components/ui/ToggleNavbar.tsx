'use client';


interface ToggleNavbar {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}


const ToggleNavbar: React.FC<ToggleNavbar> = ({ toggle, setToggle }) => {


  const handelToggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <button id="toggle-btn" onClick={handelToggle} className="relative w-10 h-8 cursor-pointer">
        <span className={`absolute  transition-all left-0 h-[2.5px]  w-full bg-main-color top-0`}></span>
        <span className={`absolute  transition-all left-0 h-[2.5px]  bg-main-color top-2.5  ${toggle ? "w-full" : "w-[75%]"}`}></span>
        <span className={`absolute  transition-all left-0 h-[2.5px]  bg-main-color top-5 ${toggle ? "w-full" : "w-[45%]"}`}></span>
      </button>
    </>
  );
}
export default ToggleNavbar;
