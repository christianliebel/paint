function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var bresenhamLine = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = line;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getSing(num) {
  return num > 0 ? 1 : -1;
}

function getInitValues(startPoint, finalPoint) {
  var abs = Math.abs;
  var diffx = finalPoint.x - startPoint.x;
  var diffy = finalPoint.y - startPoint.y;

  return {
    absDiff: {
      x: abs(diffx),
      y: abs(diffy)
    },
    sign: {
      x: getSing(diffx),
      y: getSing(diffy)
    }
  };
}

function getBreakFn(sign) {
  return sign < 0 ? function (current, final) {
    return current >= final;
  } : function (current, final) {
    return current <= final;
  };
}

function calcMainCoordinates(absDiff) {
  return absDiff.x > absDiff.y ? ['x', 'y'] : ['y', 'x'];
}

function* line(point, finalPoint) {
  var _getInitValues = getInitValues(point, finalPoint);

  var absDiff = _getInitValues.absDiff;
  var sign = _getInitValues.sign;

  var _calcMainCoordinates = calcMainCoordinates(absDiff);

  var _calcMainCoordinates2 = _slicedToArray(_calcMainCoordinates, 2);

  var mainCoordinate = _calcMainCoordinates2[0];
  var coordinate = _calcMainCoordinates2[1];


  var final = finalPoint[mainCoordinate];

  var mainSign = sign[mainCoordinate];
  var secondSign = sign[coordinate];

  var mainDiff = absDiff[mainCoordinate];
  var secondDiff = absDiff[coordinate];

  var breakFn = getBreakFn(mainSign);

  var mainValue = point[mainCoordinate];
  var secondValue = point[coordinate];

  var eps = 0;

  for (; breakFn(mainValue, final); mainValue += mainSign) {
    var _ref;

    yield (_ref = {}, _defineProperty(_ref, mainCoordinate, mainValue), _defineProperty(_ref, coordinate, secondValue), _ref);
    eps += secondDiff;
    if (eps << 1 >= mainDiff) {
      secondValue += secondSign;
      eps -= mainDiff;
    }
  }
}
module.exports = exports['default'];
});

var bresenhamLine$1 = /*@__PURE__*/unwrapExports(bresenhamLine);

export default bresenhamLine$1;
