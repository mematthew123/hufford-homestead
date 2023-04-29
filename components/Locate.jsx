import { Container } from "@/components/Container";

export function Locate() {
  return (
    <section id="locate" aria-label="Locate" className="py-2 sm:py-12">
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-50 sm:text-4xl"></h2>
          <p className=" text-lg text-slate-400">
            608 Moore Ave, Glens Ferry ID
          </p>
        </div>

        <div className="relative mt-4 overflow-hidden bg-slate-50 py-2 px-2">
          <div className="aspect-w-16 aspect-h-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1537.8836094641126!2d-115.30904436116461!3d42.959568955720954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ac46f31f31029d%3A0xc865045391e00d82!2s608%20Moore%20Ave%2C%20Glenns%20Ferry%2C%20ID%2083623!5e1!3m2!1sen!2sus!4v1682791014635!5m2!1sen!2sus"
              style={{
                width: "100%",
                height: "300px",
                border: "0",
                "@media (minWidth: 640px)": {
                  height: "400px",
                },
                "@media (minWidth: 768px)": {
                  height: "600px",
                },
                "@media (minWidth: 1024px)": {
                  height: "800px",
                },
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
}
