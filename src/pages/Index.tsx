import ChristmasCountdown from '@/components/ChristmasCountdown';
import MusicPlayer from '@/components/MusicPlayer';
import CookieRecipesButton from '@/components/CookieRecipesButton';
import SnowEffect from '@/components/SnowEffect';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <SnowEffect />
      <ChristmasCountdown />
      <MusicPlayer />
      <CookieRecipesButton />
    </div>
  );
};

export default Index;
