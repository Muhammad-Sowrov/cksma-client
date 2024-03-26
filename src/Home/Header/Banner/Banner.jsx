const Banner = () => {
  return (
    <div className="min-h-[80vh]">
      <div className="fixed grid mt-20 items-center justify-center grid-cols-2 max-w-7xl">
        <div className="border  px-1 md:px-5 flex flex-col gap-1 md:gap-5 items-cente justify-center">
          <h1 className="text-sm md:text-xl lg:text-3xl font-bold">
            Chakpara Khanbari Salafiya Madrasha
          </h1>
          <p className="text-xs">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            cum suscipit laborum exercitationem. Repellendus, beatae?
          </p>
          <button className="text-left text-xs text-white w-24 px-2 py-1 border border-slate-950 rounded-md bg-sky-500/100 col ">
            Donate Now!
          </button>
        </div>
        <div className="px-1 md:px-5">
          <img
            className="w-full object-cover rounded-lg"
            src="https://i.ibb.co/FqCcGTP/slider1-copy-3209x2407.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
