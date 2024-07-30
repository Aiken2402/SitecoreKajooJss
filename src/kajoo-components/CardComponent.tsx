/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './CardComponent.module.css'

const CardComponent = (props) => {
  return (
    <Container
      className={` ${styles['card-component']} ${styles[props.rootClassName]} ${props.params?.Styles} `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div1']}>
          <ul className={styles['ul']}>
            <li className={styles['span']}>
              <Link
                onclick='dl_CTA("Project funding and mortgage financing",this);'
                href="/professionals/project-funding-and-mortgage-financing"
                className={styles['a']}
              >
                <Text
                  text="\n                                                Project funding and mortgage financing\n                                            "
                  className={styles['ul1']}
                />
                <Text
                  tag="p"
                  text="\n                                                Access our project funding, mortgage loan insurance and securitization programs.\n\n\n                                            "
                  className={styles['p']}
                />
              </Link>
            </li>
          </ul>
        </Container>
      </Container>
    </Container>
  )
}

CardComponent.defaultProps = {
  fields: {},
  rootClassName: '',
  rendering: {},
}

CardComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default CardComponent
