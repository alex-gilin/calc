# VSCode.dev Test Application

A simple Node.js TypeScript application designed for testing debugging and development workflows in vscode.dev.

## Features

- **Express.js server** with TypeScript
- **Multiple debug configurations** in launch.json
- **Simple API endpoints** for testing
- **Built-in calculation functions** with breakpoint opportunities

## API Endpoints

- `GET /` - Basic hello message with timestamp
- `GET /health` - Health check endpoint
- `GET /calculate/:num` - Calculate square and check if number is prime

## Setup Instructions for vscode.dev

1. **Create a new GitHub repository** and upload these files
2. **Open in vscode.dev** by going to `https://vscode.dev/github/yourusername/yourrepo`
3. **Install dependencies** using the integrated terminal:
   ```bash
   npm install
   ```

## Available Debug Configurations

The `.vscode/launch.json` includes several debug configurations:

1. **Launch TypeScript App** - Direct execution with ts-node
2. **Launch Compiled JS** - Build first, then run compiled JavaScript
3. **Attach to Process** - Attach debugger to running process
4. **Launch with Inspector** - Start with Node.js inspector for advanced debugging

## Running the Application

### Method 1: Using Debug Configuration
- Press `F5` or go to Run and Debug panel
- Select "Launch TypeScript App" configuration
- Click the green play button

### Method 2: Using Terminal
```bash
# Development mode (with ts-node)
npm run dev

# Build and run
npm run build
npm start
```

## Testing Debugging

1. Set breakpoints in `src/index.ts` (try the `calculateSquare` or `isPrime` functions)
2. Launch using any debug configuration
3. Visit `http://localhost:3000/calculate/7` to trigger breakpoints
4. Step through code and inspect variables

## File Structure

```
├── .vscode/
│   ├── launch.json     # Debug configurations
│   └── tasks.json      # Build tasks
├── src/
│   └── index.ts        # Main application file
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md          # This file
```

## Notes for vscode.dev

- Some debug features may have limitations in the browser environment
- Terminal and task execution should work normally
- File watching and hot reload may behave differently than desktop VS Code
