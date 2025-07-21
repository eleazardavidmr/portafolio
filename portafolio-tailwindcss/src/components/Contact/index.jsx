import { AnimatePresence, motion } from "framer-motion";
import InstagarmIcon from "../../icons/InstagarmIcon";
import Social from "./Social";
import MailIcon from "../../icons/MailIcon";
import WhatsAppIcon from "../../icons/WhatsAppIcon";
import GitHubIcon from "../../icons/GitHubIcon";

import { useState } from "react";
import SectionTitle from "../SectionTitle";

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

  return (
    <>
      <section className="px-5 w-full mb-5 mt-5" id="contacto">
        <SectionTitle title="Contacto 📫" />
        <div className="flex items-center justify-center gap-5 mt-5 flex-wrap">
          <Social
            name="Instagram"
            icon={<InstagarmIcon width={50} height={50} />}
            to="https://www.instagram.com/edmr.dev"
          />

          <Social
            name="WhatsApp"
            icon={
              <WhatsAppIcon width={50} height={50} stroke={"currentColor"} />
            }
            to="https://wa.me/3155614748?text=Hola%20Eleazar,%20quiero%20una%20página%20web."
          />

          <motion.a
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.03 }}
            className="social p-5 flex items-center justify-center flex-col rounded-3xl w-[200px] cursor-pointer"
            onClick={copy}
          >
            <MailIcon width={50} height={50} stroke={"currentColor"} />
            <p className="text-white/60">Copiar Email</p>
          </motion.a>
          <Social
            icon={<GitHubIcon width={50} height={50} />}
            to="https://github.com/eleazardavidmr"
            name="GitHub"
          />
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
