"use client";

import * as React from "react";
import {
  IconCircle,
  IconDeviceDesktop,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import styled from "@emotion/styled";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 0.8rem;
  background-color: #ff69b4;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  position: relative;
  &:hover {
    color: white;
  }
`;

export function DropdownToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <IconCircle />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="rounded-full bg-foreground text-background">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <IconSun />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <IconMoon />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <IconDeviceDesktop />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
