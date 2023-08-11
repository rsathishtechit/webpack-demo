class MyLoggerPlugin {
  apply(compiler) {
    // Hook into the 'compile' stage
    compiler.hooks.compile.tap("MyLoggerPlugin", (compilationParams) => {
      console.log("The compile is starting...");
    });

    // Hook into the 'emit' stage
    compiler.hooks.emit.tapAsync("MyLoggerPlugin", (compilation, callback) => {
      console.log("Emitting assets...");
      callback(); // Important: Always call the callback in async hooks!
    });

    // Hook into the 'done' stage
    compiler.hooks.done.tap("MyLoggerPlugin", (stats) => {
      console.log("Compilation completed!");
    });
  }
}

module.exports = MyLoggerPlugin;
