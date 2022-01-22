# CyphererAPI

Cypherer bot api

### How To Use?

```js
fetch('http://localhost:60000/api/crypt', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ type: 'example: atbash', text: 'Text to crypt' })
})
```