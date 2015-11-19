module Main where

import ParentModule.Submodule.GrandchildModule exposing (getWelcomeMessage)

import Graphics.Element exposing (show, Element)


main : Element
main =
    show (getWelcomeMessage ())
