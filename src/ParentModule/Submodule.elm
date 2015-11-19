module ParentModule.Submodule where

import Native.ParentModule.Submodule
import ParentModule

getWelcomeMessage () =
    Native.ParentModule.Submodule.getWelcomeMessage
