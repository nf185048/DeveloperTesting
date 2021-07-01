import React, { useEffect, useState } from 'react'
import type { FC } from 'react'
import { Button, Grid, Item, List, ListTitle } from '@ncr-design-system/react'
import './style.css'
import * as Tasks from '../tasks'

export const DevEnv: FC<{}> = () => {
  type Task = 'headerPage' | 'loadingPage' | 'loginPage'
  type Variant = "outline" | "link" | "text" | "fill" | undefined

  const [currentTask, setTask] = useState<Task>()
  const [headerButton, setHeaderButton] = useState<Variant>('outline')
  const [loadingButton, setLoadingButton] = useState<Variant>('outline')
  const [loginButton, setLoginButton] = useState<Variant>('outline')


  useEffect(() => {
    if (currentTask === 'headerPage') {
      setHeaderButton('fill')
      setLoadingButton('outline')
      setLoginButton('outline')
    }
    if (currentTask === 'loadingPage') {
      setHeaderButton('outline')
      setLoadingButton('fill')
      setLoginButton('outline')
    }
    if (currentTask === 'loginPage') {
      setHeaderButton('outline')
      setLoadingButton('outline')
      setLoginButton('fill')

    }
  }, [currentTask]);

  return (
    <div className='devEnvContainer'>
      <Grid container>
        <Grid item xs={3}>
          <List>
            <ListTitle>Tasks</ListTitle>
            <div className='border' />
            <Item className='taskItem'>
              <Button onClick={() => setTask('headerPage')} variant={headerButton}>
                Create a sticky header
              </Button>
            </Item>
            <Item className='taskItem'>
              <Button onClick={() => setTask('loadingPage')} variant={loadingButton}>
                Create a loading page
              </Button>
            </Item>
            <Item className='taskItem'>
              <Button onClick={() => setTask('loginPage')} variant={loginButton}>
                Create a login page
              </Button>
            </Item>
          </List>
        </Grid>
        <Grid item xs={9}>
          {(currentTask === 'headerPage') && (<Tasks.HeaderPage />)}
          {(currentTask === 'loadingPage') && (<Tasks.LoadingPage />)}
          {(currentTask === 'loginPage') && (<Tasks.LoginPage />)}
        </Grid>
      </Grid>
    </div>
  )
}
