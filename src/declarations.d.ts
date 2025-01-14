// Declare png module
declare module '*.png';

// Declare svg module
// declare module '*.svg';

declare module '*.svg' {
    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement>
    >;

    const src: string;

    export default src;
}
