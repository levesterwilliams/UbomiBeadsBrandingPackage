import geoSansLightImage from "figma:asset/2ab32caac6497f90edd33d6b387ede28cc26254b.png";
import avenirBookImage from "figma:asset/72a74cb090e09f20317deec2b68ada88d896de84.png";

export function Typography() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-neutral-900 mb-4">Typography</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            The typography system balances modern clarity with
            approachable warmth, reflecting both professionalism
            and community connection.
          </p>
        </div>

        <div className="space-y-12">
          {/* Geo Sans Light */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-200">
            <img
              src={geoSansLightImage}
              alt="Geo Sans Light Character Set"
              className="w-full"
            />
            <div className="p-8 bg-neutral-50">
              <h3 className="text-neutral-900 mb-3">
                Geo Sans Light
              </h3>
              <p className="text-neutral-700">
                The logotype is rendered using Geo Sans Light. The Geo Sans family and its elegant lines is used for the advertisement of the products.
                The typeface may be downloaded via{" "}
                <a
                  href="https://www.dafont.com/geo-sans-light.font"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Dafont
                </a>
                .
              </p>
            </div>
          </div>

          {/* Avenir Book */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-200">
            <img
              src={avenirBookImage}
              alt="Avenir Book Character Set"
              className="w-full"
            />
            <div className="p-8 bg-neutral-50">
              <h3 className="text-neutral-900 mb-3">Avenir Book</h3>
              <p className="text-neutral-700 mb-3">
                The tagline is rendered using Avenir Book. The Avenir font family is used for body text and headers throughout all brand communications.
              </p>
              <p className="text-neutral-700">
                The typeface may be purchased via{" "}
                <a
                  href="https://www.myfonts.com/collections/avenir-font-linotype/?srsltid=AfmBOopm7Yxzu2FviEl7I4Y7u5kAdtZaJCOzl2d_0yKG4XFU8n1kDO4k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  MyFonts
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}