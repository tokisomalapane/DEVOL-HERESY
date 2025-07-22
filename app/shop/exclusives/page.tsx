import React, { Suspense } from "react";
import ExclusivesPage from "@/components/exclusives-page";

export default function ExclusivesPageWrapper() {
  return (
    <Suspense fallback={<div className="p-8">Loading exclusives page...</div>}>
      <ExclusivesPage />
    </Suspense>
  );
}