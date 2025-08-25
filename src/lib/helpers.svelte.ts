import { applicationsState } from "../state.svelte";

export function focusApplication(title: string) {
  if (!applicationsState.has(title)) return;

  for (const [application, { isFocused, isMinimized }] of applicationsState) {
    if (isFocused) {
      applicationsState.set(application, {
        isMinimized,
        isFocused: false
      });
      break;
    }
  }

  const isMinimized = applicationsState.get(title)!.isMinimized;
  applicationsState.set(title, {
    isMinimized,
    isFocused: true
  });
}
