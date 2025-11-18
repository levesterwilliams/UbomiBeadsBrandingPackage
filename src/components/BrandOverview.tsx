import { Heart, Recycle, Users, Sparkles, Target, Compass, Star, Lightbulb } from "lucide-react";

export function BrandOverview() {
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
    <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 to-red-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-neutral-900 mb-4">Brand Overview</h2>
          <p className="text-neutral-700 max-w-3xl mx-auto mb-2" style={{ fontSize: '1.125rem' }}>
            Ubomi Beads is a non-profit social enterprise that transforms lives through sustainable craftsmanship. 
            Ubomi Beads empower the community of Gugulethu by creating economic opportunities through the production 
            and international distribution of handcrafted jewelry made from recycled magazine paper.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Brand Purpose */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                <Target className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-neutral-900">Brand Purpose</h3>
            </div>
            <p className="text-neutral-700">
              To empower single women, youth, and communities in Gugulethu through sustainable 
              craftsmanship, creating pathways out of poverty while preserving traditional artistry 
              and promoting environmental consciousness.
            </p>
          </div>

          {/* Brand Positioning */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <Compass className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-neutral-900">Positioning</h3>
            </div>
            <p className="text-neutral-700">
              The leading social enterprise bridging traditional African craftsmanship with 
              international markets, offering ethically-made, sustainable jewelry that tells 
              a story of empowerment and cultural celebration.
            </p>
          </div>
        </div>

        {/* Brand Values */}
        <div className="bg-white rounded-lg p-8 shadow-md mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <Star className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-neutral-900">Core Values</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100 mb-3">
                  <value.icon className="w-7 h-7 text-yellow-600" />
                </div>
                <h4 className="text-neutral-900 mb-2">{value.title}</h4>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Personality */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-neutral-900">Brand Personality</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-neutral-900 mb-2">Authentic & Warm</h4>
              <p className="text-neutral-600">
                Genuine connections rooted in community spirit and personal craftsmanship.
              </p>
            </div>
            <div>
              <h4 className="text-neutral-900 mb-2">Vibrant & Colorful</h4>
              <p className="text-neutral-600">
                Celebrating the rich culture and energy of South African heritage.
              </p>
            </div>
            <div>
              <h4 className="text-neutral-900 mb-2">Inspiring & Hopeful</h4>
              <p className="text-neutral-600">
                Creating positive change through creativity, resilience, and opportunity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
