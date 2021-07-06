/**
 * EXAMPLE INTERFACE
 */

import React, { useState } from 'react'
import type { FC } from 'react'
import './style.css'
import { Modal, Button, Grid, Input, InputWrapper, Typography } from '@ncr-design-system/react'

export const LoginPage: FC<{}> = () => {
  const [opened, setOpened] = useState(false)
  return (
    <>
      <Button variant='outline' onClick={() => setOpened(true)}>
        Login
      </Button>

      <Modal width='375px' open={opened} onHide={() => setOpened(false)} >
        <Grid container spacing={3} justify='center' style={{ padding: '1em' }}>

          <Grid item style={{ paddingTop: '1em', textAlign: 'center' }}>
            <Typography variant='title2'>NCR Login</Typography>
            <Typography variant='callout'>Login to see your team's conversations.</Typography>
          </Grid>

          <Grid item xs={12}>
            <InputWrapper>
              <Input placeholder='Username'></Input>
            </InputWrapper>
          </Grid>

          <Grid item xs={12}>
            <InputWrapper>
              <Input placeholder='Password'></Input>
            </InputWrapper>
          </Grid>

          <Grid item xs={12}>
            <Button style={{ width: '100%' }}>Login</Button>
          </Grid>

          <Grid item xs={12}>
            <Grid container justify='space-between'>
              <Grid item>
                <Typography variant='caption1'>
                  Don't have an account?
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='caption1'>
                  Forgot password?
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <div className='borderSmall' />

          <Grid container direction='column' alignItems='center'>
            <Typography style={{ opacity: '80%' }}>Or, login with:</Typography>
            <Grid item >
              <Button style={{ margin: '1em' }}>Google</Button>
              <Button>Facebook</Button>
            </Grid>
          </Grid>

        </Grid>
      </Modal>

    </>
  )
}
