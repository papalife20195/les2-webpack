
export type TMode = "production" | "development";

export interface IEnv {
    mode: TMode,
};

export interface buildOptions {
    env: IEnv,
    paths:{
        entry: string,
        html: string,
        output: string,
    }
}