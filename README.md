# @kylealanjeffrey/badge

A "built by Kyle" badge component that links to [kylejeffrey.com](https://kylejeffrey.com). Works with any React project — no Tailwind or CSS imports needed.

## Install

```bash
npm install @kylealanjeffrey/badge
```

## Usage

```tsx
import { KyleBadge } from "@kylealanjeffrey/badge";

export default function App() {
  return (
    <div>
      <h1>My App</h1>
      <KyleBadge />
    </div>
  );
}
```

## Props

| Prop       | Type                                                         | Default          |
| ---------- | ------------------------------------------------------------ | ---------------- |
| `position` | `"bottom-right" \| "bottom-left" \| "top-right" \| "top-left"` | `"bottom-right"` |

```tsx
<KyleBadge position="bottom-left" />
```
