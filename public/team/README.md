# Team photos

Drop staff photographs in this folder, then reference them from
`src/lib/site.ts` in the `teamMembers` array via the `photo` field.

Example:

```ts
{
  name: "Jane Smith",
  role: "Home Manager",
  department: "Leadership",
  bio: "Has led Cavendish for eight years…",
  photo: "/team/jane-smith.jpg",
},
```

Tips:
- Portrait orientation works best (cards use a 4:5 ratio).
- ~800×1000px JPG/PNG/WebP is plenty; images are not server-optimised
  (static export), so keep file sizes reasonable (< ~300 KB each).
- Only add photos with the individual's consent.

Until a `photo` is set, the card shows a tasteful placeholder avatar.
