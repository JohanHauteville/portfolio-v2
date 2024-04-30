import "./styles.scss";
import Input from "./Input";
import { FormProvider, useForm, Controller } from "react-hook-form";

function ContactForm() {
  const methods = useForm();

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            console.log(data);
          })}
          className="contact-form"
        >
          <Controller
            control={methods.control}
            name="name"
            render={({ field }) => (
              <Input inputName="name" inputLabel="01. NOM" {...field} />
            )}
          />
          <Controller
            control={methods.control}
            name="subject"
            render={({ field }) => (
              <Input inputName="subject" inputLabel="02. SUJET" {...field} />
            )}
          />
          <Controller
            control={methods.control}
            name="email"
            render={({ field }) => (
              <Input inputName="email" inputLabel="03. EMAIL" {...field} />
            )}
          />
          <Controller
            control={methods.control}
            name="message"
            render={({ field }) => (
              <Input
                inputName="message"
                inputLabel="04. MESSAGE"
                textarea={true}
                {...field}
              />
            )}
          />
          {/* <Input inputName="name" inputLabel="01. NOM" />
        <Input inputName="subject" inputLabel="02. SUJET" />
        <Input inputName="email" inputLabel="03. EMAIL" />
        <Input inputName="message" inputLabel="04. MESSAGE" textarea={true} /> */}
          {/* <Input type="checkbox" placeholder="sfjh" /> */}
          <button type="submit" className="contact-form__submit-button">
            ENVOYER
          </button>
        </form>
      </FormProvider>
    </>
  );
}

export default ContactForm;
