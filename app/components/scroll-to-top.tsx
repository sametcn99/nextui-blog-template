"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { UpArrowIcon } from "@/public/ArrowIcon";

export default function ScrollToTop() {
  // State to manage the visibility of the "scroll to top" button
  const [visible, setVisible] = useState(false);

  // Function to scroll back to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add a scroll event listener to track when to show or hide the button
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });

    // Cleanup: remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", () => {
        // You can also remove the listener here for cleanup.
      });
    };
  }, []); // An empty dependency array ensures that this effect runs only once when the component is mounted.

  // Render the "scroll to top" button, which is visible or hidden based on the 'visible' state
  return (
    <div
      className={`fixed bottom-4 right-4 ${
        visible ? "visible" : "hidden"
      } hover:pb-1`}
    >
      <Button isIconOnly aria-label="Scroll to Top" onClick={scrollToTop}>
        <UpArrowIcon
          size={undefined}
          height={undefined}
          width={undefined}
          label={undefined}
        />
      </Button>
    </div>
  );
}
