import { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import GoogleMap from "../components/GoogleMap";

const Contact = () => {
  const formRef = useRef("");

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    const handleSubmit = async (e) => {
    
    };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Contactez-moi"
          sub="📨 Contact & Adresse"
          // subtitle="N'hésitez pas à me contacter pour toute question ou collaboration."
        />

        <div className="mt-16 grid-12-cols">
          {/* Contact form -- Left Side */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl px-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-5"
              >
                <div className="mb-6 pt-2">
                  <label htmlFor="name">Nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nom et Prénom"
                    // value={FormData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Adresse email"
                    value={FormData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Ecrivez votre message ici !"
                    value={FormData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="mb-5" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p>{loading ? "Chargement" : "Soumettre"}</p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          {/* 3D Experience -- Right Side */}
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full bg-[gray-900] hover:cursor-grab rounded-3xl overflow-hidden">
              {/* Google map */}
              <GoogleMap />
              {/* End Google map */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
