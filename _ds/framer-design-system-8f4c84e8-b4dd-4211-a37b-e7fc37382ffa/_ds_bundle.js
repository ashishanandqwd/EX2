/* @ds-bundle: {"format":4,"namespace":"FramerDesignSystem_8f4c84","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"ProductMockupTile","sourcePath":"components/cards/ProductMockupTile.jsx"},{"name":"SpotlightCard","sourcePath":"components/cards/SpotlightCard.jsx"},{"name":"TemplateCard","sourcePath":"components/cards/TemplateCard.jsx"},{"name":"ComparisonRow","sourcePath":"components/data/ComparisonRow.jsx"},{"name":"FaqRow","sourcePath":"components/data/FaqRow.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"},{"name":"PricingCard","sourcePath":"components/pricing/PricingCard.jsx"},{"name":"PricingTabs","sourcePath":"components/pricing/PricingTabs.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"0dadbf0b5f64","components/buttons/IconButton.jsx":"93caa2485cdb","components/cards/ProductMockupTile.jsx":"6c4abe8b4df5","components/cards/SpotlightCard.jsx":"7a653fa175fa","components/cards/TemplateCard.jsx":"c78ee095e733","components/data/ComparisonRow.jsx":"e0fd14e4c9ae","components/data/FaqRow.jsx":"8d754c5ef865","components/forms/TextInput.jsx":"176220790d2a","components/navigation/Footer.jsx":"cb6c6876bbd9","components/navigation/TopNav.jsx":"961eb3fdc80c","components/pricing/PricingCard.jsx":"8bc1d176be58","components/pricing/PricingTabs.jsx":"66074405ae98","ui_kits/marketing/HomeScreen.jsx":"0efc8b87423a","ui_kits/marketing/PricingScreen.jsx":"1a8dcf9daa67"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FramerDesignSystem_8f4c84 = window.FramerDesignSystem_8f4c84 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Framer pill button. The pill (radius 100px) is the only CTA shape on the
 * marketing site — never squared-off, never a bordered ghost.
 *
 * Variants:
 *  - primary      white pill, dark text (the one primary CTA everywhere)
 *  - secondary    charcoal (surface-1) pill
 *  - translucent  lifted (surface-2) pill over busy backgrounds, radius-xxl
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--type-button-size)',
    lineHeight: 'var(--type-button-line)',
    letterSpacing: 'var(--type-button-track)',
    fontWeight: 'var(--weight-medium)',
    fontFeatureSettings: 'var(--font-features)',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    padding: size === 'lg' ? '13px 20px' : size === 'sm' ? '8px 12px' : '10px 15px',
    minHeight: '44px',
    boxSizing: 'border-box',
    transition: 'transform 120ms ease, background 140ms ease, color 140ms ease',
    whiteSpace: 'nowrap',
    WebkitTapHighlightColor: 'transparent'
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      borderRadius: 'var(--radius-pill)'
    },
    secondary: {
      background: 'var(--color-surface-1)',
      color: 'var(--color-ink)',
      borderRadius: 'var(--radius-pill)'
    },
    translucent: {
      background: 'var(--color-surface-2)',
      color: 'var(--color-ink)',
      borderRadius: 'var(--radius-xxl)',
      padding: size === 'lg' ? '11px 18px' : '8px 14px'
    }
  };
  const handleDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
  };
  const handleUp = e => {
    e.currentTarget.style.transform = 'scale(1)';
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseDown: handleDown,
    onMouseUp: handleUp,
    onMouseLeave: handleUp,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular icon button — 40px surface-1 circle for inline icon actions
 * (carousel arrows, social links). Grows to 44px hit target on touch.
 * Pass an icon glyph/SVG as children.
 */
function IconButton({
  children,
  size = 40,
  disabled = false,
  onClick,
  ariaLabel,
  style,
  ...rest
}) {
  const s = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: `${size}px`,
    height: `${size}px`,
    background: 'var(--color-surface-1)',
    color: 'var(--color-ink)',
    border: 'none',
    borderRadius: 'var(--radius-full)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'transform 120ms ease, background 140ms ease',
    WebkitTapHighlightColor: 'transparent'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.94)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    style: {
      ...s,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProductMockupTile.jsx
try { (() => {
/**
 * Larger tile framing a live product mockup (a browser-chromed Framer-built
 * site). Surface-1 card, radius-xl (20px), 16px pad, with the level-2
 * light-edge + drop shadow. Renders a faux browser chrome around `children`.
 */
function ProductMockupTile({
  url = 'framer.com',
  title,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      padding: '16px',
      background: 'var(--color-surface-1)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--elevation-2)',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--color-inverse-canvas)',
      border: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 12px',
      background: '#f5f5f5',
      borderBottom: '1px solid rgba(0,0,0,0.08)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: '6px'
    }
  }, ['#FF5F57', '#FEBC2E', '#28C840'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: c,
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: '6px',
      flex: 1,
      fontSize: '12px',
      color: '#8a8a8a',
      background: '#fff',
      borderRadius: '6px',
      padding: '4px 10px',
      textAlign: 'center'
    }
  }, url)), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '160px',
      color: '#111'
    }
  }, children)), title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-body-sm-size)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--type-body-sm-track)',
      color: 'var(--color-ink)'
    }
  }, title));
}
Object.assign(__ds_scope, { ProductMockupTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProductMockupTile.jsx", error: String((e && e.message) || e) }); }

// components/cards/SpotlightCard.jsx
try { (() => {
const GRADIENTS = {
  violet: 'var(--gradient-violet)',
  magenta: 'var(--gradient-magenta)',
  orange: 'var(--gradient-orange)',
  coral: 'var(--gradient-coral)'
};

/**
 * Gradient spotlight card — the brand's signature atmospheric tile. Oversized,
 * radius-xxl (30px) corners, dropped SPARINGLY into a monochrome card grid
 * (one or two per page; three reads as a moodboard). Not a section background.
 */
function SpotlightCard({
  variant = 'violet',
  eyebrow,
  title,
  children,
  footer,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '24px',
      minHeight: '280px',
      padding: '32px',
      borderRadius: 'var(--radius-xxl)',
      background: GRADIENTS[variant] || GRADIENTS.violet,
      color: 'var(--color-ink)',
      overflow: 'hidden',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-caption-size)',
      letterSpacing: 'var(--type-caption-track)',
      fontWeight: 'var(--weight-medium)',
      textTransform: 'uppercase',
      opacity: 0.85
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-display-md-size)',
      lineHeight: 'var(--type-display-md-line)',
      letterSpacing: 'var(--type-display-md-track)',
      fontWeight: 'var(--weight-medium)'
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--type-subhead-size)',
      lineHeight: 'var(--type-subhead-line)',
      letterSpacing: 'var(--type-subhead-track)',
      opacity: 0.92
    }
  }, children)), footer && /*#__PURE__*/React.createElement("div", null, footer));
}
Object.assign(__ds_scope, { SpotlightCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/SpotlightCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TemplateCard.jsx
try { (() => {
/**
 * Template thumbnail tile from the "Built with Framer" gallery / marketplace.
 * Small surface-1 card, radius-lg (15px), 12px pad. `thumb` is an image URL or
 * node; falls back to a neutral placeholder block.
 */
function TemplateCard({
  title,
  meta,
  thumb,
  aspect = '4 / 3',
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      padding: '12px',
      background: 'var(--color-surface-1)',
      borderRadius: 'var(--radius-lg)',
      cursor: onClick ? 'pointer' : 'default',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: aspect,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--color-surface-2)'
    }
  }, typeof thumb === 'string' ? /*#__PURE__*/React.createElement("img", {
    src: thumb,
    alt: title || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : thumb), (title || meta) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '8px'
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-body-sm-size)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--type-body-sm-track)',
      color: 'var(--color-ink)'
    }
  }, title), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-caption-size)',
      letterSpacing: 'var(--type-caption-track)',
      color: 'var(--color-ink-muted)'
    }
  }, meta)));
}
Object.assign(__ds_scope, { TemplateCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TemplateCard.jsx", error: String((e && e.message) || e) }); }

// components/data/ComparisonRow.jsx
try { (() => {
/**
 * A single row in the pricing comparison table. `values` aligns with the tier
 * columns; a boolean `true` renders the green success checkmark, `false` an
 * em-dash, a string renders as ink-muted text. `header` styles it as a
 * section-header row (ink text, no underline emphasis).
 */
function ComparisonRow({
  label,
  values = [],
  header = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `minmax(160px, 1.4fr) repeat(${values.length}, 1fr)`,
      alignItems: 'center',
      gap: '12px',
      padding: '14px 0',
      borderBottom: '1px solid var(--color-hairline-soft)',
      background: 'var(--color-canvas)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-body-sm-size)',
      letterSpacing: 'var(--type-body-sm-track)',
      fontWeight: header ? 'var(--weight-bold)' : 'var(--weight-medium)',
      color: header ? 'var(--color-ink)' : 'var(--color-ink-muted)'
    }
  }, label), values.map((v, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      textAlign: 'center',
      fontSize: 'var(--type-body-sm-size)',
      letterSpacing: 'var(--type-body-sm-track)',
      color: v === true ? 'var(--color-semantic-success)' : v === false ? 'var(--color-ink-muted)' : 'var(--color-ink)'
    }
  }, v === true ? '✓' : v === false ? '—' : v)));
}
Object.assign(__ds_scope, { ComparisonRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ComparisonRow.jsx", error: String((e && e.message) || e) }); }

// components/data/FaqRow.jsx
try { (() => {
/**
 * FAQ accordion row on the pricing page. Canvas ground, radius-md, soft
 * hairline divider. Controlled via `open`/`onToggle` or self-manages state.
 */
function FaqRow({
  question,
  answer,
  open,
  defaultOpen = false,
  onToggle,
  style
}) {
  const [internal, setInternal] = React.useState(defaultOpen);
  const isOpen = open !== undefined ? open : internal;
  const toggle = () => {
    if (onToggle) onToggle(!isOpen);
    if (open === undefined) setInternal(!isOpen);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--color-hairline-soft)',
      background: 'var(--color-canvas)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: toggle,
    "aria-expanded": isOpen,
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      padding: '24px 4px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      color: 'var(--color-ink)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-body-lg-size)',
      letterSpacing: 'var(--type-body-lg-track)',
      fontWeight: 'var(--weight-medium)',
      fontFeatureSettings: 'var(--font-features)'
    }
  }, /*#__PURE__*/React.createElement("span", null, question), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 auto',
      fontSize: '22px',
      lineHeight: 1,
      color: 'var(--color-ink-muted)',
      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
      transition: 'transform 180ms ease'
    }
  }, "+")), isOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 4px 24px',
      maxWidth: '640px',
      fontSize: 'var(--type-body-size)',
      lineHeight: 'var(--type-body-line)',
      letterSpacing: 'var(--type-body-track)',
      color: 'var(--color-ink-muted)'
    }
  }, answer));
}
Object.assign(__ds_scope, { FaqRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/FaqRow.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input. Surface-1 field; focus keeps the same surface and adds the
 * level-3 blue-tinted ring (never a color change on the field itself).
 */
function TextInput({
  value,
  onChange,
  placeholder,
  type = 'text',
  disabled = false,
  prefix,
  suffix,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'var(--color-surface-1)',
      border: '1px solid var(--color-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 14px',
      boxShadow: focused ? 'var(--elevation-3)' : 'none',
      transition: 'box-shadow 140ms ease, border-color 140ms ease',
      opacity: disabled ? 0.5 : 1,
      boxSizing: 'border-box',
      ...style
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-ink-muted)',
      fontSize: 'var(--type-body-size)'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      minWidth: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--color-ink)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-body-size)',
      letterSpacing: 'var(--type-body-track)',
      fontFeatureSettings: 'var(--font-features)'
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-ink-muted)',
      fontSize: 'var(--type-body-size)'
    }
  }, suffix));
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
/**
 * Dense footer link grid on canvas. Wordmark left, caption-sized link columns.
 * `columns` is an array of { heading, links: string[] }.
 */
function Footer({
  brand,
  tagline = 'The internet is your canvas.',
  columns = DEFAULT_COLUMNS,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-canvas)',
      color: 'var(--color-ink-muted)',
      padding: '64px 32px',
      borderTop: '1px solid var(--color-hairline-soft)',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(160px, 1.4fr) repeat(auto-fit, minmax(120px, 1fr))',
      gap: '40px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      letterSpacing: '-1px',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--color-ink)'
    }
  }, brand || 'Framer'), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--type-caption-size)',
      letterSpacing: 'var(--type-caption-track)',
      maxWidth: '200px'
    }
  }, tagline)), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.heading,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--type-caption-size)',
      letterSpacing: 'var(--type-caption-track)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--color-ink)'
    }
  }, col.heading), col.links.map(link => /*#__PURE__*/React.createElement("a", {
    key: link,
    href: "#",
    style: {
      fontSize: 'var(--type-caption-size)',
      letterSpacing: 'var(--type-caption-track)',
      color: 'var(--color-ink-muted)',
      transition: 'color 140ms ease'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--color-ink)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--color-ink-muted)'
  }, link))))));
}
const DEFAULT_COLUMNS = [{
  heading: 'Product',
  links: ['Features', 'Pricing', 'Templates', 'Marketplace', 'AI']
}, {
  heading: 'Resources',
  links: ['Academy', 'Blog', 'Support', 'Updates', 'Status']
}, {
  heading: 'Company',
  links: ['About', 'Careers', 'Startups', 'Contact']
}, {
  heading: 'Legal',
  links: ['Terms', 'Privacy', 'Security', 'Cookies']
}];
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
/**
 * Sticky top nav on canvas: wordmark left, centered link group, secondary +
 * primary pill pair right. `brand` defaults to the "Framer" wordmark set in
 * display type (no logo asset was provided). Pass a node to swap in a real mark.
 */
function TopNav({
  brand,
  links = ['Product', 'Templates', 'Marketplace', 'Pricing', 'Learn'],
  onSignIn,
  onGetStarted,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px',
      height: '56px',
      padding: '0 30px',
      background: 'var(--color-canvas)',
      borderBottom: '1px solid var(--color-hairline-soft)',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      letterSpacing: '-1px',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--color-ink)'
    }
  }, brand || 'Framer'), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '24px',
      flex: 1,
      justifyContent: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 'var(--type-body-sm-size)',
      letterSpacing: 'var(--type-body-sm-track)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--color-ink-muted)',
      transition: 'color 140ms ease'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--color-ink)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--color-ink-muted)'
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    onClick: onSignIn
  }, "Sign in"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: onGetStarted
  }, "Get started for free")));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// components/pricing/PricingCard.jsx
try { (() => {
/**
 * Pricing tier card. Default sits on surface-1; `featured` lifts one step to
 * surface-2 (the Pro tier) — the emphasis is surface lift, no chromatic outline.
 */
function PricingCard({
  name,
  price,
  period = '/month',
  blurb,
  features = [],
  cta = 'Get started',
  ctaVariant,
  featured = false,
  onCta,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '24px',
      background: featured ? 'var(--color-surface-2)' : 'var(--color-surface-1)',
      borderRadius: 'var(--radius-xl)',
      color: 'var(--color-ink)',
      boxShadow: featured ? 'var(--elevation-2)' : 'none',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-headline-size)',
      lineHeight: 'var(--type-headline-line)',
      letterSpacing: 'var(--type-headline-track)',
      fontWeight: 'var(--weight-bold)'
    }
  }, name), featured && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-caption-size)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--type-caption-track)',
      color: 'var(--color-on-primary)',
      background: 'var(--color-primary)',
      padding: '3px 8px',
      borderRadius: 'var(--radius-sm)'
    }
  }, "Popular")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-display-md-size)',
      letterSpacing: 'var(--type-display-md-track)',
      fontWeight: 'var(--weight-medium)'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-body-sm-size)',
      color: 'var(--color-ink-muted)',
      letterSpacing: 'var(--type-body-sm-track)'
    }
  }, period)), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--type-body-size)',
      lineHeight: 'var(--type-body-line)',
      letterSpacing: 'var(--type-body-track)',
      color: 'var(--color-ink-muted)'
    }
  }, blurb)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: ctaVariant || (featured ? 'primary' : 'secondary'),
    onClick: onCta,
    style: {
      width: '100%'
    }
  }, cta), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      fontSize: 'var(--type-body-sm-size)',
      lineHeight: 'var(--type-body-sm-line)',
      letterSpacing: 'var(--type-body-sm-track)',
      color: 'var(--color-ink-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 auto',
      color: 'var(--color-semantic-success)',
      fontSize: '15px',
      lineHeight: 1.2
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, f)))));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pricing/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/pricing/PricingTabs.jsx
try { (() => {
/**
 * Pricing pill-toggle (Basic / Pro / Business / Enterprise).
 * Selected = surface LIFT (canvas → surface-2), not a chromatic fill.
 */
function PricingTabs({
  options = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: '4px',
      padding: '4px',
      background: 'var(--color-canvas)',
      border: '1px solid var(--color-hairline-soft)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, options.map(opt => {
    const selected = opt === value;
    return /*#__PURE__*/React.createElement("button", {
      key: opt,
      role: "tab",
      "aria-selected": selected,
      onClick: () => onChange && onChange(opt),
      style: {
        minHeight: '40px',
        padding: '9px 18px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--type-body-sm-size)',
        fontWeight: 'var(--weight-medium)',
        letterSpacing: 'var(--type-body-sm-track)',
        fontFeatureSettings: 'var(--font-features)',
        background: selected ? 'var(--color-surface-2)' : 'transparent',
        color: selected ? 'var(--color-ink)' : 'var(--color-ink-muted)',
        transition: 'background 140ms ease, color 140ms ease',
        WebkitTapHighlightColor: 'transparent'
      }
    }, opt);
  }));
}
Object.assign(__ds_scope, { PricingTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pricing/PricingTabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/HomeScreen.jsx
try { (() => {
/* Framer marketing — Home screen. Composes DS components into a poster hero,
   a gallery band, and a gradient-spotlight showcase. */
const {
  Button,
  SpotlightCard,
  TemplateCard,
  ProductMockupTile
} = window.FramerDesignSystem_8f4c84;
function MiniSite({
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, "Studio"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      fontSize: 11,
      color: '#888'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Work"), /*#__PURE__*/React.createElement("span", null, "About"), /*#__PURE__*/React.createElement("span", null, "Contact"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: '-1px',
      lineHeight: 1.05
    }
  }, "We craft", /*#__PURE__*/React.createElement("br", null), "digital brands."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: accent,
      color: '#fff',
      fontSize: 11,
      padding: '6px 12px',
      borderRadius: 100
    }
  }, "View work"), /*#__PURE__*/React.createElement("span", {
    style: {
      background: '#eee',
      fontSize: 11,
      padding: '6px 12px',
      borderRadius: 100
    }
  }, "Say hello")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      borderRadius: 8,
      background: '#ececec'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      borderRadius: 8,
      background: '#e2e2e2'
    }
  })));
}
function HomeScreen({
  onGetStarted
}) {
  const S = 'var(--space-section)';
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: 'var(--color-canvas)',
      color: 'var(--color-ink)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: `${'88px'} 30px 40px`,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontSize: 'var(--type-caption-size)',
      letterSpacing: '-0.13px',
      color: 'var(--color-ink-muted)',
      textTransform: 'uppercase',
      marginBottom: 22
    }
  }, "The web builder for creatives"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 auto',
      maxWidth: 900,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(48px, 8vw, 110px)',
      lineHeight: 0.85,
      letterSpacing: '-0.05em'
    }
  }, "The internet", /*#__PURE__*/React.createElement("br", null), "is your canvas"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '26px auto 0',
      maxWidth: 520,
      fontSize: 'var(--type-body-lg-size)',
      lineHeight: 'var(--type-body-lg-line)',
      letterSpacing: 'var(--type-body-lg-track)',
      color: 'var(--color-ink-muted)'
    }
  }, "Start with a blank canvas or a template. Add your content, then publish to the web \u2014 no code required."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onGetStarted
  }, "Get started for free"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Watch the film"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 980,
      margin: '0 auto',
      padding: '0 30px 40px'
    }
  }, /*#__PURE__*/React.createElement(ProductMockupTile, {
    url: "studio.framer.website"
  }, /*#__PURE__*/React.createElement(MiniSite, {
    accent: "#7C4DFF"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: `${S} 30px`
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(34px,5vw,62px)',
      lineHeight: 1,
      letterSpacing: '-0.05em'
    }
  }, "Built with Framer"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 30px',
      fontSize: 'var(--type-body-lg-size)',
      letterSpacing: 'var(--type-body-lg-track)',
      color: 'var(--color-ink-muted)'
    }
  }, "A gallery of real sites shipped by the community."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SpotlightCard, {
    variant: "violet",
    eyebrow: "Framer AI",
    title: "Design with words",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "translucent",
      size: "sm"
    }, "Try Framer AI"),
    style: {
      gridRow: 'span 2'
    }
  }, "Describe a section in plain language and watch it appear on the canvas, ready to edit."), /*#__PURE__*/React.createElement(TemplateCard, {
    title: "Nudge",
    meta: "Startup",
    thumb: /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg,#2c2c2c,#0d0d0d)'
      }
    })
  }), /*#__PURE__*/React.createElement(TemplateCard, {
    title: "Tonik",
    meta: "Agency",
    thumb: /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg,#333,#111)'
      }
    })
  }), /*#__PURE__*/React.createElement(TemplateCard, {
    title: "Speedrun",
    meta: "Fund",
    thumb: /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg,#242424,#0a0a0a)'
      }
    })
  }), /*#__PURE__*/React.createElement(TemplateCard, {
    title: "Halo",
    meta: "SaaS",
    thumb: /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg,#2a2a2a,#111)'
      }
    })
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      textAlign: 'center',
      padding: `${S} 30px`
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 auto',
      maxWidth: 760,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(38px,6vw,85px)',
      lineHeight: 0.95,
      letterSpacing: '-0.05em'
    }
  }, "Ship your site in minutes, not months"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onGetStarted
  }, "Start for free"))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/PricingScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Framer marketing — Pricing screen. Tabs, tier cards, comparison table, FAQ. */
const {
  Button,
  PricingTabs,
  PricingCard,
  ComparisonRow,
  FaqRow
} = window.FramerDesignSystem_8f4c84;
const TIERS = [{
  name: 'Basic',
  price: '$5',
  blurb: 'For a simple personal site.',
  features: ['Custom domain', '150 pages', 'Basic CMS', 'Framer badge']
}, {
  name: 'Pro',
  price: '$30',
  featured: true,
  blurb: 'For growing sites and teams.',
  features: ['Everything in Basic', '1,000 pages', 'Analytics', 'Remove Framer badge', 'A/B testing']
}, {
  name: 'Business',
  price: '$75',
  blurb: 'For high-traffic marketing sites.',
  features: ['Everything in Pro', 'Unlimited pages', 'Localization', 'Staging environments']
}, {
  name: 'Enterprise',
  price: 'Custom',
  period: '',
  blurb: 'For organizations at scale.',
  features: ['Everything in Business', 'SSO / SAML', 'Dedicated support', 'Custom contracts']
}];
const COMPARE = [{
  header: true,
  label: 'Publishing'
}, {
  label: 'Custom domain',
  values: [true, true, true, true]
}, {
  label: 'Pages',
  values: ['150', '1,000', 'Unlimited', 'Unlimited']
}, {
  label: 'Remove Framer badge',
  values: [false, true, true, true]
}, {
  header: true,
  label: 'Content'
}, {
  label: 'CMS collections',
  values: ['1', '10', '50', 'Unlimited']
}, {
  label: 'Localization',
  values: [false, false, true, true]
}, {
  label: 'A/B testing',
  values: [false, true, true, true]
}, {
  header: true,
  label: 'Team & support'
}, {
  label: 'Editors',
  values: ['1', '3', '10', 'Unlimited']
}, {
  label: 'SSO / SAML',
  values: [false, false, false, true]
}, {
  label: 'Priority support',
  values: [false, true, true, true]
}];
const FAQS = [{
  q: 'Can I use my own domain?',
  a: 'Yes — connect a custom domain on any paid plan in a couple of clicks, with automatic SSL.'
}, {
  q: 'Is there a free plan?',
  a: 'Yes. Publish on a free Framer subdomain with the core builder and hosting included.'
}, {
  q: 'Can I change plans later?',
  a: 'Upgrade or downgrade anytime from your dashboard; billing is prorated.'
}, {
  q: 'Do you offer discounts for startups?',
  a: 'Framer for Startups offers credits and perks for eligible early-stage teams.'
}];
function PricingScreen({
  onGetStarted
}) {
  const [tier, setTier] = React.useState('Pro');
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: 'var(--color-canvas)',
      color: 'var(--color-ink)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      textAlign: 'center',
      padding: '80px 30px 40px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(40px,6vw,85px)',
      lineHeight: 0.95,
      letterSpacing: '-0.05em'
    }
  }, "Simple, scalable pricing"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px auto 30px',
      maxWidth: 460,
      fontSize: 'var(--type-body-lg-size)',
      letterSpacing: 'var(--type-body-lg-track)',
      color: 'var(--color-ink-muted)'
    }
  }, "Start for free. Upgrade when you're ready to publish to your own domain."), /*#__PURE__*/React.createElement(PricingTabs, {
    options: TIERS.map(t => t.name),
    value: tier,
    onChange: setTier
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 30px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, TIERS.map(t => /*#__PURE__*/React.createElement(PricingCard, _extends({
    key: t.name
  }, t, {
    onCta: onGetStarted,
    cta: t.name === 'Enterprise' ? 'Talk to sales' : 'Get started'
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 30px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 24px',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(28px,4vw,44px)',
      letterSpacing: '-0.04em'
    }
  }, "Compare plans"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(160px,1.4fr) repeat(4,1fr)',
      gap: 12,
      padding: '0 0 6px',
      borderBottom: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", null), TIERS.map(t => /*#__PURE__*/React.createElement("span", {
    key: t.name,
    style: {
      textAlign: 'center',
      fontSize: 'var(--type-body-sm-size)',
      fontWeight: 700,
      letterSpacing: '-0.14px'
    }
  }, t.name))), COMPARE.map((r, i) => /*#__PURE__*/React.createElement(ComparisonRow, {
    key: i,
    label: r.label,
    values: r.values || ['', '', '', ''],
    header: r.header
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 820,
      margin: '0 auto',
      padding: '40px 30px 96px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 16px',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(28px,4vw,44px)',
      letterSpacing: '-0.04em'
    }
  }, "Frequently asked"), FAQS.map((f, i) => /*#__PURE__*/React.createElement(FaqRow, {
    key: i,
    question: f.q,
    answer: f.a,
    defaultOpen: i === 0
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onGetStarted
  }, "Get started for free"))));
}
window.PricingScreen = PricingScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/PricingScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ProductMockupTile = __ds_scope.ProductMockupTile;

__ds_ns.SpotlightCard = __ds_scope.SpotlightCard;

__ds_ns.TemplateCard = __ds_scope.TemplateCard;

__ds_ns.ComparisonRow = __ds_scope.ComparisonRow;

__ds_ns.FaqRow = __ds_scope.FaqRow;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.TopNav = __ds_scope.TopNav;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.PricingTabs = __ds_scope.PricingTabs;

})();
