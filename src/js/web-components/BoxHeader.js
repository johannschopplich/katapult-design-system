import { debounce } from "throttle-debounce";

const UNITS = {
  deg: (v) => (v * Math.PI) / 180,
  grad: (v) => (v * Math.PI) / 200,
  rad: (v) => v,
  turn: (v) => v * 2 * Math.PI,
};

/**
 * @module BoxHeader
 * @description
 * A custom element to make the `box-header` class work in container's smaller than the full viewport width
 * @property {string} angle The angle in `deg`, `grad`, `rad` or `turn` to rotate the element by
 */
export default class BoxHeader extends HTMLElement {
  constructor() {
    super();

    // Custom elements are `display: inline` by default,
    // so setting their width or height will have no effect
    this.style.display = "block";

    this.classList.add("box-header");

    this.render = () => {
      // Strip unit from angle data
      const rawAngle = parseFloat(this.angle);
      const unit = this.angle.replace(/[0-9|.]/gi, "");

      // Validate angle unit
      if (!Object.keys(UNITS).some((i) => i === unit)) {
        console.error(
          "[KDS] Box header expects angle CSS data type, but got:",
          this.angle
        );
        return;
      }

      // Convert different angle units to radians
      const radian = UNITS[unit](rawAngle);

      // Set CSS variables for `.box-header` class
      this.style.setProperty("--angle", this.angle);
      this.style.setProperty("--tan", Math.tan(radian).toFixed(6));
      this.style.setProperty("--container-width", `${this.offsetWidth}px`);
    };

    this.handleResize = debounce(100, () => {
      this.style.setProperty("--container-width", `${this.offsetWidth}px`);
    });
  }

  get angle() {
    return this.getAttribute("angle") || "1deg";
  }

  set angle(val) {
    this.setAttribute("angle", val);
  }

  static get observedAttributes() {
    return ["angle"];
  }

  connectedCallback() {
    this.render();
    window.addEventListener("resize", this.handleResize);
  }

  disconnectedCallback() {
    window.removeEventListener("resize", this.handleResize);
  }

  attributeChangedCallback() {
    this.render();
  }
}
