function Collapse({ proyecto, info, link, elementos }) {
  return (
    <div className="flex w-full justify-around">
      <div className="collapse bg-base-100 border-base-300 border w-8/12">
        <input type="checkbox" />
        <div className="collapse-title font-semibold">
          <p>{proyecto}</p>
        </div>
        <div className="collapse-content text-sm flex justify-center items-center flex-col gap-4">
          <p>{info}</p>
        </div>
      </div>

      <div className="icons w-1/6 flex justify-around items-center max-md:flex-col">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <i class="fa-solid fa-link"></i>
        </a>
        <div className="tooltip tooltip-left flex flex-wrap">
          <i className="fa-solid fa-circle-info text-xl"></i>

          <div className="tooltip-content flex flex-wrap gap-2 bg-base-200 p-2 rounded shadow z-50 max-w-[200px]">
            {elementos}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collapse;
