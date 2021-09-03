// src/break-lines.ts
function checkFontForBlinkMacSystemFont(font) {
  if (font.includes("BlinkMacSystemFont")) {
    console.warn("break-styled-lines: Using BlinkMacSystemFont can cause Chrome to crash in certain environments!");
  }
}

function isStringArray(text) {
  return Array.isArray(text) && (text.length > 0 ? typeof text[0] === "string" : true);
}

function isTextDescriptorArray(text) {
  return Array.isArray(text) && (text.length > 0 ? !isStringArray(text) : true);
}

function withNewLines(descriptor, width, startingX, ctx) {
  const elements = descriptor.text.split("").reduce((elements2, char) => {
    const runningElement = elements2[elements2.length - 1] || "";
    const lastChar = runningElement.slice(-1);

    if (char === " " && lastChar !== " ") {
      return [...elements2, char];
    }

    if (char !== " " && lastChar === " ") {
      return [...elements2, char];
    }

    return [...elements2.slice(0, -1), `${runningElement}${char}`];
  }, []);
  const {
    lastLineWidth,
    lines
  } = elements.reduce((result, element) => {
    ctx.font = descriptor.font;
    const {
      width: elementWidth
    } = ctx.measureText(element);
    const completeTextWidth = result.lastLineWidth + elementWidth;
    const itFits = completeTextWidth <= width;

    if (itFits) {
      const appendedLine = [...result.lines.slice(-1), element].join("");
      return {
        lastLineWidth: completeTextWidth,
        lines: [...result.lines.slice(0, -1), appendedLine]
      };
    }

    if (elementWidth > width && result.lastLineWidth === 0) {
      return {
        lastLineWidth: elementWidth,
        lines: [...result.lines.slice(0, -1), element]
      };
    }

    const previousLine = result.lines.slice(-1).join("");
    const precedingLines = [...result.lines.slice(0, -1), previousLine.trimEnd()];

    if (element.trim().length === 0) {
      return {
        lastLineWidth: 0,
        lines: [...precedingLines, ""]
      };
    }

    return {
      lastLineWidth: elementWidth,
      lines: [...precedingLines, element]
    };
  }, {
    lastLineWidth: startingX,
    lines: []
  });
  return {
    lastLineWidth,
    text: lines.join("\n")
  };
}

function breakLines(descriptors, width) {
  const supportsOffscreenCanvas = ("OffscreenCanvas" in window);
  const canvasEl = document.createElement("canvas");
  const canvas = supportsOffscreenCanvas ? canvasEl.transferControlToOffscreen() : canvasEl;
  canvas.width = width;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    return descriptors.reduce((result, descriptor) => {
      const {
        lastLineWidth,
        text
      } = withNewLines(descriptor, width, result.lastLineWidth, ctx);
      return {
        lastLineWidth,
        lines: [...result.lines, text]
      };
    }, {
      lastLineWidth: 0,
      lines: []
    }).lines;
  }

  console.warn("No canvas context was found, so the string was left as is!");
  return descriptors.map(({
    text
  }) => text);
}

function toTextDescriptors(text, defaultFont) {
  if (isTextDescriptorArray(text)) {
    return text.map(({
      text: text2,
      font
    }) => ({
      text: stripNewlines(text2),
      font: font || defaultFont
    }));
  }

  if (isStringArray(text)) {
    return text.map(member => ({
      text: stripNewlines(member),
      font: defaultFont
    }));
  }

  return [{
    text: stripNewlines(text),
    font: defaultFont
  }];
}

var newlineRegex = /(\r\n|\n|\r)/gm;

function stripNewlines(text) {
  return text.replace(newlineRegex, " ");
}

function breakLinesEntry(text, width, font) {
  checkFontForBlinkMacSystemFont(font);
  const descriptors = toTextDescriptors(text, font);

  if (isStringArray(text)) {
    return breakLines(descriptors, width);
  }

  if (isTextDescriptorArray(text)) {
    return breakLines(descriptors, width);
  }

  return breakLines(descriptors, width)[0];
}

var break_lines_default = breakLinesEntry;

export default break_lines_default;
