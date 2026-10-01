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

## October 1 design refinement
- Horizontal review carousel: next/previous reaches 1, 2 and 3; final Next disabled; Home keyboard command returns to first slide.
- Centered card focus measured 1.000, adjacent cards 0.000; orange outline/glow and expanded card inspected in full-page screenshot.
- Desktop and 390px mobile reviewed; no horizontal document overflow. Both stock photos loaded.
- New readable sans-serif orange wordmark with light-blue stroke and staggered appearance animation. Reduced-motion stylesheet removes entrance animation and slide scaling.
- Hero action hover inspected; orange background with dark readable text.
- Stock photo sources recorded in STOCK-PHOTOS.md.
