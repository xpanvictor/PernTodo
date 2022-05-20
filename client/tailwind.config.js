module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#86198f',
          secondary: '#d8b4fe',
          accent: '#111827',
          neutral: '#e5e7eb',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
      'dark',
      'cupcake',
    ],
  },
  plugins: [require('daisyui')],
};
