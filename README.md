# Figma and Websockets

This is a simple example of using websockets to test a plugin in other browsers.

## Previewing your plugin

1. Run the websockets server

```
npm run server
```

2. Open another browser at http://localhost:9001/
3. Run the plugin in the Figma desktop app
4. Select a text layer
5. See the selected text in the browser instance of the plugin

## Building your plugin

Currently build is only supported for JS.

```
npm run build
```

## Importing plugin into Figma

Open the Figma desktop app. Using Quick Actions menu, search for `Import manifest.json from plugin`.
