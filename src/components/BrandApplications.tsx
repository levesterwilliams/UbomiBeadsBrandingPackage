import logoWithTagline from 'figma:asset/bde136ed1498b8da7254d45ccfd0d9ab27c6bd5d.png';
import logoWithoutTagline from 'figma:asset/0e15b1ed0e1eb2fa64790bb9a613c577c0c2f3ce.png';
import logomark from 'figma:asset/e65fc516e2c84fb906867783fdc02ca540484204.png';
import businessCardAnatomy from 'figma:asset/98bbffdb2b1fd86857c51d06ac1c67b2b8b6c2e9.png';
import letterheadAnatomy from 'figma:asset/0af835b91db81ec422c20541db18c25f4b65a538.png';
import brandedTshirt from 'figma:asset/612c95f968f2d10aaa6deccd4fc7a7fb80d2aff9.png';
import brandedCap from 'figma:asset/c0234990ae55525dfad7c0a4025a6834655a9241.png';
import { Mail, FileText, ShoppingBag, Tag, Shirt } from "lucide-react";

export function BrandApplications() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-neutral-900 mb-4">Brand Applications</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Examples of how the Ubomi Beads brand identity comes to life across various touchpoints.
          </p>
        </div>

        {/* Business Card Anatomy */}
        <div className="bg-neutral-50 rounded-lg p-8 mb-12">
          <h3 className="text-neutral-900 mb-6">Business Card</h3>
          <div className="bg-white rounded-lg shadow-lg border-2 border-neutral-200 overflow-hidden">
            <img 
              src={businessCardAnatomy} 
              alt="Business Card Design Specifications" 
              className="w-full"
            />
          </div>
        </div>

        {/* Letterhead Anatomy */}
        <div className="bg-neutral-50 rounded-lg p-8 mb-12">
          <h3 className="text-neutral-900 mb-6">Letterhead</h3>
          <div className="bg-white rounded-lg shadow-lg border-2 border-neutral-200 overflow-hidden">
            <img 
              src={letterheadAnatomy} 
              alt="Letterhead Design Specifications" 
              className="w-full"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Branded T-Shirt */}
          <div className="bg-neutral-50 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Shirt className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-neutral-900">Branded T-Shirt</h3>
            </div>
            <div className="flex justify-center">
              <div className="rounded-lg shadow-lg overflow-hidden" style={{ backgroundColor: '#0066FF' }}>
                <img 
                  src={brandedTshirt} 
                  alt="Ubomi Beads Branded T-Shirt" 
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Branded Cap */}
          <div className="bg-neutral-50 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Shirt className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-neutral-900">Branded Cap</h3>
            </div>
            <div className="flex justify-center">
              <div className="rounded-lg shadow-lg overflow-hidden" style={{ backgroundColor: '#0066FF' }}>
                <img 
                  src={brandedCap} 
                  alt="Ubomi Beads Branded Cap" 
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}