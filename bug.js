```javascript
// Example using Tailwind's @apply directive
<div class="@apply bg-gray-100 p-4">
  <p>This is some text.</p>
</div>

// Tailwind configuration file (tailwind.config.js)
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```