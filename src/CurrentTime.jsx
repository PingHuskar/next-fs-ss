import React from 'react'
import moment from 'moment'

export const CurrentTime = (props) => {
  return <>
    {moment().format(props.format)}
  </>
}