import React from "react";

import { DropdownToggle } from "@/components/dropdown-toggle";
import { SimpleToggle } from "@/components/simple-toggle";

function HomePage() {
  return (
    <div className="min-h-screen flex justify-center items-center gap-2">
      <DropdownToggle />
      <SimpleToggle />
    </div>
  );
}

export default HomePage;
