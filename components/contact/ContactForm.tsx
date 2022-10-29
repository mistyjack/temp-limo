import Input from "@components/ui/input";
import Loading from "@components/ui/Loading";
import {
  composeValidators,
  mustBeEmail,
  mustBeLessThan30,
  required
} from "@utils/validation.util";
import Image from "next/image";
import { FC } from "react";
import { Field, Form } from "react-final-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

interface ContactFormValues {
  name: string;
  email: string;
  phone_number: string;
  category: string;
  message: string;
}

const ContactForm: FC = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit = async (values: ContactFormValues) => {
    if (!executeRecaptcha) {
      return;
    }

    try {
      const token = await executeRecaptcha();
      if (!token) {
        toast.error("Failed");
        return;
      }

      await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: uuidv4(), ...values, token }),
      });
      toast.info("Your message has been sent");
    } catch (error) {
      console.error(error);
      toast.error("Unable to send message at the moment");
    }
  };

  return (
    <section id="contact-form" className="">
      <div className="custom-container">
        <div className="md:grid md:grid-cols-2 gap-4">
          <div className="">
            <h2 className="h2 mb-5">Contact Support</h2>
            <p className="text-sec mb-12">
              Our friendly team would love to hear from you.
            </p>

            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit, invalid, submitting }) => (
                <form onSubmit={handleSubmit} className="max-w-560">
                  <Input
                    id="name"
                    label="Your name*"
                    placeholder="Your name"
                    validate={composeValidators(required, mustBeLessThan30)}
                  />

                  <Input
                    id="email"
                    label="Email*"
                    placeholder="Enter your email"
                    validate={composeValidators(required, mustBeEmail)}
                  />

                  <Input
                    id="phone_number"
                    label="Phone number*"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                    validate={composeValidators(required, mustBeLessThan30)}
                  />

                  <Field name="category">
                    {({ input, meta }) => (
                      <div className="mb-6">
                        <label className="form-label" htmlFor="category">
                          Support Category
                        </label>
                        <select
                          {...input}
                          className="form-control bg-white py-2.5"
                          name="category"
                          id="category"
                        >
                          <option value="fleet">Fleet Issue</option>
                          <option value="general">General Finding</option>
                          <option value="partner">Partner</option>
                        </select>
                        {meta.error && meta.touched && (
                          <small className="text-red-600">{meta.error}</small>
                        )}
                      </div>
                    )}
                  </Field>

                  <Field name="message" validate={composeValidators(required)}>
                    {({ input, meta }) => (
                      <div className="">
                        <label className="form-label" htmlFor="message">
                          Message
                        </label>
                        <textarea
                          {...input}
                          className="form-control"
                          name="message"
                          id="message"
                          rows={5}
                        ></textarea>
                        {meta.error && meta.touched && (
                          <small className="text-red-600">{meta.error}</small>
                        )}
                      </div>
                    )}
                  </Field>

                  <button
                    disabled={submitting || invalid}
                    className="btn btn-primary disabled:cursor-not-allowed disabled:bg-grey btn-lg text-center text-lg mt-8 w-full"
                  >
                    Send message
                    <Loading loading={submitting} />
                  </button>
                </form>
              )}
            />
          </div>
          <div className="none md:block relative">
            <Image
              src="/support.png"
              alt="Contact image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
