(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // src/code.ts
  var require_code = __commonJS({
    "src/code.ts"(exports) {
      console.clear();
      figma.showUI(__html__);
      var getSelectedNodes = () => {
        const selectedTextNodes = figma.currentPage.selection.filter((node) => node.type === "TEXT").map((node) => ({ figmaNodeID: node.id, text: node.characters }));
        figma.ui.postMessage({
          event: "selected-text-nodes",
          nodes: selectedTextNodes
        });
      };
      figma.ui.onmessage = (msg) => __async(exports, null, function* () {
        if (msg.type === "create-text") {
          const newTextNode = figma.createText();
          yield figma.loadFontAsync(newTextNode.fontName);
          newTextNode.characters = msg.text;
          newTextNode.name = "Sample Text";
          figma.currentPage.appendChild(newTextNode);
          figma.currentPage.selection = [newTextNode];
        }
        if (msg.type === "update-text") {
          const textNode = figma.getNodeById(msg.figmaNodeID);
          yield figma.loadFontAsync(textNode.fontName);
          textNode.characters = msg.text;
          getSelectedNodes();
        }
      });
      figma.on("selectionchange", () => getSelectedNodes());
    }
  });
  require_code();
})();
