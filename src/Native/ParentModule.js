var make = function make(localRuntime) {
    localRuntime.Native.ParentModule = localRuntime.Native.ParentModule || {};

    if (localRuntime.ParentModule.values) {
        return localRuntime.ParentModule.values;
    }

    return {
        'doNothing': function() {}
    };
};

Elm.Native = Elm.Native || {};
Elm.Native.ParentModule = Elm.Native.ParentModule || {};
Elm.Native.ParentModule.make = make;
