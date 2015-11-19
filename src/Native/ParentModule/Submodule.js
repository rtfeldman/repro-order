var make = function make(localRuntime) {
    localRuntime.Native.ParentModule = localRuntime.Native.ParentModule || {};
    localRuntime.Native.ParentModule.Submodule = localRuntime.Native.ParentModule.Submodule || {};

    if (localRuntime.ParentModule.Submodule.values) {
        return localRuntime.ParentModule.Submodule.values;
    }

    return {
        'getWelcomeMessage': function() { return "Yay! I didn't crash!" }
    };
};

Elm.Native = Elm.Native || {};
Elm.Native.ParentModule = Elm.Native.ParentModule || {};
Elm.Native.ParentModule.Submodule = Elm.Native.ParentModule.Submodule || {};
Elm.Native.ParentModule.Submodule.make = make;
