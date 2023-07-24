import { buildWebpackConfig } from "./config/buildWebpackConfig";
import { IEnv } from "./config/types";

const config = (env: IEnv) => {
const buildConfig = {
  env,
  paths:{
    entry:'path.resolve(__dirname, "src", "index.ts")',
    html:'path.resolve(__dirname, "src", "index.html")',
    output:'path.resolve(__dirname, "src", "index.html")',
  }
}
return buildWebpackConfig(buildConfig);
};
export default config;
