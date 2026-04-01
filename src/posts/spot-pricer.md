---
title: 'Spot Pricer: Finnish Electricity Prices Dashboard'
date: 2026-04-01
excerpt: A real-time dashboard for Finnish electricity spot prices, grid status, and energy production data.
tags:
  - project
  - energy
---

# Spot Pricer

[Spot Pricer](https://spot-price.cloud.moonsault.fi/) is a lightweight dashboard for monitoring Finnish electricity spot prices and grid data in real time.

The app displays day-ahead spot prices from ENTSO-E with 15-minute or hourly resolution, and automatically picks up tomorrow's prices as soon as they're published each afternoon. Alongside prices, it shows live grid data from Fingrid: production, consumption, wind and solar generation, nuclear output, and the non-fossil share of the energy mix. A weather forecast panel with FMI data ties it all together, since weather has a direct impact on both demand and renewable output.

For the prices, the app allows you to set your marging, and trasfer costs and along side VAT, see the full cost of electricity as well.

Historical data is retained for up to ten days, making it easy to compare day to day patterns. The app is built as a PWA, so it works well on mobile and can be installed to the home screen for quick access.

Check it out at [spot-price.cloud.moonsault.fi](https://spot-price.cloud.moonsault.fi/).
