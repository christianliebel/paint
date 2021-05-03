export function normalizeHotkey(hotkey) {
  // Add Mac hotkeys, Ctrl+I -> Ctrl+I,⌘+I
  hotkey = hotkey.replace(/(Ctrl\+(\S+))/g, '$1,⌘+$2'); // Map between classic Paint & hotkeys.js

  hotkey = hotkey.replace(/Shft/g, 'shift');
  hotkey = hotkey.replace(/PgUp/g, 'pageup');
  hotkey = hotkey.replace(/PgDn/g, 'pagedown');
  return hotkey;
}