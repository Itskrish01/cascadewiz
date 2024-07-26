export const justifyContentClasses = [
  {
    name: "justify-start",
    label: "justify-content: flex-start",
  },
  {
    name: "justify-end",
    label: "justify-content: flex-end",
  },
  {
    name: "justify-center",
    label: "justify-content: center",
  },
  {
    name: "justify-between",
    label: "justify-content: space-between",
  },
  {
    name: "justify-around",
    label: "justify-content: space-around",
  },
  {
    name: "justify-evenly",
    label: "justify-content: space-evenly",
  },
];

export const alignItemsClasses = [
  {
    name: "items-start",
    label: "align-items: flex-start",
  },
  {
    name: "items-end",
    label: "align-items: flex-end",
  },
  {
    name: "items-center",
    label: "align-items: center",
  },
  {
    name: "items-baseline",
    label: "align-items: baseline",
  },
  {
    name: "items-stretch",
    label: "align-items: stretch",
  },
];

export const flexDirectionClasses = [
  {
    name: "flex-row",
    label: "flex-direction: row",
  },
  {
    name: "flex-row-reverse",
    label: "flex-direction: row-reverse",
  },
  {
    name: "flex-col",
    label: "flex-direction: column",
  },
  {
    name: "flex-col-reverse",
    label: "flex-direction: column-reverse",
  },
];

export const alignContentClasses = [
  {
    name: "content-start",
    label: "align-content: flex-start",
  },
  {
    name: "content-end",
    label: "align-content: flex-end",
  },
  {
    name: "content-center",
    label: "align-content: center",
  },
  {
    name: "content-between",
    label: "align-content: space-between",
  },
  {
    name: "content-around",
    label: "align-content: space-around",
  },
  {
    name: "content-evenly",
    label: "align-content: space-evenly",
  },
  {
    name: "content-stretch",
    label: "align-content: stretch",
  },
];

export const alignSelfClasses = [
  {
    name: "self-auto",
    label: "align-self: auto",
  },
  {
    name: "self-start",
    label: "align-self: flex-start",
  },
  {
    name: "self-end",
    label: "align-self: flex-end",
  },
  {
    name: "self-center",
    label: "align-self: center",
  },
  {
    name: "self-stretch",
    label: "align-self: stretch",
  },
  {
    name: "self-baseline",
    label: "align-self: baseline",
  },
];

export const cursorClasses = [
  {
    name: "cursor-auto",
    label: "cursor: auto",
    css: `/* CSS Code */
.cursor-auto {
  cursor: auto;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-auto">Auto cursor</div>`,
  },
  {
    name: "cursor-default",
    label: "cursor: default",
    css: `/* CSS Code */
.cursor-default {
  cursor: default;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-default">Default cursor</div>`,
  },
  {
    name: "cursor-pointer",
    label: "cursor: pointer",
    css: `/* CSS Code */
.cursor-pointer {
  cursor: pointer;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-pointer">Pointer cursor</div>`,
  },
  {
    name: "cursor-wait",
    label: "cursor: wait",
    css: `/* CSS Code */
.cursor-wait {
  cursor: wait;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-wait">Wait cursor</div>`,
  },
  {
    name: "cursor-text",
    label: "cursor: text",
    css: `/* CSS Code */
.cursor-text {
  cursor: text;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-text">Text cursor</div>`,
  },
  {
    name: "cursor-move",
    label: "cursor: move",
    css: `/* CSS Code */
.cursor-move {
  cursor: move;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-move">Move cursor</div>`,
  },
  {
    name: "cursor-help",
    label: "cursor: help",
    css: `/* CSS Code */
.cursor-help {
  cursor: help;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-help">Help cursor</div>`,
  },
  {
    name: "cursor-not-allowed",
    label: "cursor: not-allowed",
    css: `/* CSS Code */
.cursor-not-allowed {
  cursor: not-allowed;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-not-allowed">Not allowed cursor</div>`,
  },
  {
    name: "cursor-none",
    label: "cursor: none",
    css: `/* CSS Code */
.cursor-none {
  cursor: none;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-none">None cursor</div>`,
  },
  {
    name: "cursor-context-menu",
    label: "cursor: context-menu",
    css: `/* CSS Code */
.cursor-context-menu {
  cursor: context-menu;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-context-menu">Context menu cursor</div>`,
  },
  {
    name: "cursor-progress",
    label: "cursor: progress",
    css: `/* CSS Code */
.cursor-progress {
  cursor: progress;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-progress">Progress cursor</div>`,
  },
  {
    name: "cursor-cell",
    label: "cursor: cell",
    css: `/* CSS Code */
.cursor-cell {
  cursor: cell;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-cell">Cell cursor</div>`,
  },
  {
    name: "cursor-crosshair",
    label: "cursor: crosshair",
    css: `/* CSS Code */
.cursor-crosshair {
  cursor: crosshair;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-crosshair">Crosshair cursor</div>`,
  },
  {
    name: "cursor-vertical-text",
    label: "cursor: vertical-text",
    css: `/* CSS Code */
.cursor-vertical-text {
  cursor: vertical-text;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-vertical-text">Vertical text cursor</div>`,
  },
  {
    name: "cursor-alias",
    label: "cursor: alias",
    css: `/* CSS Code */
.cursor-alias {
  cursor: alias;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-alias">Alias cursor</div>`,
  },
  {
    name: "cursor-copy",
    label: "cursor: copy",
    css: `/* CSS Code */
.cursor-copy {
  cursor: copy;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-copy">Copy cursor</div>`,
  },
  {
    name: "cursor-no-drop",
    label: "cursor: no-drop",
    css: `/* CSS Code */
.cursor-no-drop {
  cursor: no-drop;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-no-drop">No-drop cursor</div>`,
  },
  {
    name: "cursor-grab",
    label: "cursor: grab",
    css: `/* CSS Code */
.cursor-grab {
  cursor: grab;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-grab">Grab cursor</div>`,
  },
  {
    name: "cursor-grabbing",
    label: "cursor: grabbing",
    css: `/* CSS Code */
.cursor-grabbing {
  cursor: grabbing;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-grabbing">Grabbing cursor</div>`,
  },
  {
    name: "cursor-all-scroll",
    label: "cursor: all-scroll",
    css: `/* CSS Code */
.cursor-all-scroll {
  cursor: all-scroll;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-all-scroll">All-scroll cursor</div>`,
  },
  {
    name: "cursor-col-resize",
    label: "cursor: col-resize",
    css: `/* CSS Code */
.cursor-col-resize {
  cursor: col-resize;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-col-resize">Column resize cursor</div>`,
  },
  {
    name: "cursor-row-resize",
    label: "cursor: row-resize",
    css: `/* CSS Code */
.cursor-row-resize {
  cursor: row-resize;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-row-resize">Row resize cursor</div>`,
  },
  {
    name: "cursor-n-resize",
    label: "cursor: n-resize",
    css: `/* CSS Code */
.cursor-n-resize {
  cursor: n-resize;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-n-resize">North resize cursor</div>`,
  },
  {
    name: "cursor-e-resize",
    label: "cursor: e-resize",
    css: `/* CSS Code */
.cursor-e-resize {
  cursor: e-resize;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-e-resize">East resize cursor</div>`,
  },
  {
    name: "cursor-s-resize",
    label: "cursor: s-resize",
    css: `/* CSS Code */
.cursor-s-resize {
  cursor: s-resize;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-s-resize">South resize cursor</div>`,
  },
  {
    name: "cursor-w-resize",
    label: "cursor: w-resize",
    css: `/* CSS Code */
.cursor-w-resize {
  cursor: w-resize;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-w-resize">West resize cursor</div>`,
  },
  {
    name: "cursor-ne-resize",
    label: "cursor: ne-resize",
    css: `/* CSS Code */
.cursor-ne-resize {
  cursor: ne-resize;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-ne-resize">North-east resize cursor</div>`,
  },
  {
    name: "cursor-nw-resize",
    label: "cursor: nw-resize",
    css: `/* CSS Code */
.cursor-nw-resize {
  cursor: nw-resize;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-nw-resize">North-west resize cursor</div>`,
  },
  {
    name: "cursor-se-resize",
    label: "cursor: se-resize",
    css: `/* CSS Code */
.cursor-se-resize {
  cursor: se-resize;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-se-resize">South-east resize cursor</div>`,
  },
  {
    name: "cursor-sw-resize",
    label: "cursor: sw-resize",
    css: `/* CSS Code */
.cursor-sw-resize {
  cursor: sw-resize;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-sw-resize">South-west resize cursor</div>`,
  },
  {
    name: "cursor-ew-resize",
    label: "cursor: ew-resize",
    css: `/* CSS Code */
.cursor-ew-resize {
  cursor: ew-resize;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-ew-resize">East-west resize cursor</div>`,
  },
  {
    name: "cursor-ns-resize",
    label: "cursor: ns-resize",
    css: `/* CSS Code */
.cursor-ns-resize {
  cursor: ns-resize;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-ns-resize">North-south resize cursor</div>`,
  },
  {
    name: "cursor-nesw-resize",
    label: "cursor: nesw-resize",
    css: `/* CSS Code */
.cursor-nesw-resize {
  cursor: nesw-resize;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-nesw-resize">North-east/south-west resize cursor</div>`,
  },
  {
    name: "cursor-nwse-resize",
    label: "cursor: nwse-resize",
    css: `/* CSS Code */
.cursor-nwse-resize {
  cursor: nwse-resize;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-nwse-resize">North-west/south-east resize cursor</div>`,
  },
  {
    name: "cursor-zoom-in",
    label: "cursor: zoom-in",
    css: `/* CSS Code */
.cursor-zoom-in {
  cursor: zoom-in;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-zoom-in">Zoom-in cursor</div>`,
  },
  {
    name: "cursor-zoom-out",
    label: "cursor: zoom-out",
    css: `/* CSS Code */
.cursor-zoom-out {
  cursor: zoom-out;
}`,
    html: `<!-- HTML CODE -->
<div class="cursor-zoom-out">Zoom-out cursor</div>`,
  },
];
