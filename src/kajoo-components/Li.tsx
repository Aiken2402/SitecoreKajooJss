/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Link, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Li.module.css'

const Li = (props) => {
  return (
    <li
      className={` ${styles['html-element']} ${styles[props.rootClassName]} `}
    >
      <Link
        onclick='dl_CTA("Project funding and mortgage financing",this);'
        href="/professionals/project-funding-and-mortgage-financing"
        className={styles['a']}
      >
        <Text
          text="\n                                                Project funding and mortgage financing\n                                            "
          className={styles['span']}
        />
        <Text
          tag="p"
          text="\n                                                Access our project funding, mortgage loan insurance and securitization programs.\n\n\n                                            "
          className={styles['p']}
        />
      </Link>
    </li>
  )
}

Li.defaultProps = {
  fields: {},
  rootClassName: '',
  rendering: {},
}

Li.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default Li
