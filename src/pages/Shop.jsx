import React, { useEffect, useState } from "react";
import { Trending } from "../data";
import axios from "axios";
const Shop = () => {
  //   shhhhhhhhhhhhhhhhhggggggggggggggg
  const [activeTab, setActiveTab] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setMessage] = useState("");

  // Modal ochish va yopish uchun funktsiya
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  // ESC tugmasi bosilganda modalni yopish
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        setModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // Overlay bosilganda modalni yopish
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("bg-gray-800")) {
      setModalOpen(false);
    }
  };

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handlePhone = (event) => {
    setphone(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmitInput = (event) => {
    event.preventDefault();
    // setNameSend("");
    // setEmailSend("");
    // setMessageSend("");
    // setcontextSend("");
    // setSubjectSend("");
    if (name == "" || email == "" || phone == "" || message == "") {
      alert("Iltimos malumotni to'ldiring");
    } else {
      //   setSubject(false);
      const telegram_bot_id = "6470059960:AAHkas-9gyueIPQvi9F22bU4ZKBO3Te-tc0";
      const chat_id = "6932003276";

      const telegramMessage = `Name: ${name}\nEmail: ${email}\nPhone Number : ${phone}\nMessage: ${message}`;

      axios

        .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
          chat_id,
          text: telegramMessage,
        })
        .then((response) => {
          setName("");
          setEmail("");
          setphone("");
          setMessage("");
        });
      alert("Malumot yuborildi");
    }
  };
  // ddddddddddddddddddddddddddddddddddddd
  const [cardItems, setCardItems] = useState([]);
  useEffect(() => {
    const filteredCardItems = Trending.filter((product) => {
      return product.iscart == true;
    });
    setCardItems(filteredCardItems);
  }, []);
  console.log(cardItems);
  return(
   <>
    <section className="py-12">
      <div className="containerb">
        {
          cardItems.map((e)=>{
            return(

              <>
              <ul className="">
                <li className="mb-4  flex flex-col items-center sm:items-start text-center sm:text-start">
                <div className="flex flex-col sm:flex-row  sm:items-start drop-shadow-lg border-b-logo border-b-2 border-dashed pb-4 pt-5 px-5">
                {/* left */}
                <div className="flex flex-col sm:flex-row mb-5 sm:mb-0 sm:mr-[100px] mg:mr-[300px] lg:mr-[450px]  xl:mr-[650px] ">
                
                <div className="bg-[#E2E3FF] w-40 pr-3 mb-3 sm:mb-0 rounded sm:mr-6">
                  <img src={e.img} alt={e.title} />
                </div>
                  
                  <div>
                    <p className="text-base font-bold">{e.title}</p>
                    <p className="text-sm font-medium">Categoria: {e.categoria}</p>
                    <p className="text-base font-medium"> R {e.skidkanarx}</p>
                  </div>
                </div>
                {/* right */}
                <button onClick={toggleModal} className="bg-logo text-white px-10 py-3 rounded-md ">Purchase</button>
              </div>
                </li>
              </ul>
                  {/* modal */}
      {modalOpen && (
        <div
          className="fixed  inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <div className="bg-white h-[520px]  w-96 sm:w-[500px] md:h-[460px] md:w-[600px] p-4 sm:p-8 rounded-lg relative">
            <button
              className="absolute top-0 right-0 m-4 text-online-zakaz hover:text-gray-700"
              onClick={toggleModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div>


              <div>
                <h3 className="text-center">
                  Savollaringizni bering 
                </h3>
                {/* 1-da form */}
                <form
                  onSubmit={handleSubmitInput}
                  className=" flex flex-col p-4 max-w-[600px]"
                >
                  <textarea
                    onChange={handleMessage}
                    value={message}
                    required
                    placeholder="Sizning xabaringiz..."
                    className="w-full inline-block shadow-md    h-20 md:h-28 pl-4 pt-4 rounded-lg mb-3 bg-[#F8F8F8] resize-none"></textarea>

                  <div className=" grid-cols-1 md:grid-cols-2 grid gap-x-4">
                    <input
                      onChange={handleName}
                      value={name}
                      required
                      className="bg-[#F8F8F8] py-2 pr-4 pl-2 rounded-sm shadow-md mb-5"
                      type="text"
                      placeholder="ism"
                    />
                    <input
                      onChange={handleEmail}
                      value={email}
                      required
                      type="email"
                      placeholder="email"
                      className="bg-[#F8F8F8] py-2 pr-4 pl-2 rounded-sm shadow-md mb-5"
                    />
                    <input
                      onChange={handlePhone}
                      value={phone}
                      required
                      type="tel"
                      placeholder="telefon"
                      className="bg-[#F8F8F8] py-2 pr-4 pl-2 rounded-sm shadow-md mb-5"
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-logo text-white px-10 py-2 rounded-md shadow-md"
                    >
                      yuborish
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      )}
              </>
             

          
            )
          })
        }
      </div>
    </section>
   </>
  );  
};

export default Shop;
