function isStringArray(text) {
  return Array.isArray(text) && (text.length > 0 ? typeof text[0] === "string" : true);
}

function isTextDescriptorArray(text) {
  return Array.isArray(text) && (text.length > 0 ? !isStringArray(text) : true);
}

function withNewLines(descriptor, width, startingX, ctx) {
  // Break up all the parts into whitespace and words
  var elements = descriptor.text.split("").reduce(function (elements, _char) {
    var runningElement = elements[elements.length - 1] || "";
    var lastChar = runningElement.slice(-1);

    if (_char === " " && lastChar !== " ") {
      return [].concat(elements, [_char]);
    }

    if (_char !== " " && lastChar === " ") {
      return [].concat(elements, [_char]);
    }

    return [].concat(elements.slice(0, -1), ["" + runningElement + _char]);
  }, []);

  var _elements$reduce = elements.reduce(function (result, element) {
    ctx.font = descriptor.font;

    var _ctx$measureText = ctx.measureText(element),
        elementWidth = _ctx$measureText.width;

    var completeTextWidth = result.lastLineWidth + elementWidth;
    var itFits = completeTextWidth <= width; // If it fits, remove the last line from current results
    // append the current element into it
    // and insert it back in

    if (itFits) {
      var appendedLine = [].concat(result.lines.slice(-1), [element]).join("");
      return {
        lastLineWidth: completeTextWidth,
        lines: [].concat(result.lines.slice(0, -1), [appendedLine])
      };
    } // Now it doesn't fit.
    // If the element itself didn't fit on a line
    // Then we should force a break


    if (elementWidth > width && result.lastLineWidth === 0) {
      return {
        lastLineWidth: elementWidth,
        lines: [].concat(result.lines.slice(0, -1), [element])
      };
    } // Trim any whitespace at the end of the line
    // which is being broken.


    var previousLine = result.lines.slice(-1).join("");
    var precedingLines = [].concat(result.lines.slice(0, -1), [previousLine.trimEnd()]); // If the element that doesn't fit is a whitespace
    // we should just insert a newline

    if (element.trim().length === 0) {
      return {
        lastLineWidth: 0,
        lines: [].concat(precedingLines, [""])
      };
    } // Otherwise we should just start a new line with the element


    return {
      lastLineWidth: elementWidth,
      lines: [].concat(precedingLines, [element])
    };
  }, {
    lastLineWidth: startingX,
    lines: []
  }),
      lastLineWidth = _elements$reduce.lastLineWidth,
      lines = _elements$reduce.lines;

  return {
    lastLineWidth: lastLineWidth,
    text: lines.join("\n")
  };
}

function breakLines(descriptors, width) {
  var supportsOffscreenCanvas = ("OffscreenCanvas" in window);
  var canvasEl = document.createElement("canvas");
  var canvas = supportsOffscreenCanvas ? canvasEl.transferControlToOffscreen() : canvasEl;
  canvas.width = width;
  var ctx = canvas.getContext("2d");

  if (ctx) {
    return descriptors.reduce(function (result, descriptor) {
      var _withNewLines = withNewLines(descriptor, width, result.lastLineWidth, ctx),
          lastLineWidth = _withNewLines.lastLineWidth,
          text = _withNewLines.text;

      return {
        lastLineWidth: lastLineWidth,
        lines: [].concat(result.lines, [text])
      };
    }, {
      lastLineWidth: 0,
      lines: []
    }).lines;
  }

  console.warn("No canvas context was found, so the string was left as is!");
  return descriptors.map(function (_ref) {
    var text = _ref.text;
    return text;
  });
}

function toTextDescriptors(text, defaultFont) {
  if (isTextDescriptorArray(text)) {
    return text.map(function (_ref2) {
      var text = _ref2.text,
          font = _ref2.font;
      return {
        text: stripNewlines(text),
        font: font || defaultFont
      };
    });
  }

  if (isStringArray(text)) {
    return text.map(function (member) {
      return {
        text: stripNewlines(member),
        font: defaultFont
      };
    });
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
/**
 * Breaks a string into lines given a width and style for the text.
 *
 * @param string - The text to be broken into lines
 * @param width - The width in pixels for the text to fit into
 * @param font - The style of the text expressed as a value of the CSS font property, e.g. '12pt bold serif'
 * @returns The given string with newlines inserted
 */


function breakLinesEntry(text, width, font) {
  var descriptors = toTextDescriptors(text, font);

  if (isStringArray(text)) {
    return breakLines(descriptors, width);
  }

  if (isTextDescriptorArray(text)) {
    return breakLines(descriptors, width);
  }

  return breakLines(descriptors, width)[0];
}

export default breakLinesEntry;
