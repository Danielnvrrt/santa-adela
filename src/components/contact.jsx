import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setStatus("Enviando...");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setStatus("Mensaje enviado con éxito");
      setFormData({ name: "", email: "", message: "", phone: "" });

      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      console.log(error);
      setStatus("Error al enviar el mensaje, inténtalo de nuevo.");

      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <div
      id="contact"
      className="bg-[#1F2937] text-white p-12 flex flex-col md:flex-row justify-center items-center"
    >
      <div className="w-full md:w-2/5 pr-8">
        <h2 className="text-3xl font-bold text-white mb-8 relative">
          CONTACTO
        </h2>

        <p className="text-white/80 mb-6">
          Envía un mensaje con tu opción deseada y nos pondremos en contacto lo
          antes posible.
        </p>

        <form onSubmit={sendEmail} className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full md:w-1/2 p-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 outline-none my-1"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full md:w-1/2 p-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 outline-none my-1"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleChange}
              className="w-full md:w-1/2 p-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 outline-none my-1"
            />
          </div>

          <textarea
            name="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 h-32 rounded-lg bg-white text-gray-800 placeholder-gray-500 outline-none"
          />

          <button
            type="submit"
            className="mt-4 px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#1F2937] transition cursor-pointer"
          >
            Enviar
          </button>
        </form>

        {status && <p className="mt-4 text-white font-semibold">{status}</p>}
      </div>

      <div className="w-full md:w-1/3 mt-8 md:mt-0">
        <h3 className="text-xl font-bold mb-4">Contact Info</h3>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <MapPin className="w-6 h-6" />
            <div>
              <p className="font-semibold">Dirección</p>
              <p className="text-white/80">
                Calle Santa Adela 28, Peligros, Granada
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Phone className="w-6 h-6" />
            <div>
              <p className="font-semibold">Teléfono</p>
              <p className="text-white/80">+34 633 80 73 09</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="w-6 h-6" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-white/80">parkingsantaadela@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
