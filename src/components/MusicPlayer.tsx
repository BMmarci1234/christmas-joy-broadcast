import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';

const christmasSongs = [
  { name: "Andy Williams - It's the Most Wonderful Time of the Year (Official Lyric Video)", file: "Andy Williams - It's the Most Wonderful Time of the Year (Official Lyric Video).mp4" },
  { name: "Bobby Helms - Jingle Bell Rock.mp4", file: "Bobby Helms - Jingle Bell Rock.mp4" },
  { name: "Brenda Lee - Rockin' Around The Christmas Tree (Official Lyric Video)", file: "Brenda Lee - Rockin' Around The Christmas Tree (Official Lyric Video).mp4" },
  { name: "Darlene Love - Christmas (Baby Please Come Home) (Official Music Video)", file: "Darlene Love - Christmas (Baby Please Come Home) (Official Music Video).mp4" },
  { name: "Eartha Kitt - Santa Baby (Lyrics).mp4", file: "Eartha Kitt - Santa Baby (Lyrics).mp4" },
  { name: "Gene Autry - Rudolph the Red-Nosed Reindeer (Audio).mp4", file: "Gene Autry - Rudolph the Red-Nosed Reindeer (Audio).mp4" },
  { name: "Have Yourself A Merry Little Christmas ★ FRANK SINATRA ♬", file: "Have Yourself A Merry Little Christmas ★ FRANK SINATRA ♬.mp4" },
  { name: "José Feliciano - Feliz Navidad (Official Audio)", file: "José Feliciano - Feliz Navidad (Official Audio).mp4" },
  { name: "Mariah Carey - All I Want for Christmas Is You (Make My Wish Come True Edition)", file: "Mariah Carey - All I Want for Christmas Is You (Make My Wish Come True Edition).mp4" },
  { name: "Michael Bublé - Holly Jolly Christmas (Lyrics).mp4", file: "Michael Bublé - Holly Jolly Christmas (Lyrics).mp4" },
  { name: "Michael Bublé - It's Beginning To Look A Lot Like Christmas (Official Music Video)", file: "Michael Bublé - It's Beginning To Look A Lot Like Christmas (Official Music Video).mp4" },
  { name: "Nat King Cole - The Christmas Song (Merry Christmas to You) (Official Audio)", file: "Nat King Cole - The Christmas Song (Merry Christmas to You) (Official Audio).mp4" },
  { name: "Sia - Snowman [Official Video].mp4", file: "Sia - Snowman [Official Video].mp4" },
  { name: "The Ronettes - Sleigh Ride (Official Music Video).mp4", file: "The Ronettes - Sleigh Ride (Official Music Video).mp4" },
  { name: "Wham! - Last Christmas (Official Video).mp4", file: "Wham! - Last Christmas (Official Video).mp4" },
  { name: "White Christmas (Official Video).mp4", file: "White Christmas (Official Video).mp4" },
];

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = christmasSongs[currentSongIndex];

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying && !isMuted) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSongIndex, isMuted]);

  const handleNextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % christmasSongs.length);
  };

  const handlePreviousSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + christmasSongs.length) % christmasSongs.length);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleSongEnd = () => {
    handleNextSong();
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Card className="p-4 bg-card/90 backdrop-blur-md border-border/50 christmas-glow max-w-xs">
        <div className="text-sm font-semibold text-foreground mb-3 truncate">
          🎵 {currentSong.name.replace('.mp4', '')}
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePreviousSong}
            className="border-border/50 hover:bg-secondary/20"
          >
            <SkipBack className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleNextSong}
            className="border-border/50 hover:bg-secondary/20"
          >
            <SkipForward className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={toggleMute}
            className={`border-border/50 hover:bg-secondary/20 ${isMuted ? 'bg-destructive/20' : ''}`}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
        </div>

        <audio
          ref={audioRef}
          src={`/songs/${currentSong.file}`}
          onEnded={handleSongEnd}
          onError={(e) => console.error('Audio error:', e)}
          loop={false}
        />
      </Card>
    </div>
  );
};

export default MusicPlayer;