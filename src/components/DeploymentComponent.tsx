/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DeploymentComponent.module.css'

const DeploymentComponent = (props) => {
  return (
    <Container
      className={` ${styles['deployment-component']} ${styles[props.rootClassName]} ${props.params?.Styles} `}
    >
      <Text text={props.fields.text} className={'paragraph-default'} />
      <Image
        src={props.fields.src}
        alt={props.fields.alt}
        className={'image-default'}
      />
      <Text text={props.fields.text1} className={'paragraph-default'} />
    </Container>
  )
}

DeploymentComponent.defaultProps = {
  fields: {
    text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    src: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt: 'default-kajoo-image',
    text1:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  },
  rootClassName: '',
  rendering: {},
}

DeploymentComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default withDatasourceCheck()(DeploymentComponent)
