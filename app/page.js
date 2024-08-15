'use client';

import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {AppBar, Button, Container, Toolbar, Typography} from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create flashcard from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant = "h6" style={{flexGrow: 1}}>
            Flashcard Saas
          </Typography>
          <SignedOut>
            <Button color="inheret">Login</Button>
            <Button color="inheret">Sign Up</Button>
          </SignedOut>
          <SignedIn>
          </SignedIn>
        </Toolbar>
      </AppBar>
    </Container>
  )
}
