import logomarkWithWhiteBackdrop from 'figma:asset/00416aa97e67206f08d97a16b5a98f441e28c9af.png';
import logomarkWithDropShadow from 'figma:asset/d65df7682550517c58634d463651424ab99f7e4e.png';
import xTwitterPost from 'figma:asset/f8f0abd114d52ff5dca0f9a34b62ea9e1cd84add.png';
import instagramPost from 'figma:asset/638eb079991468313b53f84543c195d44ba314f0.png';
import storyReelPost from 'figma:asset/595225bff636f7b6b6eb610177195b185deda218.png';
import { Instagram, Twitter, Video } from "lucide-react";

export function SocialMedia() {
  return (
    <section className="py-20 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-neutral-900 mb-4">Social Media Samples</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Examples of brand applications across social media platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* X (Twitter) Post */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center">
                <Twitter className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-neutral-900">X (Twitter) Post</p>
                <p className="text-neutral-500">1200 × 1200px</p>
              </div>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src={xTwitterPost} 
                alt="Ubomi Beads X Twitter Post Sample" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Instagram Post */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                <Instagram className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <p className="text-neutral-900">Instagram Post</p>
                <p className="text-neutral-500">1920 × 1080px</p>
              </div>
            </div>
            <div 
              className="rounded-lg overflow-hidden"
              style={{ aspectRatio: '1920/1080' }}
            >
              <img 
                src={instagramPost} 
                alt="Ubomi Beads Instagram Post Sample" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Story/Reel */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Video className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-neutral-900">Story/Reel</p>
                <p className="text-neutral-500">1080 × 1920px</p>
              </div>
            </div>
            <div 
              className="rounded-lg overflow-hidden mx-auto"
              style={{ aspectRatio: '9/16', maxWidth: '200px' }}
            >
              <img 
                src={storyReelPost} 
                alt="Ubomi Beads Story Reel Sample" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Profile Picture Template */}
        <div className="bg-white rounded-lg p-8 mb-12">
          <h3 className="text-neutral-900 mb-6">Profile Picture</h3>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <p className="text-neutral-600 mb-4">Standard Size (400 × 400px)</p>
              <div className="w-48 h-48 rounded-full bg-white border-4 border-neutral-200 flex items-center justify-center mx-auto overflow-hidden">
                <img 
                   src={logomarkWithDropShadow} 
                  alt="Ubomi Beads Profile Picture" 
                  style={{ width: '70%' }}
                />
              </div>
            </div>
            <div className="text-center">
              <p className="text-neutral-600 mb-4">With Background</p>
              <div 
                className="w-48 h-48 rounded-full flex items-center justify-center mx-auto overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, #6BAE4F 0%, #2E5A9E 100%)'
                }}
              >
                <img 
                  src={logomarkWithWhiteBackdrop} 
                  alt="Ubomi Beads Profile Picture" 
                  style={{ width: '60%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Guidelines */}
        <div className="bg-white rounded-lg p-8">
          <h3 className="text-neutral-900 mb-6">Social Media Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-neutral-900 mb-3">Brand Voice</h4>
              <ul className="space-y-2 text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span>Authentic and community-focused</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span>Inspirational and empowering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span>Educational about sustainability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span>Celebrating artisan stories</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-neutral-900 mb-3">Content Pillars</h4>
              <ul className="space-y-2 text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Artisan spotlights and behind-the-scenes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Product showcases and styling tips</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Community impact and success stories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Sustainability education and tips</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-neutral-200">
            <h4 className="text-neutral-900 mb-3">Recommended Hashtags</h4>
            <div className="flex flex-wrap gap-2">
              {[
                '#UbomiBeads',
                '#EmpowermentAndStyle',
                '#HandcraftedSA',
                '#SustainableJewelry',
                '#GugulethuCommunity',
                '#RecycledBeads',
                '#SouthAfricanCraft',
                '#EthicalFashion',
                '#ArtisanMade',
                '#SocialImpact'
              ].map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}