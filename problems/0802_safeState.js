var eventualSafeNodes = function(graph) {
  const safeSteps = {};
  const traverse = (currentStepI) => {
    if (safeSteps[currentStepI]) {
      return true;
    }

    if (graph[currentStepI].length === 0) {
      safeSteps[currentStepI] = true;
      return true; 
    } else {
      var childResult = null;
      for (var nextStep in graph[currentStepI]) {
        childResult = traverse(graph[currentStepI][nextStep]);
        if (childResult) {
          safeSteps[currentStepI];
          return true;
        }
      }
    }
  };

  // var childResult = 
  for (var stepI in graph) {

  }
}