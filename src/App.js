import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { ChakraProvider, ColorModeScript, Button } from "@chakra-ui/react";
import AppRouter from './routers/appRouter';


function App() {

  return (
    <>
      <ColorModeScript initialColorMode={"light"} />
      <ChakraProvider>
        <AppRouter />
      </ChakraProvider>
    </>
  );
}

export default App;
