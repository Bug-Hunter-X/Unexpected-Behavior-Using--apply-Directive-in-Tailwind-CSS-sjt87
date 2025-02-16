```javascript
// Solution: Refactor CSS or use a more direct approach

/* Instead of using @apply, define a single class or restructure your CSS */
.my-custom-style {
  @apply bg-gray-100 p-4;
  /* Add any other needed styles here */
}

<div class="my-custom-style">
  <p>This is some text.</p>
</div>

/* Or use a more direct approach without @apply.  It's more readable and less prone to edge cases. */
<div class="bg-gray-100 p-4">
  <p>This is some text.</p>
</div>
```