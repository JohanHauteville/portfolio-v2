import "./styles.scss";
import Input from "./Input";
import emailjs from "@emailjs/browser";
import { FormProvider, useForm, Controller } from "react-hook-form";
import { useState } from "react";
import ContactMessage from "../ContactMessage";

function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [isError, setIsError] = useState(true);

  // Récupère les méthodes de useForm()
  const methods = useForm({
    defaultValues: {
      user_name: "",
      user_subject: "",
      user_email: "",
      user_message: "",
      user_political_confidentiality: false,
    },
  });

  // Initialise emailjs avec la PUBLIC KEY
  emailjs.init({
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY.toString(),
  });

  function sendingData() {
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID.toString(),
        import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT.toString(),
        "#contact-form",
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY.toString()
      )
      .then(() => {
        // console.log("SUCCESS!", response.status, response.text);
        setIsError(false);
        setDisplayMessage(true);
        methods.reset();
        setIsSending(false);
      })
      .catch(() => {
        // console.log("FAILED...", error);
        setIsSending(false);
        setIsError(true);
        setDisplayMessage(true);
      });
  }

  return (
    <>
      <FormProvider {...methods}>
        <form
          id="contact-form"
          onSubmit={methods.handleSubmit(() => {
            sendingData();
          })}
          className="contact-form"
        >
          <Controller
            control={methods.control}
            name="user_name"
            render={({ field }) => (
              <Input inputName="user_name" inputLabel="01. NOM" {...field} />
            )}
          />
          <Controller
            control={methods.control}
            name="user_subject"
            render={({ field }) => (
              <Input
                inputName="user_subject"
                inputLabel="02. SUJET"
                {...field}
              />
            )}
          />
          <Controller
            control={methods.control}
            name="user_email"
            render={({ field }) => (
              <Input inputName="user_email" inputLabel="03. EMAIL" {...field} />
            )}
          />
          <Controller
            control={methods.control}
            name="user_message"
            render={({ field }) => (
              <Input
                inputName="user_message"
                inputLabel="04. MESSAGE"
                textarea={true}
                {...field}
              />
            )}
          />
          <Controller
            control={methods.control}
            name="user_political_confidentiality"
            render={({ field }) => (
              <Input
                inputName="user_political_confidentiality"
                inputLabel="J'accepte les Conditions d'utilisations."
                checkBox={true}
                {...field}
              />
            )}
          />
          <button type="submit" className="contact-form__submit-button">
            ENVOYER
          </button>
        </form>
      </FormProvider>
      <ContactMessage
        display={displayMessage}
        isError={isError}
        setDisplay={setDisplayMessage}
      />

      {isSending && <span className="sending">Envoi du formulaire ...</span>}
    </>
  );
}

export default ContactForm;
