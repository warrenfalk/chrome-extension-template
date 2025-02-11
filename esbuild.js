/**
 * esbuild is required for bundling so we can use ES6 modules in the extension.
 */
const args = process.argv.slice(2);
const tsReferences = require('esbuild-plugin-ts-references');
const esbuild = require('esbuild');

async function build() {
  const params = {
    entryPoints: [
      'src/content.ts',
      'src/popup.tsx',
    ],
    bundle: true,
    sourcemap: "linked",
    outdir: "dist",
    target: "chrome80",
    plugins: [tsReferences],
    //logLevel: "debug",
  };

  const context = await esbuild.context(params)

  await context.rebuild();
  
  const watch = args.indexOf('--watch') !== -1;
  if (watch) {
    await context.watch();
  }
  else {
    context.dispose();
  }
}

build().catch(e => console.error(e));

