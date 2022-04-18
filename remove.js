const { devDependencies, dependencies } = require("./package.json");
const { exec } = require("child_process");

const devs = Object.keys(devDependencies);
const deps = Object.keys(dependencies);

const dep = [...deps, ...devs];

console.log(dep);

const removeConsole = `yarn remove ${dep.join(" ")}`;
exec(removeConsole, (err, stdout, stderr) => {
  if (err) return;

  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
