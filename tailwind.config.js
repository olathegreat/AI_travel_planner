/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],	
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["outfit"], // Use the string name, NOT require()
        "outfit-medium": ["outfit-medium"],
        "outfit-bold": ["outfit-bold"],
      }
    },
  },
  plugins: [],
}


