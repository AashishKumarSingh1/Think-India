export default function BlinkingSkeletonSwiper() {
  return (
    <>
      <div>
        <h2
          className="font-semibold font-mono border-l-4 text-fuchsia-50 border-sky-500 antialiased non-italic tracking-wide p-4 mt-7 ml-12 text-xl md:text-3xl"
          style={{ zIndex: "0", pointerEvents: "auto" }}
          data-aos="fade-right"
        >
          <span
            className="cursor-pointer hover:text-sky-500 pointer-events-auto"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Updates
          </span>
        </h2>
        <div
          className="flex m-auto animate-pulse bg-slate-400 w-[80vw] h-[50vh] basis-1/2 flex-wrap justify-center justify-items-center justify-self-auto content-center items-center place-content-centre md:w-1/2 md:h-[50vh] mt-7  bg-gradient-to-r from-blue-500 via-purple-500 via-yellow-500 via-red-500 via-green-500 to-pink-500  animate-gradient-x rounded-2xl border-rose-500 hover:scale-105"
          data-aos="fade-right"
        >
          <h2
            className="font-bold text-3xl text-gradient-to-r from-blue-500 via-purple-500 via-yellow-500 via-red-500 via-green-500 to-pink-500  animate-gradient-x flex-nowrap overflow-hidden p-4 text-center "
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Updating Soon.....
          </h2>
        </div>
      </div>
    </>
  );
}
