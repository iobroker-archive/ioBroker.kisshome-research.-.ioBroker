/*!
 * ioBroker gulpfile
 * Date: 2024-07-16
 */
const { deleteFoldersRecursive, npmInstall, buildReact, copyFiles } = require('@iobroker/build-tools');
const { existsSync } = require('node:fs');

const srcAdmin = `${__dirname}/src-admin/`;

function clean() {
    deleteFoldersRecursive(`${__dirname}/admin`, ['kisshome-research.png', 'jsonConfig.json', 'i18n']);
    deleteFoldersRecursive(`${__dirname}/src-admin/build`);
}

function copyAllFiles() {
    if (!existsSync('./src-admin/build/customComponents.js')) {
        console.error(`[${new Date().toISOString()}] Invalid build: customComponents.js not found!`);
        process.exit(2);
    }
    copyFiles(['src-admin/build/static/js/*.js', '!src-admin/build/static/js/vendors*.js'], 'admin/custom/static/js');
    copyFiles(['src-admin/build/static/js/*.map', '!src-admin/build/static/js/vendors*.map'], 'admin/custom/static/js');
    copyFiles(['src-admin/build/customComponents.js'], 'admin/custom');
    copyFiles(['src-admin/build/customComponents.js.map'], 'admin/custom');
    copyFiles(['src-admin/src/i18n/*.json'], 'admin/custom/i18n');
}

if (process.argv.includes('--0-clean')) {
    clean();
    process.exit();
} else if (process.argv.includes('--1-npm')) {
    if (!existsSync(`${__dirname}/src-admin/node_modules`)) {
        npmInstall(srcAdmin).catch(e => {
            console.error(`[${new Date().toISOString()}] Cannot install admin dependencies: ${e}`);
            process.exit(1);
        });
    }
} else if (process.argv.includes('--2-compile')) {
    buildReact(srcAdmin, { rootDir: __dirname, craco: true, exec: true }).catch(e => {
        console.error(`[${new Date().toISOString()}] Cannot build: ${e}`);
        process.exit(1);
    });
} else if (process.argv.includes('--3-copy')) {
    copyAllFiles();
} else {
    clean();
    npmInstall(srcAdmin)
        .then(() => buildReact(srcAdmin, { rootDir: __dirname, craco: true }))
        .then(() => copyAllFiles())
        .catch(e => {
            console.error(`[${new Date().toISOString()}] Cannot build all: ${e}`);
            process.exit(1);
        });
}
