import logoWithTagline from 'figma:asset/bde136ed1498b8da7254d45ccfd0d9ab27c6bd5d.png';

export function BrandHero() {
  return (
    <section className="relative bg-gradient-to-br from-neutral-50 to-neutral-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-neutral-600 mb-4">Brand Guidelines</h2>
           <div className="bg-white rounded-lg p-8 shadow-md">
          <img 
            src={logoWithTagline} 
            alt="Ubomi Beads Logo" 
            className="mx-auto mb-8"
            style={{ maxWidth: '500px', 
                     width: '100%', 
                     backgroundColor: "white",
                     padding: "24px",      
                     borderRadius: "22px" }}
          />
          <div className="max-w-2xl mx-auto">
            <p className="text-neutral-700 text-lg leading-relaxed">
              A comprehensive brand identity system for a non-profit organization 
              dedicated to empowering the Gugulethu community through sustainable 
              craftsmanship and economic development.
            </p>
          </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}