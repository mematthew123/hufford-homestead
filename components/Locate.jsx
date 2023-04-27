import { Container } from "@/components/Container";

export function Locate() {
  return (
    <section id="locate" aria-label="Locate" className="py-2 sm:py-12">
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl"></h2>
          <p className=" text-lg text-slate-400">
            123 W Moore st, Glens Ferry ID
          </p>
        </div>

        <div className="relative mt-4 overflow-hidden bg-slate-50 py-2 px-2">
          <div className="aspect-w-16 aspect-h-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2727.956337842168!2d-114.08454862366494!3d46.864231638946485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x535dd1f271f93a55%3A0xfd6c7cd0b498686d!2s715%20Clements%20Rd%2C%20Missoula%2C%20MT%2059804!5e0!3m2!1sen!2sus!4v1682527650766!5m2!1sen!2sus"
              style={{
                width: "100%",
                height: "300px",
                border: "0",
                "@media (min-width: 640px)": {
                  height: "400px",
                },
                "@media (min-width: 768px)": {
                  height: "600px",
                },
                "@media (min-width: 1024px)": {
                  height: "800px",
                },
              }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
}
