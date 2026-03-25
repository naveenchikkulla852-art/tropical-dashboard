import { FALLBACK_DESTINATIONS } from './constants';

/**
 * Normalises a raw API destination object into our app's shape.
 * Handles varied key names the API might return.
 */
export function normaliseDestination(raw, index) {
  return {
    id:          raw.id          ?? index + 1,
    name:        raw.name        ?? raw.destination_name ?? raw.title ?? `Destination ${index + 1}`,
    location:    raw.location    ?? raw.country ?? raw.place ?? 'Tropical Region',
    image:       raw.image       ?? raw.imageUrl ?? raw.thumbnail
                 ?? FALLBACK_DESTINATIONS[index % FALLBACK_DESTINATIONS.length].image,
    rating:      parseFloat(raw.rating) || 4.5 + Math.random() * 0.5,
    tag:         raw.tag         ?? raw.category ?? raw.type
                 ?? FALLBACK_DESTINATIONS[index % FALLBACK_DESTINATIONS.length].tag
                 ?? 'Tropical',
    price:       raw.price       ?? raw.cost ?? 800 + Math.floor(Math.random() * 2500),
    description: raw.description ?? raw.desc ?? '',
  };
}

/**
 * Extracts the list array from various API response shapes.
 */
export function extractDestinationList(data) {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.destinations)) return data.destinations;
  if (Array.isArray(data?.data))         return data.data;
  return [];
}

/**
 * Filters destinations by search query (name or location, case-insensitive).
 */
export function filterBySearch(destinations, query) {
  if (!query.trim()) return destinations;
  const q = query.toLowerCase().trim();
  return destinations.filter(
    (d) =>
      d.name.toLowerCase().includes(q) ||
      d.location.toLowerCase().includes(q)
  );
}

/**
 * Filters destinations by tag. Returns all if tag is 'All'.
 */
export function filterByTag(destinations, tag) {
  if (tag === 'All') return destinations;
  return destinations.filter((d) => d.tag === tag);
}

/**
 * Simple email validation.
 */
export function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

/**
 * Validates the booking form. Returns an errors object (empty = valid).
 */
export function validateBookingForm(form) {
  const errors = {};
  if (!form.name.trim())                errors.name        = 'Name is required';
  if (!isValidEmail(form.email))        errors.email       = 'Valid email is required';
  if (!form.date)                       errors.date        = 'Please select a date';
  if (!form.destination)                errors.destination = 'Please select a destination';
  return errors;
}

/**
 * Smooth-scrolls to a DOM element by id.
 */
export function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
