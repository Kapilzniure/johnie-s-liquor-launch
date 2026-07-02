/**
 * Sole integration point for VIP Club email capture. Today this posts to the
 * same Formspree endpoint the feedback survey uses, tagged so submissions are
 * filterable in the Formspree inbox. Swapping to Mailchimp/Brevo/ConvertKit
 * later means editing only this function — nothing else in the app needs to
 * know where signups actually go.
 */

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgzdaoa";

export interface VipSignupResult {
  ok: boolean;
  error?: string;
}

export const subscribeToVipClub = async (email: string, name?: string): Promise<VipSignupResult> => {
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
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
