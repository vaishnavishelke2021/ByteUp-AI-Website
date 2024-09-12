const PrimaryBtn = ({ btn }) => {
  return (
    <button className="border border-white text-white text-sm uppercase font-Archivo tracking-[1.5px] font-light px-6 py-3 hover:text-black hover:bg-white transition ease-in-out duration-200">
      {btn}
    </button>
  );
};

export default PrimaryBtn;
