const Narrow = () => {
  return (
    <div className="grid grid-cols-7 text-sm leading-6 text-gray-500 sm:hidden">
      <button type="button" className="flex flex-col items-center pt-2 pb-3">
        M{" "}
        <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">
          10
        </span>
      </button>
      <button type="button" className="flex flex-col items-center pt-2 pb-3">
        T{" "}
        <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">
          11
        </span>
      </button>
      <button type="button" className="flex flex-col items-center pt-2 pb-3">
        W{" "}
        <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
          12
        </span>
      </button>
      <button type="button" className="flex flex-col items-center pt-2 pb-3">
        T{" "}
        <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">
          13
        </span>
      </button>
      <button type="button" className="flex flex-col items-center pt-2 pb-3">
        F{" "}
        <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">
          14
        </span>
      </button>
      <button type="button" className="flex flex-col items-center pt-2 pb-3">
        S{" "}
        <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">
          15
        </span>
      </button>
      <button type="button" className="flex flex-col items-center pt-2 pb-3">
        S{" "}
        <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">
          16
        </span>
      </button>
    </div>
  );
};
export default Narrow;
