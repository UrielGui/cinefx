import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function useThemeMode() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark'); // use "dark" to activate dark mode or "light" to light mode
  });

  return true;
}

export function useThemeModeImage(lightImage, darkImage) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  let themeMode = {
    light: lightImage,
    dark: darkImage,
  };

  return themeMode;
}
