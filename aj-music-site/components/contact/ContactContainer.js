import InputRow from "./InputRow";
import InputColumn from "./InputColumn";
import { useRef, useState } from "react";
import useEmailForm from "../../hooks/useEmailForm";
import Button from "../button/buttons";
import validate from "../../errors/email-errors";
import BlockFooter from "../template/BlockFooter";
import { useAppContext } from "../../context/app-context";
import styles from "./ContactContainer.module.css";
import Link from "next/link";
export default function ContactContainer() {
  const { hideSuccessMessage, showMessage } = useAppContext();
  const form = useRef();
  const { handleChange, values, handleSubmit, errors } = useEmailForm(
    validate,
    form.current
  );
  const handleForm = (e) => {
    handleSubmit(e, form.current);

    setTimeout(() => {
      setValue("");
    }, 1000);

    setTimeout(() => {
      hideSuccessMessage();
    }, 5000);
  };
  const [value, setValue] = useState("");
  const { name, email, subject, message } = values;
  return (
    <>
      <div className={styles["contact-container"]}>
        <div className={styles["contact-card-container"]}>
          <div className="flex items-center gap-1 justify-center">
            <Link className="hover:underline" href="/">
              home
            </Link>{" "}
            <span className="text-[var(--grey)]">/ contact</span>
          </div>
          <form
            ref={form}
            onSubmit={handleForm}
            className={styles["contact-card"]}
          >
            <InputRow>
              <InputColumn>
                <h2>Name *</h2>
                <input
                  placeholder="name *"
                  name="name"
                  value={name}
                  onChange={handleChange}
                ></input>
                {errors.name && (
                  <p className={styles["error-paragraph"]}>{errors.name}</p>
                )}
              </InputColumn>
            </InputRow>

            <InputRow>
              <InputColumn>
                <h2>Email *</h2>
                <input
                  placeholder="email *"
                  name="email"
                  type="text"
                  onChange={handleChange}
                  value={email}
                ></input>
                {errors.email && (
                  <p className={styles["error-paragraph"]}>{errors.email}</p>
                )}
              </InputColumn>
            </InputRow>
            <InputRow>
              <InputColumn>
                <h2>Subject *</h2>
                <input
                  placeholder="subject *"
                  name="subject"
                  type="text"
                  onChange={handleChange}
                  value={subject}
                ></input>
                {errors.subject && (
                  <p className={styles["error-paragraph"]}>{errors.subject}</p>
                )}
              </InputColumn>
            </InputRow>

            <div className={styles["area-container"]}>
              <h2>Message *</h2>
              <textarea
                className={styles["text-area"]}
                rows="5"
                placeholder="message*"
                name="message"
                onChange={handleChange}
                value={message}
              ></textarea>
              {errors.message && (
                <p className={styles["error-paragraph"]}>{errors.message}</p>
              )}
              {showMessage && <p>Message Sent Successfully!</p>}
            </div>

            <Button buttonType="contact">Submit</Button>
            <div className="flex items-center justify-between gap-x-10">
              <div className="flex flex-col items-center justify-center ">
                <h1>Email</h1>
                <h1>Test@Test.com</h1>
              </div>

              <div className="flex flex-col items-center justify-center">
                <h1>Location</h1>
                <h1>San Diego, CA</h1>
              </div>
            </div>
          </form>
        </div>
        <BlockFooter />
      </div>
    </>
  );
}
