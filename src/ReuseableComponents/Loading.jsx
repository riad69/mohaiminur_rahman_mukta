function Loading() {
  return (
    <div className="w-full min-h-[calc(100vh-200px) flex justify-center items-center text-center my-20">
      <div className="text-center flex justify-center items-center flex-col gap-3">
        <div className="w-16 h-16 border-8 rounded-full animate-spin border-dashed border-red-500"></div>
        <h1 className="text-sm animate-pulse">Data is Loading ....</h1>
      </div>
    </div>
  );
}

export default Loading;
