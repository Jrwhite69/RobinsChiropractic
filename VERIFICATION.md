# Verification and remaining content

- Desktop opening and care section inspected in the browser at 1280 px.
- Mobile opening inspected at 390 px; document width 375 px with browser scrollbar, no horizontal page overflow; no broken images.
- Fixed the narrow-screen line-break spacing and kept the phone number unbroken.
- Hours and section navigation use real in-page anchors. Telephone, email and maps use direct destinations.
- JSON-LD parses, local referenced assets exist, JavaScript syntax check passed.
- Reduced-motion styles disable smooth scrolling, background animation, parallax and hover translation; physical mobile-device testing has not been performed.
- Clinic gallery intentionally uses labeled placeholders at the user's request.
- Reviews use user-provided excerpts. Stars and Verified Patient badges are omitted because the supplied text did not establish them.
- Awaiting exact verified map coordinates, direct Google review link, GA4 measurement ID and Search Console verification token.

## Replacing photos

The two `.photo-slot` elements in `dist/index.html` mark exterior and interior images. Put photos in `dist/assets/`, replace each placeholder with an image and meaningful alt text, and preserve the gallery layout. The existing doctor portrait is low resolution; a larger portrait would improve its appearance.
