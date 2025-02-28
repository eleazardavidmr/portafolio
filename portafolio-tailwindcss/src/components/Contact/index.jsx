import { AnimatePresence, motion } from "framer-motion";
import GitHubIcon from "../../icons/GitHubIcon";
import InstagarmIcon from "../../icons/InstagarmIcon";
import LinkedInIcon from "../../icons/LinkedInIcon";
import Social from "./Social";

import { useState } from "react";

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const copy = () => {
    const text = "eleazardavidmr@gmail.com";
    setIsCopied(true);

    navigator.clipboard.writeText(text).then(() => {
      console.log("copied");
      showAlert("Copiado al portapapeles.");
    });
  };

  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => setAlertMessage(null), 2000);
  };

  const renderCopyIcons = () => {
    if (isCopied) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-check"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
          <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
          <path d="M9 14l2 2l4 -4" />
        </svg>
      );
    } else {
      return (
        <svg
          onClick={() => copy()}
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-clipboard"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
          <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
        </svg>
      );
    }
  };

  return (
    <>
      <section className="px-5 w-full" id="contacto">
        <h1 className="text-primary font-bold text-2xl">Contacto 📞</h1>
        <div className="flex items-center justify-center gap-5 mt-5 flex-wrap">
          <Social
            name="GitHub"
            icon={<GitHubIcon width={50} height={50} />}
            to="https://www.github.com/eleazardavidmr"
          />
          <Social
            name="LinkedIn"
            icon={<LinkedInIcon width={50} height={50} />}
            to="https://www.linkedin.com/in/eleazarmunoz-4101542a2"
          />

          <Social
            name="Instagram"
            icon={<InstagarmIcon width={50} height={50} />}
            to="https://www.instagram.com/edavidmunozr"
          />
        </div>

        <div className="email-div w-fit md:w-[60%] mx-auto rounded-full px-4 py-2 mt-5 mb-10 text-white/60 border flex items-center justify-between flex-wrap">
          <div className="flex items-center justify-center gap-3 md:justify-between w-full">
            <span>eleazardavidmr@gmail.com</span>
            <span className="mx-auto md:m-0">{renderCopyIcons()}</span>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {alertMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="modal"
            className=" fixed bottom-5 right-5 flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800 cursor-pointer"
            role="alert"
          >
            <div>{alertMessage}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
