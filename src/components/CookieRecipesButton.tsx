import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Cookie } from 'lucide-react';

const CookieRecipesButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cookies');
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <Button
        onClick={handleClick}
        className="bg-gradient-christmas hover:bg-gradient-golden text-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-christmas hover:shadow-golden transition-all duration-300 animate-christmas-pulse border-2 border-accent/30"
      >
        <Cookie className="mr-2 h-6 w-6" />
        Do you want to see some Christmas cookie recipes? Click here
      </Button>
    </div>
  );
};

export default CookieRecipesButton;