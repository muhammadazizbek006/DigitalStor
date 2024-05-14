import React, { useState, useEffect } from "react";
import axios from "axios";
const Modal = () => {
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
  return (
    <div className="absolute bottom-20 right-24 z-50">
      <button
        className="px-4 py-4 bg-green-400 fixed border-4 rounded-full"
        onClick={toggleModal}
      >
        <svg
          viewBox="0 0 10 14"
          width="28"
          height="25"
          fill="none"
          id="feedback_svg"
          className="callibri_panel_picture"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 3V2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1" fill="#000"></path>
          <rect
            x=".5"
            y="2.5"
            width="9"
            height="11"
            rx="1.5"
            className="callibri_passive_icon callibri_svg_fill"
            stroke="#000"
          ></rect>
          <path fill="#000" d="M2 6h5v1H2zM2 8h5v1H2zM2 10h4v1H2z"></path>
        </svg>
      </button>

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
              <div className="flex flex-col md:flex-row justify-center mb-4">
                <button
                  className={`  sm:px-12 md:mr-12 py-2 ${
                    activeTab === 1
                      ? "border-b-4 border-b-green-500 text-online-zakaz"
                      : ""
                  } mr-2`}
                  onClick={() => setActiveTab(1)}
                >
                  So'rang
                </button>
                <button
                  className={`sm:px-12 py-2 ${
                    activeTab === 2
                      ? "border-b-4 border-b-green-500 text-online-zakaz"
                      : "border-b-0"
                  }`}
                  onClick={() => setActiveTab(2)}
                >
                  Kontaktlar
                </button>
              </div>

              <div className={`${activeTab === 1 ? "block" : "hidden"}`}>
                <h3 className="text-center">
                  Savollaringizni bering va biz imkon qadar tezroq javob beramiz
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
                      className="bg-green-600 text-white px-10 py-2 rounded-sm shadow-md"
                    >
                      yuborish
                    </button>
                  </div>
                </form>
              </div>

              <div className={`${activeTab === 2 ? "block" : "hidden"}`}>
                {/* 2-da ifrem */}
                <iframe
                  className="  w-[320px] md:w-[541px] inline-block h-[310px]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483175.7732257224!2d-74.26324279946795!3d40.69767092560273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1649731589500!5m2!1sen!2s"
                  width="441"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>

                <div className="flex space-x-3 py-4  lg:space-x-5">
                  {/* vk */}
                  <a
                    className="bg-online-zakaz rounded-full w-8 h-8"
                    href="https://vk.com/clinica_native"
                    target="_blank"
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.786 21.5999C10.7727 21.5999 7.34286 17.3957 7.19995 10.3999H10.2121C10.311 15.5346 12.5316 17.7096 14.2905 18.1581V10.3999H17.1267V14.8283C18.8637 14.6377 20.6885 12.6197 21.3041 10.3999H24.1404C23.9084 11.5512 23.446 12.6412 22.782 13.6019C22.1181 14.5626 21.2669 15.3732 20.2818 15.9831C21.3814 16.5403 22.3527 17.3291 23.1316 18.2973C23.9104 19.2655 24.479 20.3911 24.7999 21.5999H21.6779C21.3898 20.55 20.8043 19.6101 19.9947 18.8982C19.1851 18.1862 18.1874 17.7337 17.1267 17.5975V21.5999H16.786Z"
                        fill="#BADF93"
                      ></path>
                    </svg>
                  </a>
                  {/* telegram */}
                  <a
                    title="Telegramga yozing"
                    className="flex items-center justify-center bg-online-zakaz rounded-full  w-8 h-8"
                    href="https://t.me/clinica_native"
                    target="_blank"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3536_14011)">
                        <path
                          d="M16.5387 1.59798L0.591584 7.77936C-0.0501582 8.06722 -0.267213 8.64368 0.436475 8.95653L4.52761 10.2634L14.4195 4.11843C14.9596 3.73266 15.5125 3.83553 15.0367 4.2599L6.54094 11.992L6.27406 15.2642C6.52125 15.7694 6.97385 15.7718 7.26255 15.5207L9.61303 13.2851L13.6386 16.3151C14.5736 16.8715 15.0823 16.5125 15.2835 15.4927L17.9239 2.92537C18.198 1.67012 17.7305 1.11704 16.5387 1.59798Z"
                          fill="#BADF93"
                        ></path>
                      </g>
                    </svg>
                  </a>
                  {/* telegram */}
                  <a
                    className="flex items-center justify-center bg-online-zakaz rounded-full  w-8 h-8"
                    title="WhatsApp ga yozing"
                    target="_blank"
                    href="https://wa.me/79827437230?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82..."
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="16" fill=""></rect>
                      <path
                        d="M22.3415 9.64995C20.761 8.07495 18.6537 7.19995 16.4293 7.19995C11.8049 7.19995 8.05854 10.9333 8.05854 15.5416C8.05854 17 8.46829 18.4583 9.17073 19.6833L8 24L12.4488 22.8333C13.6781 23.475 15.0244 23.825 16.4293 23.825C21.0537 23.825 24.8 20.0916 24.8 15.4833C24.7415 13.325 23.9219 11.225 22.3415 9.64995ZM20.4683 18.5166C20.2927 18.9833 19.4732 19.45 19.0634 19.5083C18.7122 19.5666 18.2439 19.5666 17.7756 19.45C17.4829 19.3333 17.0732 19.2166 16.6049 18.9833C14.4976 18.1083 13.1512 16.0083 13.0341 15.8333C12.9171 15.7166 12.1561 14.7249 12.1561 13.675C12.1561 12.6249 12.6829 12.1583 12.8585 11.925C13.0341 11.6916 13.2683 11.6916 13.4439 11.6916C13.561 11.6916 13.7366 11.6916 13.8537 11.6916C13.9707 11.6916 14.1463 11.6333 14.322 12.0416C14.4976 12.45 14.9073 13.5 14.9659 13.5583C15.0244 13.675 15.0244 13.7916 14.9659 13.9083C14.9073 14.025 14.8488 14.1416 14.7317 14.2583C14.6146 14.3749 14.4976 14.55 14.439 14.6083C14.3219 14.725 14.2049 14.8416 14.322 15.0166C14.439 15.2499 14.8488 15.8916 15.4927 16.4749C16.3122 17.1749 16.9561 17.4083 17.1902 17.525C17.4244 17.6416 17.5415 17.5833 17.6585 17.4666C17.7756 17.3499 18.1854 16.8833 18.3024 16.65C18.4195 16.4166 18.5951 16.475 18.7707 16.5333C18.9463 16.5916 20 17.1166 20.1756 17.2333C20.4098 17.35 20.5268 17.4083 20.5854 17.4666C20.6439 17.6416 20.6439 18.0499 20.4683 18.5166Z"
                        fill="#BADF93"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;