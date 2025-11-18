import { BrandHero } from "./components/BrandHero";
import { BrandOverview } from "./components/BrandOverview";
import { BrandStory } from "./components/BrandStory";
import { LogoElements } from "./components/LogoElements";
import { ColorPalette } from "./components/ColorPalette";
import { Typography } from "./components/Typography";
import { LogoUsage } from "./components/LogoUsage";
import { BrandApplications } from "./components/BrandApplications";
import { SocialMedia } from "./components/SocialMedia";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <BrandHero />
      <BrandOverview />
      <LogoElements />
      <ColorPalette />
      <Typography />
      <LogoUsage />
      <BrandApplications />
      <SocialMedia />
      <BrandStory />
      
      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-neutral-400">
            © 2025 Ubomi Beads LLC. All rights reserved.
          </p>
          <p className="text-neutral-500 mt-2">
            Empowering Gugulethu, Cape Town, South Africa
          </p>
        </div>
      </footer>
    </div>
  );
}