module ParentModule.Submodule.GrandchildModule where

import ParentModule
import Native.ParentModule.Submodule.GrandchildModule


getWelcomeMessage : () -> String
getWelcomeMessage =
    Native.ParentModule.Submodule.GrandchildModule.getWelcomeMessage


childMessage =
    ParentModule.parentMessage ++ " whee!"
