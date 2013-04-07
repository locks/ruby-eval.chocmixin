var exec = require('child_process').exec

Hooks.addMenuItem("Actions/Ruby/Evaluate/Annotate", "cmd-opt-e", function () {
  var current = Document.current();

  current.performSave();

  if (current.isUntitled()) {
    Alert.show("Please save file before evaluating ruby code.");
    return;
  }

  Recipe.run(function (recipe) {
    var path = current.path()

    exec('xmpfilter -q -a ' + path, function (err, stdout, stderr) {
      if (err) {
        Alert.show('oops: ' + err);
        return false;
      }

      Recipe.run(function (recipe) {
        var rng = new Range(recipe.length)
        recipe.replaceTextInRange(rng, stdout)
      })
    })
  })
})

Hooks.addMenuItem("Actions/Ruby/Evaluate/Annotate and emit stdout", "cmd-opt-shift-e", function () {
  var current = Document.current();

  current.performSave();

  if (current.isUntitled()) {
    Alert.show("Please save file before evaluating ruby code.");
    return;
  }

  Recipe.run(function (recipe) {
    var path = current.path()

    exec('xmpfilter -a ' + path, function (err, stdout, stderr) {
      if (err) {
        Alert.show('oops: ' + err);
        return false;
      }

      Recipe.run(function (recipe) {
        var rng = new Range(recipe.length)
        recipe.replaceTextInRange(rng, stdout)
      })
    })
  })
})
