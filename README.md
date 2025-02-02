# Multi-language Script Usage Guide

## 1. Including the Script
Add the script to your HTML file. It can be hosted locally or on a CDN:

```html
<script src="path/to/multilang.js?variants=en,fr,de"></script>
```

Replace `path/to/multilang.js` with the actual file location. The `variants` parameter specifies available languages (e.g., English, French, and German).

## 2. Setting Up Multi-language Content
Use `data-multilang` attributes to define translations for each language.

```html
<p data-multilangen="Hello" data-multilangfr="Bonjour" data-multilangde="Hallo"></p>
```

The script will automatically update the content based on the selected language.

## 3. Creating Language Switch Buttons
Use buttons with class names corresponding to each language to allow users to switch languages:

```html
<button class="multilangen">English</button>
<button class="multilangfr">Français</button>
<button class="multilangde">Deutsch</button>
```

Clicking these buttons will update the language and store the preference in cookies.

## 4. Accessing the Current Language
The script sets the selected language in a global variable `window.multilang`, which you can use in JavaScript:

```javascript
console.log(window.multilang); // Outputs the current language
```

This allows developers to customize behavior based on the selected language.

## 5. Persistence Across Pages
The language preference is saved in cookies, ensuring consistency across different pages of the site.

This lightweight, client-side multi-language solution is easy to integrate into any website. 🚀

