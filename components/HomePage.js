"use client"

import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function HomePage() {

    const router = useRouter()

    function handleButton()
    {
        router.push("/inventory/")
    }

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={2}
    >
      <Typography variant="h2" align="center">
        Welcome to Inventory Management System
      </Typography>
      <Button onClick={handleButton} variant="contained" color="primary">
        Get Started
      </Button>
    </Box>
  );
}