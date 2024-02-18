export const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
  "mod+shift+s": "strikethrough",
} as const;

export type Hotkey = keyof typeof HOTKEYS;
export type Mark = (typeof HOTKEYS)[Hotkey];

export const LIST_TYPES = ["numbered-list", "bulleted-list"];
export const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];
