/**
 * Pointer-gesture guards for the Ordo map (defect A).
 *
 * Kept free of React and DOM types so the rules can be unit-tested in node:
 * the map must never turn a press on a control into a pan, and a pan must not
 * start until the pointer has clearly travelled.
 */

/**
 * Pointer travel (px) required before a press becomes a pan. Below this the
 * view does not move and the pointer is never captured, so a click on a card
 * button survives normal hand jitter.
 */
export const DRAG_THRESHOLD_PX = 5;

const INTERACTIVE_SELECTOR =
  'button, a, input, textarea, select, label, summary, [role="button"], [role="link"], [data-ordo-interactive]';

/**
 * True when a press began on something the user is allowed to click. Those
 * presses must never become a pan gesture: capturing the pointer at press time
 * retargets `pointerup` to the pan layer, so the browser never dispatches the
 * `click` on the control and every card action looks dead.
 */
export function isInteractiveTarget(target: EventTarget | null): boolean {
  if (!target || typeof (target as Element).closest !== 'function') return false;
  return !!(target as Element).closest(INTERACTIVE_SELECTOR);
}
