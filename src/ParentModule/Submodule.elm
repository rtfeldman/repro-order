module ParentModule.Submodule where

import Native.ParentModule.Submodule
import ParentModule

getWelcomeMessage : () -> String
getWelcomeMessage =
    Native.ParentModule.Submodule.getWelcomeMessage
