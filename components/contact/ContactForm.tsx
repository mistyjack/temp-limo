import Image from "next/image";
import { FC } from "react";

const ContactForm: FC = () => {
  return (
    <section id="contact-form" className="">
      <div className="custom-container">
        <div className="md:grid md:grid-cols-2 gap-4">
          <div className="">
            <h2 className="h2 mb-5">Contact Support</h2>
            <p className="text-sec mb-12">
              Our friendly team would love to hear from you.
            </p>

            <form className="max-w-560">
              <div className="mb-6">
                <label className="form-label" htmlFor="name">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  className="form-control"
                  placeholder="you@org.com"
                />
              </div>

              <div className="mb-6">
                <label className="form-label" htmlFor="phone">
                  Phone number
                </label>
                <input
                  id="phone"
                  type="text"
                  className="form-control"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="mb-6">
                <label className="form-label" htmlFor="category">
                  Support Category
                </label>
                <select className="form-control bg-white py-2.5" name="category" id="category">
                  <option value="fleet">Fleet Issue</option>
                  <option value="general">General Finding</option>
                  <option value="partner">Partner</option>
                </select>
              </div>

              <div className="">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  rows={5}
                ></textarea>
              </div>

              <button className="btn btn-primary btn-lg text-center mt-8 w-full">
                Send message
              </button>
            </form>
          </div>
          <div className="relative">
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
