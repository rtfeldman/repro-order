var make = function make(localRuntime) {
    localRuntime.Native.ParentModule = localRuntime.Native.ParentModule || {};
    localRuntime.Native.ParentModule.Submodule = localRuntime.Native.ParentModule.Submodule || {};
    localRuntime.Native.ParentModule.Submodule.GrandchildModule = localRuntime.Native.ParentModule.Submodule.GrandchildModule || {};

    if (localRuntime.ParentModule.Submodule.GrandchildModule.values) {
        return localRuntime.ParentModule.Submodule.GrandchildModule.values;
    }

    return {
        'getWelcomeMessage': function() { return "Yay! I didn't crash!" }
    };
};

Elm.Native = Elm.Native || {};
Elm.Native.ParentModule = Elm.Native.ParentModule || {};
Elm.Native.ParentModule.Submodule = Elm.Native.ParentModule.Submodule || {};
Elm.Native.ParentModule.Submodule.GrandchildModule = Elm.Native.ParentModule.Submodule.GrandchildModule || {};
Elm.Native.ParentModule.Submodule.GrandchildModule.make = make;
