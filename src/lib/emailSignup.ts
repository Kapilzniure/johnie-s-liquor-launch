/**
 * Sole integration point for VIP Club email capture. This posts to the shared
 * form endpoint so signups reach the configured inbox without touching the UI.
 */

import { FORM_SUBMISSION_ENDPOINT } from "@/lib/constants";

export interface VipSignupResult {
  ok: boolean;
  error?: string;
}

export const subscribeToVipClub = async (email: string, name?: string): Promise<VipSignupResult> => {
  try {
    const res = await fetch(FORM_SUBMISSION_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new URLSearchParams({
        email,
        name: name ?? "",
        form_type: "vip_signup",
        _subject: "New Johnnies VIP Club signup",
      }),
    });
    if (!res.ok) return { ok: false, error: `HTTP ${res.status}` };
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "Network error" };
  }
};
