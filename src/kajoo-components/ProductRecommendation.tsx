/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ProductRecommendation.module.css'

const ProductRecommendation = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} ${props.params?.Styles} `}>
      <Container className={styles['container']} />
    </Container>
  )
}

ProductRecommendation.defaultProps = {
  fields: {},
  rootClassName: '',
  rendering: {},
}

ProductRecommendation.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default ProductRecommendation
