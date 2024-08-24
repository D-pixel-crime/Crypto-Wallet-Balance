const FetchWallet = () => {
  return (
    <section className="flex flex-col p-5 rounded-lg bg-neutral-700 shadow-lg shadow-black">
      FetchWallet
      <button
        onClick={(e) => e.preventDefault()}
        className="bg-violet-500 border-2 rounded-md px-1.5 py-2 hover:text-violet-400 hover:bg-transparent border-violet-500"
      >
        Connect Wallet
      </button>
    </section>
  );
};
export default FetchWallet;
