// Setup
const { execSync } = require('child_process')
const path = require('path')

const actionDir = path.dirname(__filename)
execSync('npm ci --omit=dev', { cwd: actionDir, stdio: 'inherit' })

// Main action
const { setupMSVCDevCmd } = require('./lib')
const core = require('@actions/core')

function main() {
    var   arch    = core.getInput('arch')
    const sdk     = core.getInput('sdk')
    const toolset = core.getInput('toolset')
    const uwp     = core.getInput('uwp')
    const spectre = core.getInput('spectre')
    const vsversion = core.getInput('vsversion')

    setupMSVCDevCmd(arch, sdk, toolset, uwp, spectre, vsversion)
}

try {
    main()
}
catch (e) {
    core.setFailed('Could not setup Developer Command Prompt: ' + e.message)
}
