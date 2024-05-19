import { Link, } from "react-router-dom"

export default function Root() {
  return (
    <main className="w-11/12 md:w-4/5 h-full mx-auto flex flex-col items-center justify-center gap-5 md:gap-10">
      <div className="flex flex-col items-center gap-2 md:gap-5">
        <h3 className="text-4xl md:text-7xl text-black font-bold">
          Traumwohnung.
        </h3>
        <p className="text-xl md:text-3xl text-gray-600">
          Einfacher als je zuvor finden
        </p>
      </div>
      <Link
        to="/form"
        className="bg-blue-500 text-lg md:text-2xl text-white py-3 md:py-4 px-6 md:px-8 rounded-3xl shadow-md shadow-gray-100"
      >
        Jetzt starten
      </Link>
    </main>
  )
}
