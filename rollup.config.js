import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

const external = Object.keys(pkg.peerDependencies || []);

export default {
    input: 'src/index.js',
    plugins: [
        babel(),
        resolve({
            extensions: ['.js', '.jsx']
        })
    ],
    external: external,
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true
        },
        {
            file: pkg.module,
            format: 'es',
            sourcemap: true
        },
        {
            file: pkg.browser,
            format: 'umd',
            exports: 'named',
            sourcemap: true,
            name: 'ReactMarionette'
        }
    ]
};
