// Store hours: Mon–Sat 10 AM – 9 PM, Sunday closed (Austin/CT time)
export function getStoreStatus() {
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Chicago" }));
  const day = now.getDay(); // 0=Sun … 6=Sat
  const mins = now.getHours() * 60 + now.getMinutes();
  const OPEN = 10 * 60;  // 10:00 AM
  const CLOSE = 21 * 60; // 9:00 PM

  if (day === 0) {
    return { isOpen: false, badge: "Closed today · Open Mon–Sat", status: "Closed today · Opens Mon at 10 AM" };
  }
  if (mins < OPEN) {
    return { isOpen: false, badge: "Opens today at 10 AM", status: "Opens today at 10 AM · Free parking" };
  }
  if (mins >= CLOSE) {
    const next = day === 6 ? "Mon" : "tomorrow";
    return { isOpen: false, badge: `Closed · Opens ${next} at 10 AM`, status: `Closed · Opens ${next} at 10 AM` };
  }
  return { isOpen: true, badge: "Open now · Visit us", status: "Open until 9 PM · Free parking" };
}
