"use client";

import { LayoutProvider } from "@once-ui-system/core";

export function Providers({ children }: { children: React.ReactNode }) {
  return <LayoutProvider>{children}</LayoutProvider>;
}
