module Main where

import ParentModule.Submodule

import Graphics.Element

main : Graphics.Element.Element
main =
    Graphics.Element.show (ParentModule.Submodule.getWelcomeMessage ())
