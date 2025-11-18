export function ColorPalette() {
  const colors = [
    {
      name: "Heritage Green",
      hex: "#6bae4d",
      rgb: "107, 174, 77",
      cmyk: "64, 10, 95, 0",
      usage: "Primary accent, representing growth and sustainability"
    },
    {
      name: "Passion Red",
      hex: "#e63947",
      rgb: "230, 57, 71",
      cmyk: "4, 93, 72, 0",
      usage: "Secondary accent, representing energy and community spirit"
    },
    {
      name: "Unity Blue",
      hex: "#2e5a9f",
      rgb: "46, 90, 159",
      cmyk: "90, 71, 7, 0",
      usage: "Secondary accent, representing trust and stability"
    },
    {
      name: "Sunshine Yellow",
      hex: "#f4d35e",
      rgb: "244, 211, 94",
      cmyk: "5, 14, 75, 0",
      usage: "Highlight color, representing hope and optimism"
    },
    {
      name: "Deep Black",
      hex: "#000000",
      rgb: "0, 0, 0",
      cmyk: "75, 68, 67, 90",
      usage: "Primary text and logo outline"
    },
    {
      name: "Pure White",
      hex: "#FFFFFF",
      rgb: "255, 255, 255",
      cmyk: "0, 0, 0, 0",
      usage: "Background and contrast"
    }
  ];

  return (
    <section className="py-20 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-neutral-900 mb-4">Brand Colors</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            The color palette draws inspiration from the South African flag and the vibrant 
            spirit of Gugulethu. Each color represents a core value of our mission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colors.map((color, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div 
                className="h-32" 
                style={{ backgroundColor: color.hex }}
              ></div>
              <div className="p-6">
                <h3 className="text-neutral-900 mb-2">{color.name}</h3>
                <div className="space-y-1 mb-3">
                  <p className="text-neutral-700">HEX: {color.hex}</p>
                  <p className="text-neutral-700">RGB: {color.rgb}</p>
                  <p className="text-neutral-700">CMYK: {color.cmyk}</p>
                </div>
                <p className="text-neutral-600">{color.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}