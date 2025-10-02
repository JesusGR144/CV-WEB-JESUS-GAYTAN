function View({ title, cont}) {
  return (
    <div className="w-10/12 shadow  hover:shadow-cyan-500 hover:shadow-md transition-all duration-500 ease-in-out infinite rounded-3xl p-6 hero hero-content text-center max-w-10/12 flex  max-md:flex-col justify-between items-center gap-10 hover:text-shadow-lg/60 hover:text-shadow-cyan-400/40">
      <h1 className="text-4xl font-bold w-10/12 underline decoration-cyan-700">
        {title}
      </h1>

      <div className="p-0 md:p-6 w-full max-h-100 overflow-auto">
        {cont}
      </div>
    </div>
  );
}

export default View;
