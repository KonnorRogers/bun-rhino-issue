# Purpose

Error reproduction for issue reported here: <https://github.com/KonnorRogers/rhino-editor/issues/146>


## Installation

```rb
git clone https://github.com/KonnorRogers/bun-rhino-issue
cd bun-rhino-issue
bundle install # Requires ruby 3+
bun install # Bun 1.0.18 is what this was last tested on.
```

## Getting Started

Start the server like so:

```bash
overmind start -f Procfile.dev
```

Go to `localhost:5000/posts`

Check the browser console for errors.

## Cycling through editors

There are 3 editors labelled in `app/javascript/application.js`

- ProseMirror
- RhinoEditor
- TipTap

I was unable to get any of them working without errors.

