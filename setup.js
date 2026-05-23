const { execSync } = require('child_process')
const path = require('path')

const actionDir = path.dirname(__filename)
execSync('npm ci --omit=dev', { cwd: actionDir, stdio: 'inherit' })
