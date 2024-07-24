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
      className={` ${styles['deployment-component']} ${
        styles[props.rootClassName]
      } `}
    >
      <Text text={props.fields.text} className={'paragraph-default'} />
      <Image
        src={props.fields.src}
        alt={props.fields.alt}
        className={'image-default'}
      />
    </Container>
  )
}

DeploymentComponent.defaultProps = {
  fields: {
    text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    src: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt: 'default-kajoo-image',
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
