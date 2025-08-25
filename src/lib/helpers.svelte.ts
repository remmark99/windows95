import { applicationsState } from "../state.svelte";

export function focusApplication(title: string) {
  if (!applicationsState.has(title)) return;

  for (const [application, { isFocused }] of applicationsState) {
    if (isFocused) {
      applicationsState.set(application, {
        ...applicationsState.get(application),
        isFocused: false
      });
      break;
    }
  }

  const isMinimized = applicationsState.get(title)!.isMinimized;
  applicationsState.set(title, {
    ...applicationsState.get(title),
    isFocused: true
  });
}
