# Multidiscount calculator

> Part 3

## Description

In this part we are going to add button to share generated report via chat applications and e-mail

## Setting up

Please reuse code from **Part 2**.

## Requirements

1. If user is using mobile web-browser generated report should be shared via native `Navigator.share` API
2. If user is using a desktop web-browser there should be a possibility to share generated report via:
   - WhatsApp
   - Messenger
   - E-mail
3. If report is not generated sharing options should be disabled
4. In summary section there should be a button that allows to copy generated report to device clipboard

## Design proposition

> Coming soon

## Hints

- Share data via native API: [Navigator.share](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)
- How to share via email using `mailto`: [Set mail subject and body](https://stackoverflow.com/a/4782084/9095988)
