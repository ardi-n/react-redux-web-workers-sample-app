/**
 * Prevent Parcel from analyzing worker source code.
 * Required until proper support for including worker dependencies
 * is shipped.
 * Also don't allow Firefox to initialize Worker in a Worker context.
 * @see {@link https://github.com/parcel-bundler/parcel/issues/474#issuecomment-360889725}
 * @see {@link https://github.com/parcel-bundler/parcel/issues/758}
 */
let worker = null;
if (self.document) {
  worker = Function("try { return new Worker('./worker.src.js'); } catch (e) { return null; }")();
}

export default worker;