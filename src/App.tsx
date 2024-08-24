import { useState } from "react";
import "./App.css";
import { formatEther } from "ethers";
import { Grid } from "react-loader-spinner";

function App() {
  const [isError, setIsError] = useState(false);
  const [whatIsTheError, setWhatIsTheError] = useState("");
  const [balance, setBalance] = useState("Wallet Not Connected");
  const [btnState, setBtnState] = useState("Connect Wallet");

  const getAccountBalance = async (newAccount: string) => {
    try {
      const res = await (window as any).ethereum.request({
        method: "eth_getBalance",
        params: [newAccount, "latest"],
      });
      setBalance(formatEther(res.balance));
    } catch (error: any) {
      setIsError(true);
      setWhatIsTheError(error.message);
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }
  };

  const handleAccountChange = (newAccount: string) => {
    getAccountBalance(newAccount);
  };

  const connectToWallet = async () => {
    setBtnState("Loading...");

    setTimeout(() => {
      if ((window as any).ethereum) {
        console.log("MetaMask is installed");

        try {
          const res = (window as any).ethereum.request({
            method: "eth_requestAccounts",
          });
          handleAccountChange(res[0]);
          getAccountBalance(res[0]);
        } catch (error: any) {
          setIsError(true);
          setWhatIsTheError(error.message);
          setTimeout(() => {
            setIsError(false);
          }, 3000);
        }
      } else if (!(window as any).ethereum) {
        setIsError(true);
        setWhatIsTheError("Please Install Meta-Mask Browser Extension!");
        setTimeout(() => {
          setIsError(false);
        }, 3000);
      }

      setBtnState("Connect Wallet");
    }, 1500);
  };

  (window as any).ethereum.on("accountsChanged", handleAccountChange);

  (window as any).ethereum.on("chainChanged", () => {
    window.location.reload();
  });

  return (
    <article className="bg-neutral-800 h-screen max-w-screen text-white flex-center break-words max-lg:px-5">
      <section className="flex flex-col gap-5 p-5 rounded-lg bg-neutral-700 shadow-lg shadow-black max-lg:w-full">
        <div className="flex-center flex-col">
          <h1 className="lg:text-6xl md:text-4xl text-2xl text-center text-neutral-300 border-b-2 border-b-neutral-500 w-fit">
            MetaMask Wallet Sync
          </h1>
          <p className="text-sm max-sm:text-xs break-words mt-2 text-neutral-500">
            (Plz first setup Meta-Mask extension in your browser)
          </p>
        </div>
        <div className="flex-center max-lg:flex-col lg:gap-5 gap-2 lg:text-5xl md:text-3xl text-xl my-10">
          <h3 className="text-neutral-400">Balance:</h3>
          <p className="bg-gradient-to-br w-fit from-purple-600 from-20% via-orange-500 to-purple-600 bg-clip-text text-transparent">
            {balance}
          </p>
        </div>
        {btnState !== "Connect Wallet" ? (
          <div className="flex-center mt-10">
            <Grid height={50} width={50} color="#d257f8" visible={true} />
          </div>
        ) : (
          <button
            disabled={btnState !== "Connect Wallet" ? true : false}
            onClick={(e) => {
              e.preventDefault();
              connectToWallet();
            }}
            className="bg-violet-500 border-2 rounded-md px-1.5 py-2 hover:text-violet-400 hover:bg-transparent border-violet-500"
          >
            {btnState}
          </button>
        )}
      </section>
      <div
        className={`bg-red-500 rounded-md text-white border-2 border-red-500 w-fit px-2 py-1.5 flex-center gap-1 mt-10 fixed top-[40%] right-0 ${
          isError ? "translate-x-[1%]" : "translate-x-[125%]"
        } transition-transform duration-1000 ease-in-out z-50`}
        style={{ boxShadow: "0px 0px 10px 2px black" }}
      >
        <div>{whatIsTheError}</div>
      </div>
    </article>
  );
}

export default App;
