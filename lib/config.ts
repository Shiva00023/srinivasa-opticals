// Single source for business details. Replace with real values.
export const SITE = {
  name: "Srinivas Opticals",
  phone: "919999999999",
  phoneDisplay: "+91 99999 99999",
  email: "hello@srinivasopticals.com",
  address: "Srinivas Opticals, Hyderabad, Telangana",
};
export const waLink = (msg: string) => `https://wa.me/${SITE.phone}?text=${encodeURIComponent(msg)}`;
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`;
