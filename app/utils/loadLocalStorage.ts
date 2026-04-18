const defaultSettings = {
  arabicFont: "cairo",
  arabicSize: 28,
  translationSize: 18,
};

export const loadSettings = () => {
  if (typeof window === "undefined") return defaultSettings;

  try {
    const data = localStorage.getItem("settings");
    return data ? JSON.parse(data) : defaultSettings;
  } catch {
    return defaultSettings;
  }
};
