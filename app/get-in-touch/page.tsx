"use client";
import { GetInTouch } from "@/components/main/get-in-touch";
import { useEffect } from "react";

export default function GetInTouchPage() {
  // Add console log and debugger when component renders
  useEffect(() => {
    console.log("GetInTouchPage mounted");
    debugger; // This will pause execution in browser dev tools
  }, []);

  return <GetInTouch />;
} 