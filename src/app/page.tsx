import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-3 py-3">
      <div className="bg-gray-300 rounded-xl">1</div>
      <div className="bg-gray-300 lg:rounded-xl">2</div>
      <div className="bg-gray-300">3</div>
      <div className="bg-gray-300">4</div>
      <div className="bg-gray-300 md:bg-red-400 lg:bg-green-300">5</div>
      <div className="bg-gray-300">6</div>
      <div className="flex flex-col rounded-2xl w-[100%] bg-[#fff] shadow-xl"> 
        <figure className="flex justify-cemter items-center rounded-2xl">
            <img src="https://webiskola.hu/kep.jpg" alt="" className="rounded-t-2xl" />
        </figure>
        <div className="flex flex-col p-8">
        <div className="text-2xl font-bold text-[#374151] pb-6">
          Kártya cím
        </div>
        <div className="text-lg">
          Rövid leírás a kártyáról
        </div>
        <div className="flex justify-end pt-6">
          <button className="bg-[#767564] text-[#fff] w-full font-bold text-base p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">
            Elolvasom
          </button>
        </div>
      </div>
      </div>
    </div>
    
  );
}
