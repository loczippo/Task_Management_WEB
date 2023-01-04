
function sliderBarSecond() {
  return (
    <div className='Sidebar_wrapper h-full'>
        <section className="overflow-hidden flex h-full flex-col items-center justify-between bg-red-500 text-white w-60">
            <div className="sliderbar_header relative flex flex-col bg-amber-500 w-full h-[88px]">
                SLIDERBAR_HEADER
            </div>
            <div className="sliderbar_header  flex flex-col bg-pink-500 w-full h-full">
                SLIDERBAR_BODY
            </div>
            <div className="sliderbar_header  flex flex-col w-full h-full">
                SLIDERBAR_FOOTER
            </div>
        </section>
    </div>
  );
}

export default sliderBarSecond;
