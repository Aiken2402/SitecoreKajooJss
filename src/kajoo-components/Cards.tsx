/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import Li from './Li'
import styles from './Cards.module.css'

const Cards = (props) => {
  return (
    <Container
      className={` ${styles['container']} ${styles[props.rootClassName]} `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div1']}>
          <Container className={styles['div2']}>
            <ul className={styles['ul']}>
              <Container className={styles['repeater']}>
                {['Item 1', 'Item 2', 'Item 3'].map((item, index) => (
                  <Container key={index} className={styles['collection-item']}>
                    <Li rootClassName="root-class-name" />
                  </Container>
                ))}
              </Container>
            </ul>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

Cards.defaultProps = {
  fields: {},
  rootClassName: '',
  rendering: {},
}

Cards.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default Cards
