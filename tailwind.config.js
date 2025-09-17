module.exports = {
  content: [
    "./*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#1A1D23", // sophisticated foundation
        secondary: "#2C3E50", // professional depth
        accent: "#ee733a", // luxury highlight
        
        // Background Colors
        background: "#FAFBFC", // clean canvas
        surface: "#F4F6F8", // subtle elevation
        
        // Text Colors
        'text-primary': "#2C3E50", // professional authority
        'text-secondary': "#6B7280", // clear hierarchy
        
        // Status Colors
        success: "#059669", // positive confirmation - emerald-600
        warning: "#D97706", // attention without alarm - amber-600
        error: "#DC2626", // helpful guidance - red-600
        
        // Extended Gray Scale for Automotive Theme
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        
        // Automotive Heritage Palette
        charcoal: {
          50: "#F8F9FA",
          100: "#F1F3F4",
          200: "#E8EAED",
          300: "#DADCE0",
          400: "#BDC1C6",
          500: "#9AA0A6",
          600: "#80868B",
          700: "#5F6368",
          800: "#3C4043",
          900: "#1A1D23", // primary
        },
        
        // Metallic Accents
        bronze: {
          50: "#FEFCF3",
          100: "#FDF6E3",
          200: "#FAECC2",
          300: "#F6E199",
          400: "#F0D470",
          500: "#C9A96E", // accent
          600: "#B8941F",
          700: "#8B6914",
          800: "#5D440D",
          900: "#2F2207",
        }
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-lg': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'section-title': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'section-title-lg': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'premium': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'automotive': '0 20px 40px -12px rgba(26, 29, 35, 0.25)',
        'none': 'none',
      },
      
      borderRadius: {
        'automotive': '0.75rem',
        'premium': '1rem',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
      },
      
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'automotive': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      
      backdropBlur: {
        'automotive': '12px',
      },
      
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.transition-smooth': {
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.transition-automotive': {
          transition: 'all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        },
        '.bg-gradient-automotive': {
          background: 'linear-gradient(135deg, #1A1D23 0%, #2C3E50 100%)',
        },
        '.text-gradient-luxury': {
          background: 'linear-gradient(135deg, #ee733a 0%, #B8860B 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.glass-automotive': {
          'backdrop-filter': 'blur(12px)',
          'background-color': 'rgba(255, 255, 255, 0.1)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
        }
      }
      addUtilities(newUtilities)
    }
  ],
}