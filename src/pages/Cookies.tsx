import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MusicPlayer from '@/components/MusicPlayer';
import SnowEffect from '@/components/SnowEffect';

interface CookieRecipe {
  name: string;
  hasImage: boolean;
  hasVideo: boolean;
  hasDescription: boolean;
  imagePath?: string;
  videoPath?: string;
  description?: string;
}

const Cookies = () => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useState<CookieRecipe[]>([]);
  const [selectedCookie, setSelectedCookie] = useState<CookieRecipe | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Simulate reading from christmas-cookies folder structure
    // In a real implementation, you would fetch this data from your file system
    const mockCookies: CookieRecipe[] = [
      {
        name: "Gingerbread Cookies",
        hasImage: true,
        hasVideo: false,
        hasDescription: true,
        imagePath: "/christmas-cookies/gingerbread/main.jpg",
        description: "Classic gingerbread cookies perfect for decorating! These spiced cookies are crispy on the outside and chewy on the inside. Mix flour, brown sugar, butter, molasses, ginger, cinnamon, and cloves. Roll out the dough and cut into festive shapes. Bake at 350°F for 8-10 minutes."
      },
      {
        name: "Sugar Cookies",
        hasImage: true,
        hasVideo: true,
        hasDescription: true,
        imagePath: "/christmas-cookies/sugar-cookies/main.jpg",
        videoPath: "/christmas-cookies/sugar-cookies/demo.mp4",
        description: "Soft and sweet sugar cookies that melt in your mouth. Perfect for Christmas decorating with royal icing and sprinkles. Cream butter and sugar, add eggs and vanilla, then mix in flour and baking powder. Roll, cut, and bake at 375°F for 6-8 minutes."
      },
      {
        name: "Chocolate Chip Cookies",
        hasImage: true,
        hasVideo: false,
        hasDescription: true,
        imagePath: "/christmas-cookies/chocolate-chip/main.jpg",
        description: "Everyone's favorite chocolate chip cookies with a Christmas twist! Add red and green M&Ms for festive colors. Mix butter, both sugars, eggs, vanilla, flour, baking soda, salt, and chocolate chips. Drop spoonfuls on baking sheet and bake at 375°F for 9-11 minutes."
      }
    ];

    setCookies(mockCookies);
  }, []);

  const handleCookieClick = (cookie: CookieRecipe) => {
    setSelectedCookie(cookie);
    setShowVideo(cookie.hasVideo);
  };

  const handleBackToList = () => {
    setSelectedCookie(null);
    setShowVideo(false);
  };

  if (selectedCookie) {
    return (
      <div className="min-h-screen bg-background/80 backdrop-blur-sm p-4">
        <SnowEffect />
        <MusicPlayer />
        
        <div className="max-w-4xl mx-auto">
          <Button
            onClick={handleBackToList}
            className="mb-6 bg-secondary hover:bg-secondary/80"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cookie Recipes
          </Button>

          <Card className="p-8 bg-card/90 backdrop-blur-md border-border/50 christmas-glow">
            <h1 className="text-4xl font-bold christmas-text mb-6 text-center">
              {selectedCookie.name}
            </h1>

            {/* Video Section */}
            {showVideo && selectedCookie.hasVideo ? (
              <div className="mb-6">
                <video
                  controls
                  className="w-full rounded-lg shadow-golden"
                  poster={selectedCookie.imagePath}
                >
                  <source src={selectedCookie.videoPath} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div className="mb-6 text-center p-8 bg-muted/50 rounded-lg">
                <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
                <p className="text-muted-foreground">No video available</p>
              </div>
            )}

            {/* Image Section */}
            {selectedCookie.hasImage && (
              <div className="mb-6 text-center">
                <img
                  src={selectedCookie.imagePath}
                  alt={selectedCookie.name}
                  className="mx-auto rounded-lg shadow-golden max-w-md w-full"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            )}

            {/* Description Section */}
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold golden-text mb-4">Recipe & Instructions</h2>
              {selectedCookie.hasDescription && selectedCookie.description ? (
                <p className="text-foreground/90 leading-relaxed text-lg">
                  {selectedCookie.description}
                </p>
              ) : (
                <p className="text-muted-foreground italic">None available</p>
              )}
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background/80 backdrop-blur-sm p-4">
      <SnowEffect />
      <MusicPlayer />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <Button
            onClick={() => navigate('/')}
            className="mb-6 bg-secondary hover:bg-secondary/80"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Christmas Countdown
          </Button>
          
          <h1 className="text-5xl md:text-7xl font-bold christmas-text mb-4">
            🍪 Christmas Cookie Recipes 🍪
          </h1>
          <p className="text-xl golden-text">
            Delicious holiday treats to make your Christmas sweeter
          </p>
        </div>

        {cookies.length === 0 ? (
          <Card className="p-8 bg-card/90 backdrop-blur-md border-border/50 text-center">
            <p className="text-xl text-muted-foreground">None available</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cookies.map((cookie, index) => (
              <Card
                key={index}
                className="p-6 bg-card/90 backdrop-blur-md border-border/50 christmas-glow hover:glow-golden transition-all duration-300 cursor-pointer group"
                onClick={() => handleCookieClick(cookie)}
              >
                {cookie.hasImage ? (
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src={cookie.imagePath}
                      alt={cookie.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNvb2tpZSBJbWFnZTwvdGV4dD48L3N2Zz4=';
                      }}
                    />
                  </div>
                ) : (
                  <div className="mb-4 h-48 bg-muted/50 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">No image available</p>
                  </div>
                )}
                
                <h3 className="text-xl font-semibold golden-text mb-2 group-hover:christmas-text transition-all duration-300">
                  {cookie.name}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  {cookie.hasVideo && (
                    <span className="flex items-center gap-1">
                      <Play className="h-3 w-3" />
                      Video
                    </span>
                  )}
                  {cookie.hasDescription && (
                    <span className="flex items-center gap-1">
                      <FileText className="h-3 w-3" />
                      Recipe
                    </span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cookies;