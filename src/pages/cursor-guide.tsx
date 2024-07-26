const CursorCSSGuide = () => {
  return (
    <>
      <h3 className="blueDark-text text-3xl font-semibold">CSS Cursor Guide</h3>
      <div className="mt-4">
        <p>
          The <code>cursor</code> CSS property determines which mouse cursor
          appears when the pointer hovers over an element.
          <br />
          <br />
          This property helps users understand what actions they can perform,
          such as selecting text, opening help or context menus, copying
          content, or resizing tables. You can define the cursor type using
          predefined keywords or specify a custom icon, with optional fallback
          images and a mandatory keyword as a final fallback.
        </p>
      </div>
      <div className="mt-16 cursor-guide">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 w-full gap-5 mt-2">
          <div className="flex-1 bg-gray-50 cursor-pointer select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: pointer;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-auto border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: auto;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-default select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: default;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-wait select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: wait;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-text select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: text;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-move select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: move;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-help select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: help;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-not-allowed select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: not-allowed;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-crosshair select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: crosshair;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-ns-resize select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: ns-resize;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-ew-resize select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: ew-resize;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-nesw-resize select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: nesw-resize;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-nwse-resize select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: nwse-resize;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-col-resize select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: col-resize;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-row-resize select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: row-resize;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-all-scroll select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: all-scroll;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-grab select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: grab;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-grabbing select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: grabbing;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-zoom-in select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: zoom-in;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-zoom-out select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: zoom-out;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-e-resize select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: e-resize;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-n-resize select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: n-resize;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-s-resize select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: s-resize;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-w-resize select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: w-resize;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-se-resize select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: se-resize;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-sw-resize select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: sw-resize;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-no-drop select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: no-drop;</code>
          </div>
          <div className="flex-1 bg-gray-50 cursor-none select-none border border-gray-200 w-full p-3 rounded-xl">
            <code>cursor: none;</code>
          </div>
        </div>
      </div>
    </>
  );
};

export default CursorCSSGuide;
