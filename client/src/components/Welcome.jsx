import React, { useState, useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import "react-toastify/dist/ReactToastify.css";

import { TransactionContext } from "../context/TransactionContext";
import { Loader } from ".";
import { shortenAddress } from "../utils/shortenAddress";
import { ToastContainer, toast } from "react-toastify";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full p-2 outline-none bg-transparent text-black border-none text-sm bg-white rounded-xl"
  />
);

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransaction,
    handleChange,
  } = useContext(TransactionContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    const response = await sendTransaction();
    if (response.status === "success") {
      setLoading(false);
      toast("Transaction Successful");
    }
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Same as */}
          <ToastContainer />
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Transfer digital <br /> assets globally
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Discover the world of crypto, by trading cryptocurrencies on
            CryptoExpress.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#255e3d] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          <div className="bg-purple-200 rounded-lg py-4 px-2">
            <div className="max-w-screen-md mx-auto grid grid-cols-3 gap-4">
              <div className="bg-red-300 shadow-lg rounded-lg p-4 flex flex-col justify-center items-center transition-all duration-300 hover:bg-yellow-300">
                <h2 className="text-lg font-bold mb-2 text-white">
                  Dependability
                </h2>
                <p className="text-sm text-white">
                  We value reliability and trustworthiness in our products.
                </p>
              </div>
              <div className="bg-yellow-300 shadow-lg rounded-lg p-4 flex flex-col justify-center items-center transition-all duration-300 hover:bg-red-300">
                <h2 className="text-lg font-bold mb-2 text-white">
                  Encryption
                </h2>
                <p className="text-sm text-white">
                  We prioritize data privacy and security through strong
                  encryption methods.
                </p>
              </div>
              <div className="bg-pink-300 shadow-lg rounded-lg p-4 flex flex-col justify-center items-center transition-all duration-300 hover:bg-green-300">
                <h2 className="text-lg font-bold mb-2 text-white">
                  Smart Contracts
                </h2>
                <p className="text-sm text-white">
                  Our platform allows for secure, automated transactions with
                  smart contracts.
                </p>
              </div>
              <div className="bg-green-300 shadow-lg rounded-lg p-4 flex flex-col justify-center items-center transition-all duration-300 hover:bg-pink-300">
                <h2 className="text-lg font-bold mb-2 text-white">
                  Blockchain Web
                </h2>
                <p className="text-sm text-white">
                  Experience seamless and decentralized web applications with
                  blockchain technology.
                </p>
              </div>
              <div className="bg-blue-300 shadow-lg rounded-lg p-4 flex flex-col justify-center items-center transition-all duration-300 hover:bg-orange-300">
                <h2 className="text-lg font-bold mb-2 text-white">
                  Affordability
                </h2>
                <p className="text-sm text-white">
                  We believe in making cutting-edge technology accessible and
                  affordable for everyone.
                </p>
              </div>
              <div className="bg-orange-300 shadow-lg rounded-lg p-4 flex flex-col justify-center items-center transition-all duration-300 hover:bg-blue-300">
                <h2 className="text-lg font-bold mb-2 text-white">
                  Decentralized Database
                </h2>
                <p className="text-sm text-white">
                  Securely store and access data on our decentralized database.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {false ? (
              <Loader />
            ) : (
              <button
                disabled={loading ? true : false}
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-green-600 hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                {loading ? "loading..." : "Send now"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
