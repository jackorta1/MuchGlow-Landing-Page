"use client"; // Use this for client-side functionality

import { usePathname, useSearchParams, useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = searchParams.get("locale") || "en"; // Default to 'en' if locale is not set

  // Function to change the language
  const changeLanguage = (newLocale: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("locale", newLocale);

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      {/* Buttons to switch between languages */}
      <button
        onClick={() => changeLanguage("en")}
        disabled={locale === "en"}
        style={{ marginRight: "10px" }}
      >
        English
      </button>
      <button onClick={() => changeLanguage("ar")} disabled={locale === "ar"}>
        العربية
      </button>
    </div>
  );
};

export default LanguageSwitcher;
