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
    </div>
  );
}