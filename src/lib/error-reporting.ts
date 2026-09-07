/**
 * Generic error reporting utility.
 * Reports errors to the console and can be extended to send to any
 * external error-tracking service (e.g. Sentry, Datadog, etc.).
 */
export function reportError(
  error: unknown,
  context: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;
  console.error("[Error Report]", error, context);
}
