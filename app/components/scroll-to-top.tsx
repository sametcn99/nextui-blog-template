"use client";
import { Tooltip } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { UpArrowIcon } from "@/public/ArrowIcon";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });

    // Temizlik işlemi: bileşen sona erdiğinde olay dinleyicisini kaldırın
    return () => {
      window.removeEventListener("scroll", () => {
        // Dinleyiciyi kaldırmak için aynı işlemi burada da yapabilirsiniz.
      });
    };
  }, []); // Boş bağımlılık dizisi, yalnızca bileşen oluşturulduğunda çalışmasını sağlar.

  return (
    <div className={`fixed bottom-4 right-4 ${visible ? "visible" : "hidden"}`}>
      <Button isIconOnly aria-label="Like" onClick={scrollToTop}>
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
