(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../libs/simulation-wasm/pkg/lib_simulation_wasm.js":
/*!**********************************************************!*\
  !*** ../libs/simulation-wasm/pkg/lib_simulation_wasm.js ***!
  \**********************************************************/
/*! exports provided: __wbg_set_wasm, Simulation, __wbindgen_json_parse, __wbg_crypto_e1d53a1d73fb10b8, __wbindgen_is_object, __wbg_process_038c26bf42b093f8, __wbg_versions_ab37218d2f0b24a8, __wbg_node_080f4b19d15bc1fe, __wbindgen_is_string, __wbindgen_object_drop_ref, __wbg_msCrypto_6e7d3e1f92610cbb, __wbg_require_78a3dcfbdba9cbce, __wbindgen_is_function, __wbindgen_string_new, __wbg_getRandomValues_805f1c3d65988a5a, __wbg_randomFillSync_6894564c2c334c42, __wbg_newnoargs_2b8b6bd7753c76ba, __wbg_call_95d1ea488d03e4e8, __wbindgen_object_clone_ref, __wbg_self_e7c1f827057f6584, __wbg_window_a09ec664e14b1b81, __wbg_globalThis_87cbb8506fecf3a9, __wbg_global_c85a9259e621f3db, __wbindgen_is_undefined, __wbg_call_9495de66fdbe016b, __wbg_buffer_cf65c07de34b9a08, __wbg_new_537b7341ce90bb31, __wbg_set_17499e8aa4003ebd, __wbg_length_27a2afe8ab42b09f, __wbg_newwithlength_b56c882b57805732, __wbg_subarray_7526649b91a252a6, __wbindgen_throw, __wbindgen_memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib_simulation_wasm_bg.wasm */ \"../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.wasm\");\n/* harmony import */ var _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib_simulation_wasm_bg.js */ \"../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Simulation\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Simulation\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_json_parse\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_json_parse\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_crypto_e1d53a1d73fb10b8\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_crypto_e1d53a1d73fb10b8\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_object\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_object\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_process_038c26bf42b093f8\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_process_038c26bf42b093f8\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_versions_ab37218d2f0b24a8\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_versions_ab37218d2f0b24a8\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_node_080f4b19d15bc1fe\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_node_080f4b19d15bc1fe\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_string\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_string\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_msCrypto_6e7d3e1f92610cbb\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_msCrypto_6e7d3e1f92610cbb\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_require_78a3dcfbdba9cbce\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_require_78a3dcfbdba9cbce\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_function\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_function\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_new\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_805f1c3d65988a5a\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getRandomValues_805f1c3d65988a5a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_randomFillSync_6894564c2c334c42\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_randomFillSync_6894564c2c334c42\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_2b8b6bd7753c76ba\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_newnoargs_2b8b6bd7753c76ba\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_95d1ea488d03e4e8\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_call_95d1ea488d03e4e8\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_clone_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_e7c1f827057f6584\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_self_e7c1f827057f6584\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_a09ec664e14b1b81\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_window_a09ec664e14b1b81\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_87cbb8506fecf3a9\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_globalThis_87cbb8506fecf3a9\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_c85a9259e621f3db\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_global_c85a9259e621f3db\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_undefined\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_9495de66fdbe016b\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_call_9495de66fdbe016b\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_cf65c07de34b9a08\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_buffer_cf65c07de34b9a08\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_537b7341ce90bb31\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_537b7341ce90bb31\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_17499e8aa4003ebd\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_17499e8aa4003ebd\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_length_27a2afe8ab42b09f\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_length_27a2afe8ab42b09f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithlength_b56c882b57805732\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_newwithlength_b56c882b57805732\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_subarray_7526649b91a252a6\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_subarray_7526649b91a252a6\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_memory\"]; });\n\n\n\nObject(_lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"])(_lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack:///../libs/simulation-wasm/pkg/lib_simulation_wasm.js?");

/***/ }),

/***/ "../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.js":
/*!*************************************************************!*\
  !*** ../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.js ***!
  \*************************************************************/
/*! exports provided: __wbg_set_wasm, Simulation, __wbindgen_json_parse, __wbg_crypto_e1d53a1d73fb10b8, __wbindgen_is_object, __wbg_process_038c26bf42b093f8, __wbg_versions_ab37218d2f0b24a8, __wbg_node_080f4b19d15bc1fe, __wbindgen_is_string, __wbindgen_object_drop_ref, __wbg_msCrypto_6e7d3e1f92610cbb, __wbg_require_78a3dcfbdba9cbce, __wbindgen_is_function, __wbindgen_string_new, __wbg_getRandomValues_805f1c3d65988a5a, __wbg_randomFillSync_6894564c2c334c42, __wbg_newnoargs_2b8b6bd7753c76ba, __wbg_call_95d1ea488d03e4e8, __wbindgen_object_clone_ref, __wbg_self_e7c1f827057f6584, __wbg_window_a09ec664e14b1b81, __wbg_globalThis_87cbb8506fecf3a9, __wbg_global_c85a9259e621f3db, __wbindgen_is_undefined, __wbg_call_9495de66fdbe016b, __wbg_buffer_cf65c07de34b9a08, __wbg_new_537b7341ce90bb31, __wbg_set_17499e8aa4003ebd, __wbg_length_27a2afe8ab42b09f, __wbg_newwithlength_b56c882b57805732, __wbg_subarray_7526649b91a252a6, __wbindgen_throw, __wbindgen_memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return __wbg_set_wasm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Simulation\", function() { return Simulation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_json_parse\", function() { return __wbindgen_json_parse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_crypto_e1d53a1d73fb10b8\", function() { return __wbg_crypto_e1d53a1d73fb10b8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_object\", function() { return __wbindgen_is_object; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_process_038c26bf42b093f8\", function() { return __wbg_process_038c26bf42b093f8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_versions_ab37218d2f0b24a8\", function() { return __wbg_versions_ab37218d2f0b24a8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_node_080f4b19d15bc1fe\", function() { return __wbg_node_080f4b19d15bc1fe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_string\", function() { return __wbindgen_is_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_msCrypto_6e7d3e1f92610cbb\", function() { return __wbg_msCrypto_6e7d3e1f92610cbb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_require_78a3dcfbdba9cbce\", function() { return __wbg_require_78a3dcfbdba9cbce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_function\", function() { return __wbindgen_is_function; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_805f1c3d65988a5a\", function() { return __wbg_getRandomValues_805f1c3d65988a5a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_randomFillSync_6894564c2c334c42\", function() { return __wbg_randomFillSync_6894564c2c334c42; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_2b8b6bd7753c76ba\", function() { return __wbg_newnoargs_2b8b6bd7753c76ba; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_95d1ea488d03e4e8\", function() { return __wbg_call_95d1ea488d03e4e8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_e7c1f827057f6584\", function() { return __wbg_self_e7c1f827057f6584; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_a09ec664e14b1b81\", function() { return __wbg_window_a09ec664e14b1b81; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_87cbb8506fecf3a9\", function() { return __wbg_globalThis_87cbb8506fecf3a9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_c85a9259e621f3db\", function() { return __wbg_global_c85a9259e621f3db; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_9495de66fdbe016b\", function() { return __wbg_call_9495de66fdbe016b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_cf65c07de34b9a08\", function() { return __wbg_buffer_cf65c07de34b9a08; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_537b7341ce90bb31\", function() { return __wbg_new_537b7341ce90bb31; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_17499e8aa4003ebd\", function() { return __wbg_set_17499e8aa4003ebd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_length_27a2afe8ab42b09f\", function() { return __wbg_length_27a2afe8ab42b09f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithlength_b56c882b57805732\", function() { return __wbg_newwithlength_b56c882b57805732; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_subarray_7526649b91a252a6\", function() { return __wbg_subarray_7526649b91a252a6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return __wbindgen_memory; });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(128).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 132) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        wasm.__wbindgen_exn_store(addHeapObject(e));\n    }\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);\n}\n/**\n*/\nclass Simulation {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Simulation.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_simulation_free(ptr);\n    }\n    /**\n    */\n    constructor() {\n        const ret = wasm.simulation_new();\n        return Simulation.__wrap(ret);\n    }\n    /**\n    * @returns {any}\n    */\n    world() {\n        const ret = wasm.simulation_world(this.ptr);\n        return takeObject(ret);\n    }\n    /**\n    */\n    step() {\n        wasm.simulation_step(this.ptr);\n    }\n}\n\nfunction __wbindgen_json_parse(arg0, arg1) {\n    const ret = JSON.parse(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n};\n\nfunction __wbg_crypto_e1d53a1d73fb10b8(arg0) {\n    const ret = getObject(arg0).crypto;\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_is_object(arg0) {\n    const val = getObject(arg0);\n    const ret = typeof(val) === 'object' && val !== null;\n    return ret;\n};\n\nfunction __wbg_process_038c26bf42b093f8(arg0) {\n    const ret = getObject(arg0).process;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_versions_ab37218d2f0b24a8(arg0) {\n    const ret = getObject(arg0).versions;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_node_080f4b19d15bc1fe(arg0) {\n    const ret = getObject(arg0).node;\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_is_string(arg0) {\n    const ret = typeof(getObject(arg0)) === 'string';\n    return ret;\n};\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbg_msCrypto_6e7d3e1f92610cbb(arg0) {\n    const ret = getObject(arg0).msCrypto;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_require_78a3dcfbdba9cbce() { return handleError(function () {\n    const ret = module.require;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbindgen_is_function(arg0) {\n    const ret = typeof(getObject(arg0)) === 'function';\n    return ret;\n};\n\nfunction __wbindgen_string_new(arg0, arg1) {\n    const ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_getRandomValues_805f1c3d65988a5a() { return handleError(function (arg0, arg1) {\n    getObject(arg0).getRandomValues(getObject(arg1));\n}, arguments) };\n\nfunction __wbg_randomFillSync_6894564c2c334c42() { return handleError(function (arg0, arg1, arg2) {\n    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));\n}, arguments) };\n\nfunction __wbg_newnoargs_2b8b6bd7753c76ba(arg0, arg1) {\n    const ret = new Function(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n};\n\nfunction __wbg_call_95d1ea488d03e4e8() { return handleError(function (arg0, arg1) {\n    const ret = getObject(arg0).call(getObject(arg1));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbindgen_object_clone_ref(arg0) {\n    const ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_self_e7c1f827057f6584() { return handleError(function () {\n    const ret = self.self;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_window_a09ec664e14b1b81() { return handleError(function () {\n    const ret = window.window;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_globalThis_87cbb8506fecf3a9() { return handleError(function () {\n    const ret = globalThis.globalThis;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_global_c85a9259e621f3db() { return handleError(function () {\n    const ret = global.global;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbindgen_is_undefined(arg0) {\n    const ret = getObject(arg0) === undefined;\n    return ret;\n};\n\nfunction __wbg_call_9495de66fdbe016b() { return handleError(function (arg0, arg1, arg2) {\n    const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_buffer_cf65c07de34b9a08(arg0) {\n    const ret = getObject(arg0).buffer;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_new_537b7341ce90bb31(arg0) {\n    const ret = new Uint8Array(getObject(arg0));\n    return addHeapObject(ret);\n};\n\nfunction __wbg_set_17499e8aa4003ebd(arg0, arg1, arg2) {\n    getObject(arg0).set(getObject(arg1), arg2 >>> 0);\n};\n\nfunction __wbg_length_27a2afe8ab42b09f(arg0) {\n    const ret = getObject(arg0).length;\n    return ret;\n};\n\nfunction __wbg_newwithlength_b56c882b57805732(arg0) {\n    const ret = new Uint8Array(arg0 >>> 0);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_subarray_7526649b91a252a6(arg0, arg1, arg2) {\n    const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_memory() {\n    const ret = wasm.memory;\n    return addHeapObject(ret);\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module), __webpack_require__(/*! ./../../../www/node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.js?");

/***/ }),

/***/ "../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.wasm":
/*!***************************************************************!*\
  !*** ../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.wasm ***!
  \***************************************************************/
/*! exports provided: memory, __wbg_simulation_free, simulation_new, simulation_world, simulation_step, __wbindgen_exn_store */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./lib_simulation_wasm_bg.js */ \"../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lib_simulation_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib-simulation-wasm */ \"../libs/simulation-wasm/pkg/lib_simulation_wasm.js\");\n\n\nCanvasRenderingContext2D.prototype.drawTriangle = function (x, y, size, rotation) {\n    this.beginPath();\n\n    this.moveTo(\n        x - Math.sin(rotation) * size * 1.5,\n        y + Math.cos(rotation) * size * 1.5,\n    );\n\n    this.lineTo(\n        x - Math.sin(rotation + 2.0 / 3.0 * Math.PI) * size,\n        y + Math.cos(rotation + 2.0 / 3.0 * Math.PI) * size,\n    );\n\n    this.lineTo(\n        x - Math.sin(rotation + 4.0 / 3.0 * Math.PI) * size,\n        y + Math.cos(rotation + 4.0 / 3.0 * Math.PI) * size,\n    );\n\n    this.lineTo(\n        x - Math.sin(rotation) * size * 1.5,\n        y + Math.cos(rotation) * size * 1.5,\n    );\n\n    this.fillStyle = 'rgb(255, 255, 255)';\n    this.fill();\n};\n\nCanvasRenderingContext2D.prototype.drawCircle = function (x, y, radius) {\n    this.beginPath();\n    this.arc(x, y, radius, 0, 2.0 * Math.PI);\n    this.fillStyle = 'rgb(255, 165, 0)';\n    this.fill();\n};\n\nconst simulation = new lib_simulation_wasm__WEBPACK_IMPORTED_MODULE_0__[\"Simulation\"]();\nconst viewport = document.getElementById(\"viewport\");\nconst ctxt = viewport.getContext(\"2d\");\nctxt.fillStyle = \"rgb(0, 0, 0\";\n\nfunction redraw() {\n    let viewportWidth;\n    let viewportHeight;\n    if (window.innerWidth > window.innerHeight) {\n        viewportHeight = window.innerHeight;\n        viewportWidth = window.innerHeight;\n    }\n    else {\n        viewportWidth = window.innerWidth;\n        viewportHeight = window.innerWidth;\n    }\n    const viewportScale = window.devicePixelRatio || 2;\n    viewport.width = viewportWidth * viewportScale;\n    viewport.height = viewportHeight * viewportScale;\n    ctxt.scale(viewportScale, viewportScale);\n    ctxt.clearRect(0, 0, viewportWidth, viewportHeight);\n\n    simulation.step();\n\n    const world = simulation.world();\n\n    for (const food of world.foods) {\n        ctxt.drawCircle(\n            food.x * viewportWidth,\n            food.y * viewportHeight,\n            (0.01 / 2.0) * viewportWidth,\n        );\n    }\n\n    for (const animal of world.animals) {\n        ctxt.drawTriangle(\n            animal.x * viewportWidth,\n            animal.y * viewportHeight,\n            0.01 * viewportWidth,\n            animal.rotation,\n            );\n    }\n\n    requestAnimationFrame(redraw);\n}\nredraw();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);