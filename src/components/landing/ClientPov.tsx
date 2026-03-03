export function CLientPov() {
  return (
    <div className="grid grid-cols-2 gap-x-16 items-center w-full">
      {/* Client POV */}
      <div className="flex justify-start">
        <div className="w-90 h-160 bg-white rounded-[32px] flex flex-col justify-between shadow-xl border border-zinc-200 p-6">
          {/* Header */}
          <div>
            <h3 className="text-lg font-semibold">Studio Martin</h3>
            <p className="text-sm text-zinc-500">Video editing service</p>
          </div>

          {/* Content blocks */}
          <div className="space-y-4">
            <div className="h-24 bg-zinc-100 rounded-xl"></div>
            <div className="h-12 bg-zinc-100 rounded-xl"></div>
            <div className="h-48 bg-zinc-100 rounded-xl"></div>
          </div>
          <div className="h-12 bg-black rounded-xl text-xl font-bold flex justify-center items-center">
            <p className="text-white">Checkout</p>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white rounded-2xl shadow-xl border border-zinc-200 p-8">
          <div className="flex gap-6">
            <div className="w-40 space-y-4">
              <div className="h-4 bg-zinc-200 rounded"></div>
              <div className="h-4 bg-zinc-200 rounded"></div>
              <div className="h-4 bg-zinc-200 rounded"></div>
            </div>

            <div className="flex-1 space-y-6">
              <div className="h-8 bg-zinc-200 rounded"></div>
              <div className="h-24 bg-zinc-100 rounded-xl"></div>
              <div className="h-32 bg-zinc-100 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
