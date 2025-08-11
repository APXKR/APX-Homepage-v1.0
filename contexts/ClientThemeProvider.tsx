'use client';

import { ThemeProvider } from './ThemeContext';
import type { ReactNode } from 'react';

export function ClientThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
