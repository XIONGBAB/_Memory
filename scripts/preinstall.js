//  如果不允许未声明而使用变量可以使用下面
const process = require("node:process");
if (!/pnpm/.test(process.env.npm_execpath || "")) {
  console.warn(
    `\u001B[33mThis repository must using pnpm as the package manager ` +
      ` for scripts to work properly.\u001B[39m\n`,
  );
  process.exit(1);
}
