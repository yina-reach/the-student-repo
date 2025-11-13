import { useState } from "react";
import BiosSection from "./BiosSection";

export default function StudentsSubtabs() {
  const subtabs = [
    { key: "humble", label: "Humble Flex" },
    { key: "projects", label: "Side Projects" },
    { key: "bios", label: "Bios" },
  ] as const;

  const [active, setActive] =
    useState<(typeof subtabs)[number]["key"]>("humble");
    useState<(typeof subtabs)[number]["key"]>("projects");

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-1">
          {subtabs.map((tab) => {
            const isActive = active === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`px-4 py-1.5 rounded-full text-sm transition
                  ${
                    isActive
                      ? "bg-brand-blue text-white shadow-sm"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
      {active === "bios" && <BiosSection />}
    </>
  );
}
