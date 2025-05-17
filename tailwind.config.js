/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bae0fd',
          300: '#90cafc',
          400: '#5eacf9',
          500: '#3b8ef5',
          600: '#2570e9',
          700: '#1d5bd7',
          800: '#1e4baf',
          900: '#1e418a',
          950: '#172a54',
        },
        secondary: {
          50: '#f2fbf9',
          100: '#d6f5ef',
          200: '#ade9df',
          300: '#79d5c9',
          400: '#44b8ad',
          500: '#2a9d93',
          600: '#1f7d78',
          700: '#1c6562',
          800: '#1a5150',
          900: '#194442',
          950: '#0a2a2a',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdca8',
          300: '#ffc272',
          400: '#ff9e3b',
          500: '#ff7e14',
          600: '#f55c07',
          700: '#cc4108',
          800: '#a1320f',
          900: '#832c10',
          950: '#461304',
        },
        dark: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        travel: {
          sand: '#f5f0e6',
          ocean: '#1a73e8',
          sunset: '#ff7e5f',
          forest: '#2e7d32',
          mountain: '#5d4037',
          sky: '#bbdefb',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Montserrat', 'serif'],
        heading: ['Montserrat', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 0 20px rgba(0, 0, 0, 0.05), 0 0px 20px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 15px 30px rgba(0, 0, 0, 0.1), 0 8px 20px rgba(0, 0, 0, 0.06)',
        'floating': '0 10px 40px -10px rgba(0, 0, 0, 0.2), 0 0 20px -5px rgba(0, 0, 0, 0.1)',
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-travel': 'linear-gradient(135deg, #1a73e8 0%, #8e44ad 100%)',
        'texture-light': 'url("/images/texture-light.png")',
        'texture-dots': 'radial-gradient(circle, #e2e8f0 1px, transparent 1px)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'inherit',
            a: {
              color: '#3b8ef5',
              '&:hover': {
                color: '#1d5bd7',
              },
            },
          },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
