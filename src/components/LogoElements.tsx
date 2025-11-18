import logoElementsImage from 'figma:asset/c1337e6ef07725421843bad6b151b28e4d9a5a16.png';

export function LogoElements() {
  return (
    <section className="py-20 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-neutral-900 mb-4">Elements of the Ubomi Beads Logo</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Understanding the components that make up the brand identity.
          </p>
        </div>

        <div className="bg-white rounded-lg p-12 shadow-sm mb-12">
          <img 
            src={logoElementsImage} 
            alt="Ubomi Beads Logo Elements Breakdown" 
            className="mx-auto"
            style={{ maxWidth: '100%', width: '100%' }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8">
            <div className="mb-4">
              <h3 className="text-neutral-900 mb-2">The Ubomi Mark</h3>
            </div>
            <p className="text-neutral-700">
              The colorful bead symbol represents the handcrafted beads made from recycled paper. 
              The flowing curves in green, red, blue, and yellow symbolize the vibrant colors 
              of the South African flag and the creative spirit of Gugulethu.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8">
            <div className="mb-4">
              <h3 className="text-neutral-900 mb-2">The Ubomi Beads Logotype</h3>
              <p className="text-neutral-600">(Geo Sans Light)</p>
            </div>
            <p className="text-neutral-700">
              The clean, modern typeface communicates professionalism and accessibility. 
              The distinctive "O" features a golden accent that echoes the warmth and 
              optimism of our mission.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8">
            <div className="mb-4">
              <h3 className="text-neutral-900 mb-2">The Ubomi Tagline</h3>
              <p className="text-neutral-600">(Avenir Book)</p>
            </div>
            <p className="text-neutral-700">
              "Empowerment & Style" captures our dual commitment to creating economic 
              opportunities while producing beautiful, fashionable jewelry that makes a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}