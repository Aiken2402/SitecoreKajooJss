/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text, RichText } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './TextAndColumnComponent.module.css'

const TextAndColumnComponent = (props) => {
  return (
    <Container
      className={` ${styles['text-and-column-component']} ${styles[props.rootClassName]} ${props.params?.styles} `}
    >
      <Text text={props.fields.text} className={'667d70d160d855a963cc7e66'} />
      <RichText
        value={props.fields.value}
        className={'667d70d160d855a963cc7e79'}
      />
    </Container>
  )
}

TextAndColumnComponent.defaultProps = {
  fields: {
    text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    value:
      '<p>Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.</p>',
  },
  rootClassName: '',
  rendering: {},
}

TextAndColumnComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default withDatasourceCheck()(TextAndColumnComponent)
