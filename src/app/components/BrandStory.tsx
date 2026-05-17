import { Heart, Recycle, Users, Sparkles, Menu, ShoppingCart, Search } from "lucide-react";
import beadsCollection from 'figma:asset/14b7a15453f74dbd470019943c51dbdcba8214f2.png';
import hangingBeads from 'figma:asset/11eec140cfcd801da98b2c0e015b2bc58cdecd06.png';
import beadsWorn from 'figma:asset/23feb31b77ded082b663c634b08348d6cfe431ab.png';
import logoWithTagline from 'figma:asset/bde136ed1498b8da7254d45ccfd0d9ab27c6bd5d.png';

export function BrandStory() {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "Every bead tells a story of empowerment and connection within Gugulethu."
    },
    {
      icon: Recycle,
      title: "Sustainability",
      description: "Transforming recycled paper into beautiful, wearable art."
    },
    {
      icon: Users,
      title: "Empowerment",
      description: "Creating economic opportunities for local residents through skilled craftsmanship."
    },
    {
      icon: Sparkles,
      title: "Style & Quality",
      description: "Hand-crafted pieces that blend traditional techniques with contemporary design."
    }
  ];

  return (
    <section className="py-20 px-6 bg-neutral-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-neutral-900 mb-4">Website Mockup</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            A preview of how the Ubomi Beads brand comes to life on ubomibeads.com
          </p>
        </div>

        {/* Browser Window Mockup */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Browser Chrome */}
          <div className="bg-neutral-200 px-4 py-3 flex items-center gap-2 border-b border-neutral-300">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-white rounded px-4 py-1.5 text-neutral-600 flex items-center gap-2">
                <Search className="w-4 h-4 text-neutral-400" />
                <span className="text-neutral-500">ubomibeads.com</span>
              </div>
            </div>
          </div>

          {/* Website Navigation */}
          <div className="bg-white border-b border-neutral-200 px-6 py-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <img 
                src={logoWithTagline} 
                alt="Ubomi Beads Logo" 
                style={{ height: '70px' }}
              />
              <nav className="hidden md:flex items-center gap-8">
                <a href="#" className="text-neutral-700 hover:text-neutral-900">Shop</a>
                <a href="#" className="text-neutral-700 hover:text-neutral-900">Our Story</a>
                <a href="#" className="text-neutral-700 hover:text-neutral-900">Impact</a>
                <a href="#" className="text-neutral-700 hover:text-neutral-900">Contact</a>
              </nav>
              <div className="flex items-center gap-4">
                <ShoppingCart className="w-5 h-5 text-neutral-700" />
                <Menu className="w-5 h-5 text-neutral-700 md:hidden" />
              </div>
            </div>
          </div>

          {/* Website Hero */}
          <div className="relative bg-gradient-to-br from-yellow-100 via-red-50 to-green-50 px-6 py-16">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-neutral-900 mb-4">Handcrafted Beauty, Empowered Lives</h1>
              <p className="text-neutral-700 max-w-2xl mx-auto mb-8" style={{ fontSize: '1.125rem' }}>
                Discover unique jewelry made from recycled paper by the artisans of Gugulethu, Cape Town
              </p>
              <div className="flex gap-4 justify-center">
                <button className="bg-neutral-900 text-white px-8 py-3 rounded-lg hover:bg-neutral-800" style={{ backgroundColor: '#FFD100', color: '#1A1A1A' }}>
                  Shop Collection
                </button>
                <button className="bg-white text-neutral-900 px-8 py-3 rounded-lg border-2 hover:bg-neutral-50" style={{ borderColor: '#FFD100', color: '#1A1A1A' }}>
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Our Story Content */}
          <div className="bg-white px-6 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-neutral-900 mb-4">Our Story</h2>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                  Ubomi Beads (meaning "Life" in Xhosa) celebrates the vibrant spirit of Gugulethu, 
                  a township in Cape Town, South Africa.
                </p>
              </div>

              {/* Story Grid */}
              <div className="space-y-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: '#FFD100' }}>
                      <span style={{ color: '#1A1A1A' }}>The Challenge</span>
                    </div>
                    <p className="text-neutral-700 mb-4">
                      The township of Gugulethu faces extreme rates of poverty, with a 50% unemployment rate 
                      and skills deficiencies rooted in the legacy of Apartheid.
                    </p>
                    <p className="text-neutral-700">
                      Traditional gender disparity has further exacerbated conditions for women, 
                      particularly single mothers and their children.
                    </p>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg" style={{ border: '3px solid #FFD100' }}>
                    <img 
                      src={beadsCollection} 
                      alt="Colorful handcrafted beads" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="rounded-lg overflow-hidden shadow-lg order-2 lg:order-1" style={{ border: '3px solid #FFD100' }}>
                    <img 
                      src={hangingBeads} 
                      alt="Hanging bead necklaces" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: '#FFD100' }}>
                      <span style={{ color: '#1A1A1A' }}>Our Mission</span>
                    </div>
                    <p className="text-neutral-700">
                      Ubomi Beads empowers single women, youth, and the community through the production 
                      and international distribution of handcrafted jewelry made from recycled magazine paper.
                    </p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: '#FFD100' }}>
                      <span style={{ color: '#1A1A1A' }}>Our Founding</span>
                    </div>
                    <p className="text-neutral-700">
                      Founded through a multicultural relationship between Gugulethu single mother 
                      Nokuzola "Mama Noks" Matolengwe, American and South African UCT students. 
                      Together, we've created a bridge between communities and continents.
                    </p>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg" style={{ border: '3px solid #FFD100' }}>
                    <img 
                      src={beadsWorn} 
                      alt="Person wearing colorful necklaces" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Values Section */}
              <div className="mt-16">
                <h3 className="text-neutral-900 mb-8 text-center">What We Stand For</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="text-center p-6 rounded-lg" style={{ backgroundColor: '#FFF9E6' }}>
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-3" style={{ backgroundColor: '#FFD100' }}>
                        <value.icon className="w-7 h-7" style={{ color: '#1A1A1A' }} />
                      </div>
                      <h4 className="text-neutral-900 mb-2">{value.title}</h4>
                      <p className="text-neutral-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Website Footer Preview */}
          <div className="bg-neutral-900 text-white px-6 py-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 mb-8">
                <div>
                  <h4 className="mb-4">Shop</h4>
                  <ul className="space-y-2 text-neutral-400">
                    <li>Necklaces</li>
                    <li>Bracelets</li>
                    <li>Earrings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4">About</h4>
                  <ul className="space-y-2 text-neutral-400">
                    <li>Our Story</li>
                    <li>The Artisans</li>
                    <li>Impact</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4">Support</h4>
                  <ul className="space-y-2 text-neutral-400">
                    <li>Contact Us</li>
                    <li>FAQ</li>
                    <li>Shipping</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4">Connect</h4>
                  <ul className="space-y-2 text-neutral-400">
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Newsletter</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400">
                <p>© 2025 Ubomi Beads LLC. Empowering Gugulethu, Cape Town, South Africa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}