"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { closeSettings } from "@/app/redux/slice/ui.slice";
import { updateSettings, resetSettings } from "@/app/redux/slice/settingsSlice";
import Sheet from "../shared/Sheet";

export default function Sidebar() {
  const dispatch = useAppDispatch();
  const { settingsOpen } = useAppSelector((state) => state.ui);
  const { arabicFont, arabicSize, translationSize } = useAppSelector((state) => state.settings);

  return (
    <Sheet
      open={settingsOpen}
      onClose={() => dispatch(closeSettings())}
      side="left"
      width="w-96"
      title="Settings"
    >
      <div className="flex flex-col h-full p-4 space-y-6">

        {/* Section: Arabic Font */}
        <div>
          <label className="text-secondary text-sm">
            Arabic Font
          </label>
          <select
            value={arabicFont}
            onChange={(e) =>
              dispatch(updateSettings({ arabicFont: e.target.value as any }))
            }
            className="input mt-2"
          >
            <option value="amiri">Amiri</option>
            <option value="uthmanic">Uthmanic</option>
          </select>
        </div>

        {/* Arabic Size */}
        <div>
          <label className="text-secondary text-sm">
            Arabic Font Size ({arabicSize}px)
          </label>
          <input
            type="range"
            min="20"
            max="48"
            value={arabicSize}
            onChange={(e) =>
              dispatch(updateSettings({ arabicSize: Number(e.target.value) }))
            }
            className="w-full mt-2"
          />
        </div>

        {/* Translation Size */}
        <div>
          <label className="text-secondary text-sm">
            Translation Size ({translationSize}px)
          </label>
          <input
            type="range"
            min="12"
            max="24"
            value={translationSize}
            onChange={(e) =>
              dispatch(
                updateSettings({
                  translationSize: Number(e.target.value),
                })
              )
            }
            className="w-full mt-2"
          />
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Reset Button */}
        <button
          onClick={() => dispatch(resetSettings())}
          className="btn btn-outline w-full"
        >
          Reset Settings
        </button>
      </div>
    </Sheet>
  );
}
