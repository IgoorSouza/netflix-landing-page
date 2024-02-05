import Table from "./Table";

export default function TabThree() {
  return (
    <div className="w-full flex flex-col items-center py-16">
      <div className="flex flex-col items-center text-center">
        <p className="text-xl lg:text-3xl">
          Choose one plan and watch everything on Netflix.
        </p>
        <a className="w-[240px] px-3 py-2 mt-5 mb-8 bg-[#e50914] hover:opacity-[0.9] ease-in duration-200 cursor-pointer">
          WATCH FREE FOR 30 DAYS
        </a>
      </div>

      <Table />
    </div>
  );
}
