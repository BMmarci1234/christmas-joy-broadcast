import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const ChristmasCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let christmas = new Date(currentYear, 11, 25); // December 25th
      
      // If Christmas has passed this year, target next year's Christmas
      if (now > christmas) {
        christmas = new Date(currentYear + 1, 11, 25);
      }

      const difference = christmas.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-snow backdrop-blur-sm">
      <div className="text-center mb-8">
        <h1 className="text-6xl md:text-8xl font-bold christmas-text mb-4 animate-christmas-pulse">
          Christmas Countdown
        </h1>
        <p className="text-xl md:text-2xl golden-text">
          Time until the most magical day of the year
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {timeUnits.map((unit, index) => (
          <Card 
            key={unit.label}
            className="p-6 md:p-8 text-center bg-card/80 backdrop-blur-sm border-border/50 christmas-glow hover:glow-golden transition-all duration-300"
          >
            <div 
              className="text-4xl md:text-6xl font-bold golden-text mb-2 animate-countdown-tick"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm md:text-lg text-muted-foreground uppercase tracking-wider">
              {unit.label}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg md:text-xl text-foreground/80">
          {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes, {timeLeft.seconds} seconds left until Christmas
        </p>
      </div>
    </div>
  );
};

export default ChristmasCountdown;