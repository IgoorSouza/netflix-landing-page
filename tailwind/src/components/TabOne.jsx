export default function TabOne() {
  return (
    <div className="flex flex-col items-center py-16 sm:flex-row sm:justify-center">
      <div className="w-[60%] sm:w-[30%] flex flex-col">
        <p className="text-xl text-center mb-5 sm:text-left lg:text-3xl">
          If you decide Netflix isn&apos;t for you - no problem. No commitment.
          Cancel online anytime.
        </p>
        <a className="px-3 py-2 text-center self-center bg-[#e50914] cursor-pointer hover:opacity-[0.9] ease-in duration-200 md:self-start">
          WATCH FREE FOR 30 DAYS
        </a>
      </div>

      <img
        src="src/assets/tab-content-1.png"
        className="w-[60vw] mt-7 sm:w-[30vw] sm:ml-7"
      />
    </div>
  );
}
