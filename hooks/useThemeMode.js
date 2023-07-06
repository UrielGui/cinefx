import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function useThemeMode() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('light'); // use "dark" to activate dark mode or "light" to light mode
  });

  return true;
}

export function useThemeModeItems(lightItem, darkItem) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  let themeMode = {
    light: lightItem,
    dark: darkItem,
  };

  return themeMode;
}
