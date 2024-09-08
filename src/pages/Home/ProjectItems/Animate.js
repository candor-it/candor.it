const easing = {
  linear: function (t) {
    return t;
  },

  easeInQuad: function (t) {
    return t * t;
  },
  easeOutQuad: function (t) {
    return t * (2 - t);
  },
  easeInOutQuad: function (t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },

  easeInCubic: function (t) {
    return t * t * t;
  },
  easeOutCubic: function (t) {
    return --t * t * t + 1;
  },
  easeInOutCubic: function (t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },

  easeInQuart: function (t) {
    return t * t * t * t;
  },
  easeOutQuart: function (t) {
    return 1 - --t * t * t * t;
  },
  easeInOutQuart: function (t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },

  easeInQuint: function (t) {
    return t * t * t * t * t;
  },
  easeOutQuint: function (t) {
    return 1 + --t * t * t * t * t;
  },
  easeInOutQuint: function (t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  },

  easeInSine: function (t) {
    return -1 * Math.cos(t * (Math.PI / 2)) + 1;
  },
  easeOutSine: function (t) {
    return 1 * Math.sin(t * (Math.PI / 2));
  },
  easeInOutSine: function (t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
  },

  easeInExpo: function (t) {
    return 1 * Math.pow(2, 10 * (t - 1));
  },
  easeOutExpo: function (t) {
    return 1 * (-Math.pow(2, -10 * t) + 1);
  },
  easeInOutExpo: function (t) {
    t /= 0.5;
    if (t < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
    t--;
    return 0.5 * (-Math.pow(2, -10 * t) + 2);
  },

  easeInCirc: function (t) {
    return -1 * (Math.sqrt(1 - t * t) - 1);
  },
  easeOutCirc: function (t) {
    t--;
    return 1 * Math.sqrt(1 - t * t);
  },
  easeInOutCirc: function (t) {
    t /= 0.5;
    if (t < 1) {
      return -0.5 * (Math.sqrt(1 - t * t) - 1);
    } else {
      t -= 2;
      return 0.5 * (Math.sqrt(1 - t * t) + 1);
    }
  },
};

function getValue(start, end, elapsed, duration, easeMethod) {
  if (elapsed > duration) return end;
  return start + (end - start) * easing[easeMethod](elapsed / duration);
}

export default function animate({ fromValue, toValue, onUpdate, onComplete, duration = 600, easeMethod = "linear" }) {
  const startTime = performance.now();

  const tick = () => {
    const elapsed = performance.now() - startTime;

    window.requestAnimationFrame(() => {
      return onUpdate(getValue(fromValue, toValue, elapsed, duration, easeMethod), elapsed <= duration ? tick : onComplete);
    });
  };

  tick();
}
