import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "christmas-pulse": {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 20px hsl(var(--primary) / 0.3)",
          },
          "50%": {
            transform: "scale(1.05)",
            boxShadow: "0 0 40px hsl(var(--primary) / 0.6)",
          },
        },
        "golden-shimmer": {
          "0%": {
            backgroundPosition: "-200% center",
          },
          "100%": {
            backgroundPosition: "200% center",
          },
        },
        "countdown-tick": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "christmas-pulse": "christmas-pulse 2s ease-in-out infinite",
        "golden-shimmer": "golden-shimmer 3s ease-in-out infinite",
        "countdown-tick": "countdown-tick 0.6s ease-in-out",
      },
      backgroundImage: {
        "gradient-christmas": "var(--gradient-christmas)",
        "gradient-golden": "var(--gradient-golden)",
        "gradient-snow": "var(--gradient-snow)",
      },
      boxShadow: {
        "christmas": "var(--shadow-christmas)",
        "golden": "var(--shadow-golden)",
        "glow-christmas": "var(--glow-christmas)",
        "glow-golden": "var(--glow-golden)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
