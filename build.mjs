import * as esbuild from 'esbuild'

const srcDir = "./src/"
const distDir = "./dist/"
const entryPoints = ['one.jsx', 'two.jsx'];

for (const entryPoint of entryPoints) {
  let ctx = await esbuild.context({
    entryPoints: [srcDir + entryPoint],
    outfile: `${distDir}${entryPoint.split('.')[0]}.js`,
    bundle: true,
  });

  await ctx.watch();
  console.log(`Watching ${entryPoint}...`);
}

