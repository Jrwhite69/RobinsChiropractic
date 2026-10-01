# Robins Chiropractic Center

User-supplied creative brief, October 1, 2026. Implementation decisions below follow the explicit single-page architecture.

- Vibe: “modern, cinematic, mobile-first”; “rich, deep dark-charcoal-brown”.
- Journey: digital business card → practitioner biography → offerings → office gallery → patient reviews.
- Energy: confident orange brand opening, quieter biography, useful treatment cards, spacious gallery peak, reassuring close.
- Signature: “spine … continuously down the exact vertical center”; paired orange and blue ambient lights shift in response to scroll. A brighter segment follows reading position.
- Family: premium, glass action pills, photographic practice imagery.
- World: continuous anatomical thread; distinct readable sections, no scroll hijacking or video requirement.
- Assets: original website portrait; user will provide clinic photos and review link. Gallery and reviews remain explicit draft placeholders until supplied.
- Action: call 954-523-5336 to discuss an appointment.

## Design plan
Palette: brown-black #191512, panel #241e19, orange #ff6b35, blue #4a90e2, white #f8f3ef, muted #c1b6ad.
Type: condensed heavy system display for the oversized wordmark; system sans for accessible body text.
Layout: centered brand over an ambient spine, asymmetrical contact/hours below, split bio, paired services, broad gallery, offset review stack.
Layer contract: fixed distant radial light fields; page-height centered SVG spine; stable foreground text; translucent contact controls. No pinning or forced wheel handling.
Grammar: service visit, a concise information-led sequence matching the user's required architecture. Existing registry builds have different grammar, navigation, hero, sequence, ending and signature.
Feeling curve: recognition (brand/contact), reassurance (real portrait/bio), understanding (two therapies), familiarity (clinic gallery, pending photos), confidence (reviews, pending verification).
Peak: the clinic gallery gives the first visual sense of arriving at the practice once supplied.
Tell-someone sentence: It's the site where a quiet spine connects every part of the practice.

## Content integrity and launch needs
Official source: http://www.robinschiropracticcenter.com/ and its about.html/contact.html pages, read October 1, 2026.
Do not fabricate Google quotations, 5-star ratings, patient verification, coordinates or clinic photographs. User will provide imagery and Google link. Public third-party listing showed 4.8, not 5.0.
GA4 measurement ID and Search Console verification remain unset until supplied. JSON-LD is structured business information, not analytics configuration. Exact coordinates pending verified map location.
Static implementation avoids dependency installation and needs no video toolchain. Scrollcraft preflight lacked ffmpeg; this page contains no video. Validate through the available browser and bundled Playwright if available.
