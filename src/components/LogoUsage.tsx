import logoWithTagline from 'figma:asset/bde136ed1498b8da7254d45ccfd0d9ab27c6bd5d.png';
import logoWithoutTagline from 'figma:asset/0e15b1ed0e1eb2fa64790bb9a613c577c0c2f3ce.png';
import logomark from 'figma:asset/713ab48f01dd08cacefbfb3f88a979f22d8756e7.png';
import logoPaddingExample from 'figma:asset/623f03e499937b944f61bbf8c99c7c3c609bec68.png';
import logoPaddingDemonstration from 'figma:asset/2c6f0147910aac3f9fcf7e4f2a67ff1f8c0dc3d0.png';
import logoOnLightBackground from 'figma:asset/4370ba0569ad716c1f763aeb206d92c3a86bb772.png';
import logoOnDarkBackground from 'figma:asset/353fb6216e90a2721f56dbc26aff5b340e4ed483.png';
import secondaryAdaptedLogo from 'figma:asset/cf9e0b34f163c9908615cfac7290b53f8d418c1f.png';
import secondaryAdaptedLogomarks from 'figma:asset/18df262674c3dcc53b0a0b1097f552e038a82213.png';
import { CheckCircle2, XCircle } from "lucide-react";

export function LogoUsage() {
  return (
    <section className="py-20 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-neutral-900 mb-4">Logo Usage</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Guidelines for proper logo application across various mediums and contexts.
          </p>
        </div>

        {/* Logo Variations */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8">
            <p className="text-neutral-600 mb-6 text-center">Primary Logo with Tagline</p>
            <div className="bg-white border-2 border-neutral-200 rounded p-8 flex items-center justify-center" style={{ minHeight: '300px' }}>
              <img 
                src={logoWithTagline} 
                alt="Ubomi Beads Primary Logo" 
                style={{ maxWidth: '400px', width: '100%' }}
              />
            </div>
            <p className="text-neutral-600 mt-4 text-center">Use for primary brand applications</p>
          </div>

          <div className="bg-white rounded-lg p-8">
            <p className="text-neutral-600 mb-6 text-center">Logo without Tagline</p>
            <div className="bg-white border-2 border-neutral-200 rounded p-8 flex items-center justify-center" style={{ minHeight: '300px' }}>
              <img 
                src={logoWithoutTagline} 
                alt="Ubomi Beads Logo without tagline" 
                style={{ maxWidth: '400px', width: '400%' }}
              />
            </div>
            <p className="text-neutral-600 mt-4 text-center">Use when space is limited</p>
          </div>

          <div className="bg-white rounded-lg p-8">
            <p className="text-neutral-600 mb-6 text-center">Logomark</p>
            <div className="bg-white border-2 border-neutral-200 rounded p-8 flex items-center justify-center" style={{ minHeight: '300px' }}>
              <img 
                src={logomark} 
                alt="Ubomi Beads Logomark" 
                style={{ maxWidth: '250px', width: '100%' }}
              />
            </div>
            <p className="text-neutral-600 mt-4 text-center">Use for icons and profile images</p>
          </div>
        </div>

        {/* Logo Variations on Backgrounds */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8">
            <p className="text-neutral-600 mb-6 text-center">On Light Backgrounds</p>
            <div className="bg-white border-2 border-neutral-200 rounded p-8 flex items-center justify-center" style={{ minHeight: '300px' }}>
              <img 
                src={logoOnLightBackground} 
                alt="Logo on light background" 
                style={{ maxWidth: '450px', width: '100%' }}
              />
            </div>
             <p className="text-neutral-600 mt-4 text-center">Use for light backgrounds.</p>
          </div>

          <div className="bg-white rounded-lg p-8">
            <p className="text-neutral-600 mb-6 text-center">On Dark Backgrounds</p>
            <div className="bg-white border-2 border-neutral-200 rounded p-8 flex items-center justify-center" style={{ minHeight: '300px'}}>
              <img 
                src={logoOnDarkBackground} 
                alt="Logo on dark background" 
                style={{ maxWidth: '450px', width: '100%' }}
              />
            </div>
             <p className="text-neutral-600 mt-4 text-center">Use for dark backgrounds.</p>
          </div>
        </div>

        {/* Secondary-Adapted Logos */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-neutral-900 mb-3">Secondary-Adapted Logos</h3>
            <p className="text-neutral-600 max-w-3xl mx-auto mb-6">
              The logo is the core expression of the brand. To maintain recognition and consistency across all audiences, 
              use a Primary Logo for all standard communications and Secondary-Adapted Logos for specific strategic contexts. 
              All variations follow strict rules to protect the integrity of the brand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-white rounded-lg p-8">
              <p className="text-neutral-600 mb-6 text-center">Strategic Logo Variant</p>
               <div className="bg-white border-2 border-neutral-200 rounded p-8 flex items-center justify-center" style={{ minHeight: '300px'}}>
                <img 
                  src={secondaryAdaptedLogo} 
                  alt="University of Michigan adapted logo with Making a Difference tagline" 
                  className="w-full"
                  style={{ maxWidth: '500px' }}
                />
              </div>
              <p className="text-neutral-700 mt-4 text-center">
                Logo adapted with partner institution colors and strategic tagline
              </p>
            </div>

             <div className="bg-white rounded-lg p-8">
              <p className="text-neutral-600 mb-6 text-center">Adapted Logomarks</p>
               <div className="bg-white border-2 border-neutral-200 rounded p-8 flex items-center justify-center" style={{ minHeight: '300px'}}>
                <img 
                  src={secondaryAdaptedLogomarks} 
                  alt="Logomarks adapted for University of Michigan, Morocco, and Detroit Lions" 
                  className="w-full"
                  style={{ maxWidth: '500px' }}
                />
              </div>
              <p className="text-neutral-700 mt-4 text-center">
                Logomarks reflecting partner colors (universities, countries, sports teams)
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-8 rounded">
            <p className="text-neutral-800">
              <span className="font-semibold">Important:</span> Secondary-Adapted Logos should only be created for strategic partnerships and must be approved 
              by the brand team to ensure consistency and proper application of partner colors and messaging.
            </p>
          </div>
        </div>

        {/* Do's and Don'ts */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              <h3 className="text-neutral-900">Do</h3>
            </div>
            <ul className="space-y-3 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Maintain adequate clear space around the logo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Use the approved logo files provided</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Scale proportionally to maintain aspect ratio</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Ensure logo is clearly visible on all backgrounds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Use high-resolution files for print materials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Use alternate colors only for legibility or strategy</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-6 h-6 text-red-600" />
              <h3 className="text-neutral-900">Don't</h3>
            </div>
            <ul className="space-y-3 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Alter the proportions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Add effects like shadows, outlines, or gradients</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Rotate or distort the logo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Use incorrect logo version for background color</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Place logo on busy backgrounds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Recreate or redraw the logo</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Minimum Size */}
        <div className="bg-white rounded-lg p-8 mt-8">
          <h3 className="text-neutral-900 mb-4">Minimum Size Requirements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-neutral-600 mb-2">Digital Applications</p>
              <p className="text-neutral-900">The minimum logo width should be determined based on legibility. There is no limit to how large the logo can be presented.</p>
            </div>
            <div>
              <p className="text-neutral-600 mb-2">Print Applications</p>
              <p className="text-neutral-900">Minimum width: 1.5 inches (38mm)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}