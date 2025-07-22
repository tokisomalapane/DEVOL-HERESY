import { Suspense } from "react";
import EssentialsPage from "@/components/essentials-page";

export default function EssentialsPageWrapper() {
  return (
    <Suspense fallback={<div className="p-8">Loading essentials page...</div>}>
      <EssentialsPage />
    </Suspense>
  );
}