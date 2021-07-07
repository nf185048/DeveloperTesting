import React, { useEffect, useState } from 'react'
import type { FC } from 'react'
import { Button, Grid, Item, List, ListTitle } from '@ncr-design-system/react'
import './style.css'
// import * as Tasks from '../example'
import * as Tasks from '../tasks'

export const DevEnv: FC<{}> = () => {
  type Task = 'dashboardPage' | 'loadingPage' | 'loginPage'
  type Variant = "outline" | "link" | "text" | "fill" | undefined

  const [currentTask, setTask] = useState<Task>()
  const [dasbhoardButton, setDashboardButton] = useState<Variant>('outline')
  const [loadingButton, setLoadingButton] = useState<Variant>('outline')
  const [loginButton, setLoginButton] = useState<Variant>('outline')


  useEffect(() => {
    if (currentTask === 'dashboardPage') {
      setDashboardButton('fill')
      setLoadingButton('outline')
      setLoginButton('outline')
    }
    if (currentTask === 'loadingPage') {
      setDashboardButton('outline')
      setLoadingButton('fill')
      setLoginButton('outline')
    }
    if (currentTask === 'loginPage') {
      setDashboardButton('outline')
      setLoadingButton('outline')
      setLoginButton('fill')

    }
  }, [currentTask]);

  return (
    <div className='devEnvContainer'>
      <Grid container>
        <Grid item xs={2} className='navigation'>

          <List>
            <ListTitle>Tasks</ListTitle>
            <div className='borderLarge' />
            <Item className='taskItem'>
              <Button style={{ width: '100%' }} onClick={() => setTask('dashboardPage')} variant={dasbhoardButton}>
                Create a dashboard
              </Button>
            </Item>
            <Item className='taskItem'>
              <Button style={{ width: '100%' }} onClick={() => setTask('loadingPage')} variant={loadingButton}>
                Create a loading page
              </Button>
            </Item>
            <Item className='taskItem'>
              <Button style={{ width: '100%' }} onClick={() => setTask('loginPage')} variant={loginButton}>
                Create a login page
              </Button>
            </Item>
          </List>
        </Grid>

        {(currentTask === 'dashboardPage') && (
          <Grid item xs={9} className='taskContainer'>
            <Tasks.DashboardPage />
          </Grid>
        )}
        {(currentTask === 'loadingPage') && (
          <Grid item xs={9} className='taskContainerDarkTheme'>
            <Tasks.LoadingPage />
          </Grid>
        )}
        {(currentTask === 'loginPage') && (
          <Grid item xs={9} className='taskContainer'>
            <Tasks.LoginPage />
          </Grid>
        )}
      </Grid>
    </div>
  )
}
