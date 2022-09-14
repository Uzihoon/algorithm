class Middleware {
  constructor() {
    this.errorHandlers = [];
    this.handlers = [];
  }

  use(func) {
    const isErrorHandler = func.length >= 3;

    if (isErrorHandler) {
      this.errorHandlers.push(func);
    } else {
      this.handlers.push(func);
    }
  }

  start(req) {
    const self = this;
    let errorIdx = 0;
    let idx = 0;

    function next(error) {
      const args = [req, next];
      let func;

      if (error) {
        args.unshift(error);
        func = self.errorhandlers[errorIdx++];
      } else {
        func = self.handlers[idx++];
      }

      try {
        func && func(...args);
      } catch (error) {
        next(err);
      }
    }

    next();
  }
}
